/*5) Crie uma função que receba um array de números como parâmetro e retorne o maior
elemento do array.*/

function verficaMaior (array) {
    let i
    let maior = 0
    let menor = 0

    for(i=0; i<array.length; i++){
        if (array[i]>maior){
            maior = array[i]
        }
    }

    return maior

}

const numerosArray = [10, 40, 30, 20]
const numeroMaior = verficaMaior(numerosArray)
console.log(`O maior numero do array é: ${numeroMaior}`)