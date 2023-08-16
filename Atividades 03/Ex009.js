/*9) Crie uma função que recebe uma string como parâmetro e conta a quantidade de
ocorrências de cada palavra na frase. A função deve retornar um objeto Map, onde as chaves
são as palavras encontradas e os valores são as contagens das palavras.*/

function contarOcorrencias(texto) {
    const palavras = texto.split(/\s+/) //Transforma a string em um array e divide cada palavra 
    const contagemPalavras = new Map()
    
    for (const palavra of palavras) {
        if (contagemPalavras.has(palavra)) {
            contagemPalavras.set(palavra, contagemPalavras.get(palavra) + 1)
        } else {
            contagemPalavras.set(palavra, 1)
        }
    }
    
    return contagemPalavras;
}

const texto = "um dois três quatro"
const resultado = contarOcorrencias(texto)

console.log(resultado)
