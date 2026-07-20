  class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    showBalance(): void {
        console.log(`Current Balance: ${this.balance}`);
    }
}

const acc = new BankAccount("Devaki", 5000);

acc.deposit(1000);
acc.withdraw(2000);
acc.showBalance();