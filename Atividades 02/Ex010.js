/*Crie um objeto chamado "calculadora" com métodos para adição, subtração, multiplicação e
divisão. Em seguida, use esses métodos para calcular e imprimir o resultado de uma
operação matemática no console.*/

var calculadora = {
    adicao: function (num1, num2){
       return num1 + num2
    },

    subtracao: function (num1, num2){
        return num1 - num2
    },

    multiplicacao: function (num1, num2){
        return num1 * num2
    },

    divisao: function (num1, num2){
        if (num2 == 0){
            alert("Não é permitido dividir por zero (0)!")
        }

        return num1 / num2
    },

    potencia: function (num1, num2){
        return Math.pow(num1, num2)
    }
}

var num1 = Number (prompt("Informe o primeiro valor"))
var num2 = Number (prompt("Informe o segundo valor"))

alert("Resultados no Console!")

var resultadoAdicao = calculadora.adicao(num1, num2)
console.log(`Adicao: ${resultadoAdicao}`)

var resultadoSubtracao = calculadora.subtracao(num1, num2)
console.log(`Subtração: ${resultadoSubtracao}`)

var resultadoMultiplicacao = calculadora.multiplicacao(num1, num2)
console.log(`Multiplicação: ${resultadoMultiplicacao}`)

var resultadoDivisao = calculadora.divisao(num1, num2)
console.log(`Divisão: ${resultadoDivisao}`)

var resultadoPotencia = calculadora.potencia(num1, num2)
console.log(`Potência: ${resultadoPotencia}`)