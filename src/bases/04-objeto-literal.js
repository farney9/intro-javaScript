
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 44068,
    lat: 55.45454545,
    lng: 14.516544461
  }
};

//creamos un clon de persona y lo pasamos a persona2
const persona2 = {...persona}

persona2.nombre = 'Peter;'
console.log(persona);
console.log(persona2);