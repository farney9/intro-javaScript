
/**
 * tomamos el ejercicio anterior pero esta vez modificandolo para el
 * uso de async y await
 * Como se ve, hace lo mismo pero de una forma más fácil de leer,
 * 
 */

const getImagen = async () => {

    try {
        const apiKey = 'OjWJVdoB8HQJZ22QWGeXlR1vREKXoua4';
        const httpResponse = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await httpResponse.json();
        const { url } = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del error
        console.error(error);
    }
}

getImagen();