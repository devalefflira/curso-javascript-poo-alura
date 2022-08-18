// CRIANDO CLASSES
class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;
}

// CRIANDO UM NOVO CLIENTE A PARTIR DA CLASSE "Cliente"
const cliente1 = new Cliente();
cliente1.nome = 'Joao';
cliente1.cpf = 11122233399;

// CRIANDO UMA NOVA CONTA CORRENTE A PARTIR DA CLASSE "ContaCorrente"
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1000;
contaCorrenteCliente1.saldo = 0;

// MANIPULANDO O SALDO DA CONTA
console.log(contaCorrenteCliente1.saldo); // Verificando o saldo atual da conta
let valorDepositado = 100; // Declarando a variável que será usada para adicionar valores ao saldo
contaCorrenteCliente1.saldo += valorDepositado; // Adicionando fundos à conta
console.log(contaCorrenteCliente1.saldo); // Verificando o saldo atual, pós depósito;
let valorSacado = 50; // Declarando a variável que será usada para retirar valores do saldo
contaCorrenteCliente1.saldo -= valorSacado;
console.log(contaCorrenteCliente1.saldo); // Verificando o saldo atual, pós saque;

// Evitando saques acima do valores disponíveis na conta
if (contaCorrenteCliente1.saldo >= valorSacado) {
  contaCorrenteCliente1.saldo -= valorSacado;
}

// A refatoração deste código está no arquivo index2.js, neste mesmo diretório (aula-02).