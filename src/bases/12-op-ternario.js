const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

/**
 * Una forma mucho mejor de hacer lo anterior es usar operador
 * ternario
 */

//  const mensaje1 = (activo) ? 'Activo':  'Inactivo' 
//  console.log(mensaje1);
 /**
  * Cuando no queremos que se evalue el false de la condicion se usa
  */
  const mensaje2 = !activo && 'Activo'


console.log(mensaje2);