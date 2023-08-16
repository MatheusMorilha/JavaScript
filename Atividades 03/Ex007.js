/*7) Crie uma função que receba um array de números como parâmetro e retorne true se todos
os elementos do array forem números pares, caso contrário, retorne false.*/

function verficadorPar (array) {
    let i

    for(i=0; i<array.lenght; i++){
        if(array[i] % 2 == 0){
            return true
        }
    }
    return false
}


const numerosArray = [2, 2, 2, 2, 2]
const resultado = verficadorPar(numerosArray)

console.log(resultado)
