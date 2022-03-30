import { getHeroeById } from "./bases/08-importaciones-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         /**
//          * importar el getHeroeById(2)
//          */
//          const p1 = getHeroeById(2)
//         resolve(p1)
//         // reject('Héroe no encontrado')
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('MiHeroe', heroe);
// })
// .catch(err => console.warn(err));



const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id)
            if (p1) {
                resolve(p1)
            } else {
                reject('Héroe no encontrado')
            }
        }, 2000);
    });
}

getHeroeByIdAsync(4)
    // .then(heroe => console.log('Héroe', heroe))
    // .catch(err => console.warn(err))
    //ferfactorizando la saida del console log
    .then(console.log)
    .catch(console.warn)

