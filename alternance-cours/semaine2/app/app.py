# Description: Streamlit app to calculate the distance between a company and its students.

# Importing the required libraries.
import streamlit as st
import pandas as pd
from get_latitude_longitude import get_latitude_longitude
from get_distance import get_distance
from convert_csv_to_json import convert_csv_to_json

# Function to set the page configuration.
def main():
    st.set_page_config(
        page_title="Entreprise Distance Calulateur", 
        layout="wide", 
        initial_sidebar_state="auto",
    )

# Main function to run the app.
if __name__ == "__main__":
    main()

# Hiding the Streamlit menu and footer.
padding_top = 0
hide_streamlit_style = f"""
<style>
#MainMenu {{visibility: hidden;}}
.appview-container .main .block-container{{padding-top: {padding_top}rem;}}
footer {{visibility: hidden;}}
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 

# Create 2 input fields for the user to upload a file and enter the company address.
uploaded_files = st.file_uploader("Choose a XLSX file", accept_multiple_files=False, type=['xlsx'])
entreprise_adresses = st.text_input("Entrez l'adresse de l'entreprise", placeholder="Exemple : 42 rue de la paix, 75002 Paris")

# Create a button to calculate the distance between the company and its students.
if st.button('Calculer la distance'):
    if uploaded_files:
        # Convert the uploaded file to JSON.
        data = convert_csv_to_json(uploaded_files)
        # Get the latitude and longitude of the company address.
        if entreprise_adresses:
            entreprise_coordinate = get_latitude_longitude(entreprise_adresses)
            if not entreprise_coordinate:
                st.write("Adresse de l'entreprise non valide.")
                st.stop()
        else:
            st.write("Veuillez entrer une adresse d'entreprise.")
            st.stop()

        # Create empty lists to store the data.
        nom = []
        prenom = []
        distances_voiture = []
        temps_voiture = []
        distances_pieton = []
        temps_pieton = []
        temps_velo = []

        # Loop through the data to get the distance between the company and its students.
        for people in data:
            if not all(people.get(key) for key in ['Adresse', 'Code postal', 'Ville']):
                continue
            
            # Get the latitude and longitude of the student address.
            adresse = f"{people['Adresse']}, {people['Code postal']}, {people['Ville']}"
            coordinate = get_latitude_longitude(adresse)

            if coordinate:
                # Get the distance between the company and the student address.
                distance_voiture = get_distance(entreprise_coordinate[1], entreprise_coordinate[0], coordinate[1], coordinate[0], mode='car')
                distance_pieton = get_distance(entreprise_coordinate[1], entreprise_coordinate[0], coordinate[1], coordinate[0], mode='pedestrian')

                if distance_voiture:
                    nom.append(people.get('Nom', ''))
                    prenom.append(people.get('Prénom', ''))
                    distances_voiture.append(round(distance_voiture['distance'] / 1000, 2))
                    temps_voiture.append(round(distance_voiture['duration'] / 60, 2))

                if distance_pieton:
                    distances_pieton.append(round(distance_pieton['distance'] / 1000, 2))
                    temps_pieton.append(round(distance_pieton['duration'] / 60, 2))
                    temps_velo.append(round((distance_pieton['duration'] / 60) / 3, 2))
            else:
                nom.append(people.get('Nom', ''))
                prenom.append(people.get('Prénom', ''))
                distances_voiture.append("None")
                temps_voiture.append("None")
                distances_pieton.append("None")
                temps_pieton.append("None")
                temps_velo.append("None")

        # Create a DataFrame to display the data.
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
    else:
        st.write("Aucun fichier téléchargé.")
