//funciones de flecha arrow funtions

const saludar = function(nombre) {
  return `funcion normal\n\nHola ${nombre}`;
}


//funciones de flecha arrow funtions
const saludar2 = (nombre) => {
  return `funcion de flecha\n\nHola ${nombre}`;
}
console.log(saludar('How are you?'));
console.log(saludar2('How are you?'));

/*tarea
1. Transformar a función de flecha
2. tiene que retornar un objeto implícito
3. pruebas
*/


// function getActiveUser(nombre) {
//   return {
//     uid: 'ABC456',
//     username: nombre,
//   }
// };


//funciones de flecha

const getActiveUser = (name) => {
  return {
    uid: 'ABC456',
    username: name,
  }
}


const activeUser = getActiveUser('Farney');

console.log(activeUser);

