/*4) Crie uma função que receba um array de números como parâmetro e retorne a soma de
todos os elementos do array.*/

function somaNumeros (array) {
    let soma = 0
    let i

    for(i=0; i<array.length; i++){
        soma = soma + array[i]
    }
    
    return soma

}

const numerosArray = [10, 20, 30, 40]
const resultado = somaNumeros(numerosArray)

console.log(`A soma dos numeros é igual a: ${resultado}`)