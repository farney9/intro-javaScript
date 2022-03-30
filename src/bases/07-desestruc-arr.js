// Desestructuración arreglos
const personajes = ['Goku', 'Vegueta', 'trunks'];
/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/
// para no tener que estar haciendo lo anterior entonces:

const [, , p3] = personajes
// console.log(p3);

/**
 * Al pomer la Coma se indica que ignore el primer y segundo elemento....y asi para hacer la desestructuración
 */

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);


//Tarea
/** 
 * 1. El primer valor del arr se llamará nombre
 * 2. el segundo se llamará setNombre
*/

const usarState = (valor) => {
  return [valor, ()=> {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usarState('Goku');
console.log(nombre);
setNombre();  