# Import get_latitude_longitude and get_route functions from the corresponding files.
from get_route import get_route

# Class DistanceCalculator to calculate the distance between the company and the student.
class DistanceCalculator:
    # Initialize the class with the company address and the student address.
    def __init__(self, entreprise_coordinate, student_coordinate):
        self.entreprise_coordinate = entreprise_coordinate
        self.student_coordinate = student_coordinate

    # Function to calculate the distance between the company and the student by car.
    def route_voiture(self):
        if self.entreprise_coordinate and self.student_coordinate:
            route = get_route(self.entreprise_coordinate[1], self.entreprise_coordinate[0], self.student_coordinate[1], self.student_coordinate[0], mode='car')
            distance = round(route['distance'] / 1000, 2)
            duration = round(route['duration'] / 60, 2)
            return distance, duration
        else:
            return None

    # Function to calculate the distance between the company and the student by foot.
    def route_pieton(self):
        if self.entreprise_coordinate and self.student_coordinate:
            route = get_route(self.entreprise_coordinate[1], self.entreprise_coordinate[0], self.student_coordinate[1], self.student_coordinate[0], mode='pedestrian')
            distance = round(route['distance'] / 1000, 2)
            duration = round(route['duration'] / 60, 2)
            return distance, duration
        else:
            return None
