# my_list = ["Narnia", "Tarzan", "Black-list", "Psych"]
# print(my_list)

# my_list.append("Mentalist")
# print(my_list)

# my_list.remove("Tarzan")
# print(my_list)

# my_list.pop(2)
# print(my_list)

# my_list.clear()
# print(my_list)

# ///////
# ///////
# ///////

# date = (11, 2001)
# date.append("Mentalist")  # throw Error
# date.remove("Mentalist")  # throw Error

# ///////
# ///////
# ///////

# content = {"FName": "alice", "LName": "johnson", "age": 22, 50: "hvh"}
# print(content)

# del content["FName"]
# print(content)

# hobbies = ("eat", "read", "nepw")
# content["hobbies"] = hobbies
# print(content)

# ///////
# ///////
# ///////

# content = {1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1}
# print(content)

# tal = {"foot-ball", "base-ball", "eat", "sleep"}
# porat = {"guitar", "piano", "foot-ball"}
# print(tal, porat)

# common_hobbies = tal.intersection(porat)
# print(common_hobbies)

# tal = {"movies", "base-ball", "games", "treeps", "piano"}
# porat = {"guitar", "piano", "foot-ball", "treeps"}
# print(tal, porat)

# common_hobbies = tal.intersection(porat)
# print(common_hobbies)

# color = ["red", "yellow", "blue", "green", "brown"]
# print(color[0])
# print(color[-1])

# color = ["red", "yellow", "blue", "green", "brown"]
# color.append("gray")
# color.remove(color[1])

# print(color)

# list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# for num in list_1:
#     if num % 2 == 0:
#         print(num)

# ///////
# ///////
# ///////

# friuts = ["apple", "banana", "grape", "streberry"]
# friuts.reverse()
# print(friuts)

# ///////
# ///////
# ///////

# mytuple_1 = ("apple", "banana", "cherry")
# mytuple_2 = ()
# list = {}

# for fruit in mytuple_1:
#     list.append(fruit)

# for fr in list:
#     mytuple_2.append(fr)

# mytuple_1 = ("apple", "banana", "cherry")
# mylist = []

# for fruit in mytuple_1:
#     mylist.append(fruit)

# mytuple_2 = tuple(mylist)

# print("Original tuple:", mytuple_1)
# print("New tuple:", mytuple_2)

# גודל לוח הכפל
# size = 10

# for i in range(1, size + 1):
#     for j in range(1, size + 1):
#         print(f"{i * j:3}", end=" ")
#     print()

# size = 10

# for i in range(1, size + 1):
#     for j in range(1, size + 1):
#         print(f"{i * j:3}", end=" ")
#     print()

# even = [x for x in range(10) if x % 2 == 0]
# print(even)

# fruits = {"apple": 10, "banana": 50, "tomato": 7.90}
# print(fruits.items())

# fruits["pear"] = 13.40
# print(fruits.items())

# people = {"LIAV": 15, "PORAT": 40, "DAN": 64}

# print(people.keys())

# print(people.values())

# for name, age in people.items():
#     print(f"{name} is {age}")

# student = {"name": "Porat", "age": 33, "grade": 80}
# print(student["name"])

# student["email"] = "pop90@gmail.com"
# print(student)


# student.pop("grade")
# print(student)

# print(items.keys())

# for I in items.values():
#     if I % 2 == 0:
#         print(I)

# if "d" in items.keys():
#     print("is exist")
# else:
#     print("is not exist")
#     items["d"] = 4

# print(items)

# items_3 = items_1.copy()
# items_3.update(items_2)
# print(items_3)


# items_1 = {"a": 1, "b": 2, "c": 3}
# items_2 = {"d": 4, "e": 5, "f": 6}

# items_3 = items_1.copy()
# items_3.update(items_2)

# for i in items_3.values():
#     if i % 2 == 0:
#         print(i)

# numbersTuple = (10, 20, 30)
# numbersList = list(numbersTuple)
# numbersList.append(40)
# numbersTuple = tuple(numbersList)
# print(numbersTuple)

# numbers = {1, 2, 3}
# numbers.add(4)
# print(numbers)

# num = 1
# i = 10

# while i > 0:
#     num = num = i
#     i = i-1

# data_1 = {1, 2, 3, 4, 5}
# data_2 = {1, 2, 3, 4, 6}

# print(data_1.union(data_2))

# i = 0

# books = {"book1": {"author": "A", "year": 2020}}
# print(books["book1"]["author"])

# numbers = [[1, 2], [3, 4]]

# for i in numbers:
#     for j in i:
#         print(j)

# friends = {"David": 20, "Haim": 33, "slomo": 35}

# for i in friends.values():
#     if i > 20:
#         print(i)

# cubes = [num**3 for num in range(1, 11)]
# print(cubes)

# students = {
#     "student1": {"name": "Alice", "age": 20, "grade": 85},
#     "student2": {"name": "Bob", "age": 22, "grade": 90},
#     "student3": {"name": "Charlie", "age": 21, "grade": 88}
# }

# newGrade = int(input("please put the new grade: "))

# students["student1"]["grade"] = newGrade

# print(students)

# books = [
#     {
#         "title": "To Kill a Mockingbird",
#         "author": "Harper Lee",
#         "year_published": 1960,
#         "genre": "Fiction",
#         "pages": 281
#     },
#     {
#         "title": "1984",
#         "author": "George Orwell",
#         "year_published": 1949,
#         "genre": "Dystopian",
#         "pages": 328
#     },
#     {
#         "title": "Moby Dick",
#         "author": "Herman Melville",
#         "year_published": 1851,
#         "genre": "Adventure",
#         "pages": 635
#     },
#     {
#         "title": "Pride and Prejudice",
#         "author": "Jane Austen",
#         "year_published": 1813,
#         "genre": "Romance",
#         "pages": 279
#     },
#     {
#         "title": "The Great Gatsby",
#         "author": "F. Scott Fitzgerald",
#         "year_published": 1925,
#         "genre": "Tragedy",
#         "pages": 180
#     }
# ]

# newOne = {
#     "title": "The Great Gatsby",
#     "author": "F. Scott Fitzgerald",
#     "year_published": 1925,
#     "genre": "Tragedy",
#     "pages": 180
# }

# books.append(newOne)

# print(books[-1])
