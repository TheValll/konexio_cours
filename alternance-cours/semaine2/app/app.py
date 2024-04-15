import streamlit as st
import requests
from geopy.geocoders import Nominatim
from db import *

def get_latitude_longitude(address):
    loc = Nominatim(user_agent="Geopy Library")
    location = loc.geocode(address, timeout=10)
    return location.latitude, location.longitude

def get_distance(latitude1, longitude1, latitude2, longitude2):
    api_url = f"https://api.distancematrix.ai/maps/api/distancematrix/json?origins={latitude1},{longitude1}&destinations={latitude2},{longitude2}&key=8YUKmFbHhDAGUDnLklFeOLgyopxhu0Azt8BFGeuAKzBo0E1Hwh5h7BfGwYyaTlr5"
    response = requests.get(api_url)
    api_data = response.json()
    return api_data

# Call the Nominatim API
loc = Nominatim(user_agent="Geopy Library")

st.title('Application')

apprenants_table = []
for row in apprenants:
    apprenants_table.append(row)

entreprises_table = []
for row in entreprises:
    entreprises_table.append(row)

promo = st.selectbox('Promo', [row[0] for row in apprenants_table])
entreprise = st.selectbox('Entreprise', [row[1] for row in entreprises_table])

if st.button("Submit"):
    if promo and entreprise:
        apprenant_infos = [[row[1], row[2], row[3]] for row in apprenants_table if row[0] == promo]
        entreprise_address = [row[0] for row in entreprises_table if row[1] == entreprise][0]
        latitude2, longitude2 = get_latitude_longitude(entreprise_address)
        for apprenant in apprenant_infos:
            latitude1, longitude1 = get_latitude_longitude(apprenant[1])
            itinerary = get_distance(latitude1, longitude1, latitude2, longitude2)
            st.write(itinerary)
            # st.write(f"Distance from {apprenant_infos[2]}{apprenant_infos[3]} to {entreprise_address}: {distance['rows'][0]['elements'][0]['distance']['text']}")
    else:
        st.write("Please select a promo and an entreprise")