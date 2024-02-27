import random

price = random.randint(1, 100)
attempts = 0
print("Welcome to the Price is Right!")

while True:
    guess = int(input("Guess the price: "))
    attempts += 1
    if guess < price:
        print("Too low!")
    elif guess > price:
        print("Too high!")
    else:
        print(f"Congratulations! You found the price in {attempts} attempts!")
        break  