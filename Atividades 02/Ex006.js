function calculoImc(altura, peso) {
    var resultado = peso / Math.pow(altura, 2)
  
    if (resultado < 18.5) {
      return 'Abaixo do peso normal'
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      return 'Peso normal'
    } else if (resultado >= 25 && resultado <= 29.9) {
      return 'Excesso de peso'
    } else {
      return 'Obesidade'
    }
  }
  
  var altura = parseFloat(prompt('Informe a altura (em metros): '))
  var peso = parseFloat(prompt('Informe o peso (em quilogramas): '))
  
  var categoria = calculoImc(altura, peso)
  
  alert('Categoria IMC\n\n' + categoria)
  