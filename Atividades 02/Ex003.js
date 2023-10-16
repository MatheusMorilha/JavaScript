  function fahrenheit(temperatura) {
    return (temperatura * 9/5) + 32
  }
  
  function celsius(temperatura) {
    return ((temperatura - 32) * 5/9).toFixed(2)
  }
  
  var opcao = prompt('Conversão de Temperatura\n\n' +
    '1 - Celsius para Fahrenheit\n' +
    '2 - Fahrenheit para Celsius\n\n' +
    'Selecione a opção desejada:')
  
  if (opcao == 1) {
    var temperaturaCelsius = prompt('Informe a temperatura em Celsius: ')
    var temperaturaFahrenheit = fahrenheit(Number(temperaturaCelsius));
    console.log('Temperatura em Celsius: '+temperaturaCelsius+'°C')
    console.log('A temperatura em Fahrenheit é: ' + temperaturaFahrenheit + '°F')
  } else if (opcao == 2) {
    var temperaturaFahrenheit = prompt('Informe a temperatura em Fahrenheit: ')
    var temperaturaCelsius = celsius(Number(temperaturaFahrenheit))
    console.log('Temperatura em Fahreinheit: '+temperaturaFahrenheit+'°F')
    console.log('A temperatura em Celsius é: ' + temperaturaCelsius + '°C')
  } else {
    alert('Escolha Inválida!')
  }
  