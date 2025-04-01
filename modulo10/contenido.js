// 1. ¿Qué son las Promesas en JavaScript?
// Una Promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca.

// Creación de una promesa
const miPromesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia esto a false para ver el rechazo
    
    setTimeout(() => {
        if (exito) {
            resolve('¡La operación fue exitosa!');
        } else {
            reject('Hubo un error en la operación.');
        }
    }, 2000);
});

// Uso de then y catch para manejar la promesa
miPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

// 2. Uso de async y await
// Las funciones async permiten escribir código asincrónico de forma más sencilla.

async function obtenerDatos() {
    try {
        console.log('Esperando datos...');
        let resultado = await miPromesa; // Espera a que la promesa se resuelva
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

// Llamar a la función async
obtenerDatos();

// 3. Simulación de una llamada a una API con fetch
async function obtenerUsuarios() {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        let usuarios = await respuesta.json(); // Convertimos la respuesta en JSON
        console.log('Usuarios obtenidos:', usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

// Llamar a la función que obtiene los usuarios
obtenerUsuarios();
