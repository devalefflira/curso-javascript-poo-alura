import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';

// Create new Client

const client_001 = new Client();
client_001.name = 'Adam';
client_001.cpf = '11022233399';

const client_002 = new Client();
client_002.name = 'Sophia';
client_002.cpf = '11122233399';

// Create new Current Account

const account_001 = new CurrentAccount();
account_001.accountNumber = '1234-0';
account_001.agencyNumber = '100';
account_001.client = client_001;
account_001.balance = 0;

const account_002 = new CurrentAccount();
account_002.accountNumber = '4567-0';
account_002.agencyNumber = '110';
account_002.client = client_002;
account_002.balance = 0;

// Financial Operations

// Deposit Operation
account_001.toDeposit(500);
console.log(
  `${client_001.name}, your account balance no. ${account_001.accountNumber}, from agency no. ${account_001.agencyNumber} is ${account_001.balance} dollars.`
);

// Transfer Operation

account_001.toTransfer(200, account_002);
console.log(`Current balance: ${account_001.balance} dollars.`);

console.log(account_002);

// Withdrawal Operations

account_002.toWithdraw(100);
console.log(account_002);
