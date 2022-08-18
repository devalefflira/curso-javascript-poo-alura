class Client {
  name;
  cpf;
}

class CurrentAccount {
  agency;
  #balance;

  toDeposit(deposit) {
    if (!deposit > 0) return; // Early Return;
  }

  toWithdraw(withdraw) {
    if (this.#balance >= withdraw) {
      this.#balance -= withdraw;
      return withdraw;
    } else {
      console.log('Invalid operation. Insufficient funds.');
    }
  }
}

const newCurrentAccount = new CurrentAccount();
newCurrentAccount.agency = '1000';
newCurrentAccount.balance = 0;

newCurrentAccount.toDeposit(-100);
