export class CurrentAccount {
  agency;
  client;

  balance = 0;

  toDeposit(depositAmount) {
    if (depositAmount <= 0) {
      return;
    }
    this.balance += depositAmount;
  }

  toWithdraw(withdrawalAmount) {
    if (this.balance >= withdrawalAmount) {
      this.balance -= withdrawalAmount;
      return withdrawalAmount;
    }
  }

  toTransfer(transferValue, destinationAccount) {
    const amountWithdrawn = this.toWithdraw(transferValue);
    destinationAccount.toDeposit(amountWithdrawn);
  }
}
