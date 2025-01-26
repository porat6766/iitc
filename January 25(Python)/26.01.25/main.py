# numbers = [num ** 2 for num in range(1, 11)]
# print(numbers)


# def greeting_1():
#     return "hello world"


# def greeting_2():
#     return [x**0 for x in numbers]


# print(greeting_1())
# print(greeting_2())

# def area_of_rectangle(length, width):
#     return length*width


# def convertToNum(str):
#     return int(str)


# print(convertToNum("5"))


# def factorail(n):
#     fact = 1
#     for num in range(1, n+1):
#         fact *= num
#     return fact


# print(factorail(5))

# def greet(name, greet="Hello"):
#     return f"{name}, {greet}"

# print(greet("David", "Hi"))


# def discount(price, discount=30):
#     return price * (1 - discount/100)

# print(discount(100, 20))


# def get_data(*args):
#     return sum(args)


# print(get_data(1, 2, 3, 4, 5, 6))


# def say_hello_to_people(*args):
#     names = ' '.join([name.upper() for name in args])
#     return f"HELLO {names}"

# print(say_hello_to_people("David", "Shlomo", "Haim"))


# producrt = {"name": "computer", "power": 2000}


# def printDetails(**args):
#     for key, value in args.items():
#         print(f"{key}:{value}")


# printDetails(name="baba", power=2000)


# def printDetail():
#     products_info=


# def x(m): return m if m % 2 == 0 else None


# print(x(10))
# print(x(7))

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

# print(even_numbers)


# print(even_numbers)

# from math import sqrt
# from random import randint
# print(sqrt(100))
# print(randint(1, 100))


# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# even_numbers = [x for x in numbers if x % 2 == 0]

# main.py


# def get_even_numbers(numbers):
#     """Return even numbers from a list."""
#     return [x for x in numbers if x % 2 == 0]


# from pp.Module import numbersTotal

# print(numbersTotal(1))

# x, y, z = 1, 2, 3
# print(x, y, z)
# x, z, y = z, y, x
# print(x, y, z)

# try:
#     print("cghj")
# except:
#     print("cghjj")
# finally:
#     print("cghj")


# def read_numbers_from_file(someFile):
#     try:
#         with open(someFile, 'r') as f:
#             numbers = []
#             for line in f:
#                 try:
#                     number = int(line.strip())
#                     numbers.append(number)
#                 except ValueError:
#                     print(f"Warning: '{line.strip()}' is not a valid number.")
#             return numbers
#     except FileNotFoundError:
#         print(f"Error: The file '{file_name}' was not found.")
#         return []

# file_name = "numbers.txt"
# numbers = read_numbers_from_file(file_name)

# if numbers:
#     print("Numbers from file:", numbers)
# else:
#     print("No valid numbers were found.")

# import json


# def add_user(**kwargs):
#     with open("db.json", "r") as file:
#         db = json.load(file)
#         db["users"].append(kwargs)
#     with open("db.json", "w") as file:
#         json.dump(db, file, indent=4)


# add_user(name="john", city="netivot")


"""
check if the file exist, if not he make one,
if exist put new info to db.json
"""

import json
import os


def add_user(**kwargs):
    db_file = "db.json"
    try:
        if os.path.exists(db_file):
            with open(db_file, "r") as file:
                try:
                    db = json.load(file)
                except json.JSONDecodeError:
                    db = {}
        else:
            db = {}

        if "users" not in db:
            db["users"] = []

        db["users"].append(kwargs)

        with open(db_file, "w") as file:
            json.dump(db, file, indent=4)

    except Exception as e:
        print(f"un expected error: {e}")


add_user(name="john", city="netivot")
