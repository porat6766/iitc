library = []


def display_menu():
    print("\n===== Welcome to the Library Managment System =====")
    print("1. Add a book")
    print("2. Update a Book")
    print("3. Delete a Book")
    print("4. View all Books")
    print("5. Search for a Book")
    print("6. Exit")
    print("========================================")


def add_book():
    title = input("Enter book title: ").strip()
    author = input("Enter author name: ").strip()
    year = int(input("Enter publication year: ").strip())

    if not title or not author or not year:
        print("Invalid input. please try again")
        return

    book = {"title": title, "author": author, "year": year}
    library.append(book)
    print(f"Book '{title}' by {author} ({year}) added successfully!")


def update_book():
    title = input("Enter the titlr of the book to update: ")
    for book in library:
        if book["title"].lower() == title.lower():
            new_title = input(
                "Enter new title (leave blank to keep current): ").strip()
            new_author = input(
                "Enter new author (leave blank to keep current): ").strip()
            new_year = int(input(
                "Enter new year (leave blank to keep current): ").strip())
        if new_title:
            book["title"] = new_title
        if new_author:
            book["author"] = new_author
        if new_year:
            book["year"] = new_year

        print("book update successfully!")
        return

    print(f"Book '{title}' not found")


def delete_book():
    title = input("Enter the title of the book to delete").strip()
    for book in library:
        if book["title"].lower() == title.lower():
            library.remove(book)
            print("Book deleted successfully")
            return
    print(f"book {title} not a found")


def view_books():
    if not library:
        print("sorry we dosn'nt have book in library in this moment")
        return

    print("--library collection--")
    for index, book in enumerate(library, start=1):
        print(f"{index}. {book['title']} by {book['author']} ({book['year']})")
    print("=========================================")


def search_books():
    query = input(
        "Enter title, author, or publication year to search: ").strip()
    if not query:
        print("invalid input, please try again.")
        return

    results = [
        book for book in library if query.lower() in book["title"].lower() or query.lower() in book["author"].lower()
        or query == str(book["year"])]

    if results:
        print("\n===== Search Results =====")
        for idx, book in enumerate(results, start=1):
            print(f"{idx}. {book['title']} by {
                  book['author']} ({book['year']})")
        print("=========================================")
    else:
        print("No matching books found.")


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


main()
