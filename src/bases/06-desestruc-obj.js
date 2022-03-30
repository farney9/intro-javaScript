// Desestructuración
//Asignación desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};




const retornaPersona = ({clave, nombre, edad, rango}) => {
  // console.log(nombre, edad);

  return {
    nombreClave: clave,
    anios: edad,
    //objeto anidano
    latLng: {
      lat: 14.14546611,
      lng: 45.124851

    }
  }
  
}

//extraer objetos anidados (latLng) y asignarlo a constante: lat, lng
const {nombreClave, anios, latLng:{lat, lng}} = retornaPersona(persona);

  console.log(nombreClave, anios);
  console.log(lat, lng);
