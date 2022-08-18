class Client {
  name;
  cpf;
}

class CurrentAccount {
  agency;
  balance;

  toDeposit(deposit) {
    if (deposit > 0) {
      this.balance += deposit;
    } else {
      console.log(
        'Invalid operation. It is not possible to deposit amounts equal to or below zero.'
      );
    }
  }

  toWithdraw(withdraw) {
    if (this.balance >= withdraw) {
      this.balance -= withdraw;
    } else {
      console.log('Invalid operation. Insufficient funds.');
    }
  }
}

const newClient = new Client();
newClient.name = 'Junior';
newClient.cpf = '11122233399';

const newCurrentAccount = new CurrentAccount();
newCurrentAccount.agency = '1000';
newCurrentAccount.balance = 0;
console.log(newCurrentAccount);

console.log(`The current balance is: ${newCurrentAccount.balance}`);
newCurrentAccount.toDeposit(100);
console.log(`The current balance is: ${newCurrentAccount.balance}`);
newCurrentAccount.toWithdraw(50);
console.log(`The current balance is: ${newCurrentAccount.balance}`);
newCurrentAccount.toWithdraw(60);
newCurrentAccount.toDeposit(-10);
