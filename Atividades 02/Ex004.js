function geradorSenha (senhaTamanho){
var caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*-+="
var senhaGerada = ""

for (let i = 0; i < senhaTamanho; i++) {
    var caractereAleatorio = Math.floor(Math.random() * caracteres.length);
    senhaGerada += caracteres.charAt(caractereAleatorio)
}

    return senhaGerada
}

var senhaTamanho = parseInt (prompt('Informe o tamanho da senha: '))
var senhaGerada = geradorSenha(senhaTamanho);

alert('A senha gerada foi: '+ senhaGerada);


