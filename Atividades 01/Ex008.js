/*8) Crie uma função que receba um valor em dólares como parâmetro e converta esse valor para
reais. Solicite ao usuário um valor em dólares por meio de ‘prompt’ e exiba o resultado
utilizando ‘alert’.*/

function conversão (dolares) {
    return Number (dolares) * 5.50;
}
var dolares = prompt ('Informe o valor em dolares: ');
var reais = conversão(dolares);

alert(dolares + ' dolares '+ 'equivale a: ' + reais + ' reais');