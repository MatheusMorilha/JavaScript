/*10) Crie uma função que recebe dois arrays de mesmo tamanho, um contendo chaves e outro
contendo valores. A função deve retornar um objeto Map, onde as chaves são os elementos
do primeiro array e os valores são os elementos correspondentes do segundo array.*/

function juntarArrays(array1, array2) {
    const objeto = new Map();
  
    for (let i = 0; i < array1.length; i++) {
      objeto.set(array1[i], array2[i]);
    }
  
    return objeto;
  }
  
  const array1 = ['um', 'dois', 'tres'];
  const array2 = [1, 2, 3];
  const objeto = juntarArrays(array1, array2);
  
  console.log(objeto);
  
  