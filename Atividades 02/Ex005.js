function verificadorPalavra(palavraDigitada) {
    var vogais = "AEIOUaeiou";
    var contador = 0;
  
    for (let i = 0; i < palavraDigitada.length; i++) {
      if (vogais.includes(palavraDigitada[i])) {
        contador++;
      }
    }
    return contador;
  }
  
  var palavraDigitada = prompt('Digite uma palavra: ');
  var resultado = verificadorPalavra(palavraDigitada);
  alert('A quantidade de vogais é: ' + resultado);