import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';

// Customer base

const client001 = new Client();
client001.name = 'John';
client001.cpf = '11122233399';

const client002 = new Client();
client002.name = 'Kelly';
client002.cpf = '22222233399';

// Account Registration

const currentAccount001 = new CurrentAccount();
currentAccount001.agency = '101';
currentAccount001.balance = 0;
currentAccount001.client = client001;

const currentAccount002 = new CurrentAccount();
currentAccount002.agency = '102';
currentAccount002.balance = 0;
currentAccount002.client = client002;

// Financial Operations

currentAccount001.toDeposit(500);
console.log(currentAccount001);

currentAccount001.toTransfer(200, currentAccount002);
console.log(currentAccount001);

console.log(currentAccount002);
