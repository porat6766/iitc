import os
import json
import uuid

DB_FILE = "DB.json"


def load_library():
    if os.path.exists(DB_FILE):
        with open(DB_FILE, "r") as file:
            try:
                return json.load(file)
            except json.JSONDecodeError:
                return {"books": []}
    return {"books": []}


def save_library(library):
    with open(DB_FILE, "w") as file:
        json.dump(library, file, indent=4)


def add_book():
    library = load_library()
    title = input("Enter book title: ").strip()
    author = input("Enter author name: ").strip()
    year = input("Enter publication year: ").strip()

    if not title or not author or not year.isdigit():
        print("Invalid input. Please try again.")
        return

    book = {
        "id": str(uuid.uuid4()),
        "title": title,
        "author": author,
        "year": int(year)
    }

    library["books"].append(book)
    save_library(library)
    print(f"Book '{title}' by {author} ({year}) added successfully!")


def update_book():
    library = load_library()
    title = input("Enter the title of the book to update: ").strip()
    for book in library["books"]:
        if book["title"].lower() == title.lower():
            new_title = input(
                "Enter new title (leave blank to keep current): ").strip()
            new_author = input(
                "Enter new author (leave blank to keep current): ").strip()
            new_year = input(
                "Enter new year (leave blank to keep current): ").strip()

            if new_title:
                book["title"] = new_title
            if new_author:
                book["author"] = new_author
            if new_year.isdigit():
                book["year"] = int(new_year)

            save_library(library)
            print("Book updated successfully!")
            return

    print(f"Book '{title}' not found.")


def delete_book():
    library = load_library()
    title = input("Enter the title of the book to delete: ").strip()
    for book in library["books"]:
        if book["title"].lower() == title.lower():
            library["books"].remove(book)
            save_library(library)
            print("Book deleted successfully!")
            return
    print(f"Book '{title}' not found.")


def view_books():
    library = load_library()
    if not library["books"]:
        print("Sorry, the library doesn't have any books at the moment.")
        return

    print("\n-- Library Collection --")
    for index, book in enumerate(library["books"], start=1):
        print(f"{index}. {book['title']} by {book['author']} ({book['year']})")
    print("=========================================")


def search_books():
    library = load_library()
    query = input(
        "Enter title, author, or publication year to search: ").strip()
    if not query:
        print("Invalid input. Please try again.")
        return

    results = [
        book for book in library["books"]
        if query.lower() in book["title"].lower()
        or query.lower() in book["author"].lower()
        or query == str(book["year"])
    ]

    if results:
        print("\n===== Search Results =====")
        for index, book in enumerate(results, start=1):
            print(f"{index}. {book['title']} by {
                  book['author']} ({book['year']})")
        print("=========================================")
    else:
        print("No matching books found.")


def display_menu():
    print("\nLibrary Management System")
    print("1. Add Book")
    print("2. Update Book")
    print("3. Delete Book")
    print("4. View Books")
    print("5. Search Books")
    print("6. Exit")


def main():
    while True:
        display_menu()
        choice = input("Enter your choice: ").strip()

        if choice == "1":
            add_book()
        elif choice == "2":
            update_book()
        elif choice == "3":
            delete_book()
        elif choice == "4":
            view_books()
        elif choice == "5":
            search_books()
        elif choice == "6":
            print("Thank you for using the Library Management System. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
