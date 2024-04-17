# Import the get_latitude_longitude and get_route functions.
from get_latitude_longitude import get_latitude_longitude
from get_route import get_route

class DistanceCalculator:
    # Initialize the class with the company address and the student address.
    def __init__(self, entreprise_adresse, student_address):
        self.entreprise_adresse = entreprise_adresse
        self.student_address = student_address

    # Function to calculate the distance between the company and the student by car.
    def route_voiture(self):
        entreprise_coordinate = get_latitude_longitude(self.entreprise_adresse)
        student_coordinate = get_latitude_longitude(self.student_address)
        if entreprise_coordinate and student_coordinate:
            route = get_route(entreprise_coordinate[1], entreprise_coordinate[0], student_coordinate[1], student_coordinate[0], mode='car')
            distance = round(route['distance'] / 1000, 2)
            duration = round(route['duration'] / 60, 2)
            return distance, duration
        else:
            return None

    # Function to calculate the distance between the company and the student by foot.
    def route_pieton(self):
        entreprise_coordinate = get_latitude_longitude(self.entreprise_adresse)
        student_coordinate = get_latitude_longitude(self.student_address)
        if entreprise_coordinate and student_coordinate:
            route = get_route(entreprise_coordinate[1], entreprise_coordinate[0], student_coordinate[1], student_coordinate[0], mode='pedestrian')
            distance = round(route['distance'] / 1000, 2)
            duration = round(route['duration'] / 60, 2)
            return distance, duration
        else:
            return None