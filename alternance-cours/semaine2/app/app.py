# Description: Streamlit application to calculate the distance between a company and its employees

# Import the necessary libraries
import os
import sys
main_path = os.path.abspath(__file__ + "./")
sys.path.append(main_path)
import streamlit as st
import pandas as pd
from get_latitude_longitude import get_latitude_longitude
from get_distance import get_distance
from convert_csv_to_json import convert_csv_to_json

# Set up the Streamlit application
def main():
    st.set_page_config(
        page_title="Entreprise Distance Calulateur", 
        layout="wide", 
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

# Create a file uploader
uploaded_files = st.file_uploader("Choose a XLSX file", accept_multiple_files=False , type=['xlsx'])

# Create a text input to get the address of the company
entreprise_adresses = st.text_input("Entrez l'adresse de l'entreprise", placeholder="Exemple : 42 rue de la paix, 75002 Paris")

# Create a submit button
nom = []
prenom = []
distances_voiture = []
temps_voiture = []
distances_pieton = []
temps_pieton = []
temps_velo = []
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
                    distance_voiture = get_distance(entreprise_coordinate[1], entreprise_coordinate[0], coordinate[1], coordinate[0], mode='car')
                    distance_pieton = get_distance(entreprise_coordinate[1], entreprise_coordinate[0], coordinate[1], coordinate[0], mode='pedestrian')
                    if distance_voiture:
                        nom.append(people['Nom'])
                        prenom.append(people['Prénom'])
                        distances_voiture.append(round(distance_voiture['distance']/1000, 2))
                        temps_voiture.append(round(distance_voiture['duration']/60, 2))
                    if distance_pieton:
                        distances_pieton.append(round(distance_voiture['distance']/1000, 2))
                        temps_pieton.append(round(distance_pieton['duration']/60, 2))
                        temps_velo.append(round((distance_pieton['duration']/60)/3, 2))
                else:
                    nom.append(people['Nom'])
                    prenom.append(people['Prénom'])
                    distances_voiture.append("None")
                    temps_voiture.append("None")
                    distances_pieton.append("None")
                    temps_pieton.append("None")
                    temps_velo.append("None")
    else:
        st.write("No file uploaded")

if nom and prenom and distances_voiture and temps_voiture and distances_pieton and temps_pieton:
    df = pd.DataFrame({
        'Nom': nom,
        'Prénom': prenom,
        'Distance voiture en km': distances_voiture,
        'Temps voiture en minutes': temps_voiture,
        'Distance piéton en km': distances_pieton,
        'Temps piéton en minutes': temps_pieton,
        'Temps vélo en minutes': temps_velo
    })
    st.write(df)