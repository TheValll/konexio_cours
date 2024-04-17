# Import the DistanceCalculator class and the convert_csv_to_json function.
from distance_calculator import DistanceCalculator
from convert_csv_to_json import convert_csv_to_json
from get_latitude_longitude import get_latitude_longitude

def set_data(uploaded_files, entreprise_adresses):
    
    # Convert the uploaded file to JSON.
        data = convert_csv_to_json(uploaded_files)
        entreprise_coordinate = get_latitude_longitude(entreprise_adresses)

        # Create empty lists to store the data.
        result = {}
        nom = []
        prenom = []
        distances_voiture_list = []
        temps_voiture_list = []
        distances_pieton_list = []
        temps_pieton_list = []
        temps_velo_list = []

        # Loop through the data to get the distance between the company and its students.
        for people in data:
            if not all(people.get(key) for key in ['Adresse', 'Code postal', 'Ville']):
                continue
            
            student_coordinate = get_latitude_longitude(f"{people['Adresse']}, {people['Code postal']}, {people['Ville']}")
            # Create a instance of the DistanceCalculator class.
            distance_calculator = DistanceCalculator(entreprise_coordinate, student_coordinate)

            # Get the latitude and longitude of the student address.
            distance_voiture_value = distance_calculator.route_voiture()[0]
            distance_pieton_value = distance_calculator.route_pieton()[0]
            temps_voiture_value = distance_calculator.route_voiture()[1]
            temps_pieton_value = distance_calculator.route_pieton()[1]
            temps_velo_value = temps_pieton_value * 0.7 if temps_pieton_value else None

            # Append the data to the lists.
            nom.append(people['Nom'])
            prenom.append(people['Prénom'])
            distances_voiture_list.append(distance_voiture_value)
            distances_pieton_list.append(distance_pieton_value)
            temps_voiture_list.append(temps_voiture_value)
            temps_pieton_list.append(temps_pieton_value)
            temps_velo_list.append(temps_velo_value)

        # Return the data.
        result['nom'] = nom
        result['prenom'] = prenom
        result['distances_voiture_list'] = distances_voiture_list
        result['temps_voiture_list'] = temps_voiture_list
        result['distances_pieton_list'] = distances_pieton_list
        result['temps_pieton_list'] = temps_pieton_list
        result['temps_velo_list'] = temps_velo_list
        return result