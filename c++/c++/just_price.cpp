#include <iostream>
#include <string>
#include <limits>

int limit = 100;
int secret_number = rand() % limit;
bool win = false;

void get_indice(int cin) {
    if (cin > secret_number) {
        std::cout << "Plus petit !" << "\n";
    }
    else if (cin < secret_number) {
        std::cout << "Plus grand !" << "\n";
    }
    else {
        win = true;
        std::cout << "Vous avez gagne !";
    }
}

void game() {
    int n = 0;
    std::cout << "Entrez un nombre : ";
    std::cin >> n;

    if (std::cin.fail()) {
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        std::cout << "Veuillez entrer un nombre valide." << std::endl;
    }
    else {
        get_indice(n);
    }
}

int main() {
    do {
        game();
    } while (!win);
    return 0;
}
