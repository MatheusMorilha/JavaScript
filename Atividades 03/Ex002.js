/*2) Crie uma função que receba o nome de um aluno e suas notas em três disciplinas diferentes.
Em seguida, calcule a média das notas e retorne uma mensagem usando template strings,
informando o nome do aluno, suas notas e a média calculada.*/

function dadosAluno (nome, nota1, nota2, nota3) {
    let mediaNotas = (nota1 + nota2 + nota3)/3
    return console.log(`Aluno: ${nome}\n\n---Notas---\n\nMatematica: ${nota1}\nFísica: ${nota2}\nQuímica: ${nota3}\n\nMédia das notas: ${mediaNotas.toFixed(2)}`)

}

 var nome = prompt("Informe o nome do aluno: ")
 var notaMatematica = prompt("Nota em Matemática: ")
 var notaFisica = prompt("Nota em Física: ")
 var notaQuimica = prompt("Nota em Química: ")

 dadosAluno(nome, Number (notaMatematica), Number (notaFisica), Number (notaQuimica))
