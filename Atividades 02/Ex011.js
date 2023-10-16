/*Crie um objeto chamado "contaBancaria" com métodos para depositar e sacar dinheiro,
além de uma propriedade para o saldo atual. Em seguida, faça algumas operações de
depósito e saque e imprima o saldo atual no console.*/

var escolha2 = 0

var contaBancaria = {
    saldoAtual: 0,

    depositar: function (valor) {
        if (valor > 0) {
            this.saldoAtual += valor;
            console.log(`Depósito de ${valor} foi feito com sucesso!`);
        } else {
            console.log(`O valor do depósito deve ser maior que zero`);
        }
    },

    sacar: function (valor) {
        if (valor > 0 && valor <= this.saldoAtual) {
            this.saldoAtual -= valor;
            console.log(`Saque de ${valor} realizado com sucesso!`);
        } else if (valor > this.saldoAtual) {
            console.log(`Valor do saque maior que o Saldo Atual`);
        } else if (valor <= 0) {
            console.log(`O saque deve ser maior que zero (0)`);
        }
    },

    saldo: function () {
        return this.saldoAtual;
    }
};

do {
    var escolha = prompt("ESCOLHA A OPÇÃO DESEJADA" + "\n\n1 - Deposito\n2 - Saque\n3 - Consultar Saldo\n\n" + "Saldo Atual: " + contaBancaria.saldo());

    if (escolha == 1) {
        var valor = Number(prompt("SALDO ATUAL: " + contaBancaria.saldo() + "\nInforme o valor para ser depositado"));
        contaBancaria.depositar(valor);
    }else if (escolha == 2){
        var valor = Number(prompt("Informe o valor para saque"));
        contaBancaria.sacar(valor);
    }else if (escolha == 3){
        alert ("Saldo: " + contaBancaria.saldo())
    }

    escolha2 = prompt("Deseja realizar outra operação?" + "\n\n1 - Sim\n2 - Não");

} while (escolha2 != 2);

alert("Extrato Impresso no Console!")
