import heroes from "../data/heroes";


/*
const getHeroeById = (id)=> {
    // find devuelve un funcion de fecha que evalua cada valor en el arreglo de heroes
    return heroes.find((personaje) => personaje.id === id)
}
*/
// find devuelve una funcion de fecha que evalua cada valor en el arreglo de heroes y devuelve un valor

const getHeroeById = (id)=>  heroes.find((personaje) => personaje.id === id)
// filter para hacer busqueda de todos los elementos que cohincidadn con un criterio
const getHeroeByOwner = (own)=>  heroes.filter((heroe) => heroe.owner === own)


// console.log(getHeroeById(2));
// console.log(getHeroeByOwner('DC'));

export { getHeroeById, getHeroeByOwner  };


