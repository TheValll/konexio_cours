# print('Hello World!')
# That will print the following output: Hello World!

# print(3+5)
# That will print the following output: 8

a = 3*5
# print(a)
# That will print the following output: 15

# _ is used to store the value of last expression in Python interpreter.

my_variable = 3*50
# print(my_variable)
# That will print the following output: 150

# For naming a variable, you can use letters, numbers, and underscores. But the variable name should not start with a number.


# type() function is used to get the type of a variable.
# print(type(my_variable))
# That will print the following output: <class 'int'>


my_string = "Hello World!"
# print(my_string)
# That will print the following output: Hello World!

# print(type(my_string))
# That will print the following output: <class 'str'>

# len() function is used to get the length of a string.
# print(len(my_string))
# That will print the following output: 12

# String concatenation

first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
# print(full_name)
# That will print the following output: John Doe

# String formatting

name = "John"
age = 23
# print("%s is %d years old." % (name, age))
# That will print the following output: John is 23 years old.


# String methods

#upper() method is used to convert a string to uppercase.
# print(my_string.upper())
# That will print the following output: HELLO WORLD!


#lower() method is used to convert a string to lowercase.
# print(my_string.lower())
# That will print the following output: hello world!


#slice() method is used to get a substring from a string.
# print(my_string[0:5])
# That will print the following output: Hello


#split() method is used to split a string into a list.
# print(my_string.split(" "))
# That will print the following output: ['Hello', 'World!']


#replace() method is used to replace a substring with another substring.
# print(my_string.replace("Hello", "Hi"))
# That will print the following output: Hi World!


#slicing with negative index
# print(my_string[-1])
# That will print the following output: !


# Formating a string using f-string

name = "John"
age = 23
# print(f"{name} is {age} years old.")
# That will print the following output: John is 23 years old.


# Exercise

# 1. Create a variable and assign a string to it. Then, print the variable.

string = "Hello World!"
# print(string)

# 2. Create a variable and assign a number to it. Then, print the variable.

number = 5
#print(number)

# 3. Create a variable and assign the result of an arithmetic expression to it. Then, print the variable.

result = 3*5
#print(result)

# 4. Create a variable and assign a number to it. Then, print the type of the variable.

variable = 5
#print(type(variable))

# 5. Print this setence who use the variable name and the variable value: "The value of the variable is 5."

my_number = 23
#print(f"The value of the variable is {my_number}.".upper())


# Boolean

# Boolean is a data type that can have one of two values, either True or False.

# print(3 > 5)
# That will print the following output: False

door_is_open = False

# if door_is_open:
#     # print("The door is open.")
# else:
    # print("The door is closed.")

# That will print the following output: The door is closed.


# Loops

# for loop

# for i in range(5):
    # print(i)

# That will print the following output:
# 0
# 1
# 2
# 3
# 4

# while loop

i = 0
# while i < 5:
    # print(i)
    # i += 1

# That will print the following output:
# 0
# 1
# 2
# 3
# 4


# Functions

def greet(name):
    print(f"Hello, {name}!")

# greet("John")

def information(name, age):
    print(f"{name} is {age} years old.")

# information("John", 23)

# Exercice :

def print_name(name):
    if name == "" :
        print("Please enter a name.")
    else:
        for letter in name:
            print(letter)

# print_name("")
# print_name("John")

class Car:
    speed = 0
    started = False
    def start(self):
        self.started = True
        print("Car started, let's ride!")
    def increase_speed(self, delta):
        if self.started:
            self.speed = self.speed + delta
            print('Vrooooom!')
            print(f'Current speed: {self.speed} km/h')
        else:
            print("You need to start the car first")
    def stop(self):
        self.speed = 0
        print('Halting')

# my_car = Car()
# my_car.start()
# my_car.increase_speed(20)
# my_car.stop()