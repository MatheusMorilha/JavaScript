/*5) Crie um programa que solicite dois números ao usuário por meio de ‘prompt’. Em seguida,
calcule a soma dos dois números e exiba o resultado no console utilizando ‘console.info’ com
a seguinte mensagem “{valor 1} + {valor 2} é igual a {resultado}” onde o resultado deve estar
em negrito.*/

var valor1= prompt('Digite o primeiro numero: ')
var valor2 = prompt('Digite o segundo numero: ')

var soma = Number (valor1) + Number (valor2)

console.info('{',valor1,'}','+','{',valor2,'}', 'é igual a', '{',soma,'}')

