#include <iostream>

void addition(int a, int b) {
    std::cout << a + b << "\n";
}

void soustraction(int a, int b) {
    std::cout << a - b << "\n";
}

void division(int a, int b) {
    if (b > 0) {
        std::cout << a / b << "\n";
    }
    else {
        std::cout << "On ne peux pas diviser par 0." << "\n";
    }
}

void multiplication(int a, int b) {
    std::cout << a * b << "\n";
}

struct Car{
    std::string brand;
    std::string model;
    int year;
} car1, car2;

void display_car(const Car& car) {
    std::cout << "Marque : " << car.brand << "\n";
    std::cout << "Modèle : " << car.model << "\n";
    std::cout << "Année : " << car.year << "\n";
}

int main()
{
    // int numbers[4] = { 10, 4, 3, 43 };

    // for (int i = 0; i < 4; i++) {
    //     if (i + 1 < 4) {
    //         addition(numbers[i], numbers[i + 1]);
    //     }
    //     else {
    //         std::cout << "L'index suivant n'existe pas." << std::endl;
    //     }
    // }

    car1.brand = "Ford";
    car1.model = "Mustang";
    car1.year = 1969;

    car2.brand = "Renault";
    car2.model = "Clio";
    car2.year = 1990;

    std::cout << "Voiture 1 : ";
    std::cout << "\n";
    display_car(car1);
    std::cout << "\n";
    std::cout << "Voiture 2 : ";
    std::cout << "\n";
    display_car(car2);
    std::cout << "\n";

    return 0;
}