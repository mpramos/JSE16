// 1. ¿Qué es el DOM?
// El DOM (Document Object Model) 
// es una representación del documento HTML que permite su manipulación.

// 2. Obtener elementos del DOM:

// Obtener un elemento por ID
const elementoPorId = document.getElementById('miId');
// console.log(elementoPorId);

// Obtener elementos por nombre de etiqueta
const elementosPorTag = document.getElementsByTagName('p');
for (const elemento of elementosPorTag) {
//    console.log(elemento);
}


// Obtener elementos por nombre
const elementosPorNombre = document.getElementsByName('nombre');
// console.log(elementosPorNombre);
// Obtener elementos por clase

const elementosPorClase= document.getElementsByClassName('miClase')
console.log(elementosPorClase);


for (const elemento of elementosPorClase) {
//    console.log(elemento);
}


// 3. Usar querySelector y querySelectorAll

// Obtener el primer elemento que coincida con el selector CSS
console.log('QUERY SELECTOR');

const primerElemento = document.querySelector('.miClase');
console.log(primerElemento);
const primerosElementos = document.querySelectorAll('.miClase');
for (const element of primerosElementos) {
    console.log(element);
    
}

// Obtener todos los elementos que coincidan con el selector CSS
const todosLosElementos = document.querySelectorAll('p');
console.log(todosLosElementos);
console.log('QUERY SELECTOR ALL et');

// for (const element of todosLosElementos) {
//     console.log(element);
    
// }
todosLosElementos.forEach(elemento=>console.log(elemento))

// Obtener el elemento por Id
let idP=document.querySelector('#miId')
console.log('Obtener el elemento por Id');

console.log(idP);



// Iterar sobre una colección de elementos HTML

// Convertir a un array y usar forEach
Array.from(todosLosElementos).forEach(elemento => {
    // console.log(elemento.textContent);
});

// Usar un bucle for clásico
for (let i = 0; i < todosLosElementos.length; i++) {
    // console.log(todosLosElementos[i].textContent);
}

// Usar for...of (más moderno y legible)
for (const elemento of todosLosElementos) {
    // console.log(elemento.textContent);
}

/*
¿Por qué no se usa forEach directamente en HTMLCollection o NodeList?
- HTMLCollection no es un array real, por lo que no tiene el método forEach.
- querySelectorAll devuelve un NodeList, que sí tiene forEach en navegadores modernos, pero HTMLCollection (como el de getElementsByTagName) no lo tiene.
- Por eso, en algunos casos, hay que convertir HTMLCollection a un array con Array.from().
*/

// 4. Agregar y eliminar atributos

// Agregar un atributo con setAttribute
const elemento = document.getElementById('miId');
elemento.setAttribute('data-info', 'valor');

// Usos prácticos de setAttribute
// - Cambiar el href de un enlace
document.getElementById('miEnlace').setAttribute('href', 'https://www.google.com');

// - Agregar un atributo alt a una imagen
document.getElementById('miImagen').setAttribute('alt', 'Descripción de la imagen');
document.getElementById('miImagen').setAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/213.jpeg');

// - Deshabilitar un botón
// document.getElementById('miBoton').setAttribute('disabled', 'true');

// - Cambiar el tipo de un input
document.getElementById('miInput').setAttribute('type', 'password');

// Eliminar un atributo con removeAttribute
// elemento.removeAttribute('alt');

// Agregar una clase con classList
const otroElemento = document.querySelectorAll('.miClase');
// otroElemento.classList.add('nuevaClase');
otroElemento.forEach(elemento=> elemento.classList.add('nuevaClase'))

// Eliminar un elemento del DOM con removeChild
const padre = document.getElementById('contenedor');
const hijo = document.getElementById('elementoAEliminar');
padre.removeChild(hijo);

// Agregar un elemento al DOM con appendChild
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Soy un nuevo elemento';
padre.appendChild(nuevoElemento);

// 5. Manipulación del contenido

// Modificar el texto con textContent
elemento.textContent = 'Nuevo texto';

// Modificar el HTML interno con innerHTML
elemento.innerHTML = '<span>Contenido nuevo</span>';

// 6. Escuchar eventos

// Evento click
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
    alert('Botón clickeado');
});

// Evento mouseover (cuando el ratón pasa sobre un elemento)
boton.addEventListener('mouseover', function() {
    console.log('El mouse está sobre el botón');
});

// Evento mouseout (cuando el ratón sale del elemento)
boton.addEventListener('mouseout', function() {
    console.log('El mouse salió del botón');
});

// Evento keydown (cuando se presiona una tecla)
document.addEventListener('keydown', function(event) {
    console.log('Tecla presionada: ', event.key);
});

// Evento keyup (cuando se suelta una tecla)
document.addEventListener('keyup', function(event) {
    console.log('Tecla soltada: ', event.key);
});

// Evento submit (cuando se envía un formulario)
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    console.log('Formulario enviado');
});

// Evento change (cuando cambia un input, select o textarea)
const inputTexto = document.getElementById('miInput');
inputTexto.addEventListener('change', function() {
    console.log('Valor cambiado:', inputTexto.value);
});

// Evento focus (cuando un input gana el foco)
inputTexto.addEventListener('focus', function() {
    console.log('El input ha ganado el foco');
});

// Evento blur (cuando un input pierde el foco)
inputTexto.addEventListener('blur', function() {
    console.log('El input ha perdido el foco');
});

// Evento resize (cuando se cambia el tamaño de la ventana)
window.addEventListener('resize', function() {
    console.log('Se ha cambiado el tamaño de la ventana');
});

// Evento scroll (cuando se desplaza la página)
window.addEventListener('scroll', function() {
    console.log('Se está haciendo scroll en la página');
});
