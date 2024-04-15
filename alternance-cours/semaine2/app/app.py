# Description: Streamlit application to calculate the distance between a company and its employees

# Import the necessary libraries
import os
import sys
main_path = os.path.abspath(__file__ + "./")
sys.path.append(main_path)
import streamlit as st
import requests
import pandas as pd
import json
from geopy.geocoders import Nominatim

# Set up the Streamlit application
def main():
    st.set_page_config(
        page_title="Entreprise Distance Calulateur", 
        layout="centered", 
        initial_sidebar_state="auto",
    )
if __name__ == "__main__":
    main()

# Hide streamlit menu (hamburger) and footer
padding_top=0
hide_streamlit_style = f"""
<style>
#MainMenu {{visibility: hidden;}}
.appview-container .main .block-container{{padding-top: {padding_top}rem;}}
footer {{visibility: hidden;}}
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 


# ------------------- Functions -------------------

# Function to get the latitude and longitude of an address
def get_latitude_longitude(address):
    loc = Nominatim(user_agent="Geopy Library")
    location = loc.geocode(address, timeout=10)
    if location:
        return location
    else:
        return None

# Function to get the distance between two coordinates
def get_distance(latitude1, longitude1, latitude2, longitude2):
    api_url = f"https://api.distancematrix.ai/maps/api/distancematrix/json?origins={latitude1},{longitude1}&destinations={latitude2},{longitude2}&key={os.getenv('ACCES_API_KEY')}"
    response = requests.get(api_url)
    api_data = response.json()
    return api_data

# Function to convert a CSV file to JSON
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

# ------------------------------------------------

# Call the Nominatim API
loc = Nominatim(user_agent="Geopy Library")

# Create a file uploader
uploaded_files = st.file_uploader("Choose a XLSX file", accept_multiple_files=False , type=['xlsx'])

# Create a text input to get the address of the company
entreprise_adresses = st.text_input("Entrez l'adresse de l'entreprise", placeholder="Exemple : 42 rue de la paix, 75002 Paris")

# Create a submit button
nom = []
prenom = []
distances = []
temps = []
if st.button('Calculer la distance'):
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
                        nom.append(people['Nom'])
                        prenom.append(people['Prénom'])
                        distances.append(distance['rows'][0]['elements'][0]['distance']['text'])
                        temps.append(distance['rows'][0]['elements'][0]['duration']['text'])
                else:
                    nom.append(people['Nom'])
                    prenom.append(people['Prénom'])
                    distances.append("None")
                    temps.append("None")
    else:
        st.write("No file uploaded")

if nom and prenom and distances and temps:
    df = pd.DataFrame({
        'Nom': nom,
        'Prénom': prenom,
        'Distance': distances,
        'Temps': temps
    })
    st.write(df)