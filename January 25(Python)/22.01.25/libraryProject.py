# Library Management System - CLI Application

# Global list to store books
library = []

# Function to display the main menu


def display_menu():
    print("\n===== Welcome to the Library Management System =====")
    print("1. Add a Book")
    print("2. Update a Book")
    print("3. Delete a Book")
    print("4. View All Books")
    print("5. Search for a Book")
    print("6. Exit")
    print("=========================================")

# Function to add a book


def add_book():
    title = input("Enter book title: ").strip()
    author = input("Enter author name: ").strip()
    year = input("Enter publication year: ").strip()

    if not title or not author or not year.isdigit():
        print("Invalid input. Please try again.")
        return

    book = {"title": title, "author": author, "year": int(year)}
    library.append(book)
    print(f"Book '{title}' by {author} ({year}) added successfully!")

# Function to update a book


def update_book():
    title = input("Enter the title of the book to update: ").strip()
    for book in library:
        if book["title"].lower() == title.lower():
            new_title = input(
                "Enter new title (leave blank to keep current): ").strip()
            new_author = input(
                "Enter new author (leave blank to keep current): ").strip()
            new_year = input(
                "Enter new publication year (leave blank to keep current): ").strip()

            if new_title:
                book["title"] = new_title
            if new_author:
                book["author"] = new_author
            if new_year.isdigit():
                book["year"] = int(new_year)

            print(f"Book '{title}' updated successfully!")
            return

    print(f"Book '{title}' not found.")

# Function to delete a book


def delete_book():
    title = input("Enter the title of the book to delete: ").strip()
    for book in library:
        if book["title"].lower() == title.lower():
            library.remove(book)
            print(f"Book '{title}' removed successfully!")
            return

    print(f"Book '{title}' not found.")

# Function to view all books


def view_books():
    if not library:
        print("No books in the library.")
        return

    print("\n===== Library Collection =====")
    for idx, book in enumerate(library, start=1):
        print(f"{idx}. {book['title']} by {book['author']} ({book['year']})")
    print("=========================================")

# Function to search for a book


def search_books():
    query = input(
        "Enter title, author, or publication year to search: ").strip()
    if not query:
        print("Invalid input. Please try again.")
        return

    results = [book for book in library if query.lower() in book["title"].lower()
               or query.lower() in book["author"].lower()
               or query == str(book["year"])]

    if results:
        print("\n===== Search Results =====")
        for idx, book in enumerate(results, start=1):
            print(f"{idx}. {book['title']} by {
                  book['author']} ({book['year']})")
        print("=========================================")
    else:
        print("No matching books found.")

# Main function to run the application


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


# Run the program
if __name__ == "__main__":
    main()
