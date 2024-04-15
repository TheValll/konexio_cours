import streamlit as st
import requests
from geopy.geocoders import Nominatim
import pandas as pd
import json

def get_latitude_longitude(address):
    loc = Nominatim(user_agent="Geopy Library")
    location = loc.geocode(address, timeout=10)
    return location.latitude, location.longitude

def get_distance(latitude1, longitude1, latitude2, longitude2):
    api_url = f"https://api.distancematrix.ai/maps/api/distancematrix/json?origins={latitude1},{longitude1}&destinations={latitude2},{longitude2}&key=8YUKmFbHhDAGUDnLklFeOLgyopxhu0Azt8BFGeuAKzBo0E1Hwh5h7BfGwYyaTlr5"
    response = requests.get(api_url)
    api_data = response.json()
    return api_data

def convert_csv_to_json(uploaded_file):
    data = pd.read_xlsx(uploaded_file)
    json_data = data.to_json(orient='records')
    try:
        json_obj = json.loads(json_data)
        with open('data.json', 'w') as f:
            json.dump(json_obj, f)
            for row in json_obj:
                st.write(row)
    except Exception as e:
        st.write(f"Erreur lors de l'écriture du fichier : {e}")

# Call the Nominatim API
loc = Nominatim(user_agent="Geopy Library")

st.title('Application')

uploaded_files = st.file_uploader("Choose a CSV file", accept_multiple_files=False , type=['xlsx'])

if st.button('Submit'):
    if uploaded_files:
        data = convert_csv_to_json(uploaded_files) 
    else:
        st.write("Please upload a file")
