class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  // Criação dos métodos

  depositar(deposito) {
    this.saldo += deposito;
  }

  sacar(saque) {
    if (this.saldo >= saque) {
      this.saldo -= saque;
    } else {
      console.log(
        'Não foi possível realizar o saque. Motivo: Saldo Insuficiente.'
      );
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = 'Joao';
cliente1.cpf = 11122233399;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1000;
contaCorrenteCliente1.saldo = 0;

// OPERAÇÕES DE DEPÓSITO E SAQUE COM OS MÉTODOS CRIADOS
console.log(contaCorrenteCliente1.saldo); // Saldo = 0
contaCorrenteCliente1.depositar(100); // Depósito = 100
console.log(contaCorrenteCliente1.saldo); // Saldo = 100
contaCorrenteCliente1.sacar(50); // Saque = 50
console.log(contaCorrenteCliente1.saldo); // Saldo = 50
contaCorrenteCliente1.sacar(60);
