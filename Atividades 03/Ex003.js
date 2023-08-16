/*Considere o seguinte objeto que contém informações sobre um usuário:

const usuario = {
    nome: 'Maria',
    idade: 28,
    email: 'maria@example.com,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil'
    }
};

a) Utilize a desestruturação para extrair as propriedades nome, idade e email do objeto usuario
e armazená-las em variáveis separadas.

b) Em seguida, utilize a desestruturação para extrair as propriedades cidade, estado e pais do
objeto endereco e armazená-las em variáveis separadas.

*/

const usuario = {
    nome: 'Maria',
    idade: 28,
    email: 'maria@example.com',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil'
    }
};

// a)  e  b) //
const {nome, idade, email, endereco: {cidade, estado, pais}} = usuario

console.log(`${nome}\n${idade}\n${email}\n${cidade}\n${estado}\n${pais}`)

