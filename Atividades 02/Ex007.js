function adicionarItens(listaCompras, item){
    listaCompras.push(item)
}

function exibirLista(listaCompras) {
    alert("Itens para serem comprados:\n\n" + listaCompras.join("\n"));
  }

var listaCompras = []

confirm('MONTE SUA LISTA DE COMPRAS!')

while(true){
    var item = prompt('Adicionar item: (Digite 0 para finalizar a lista')
    if(item == 0){
        break
    }else{
        adicionarItens(listaCompras, item)
    }
}

    exibirLista(listaCompras)
