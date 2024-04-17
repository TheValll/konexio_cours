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

/*int main()
{
    int numbers[4] = { 10, 4, 3, 43 };

    for (int i = 0; i < 4; i++) {
        if (i + 1 < 4) {
            addition(numbers[i], numbers[i + 1]);
        }
        else {
            std::cout << "L'index suivant n'existe pas." << std::endl;
        }
    }
    return 0;
}*/