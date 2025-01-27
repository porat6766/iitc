class BankAccount:
    def __init__(self, balance=0, owner="Unknown"):
        self.__balance = balance
        self.owner = owner

    def get_balance(self):
        print(f"Owner: {self.owner}, Current Balance: {self.__balance}")
        return self.__balance

    def withdraw(self, amount):
        if amount > self.__balance:
            print("Insufficient funds! Withdrawal denied.")
        else:
            self.__balance -= amount
            print(f"Successfully withdrew {
                  amount}. New Balance: {self.__balance}")

    def deposit(self, amount):
        self.__balance += amount
        print(f"Successfully deposited {
              amount}. New Balance: {self.__balance}")


class SaveBankAccount:
    def __init__(self):
        self.bank_accounts = []

    def add_account(self, account=0):
        if isinstance(account, BankAccount):
            self.bank_accounts.append(account)
            print(f"Account for {account.owner} added successfully.")
        else:
            print("Error: Only BankAccount objects can be added.")

    def get_accounts(self):
        print("Accounts:")
        for i, account in enumerate(self.bank_accounts, start=1):
            account.get_balance()


account1 = BankAccount(500, "David")
account2 = BankAccount(1000, "Haim")


savings = SaveBankAccount()


savings.add_account(account1)
savings.add_account(account2)


savings.get_accounts()


account1.deposit(200)
account2.withdraw(500)


savings.get_accounts()
