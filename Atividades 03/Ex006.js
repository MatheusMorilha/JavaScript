/*6) Crie uma função que receba um array de números como parâmetro e retorne um novo array
sem elementos duplicados.*/

function editArray (array) {
    const newArray = Array.from(new Set(array))
    return newArray
}

const numerosArray = [10, 20, 20, 30, 30, 40, 50]
const novoArray = editArray(numerosArray)

console.log(novoArray)