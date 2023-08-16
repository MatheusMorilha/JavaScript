/*3) Crie uma função que receba dois números como parâmetros e retorne a soma deles.*/

function soma (numero1, numero2) {
    return numero1 + numero2;

}

 var numero1 = prompt ("Informe o primeiro numero: ");
 var numero2 = prompt ("Informe o segundo numero: ");

var resultado_soma = soma(Number (numero1), Number (numero2))

alert('A soma dos numeros é: ' + resultado_soma);
