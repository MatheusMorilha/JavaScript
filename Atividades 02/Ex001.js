while (true) {
    var jogar = window.confirm('JOGO DE DADOS - DESEJA JOGAR?');
  
    if (jogar) {
      var dado = prompt('Digite 1 para lançar o dado (O resultado sairá no console)');
  
      var min = 1;
      var max = 7;
      var resultado;
  
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
  
      if (dado == 1) {
        resultado = getRandomInt(min, max);
        console.log('O resultado foi: ' + resultado);
      } else {
        alert('Número Inválido');
      }
    } else {
      break; 
    }
  }