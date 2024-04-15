import streamlit as st
import requests
from geopy.geocoders import Nominatim
import pandas as pd
import json

def get_latitude_longitude(address):
    loc = Nominatim(user_agent="Geopy Library")
    location = loc.geocode(address, timeout=10)
    if location:
        return location
    else:
        return None


def get_distance(latitude1, longitude1, latitude2, longitude2):
    api_url = f"https://api.distancematrix.ai/maps/api/distancematrix/json?origins={latitude1},{longitude1}&destinations={latitude2},{longitude2}&key=8YUKmFbHhDAGUDnLklFeOLgyopxhu0Azt8BFGeuAKzBo0E1Hwh5h7BfGwYyaTlr5"
    response = requests.get(api_url)
    api_data = response.json()
    return api_data

def convert_csv_to_json(uploaded_file):
    data = pd.read_excel(uploaded_file)
    json_data = data.to_json(orient='records')
    try:
        json_obj = json.loads(json_data)
        with open('data.json', 'w') as f:
            json.dump(json_obj, f)
        return json_obj
    except Exception as e:
        st.write(f"Erreur lors de l'écriture du fichier : {e}")

# Call the Nominatim API
loc = Nominatim(user_agent="Geopy Library")

st.title('Application')

uploaded_files = st.file_uploader("Choose a CSV file", accept_multiple_files=False , type=['xlsx'])

entreprise_adresses = st.text_input("Entrez le nom de l'entreprise", placeholder="Exemple : 42 rue de la paix, 75002 Paris")

if st.button('Submit'):
    if uploaded_files:
        data = convert_csv_to_json(uploaded_files)
        if entreprise_adresses:
            entreprise_coordinate = get_latitude_longitude(entreprise_adresses)
        else:
            st.write("Veuillez entrer une adresse d'entreprise")
        for people in data:
            if people['Adresse'] and people['Code postal'] and people['Ville']:
                adresse = f"{people['Adresse']}, {people['Code postal']}, {people['Ville']}"
                coordinate = get_latitude_longitude(adresse)
                if coordinate and entreprise_coordinate:
                    distance = get_distance(entreprise_coordinate.latitude, entreprise_coordinate.longitude, coordinate.latitude, coordinate.longitude)
                    if distance:
                        st.write(f"La distance pour {people['Nom']} {people['Prénom']} est de {distance['rows'][0]['elements'][0]['distance']['text']} pour un temps de {distance['rows'][0]['elements'][0]['duration']['text']} en voiture")
                    else:
                        st.write("Erreur lors de la récupération de la distance")
                else:
                    st.write(f"Impossible de récupérer les coordonnées pour {people['Nom']} {people['Prénom']}")
            else:
                st.write(f"Données manquantes pour {people['Nom']} {people['Prénom']}")
    else:
        st.write("No file uploaded")
