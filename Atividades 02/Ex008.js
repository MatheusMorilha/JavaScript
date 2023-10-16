var listaDeCompras = [];

function adicionarItem() {
  var novoItem = prompt("Digite o nome do item que deseja adicionar à lista de compras:");
  if (novoItem) {
    listaDeCompras.push(novoItem);
    console.log("'" + novoItem + "' foi adicionado à lista de compras.");
  } else {
    console.log("Nenhum item foi adicionado à lista de compras.");
  }
}

function exibirLista() {
  console.log("Lista de Compras:");
  for (var i = 0; i < listaDeCompras.length; i++) {
    console.log("- " + listaDeCompras[i]);
  }
}

function main() {
  var continuar = true;

  while (continuar) {
    var opcao = prompt("Escolha uma opção:\n1. Adicionar item à lista\n2. Exibir lista de compras\n3. Finalizar");
    
    switch (opcao) {
      case "1":
        adicionarItem();
        break;
      case "2":
        exibirLista();
        break;
      case "3":
        console.log("Finalizando o programa.");
        continuar = false;
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  }
}

main();

