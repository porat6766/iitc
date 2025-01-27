
class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):
        print(f"HELLO {self.first_name}")


person_1 = Person(first_name="Ahiya", last_name="Eliya")

person_1.greet()


class Superhero:
    def __init__(self, name, kindPower):
        self.name = name
        self.kindPower = kindPower

    def greetingToSuperhero(self):
        print(f"{self.name} you are my super hero, because you power is {
              self.kindPower}")


hero_1 = Superhero("Bat_man", "Fire")

hero_1.greetingToSuperhero()
