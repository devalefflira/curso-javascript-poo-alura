import { Client } from './Client.js';

export class CurrentAccount {
  accountNumber;
  agencyNumber;
  _client;

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  get client() {
    return this._client;
  }

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
