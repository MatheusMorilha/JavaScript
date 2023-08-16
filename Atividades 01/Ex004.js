/*4) Escreva uma função que receba uma string como parâmetro e exiba essa string no console
em negrito na cor azul.*/

function negrito_azul (palavra) {
   return console.log ('A palavra digitada foi: %c' + palavra, 'color: blue; font-size: 20px; font-style: bold');
}

var palavra = prompt ('Digite uma palavra: ');
negrito_azul(palavra)
