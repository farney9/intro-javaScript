//Arreglos en JS

const arreglo = [1,2,3,4] 

// utilizando el operador spread para adicionar un elemento adicional  al arrreglo2
let arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo2.map((num) => {
  return  num * 2;
});

console.log(arreglo3);