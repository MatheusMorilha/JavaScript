/*7) Crie um programa que solicite ao usuário o raio de um círculo por meio de ‘prompt’. Em
seguida, calcule e exiba a área do círculo utilizando ‘console.info’. Formate a mensagem para
incluir um link que redirecione para um site com a fórmula da área do círculo.*/

var raio_circulo = prompt ('Informe o raio do circulo: ');
var area_circulo = 3.14 * (raio_circulo*raio_circulo);

console.info('Area do circulo: ', + area_circulo);
console.info('https://www.todamateria.com.br/area-do-circulo/')