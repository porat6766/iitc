from tkinter import Tk, Label, Button, Entry
from Bank import BankAccount


class ATMApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Mini ATM")

        self.account = BankAccount(balance=500, owner="David")

        self.balance_label = Label(root, text=f"Balance: {
                                   self.account.get_balance()}")
        self.balance_label.pack()

        self.deposit_label = Label(root, text="Enter deposit amount: ")
        self.deposit_label.pack()

        self.deposit_entry = Entry(root)
        self.deposit_entry.pack()

        self.deposit_button = Button(
            root, text="Deposit", command=self.deposit)
        self.deposit_button.pack()

    def deposit(self):
        try:
            amount = float(self.deposit_entry.get())
            self.account.deposit(amount)
            self.balance_label.config(
                text=f"Balance: {self.account.get_balance()}")
        except ValueError:
            print("Please enter a valid number!")


root = Tk()
app = ATMApp(root)
print(app.account.get_balance())
root.mainloop()
