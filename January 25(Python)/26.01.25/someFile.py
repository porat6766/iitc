import os
import json
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def add_user():
    name = input("please put a your first name")
    mail = input("please put a your mail")
    kwargs = {"name": name, "mail": mail}
    DB_file = "DB.json"
    try:
        if os.path.exists(DB_file):
            with open(DB_file, "r") as file:
                try:
                    db = json.load(file)
                except json.JSONDecodeError:
                    db = {}
        else:
            db = {}

        if "users" not in db:
            db["users"] = []

        db["users"].append(kwargs)

        with open(DB_file, "w") as file:
            json.dump(db, file, indent=6)
    except Exception as e:
        print(f"un expected error {e}")


add_user(name="john", city="netivot")
