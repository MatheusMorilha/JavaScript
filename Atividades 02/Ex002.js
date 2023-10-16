var qtsnumeros = prompt('Informe quantos numeros deseja digitar: ')
var i = 0 
var valor = 0
var soma = 0
var media = 0

for(i=0; i<qtsnumeros; i++){
valor = prompt('Numero: ')
soma = soma + Number (valor)
}

media = soma/ Number (qtsnumeros)

console.log('A media desses numeros é: ' + media)