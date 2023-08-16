/*1) Crie uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem
formatada usando template strings informando o nome e a idade da pessoa.*/

function dadosPessoais (nome, idade) {
    console.log(`Seu nome é: ${nome}\nSua idade é: ${idade}`)

    

}

    var nome = prompt("Digite o seu nome: ")
    var idade = prompt("Digite sua idade: ")

    dadosPessoais(nome, parseInt (idade))
