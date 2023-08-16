/*11) Crie uma classe chamada "Retângulo" que tenha os atributos largura e altura. A classe deve
ter um método chamado calcularArea que retorna a área do retângulo (largura * altura).*/

class Retangulo {
    constructor(largura, altura) {
      this.largura = largura
      this.altura = altura
    }
  
    calcularArea() {
      return this.largura * this.altura
    }
  }
  
  const larguraInput = Number(prompt("Informe a largura do retângulo:"))
  const alturaInput = Number(prompt("Informe a altura do retângulo:"))
  
  const retangulo = new Retangulo(larguraInput, alturaInput);
  console.log(`A área do retângulo é: ${retangulo.calcularArea()}`)
  
  