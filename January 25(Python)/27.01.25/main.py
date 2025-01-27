
# class Person:
#     def __init__(self, first_name, last_name):
#         self.first_name = first_name
#         self.last_name = last_name

#     def greet(self):
#         print(f"HELLO {self.first_name}")


# person_1 = Person(first_name="Ahiya", last_name="Eliya")

# person_1.greet()


# class Superhero_1:
#     def __init__(self, name, kindPower, level):
#         self.name = name
#         self.kindPower = kindPower
#         self.level = level

#     def greetingToSuperhero(self):
#         print(f"{self.name} you are my super hero, because you power is {
#               self.kindPower}")

#     def makeHimStronger(newLevel):
#         level = newLevel
#         print(f"your level now is {level}")


# hero_1 = Superhero_1("Bat_man", "Fire")

# hero_1.greetingToSuperhero()
# hero_1.makeHimStronger(2000)


# class SuperHero_2:
#     def __init__(self, name, alias, power, strength_level, team, isActive):
#         self.name = name
#         self.alias = alias
#         self.power = power
#         self.strength_level = strength_level
#         self.team = team
#         self.isActive = isActive


# class SuperHero_2:
# def __init__(self, name, alias, power, strength_level, team, isActive=False):
#         self.name = name
#         self.alias = alias
#         self.power = power
#         self.strength_level = strength_level
#         self.team = team
#         self.isActive = isActive

#     def introduce(self):
#         print(f"{self.name}{self.power}{self.strength_level}{
#               self.alias}{self.isActive}")

#     def train(self, hours):
#         self.strength_level = int(hours) * 10
#         print(self.strength_level)

#     def fight_valian(self, valian_name):
#         print(f"{self.name}fiht against {valian_name}")
#         self.strength_level -= 100
#         if self.strength_level < 10:
#             self.isActive = False
#             print("is death")

#     def retaired(self,):
#         self.isActive = False
#         print(f"{self.name} retaired")

# hero_1 = SuperHero_2("Clark Kent", "Superman",
#                      "Super strength, flight", 100, "Justice League", True)
# hero_2 = SuperHero_2("Bruce Wayne", "Batman",
#                      "Genius intellect, martial arts", 85, "Justice League", True)
# hero_3 = SuperHero_2("Diana Prince", "Wonder Woman",
#                      "Super strength, combat skills", 95, "Justice League", True)
# hero_4 = SuperHero_2("Barry Allen", "Flash", "Super speed",
#                      0, "Justice League")
# hero_5 = SuperHero_2("Arthur Curry", "Aquaman",
#                      "Underwater abilities, super strength", 80, "Justice League", True)

# # print(hero_4.name)
# # print(hero_4.introduce())
# # print(hero_4.train(100))
# hero_4.fight_valian("boosto")
# hero_4.retaired()
# class BankAccount:
#     def __init__(self, balance=0, owner="Unknown"):
#         self.__balance = balance
#         self.owner = owner

#     def get_balance(self):
#         print(f"Owner: {self.owner}, Current Balance: {self.__balance}")

#     def withdraw(self, amount):
#         if amount > self.__balance:
#             print("Insufficient funds! Withdrawal denied.")
#         else:
#             self.__balance -= amount
#             print(f"Successfully withdrew {
#                   amount}. New Balance: {self.__balance}")

#     def deposit(self, amount):
#         self.__balance += amount
#         print(f"Successfully deposited {
#               amount}. New Balance: {self.__balance}")


# class SaveBankAccount:
#     def __init__(self):
#         self.bank_accounts = []

#     def add_account(self, account):
#         if isinstance(account, BankAccount):
#             self.bank_accounts.append(account)
#             print(f"Account for {account.owner} added successfully.")
#         else:
#             print("Error: Only BankAccount objects can be added.")

#     def get_accounts(self):
#         print("Accounts:")
#         for i, account in enumerate(self.bank_accounts, start=1):
#             account.get_balance()


# account1 = BankAccount(500, "David")
# account2 = BankAccount(1000, "Haim")


# savings = SaveBankAccount()


# savings.add_account(account1)
# savings.add_account(account2)


# savings.get_accounts()


# account1.deposit(200)
# account2.withdraw(500)


# savings.get_accounts()


from tkinter import Tk, Label, Button


root = Tk()
Label(root, text="WELCOME!").pack()
Button(root, text="Click me", command=lambda: print("Hello!")).pack()
root.mainloop()
