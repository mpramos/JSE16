//? **Módulo 2: Variables, Tipos de Datos, Conversión de Tipos y Comentarios**

//? **Sección 1: Variables**

// //! 1. Declaración de variables
// z='hola'
// x=2
// y=5
// z+3=7
// x+3=5
// y+3=8

// En JavaScript, una variable es un contenedor para almacenar datos. 
// Podemos declararlas usando:
//* let: Para variables que pueden cambiar.
//* const: Para constantes que no cambian.
//* var: Evitar usarlo, ya que tiene limitaciones de ámbito.

//! Ejemplo:

    //* VAR VS LET ✍
    //* 1. Declaración de una variable usando let ó var
    let nombre1
    var nombre2
    console.log(nombre1); //undefined
    console.log(nombre2); //undefined
    
    //* 2. Declaración de una variable usando let ó var asignando un valor
    let nombreUsuario1 = "Juan"; 
    let nombreUsuario1 = "Juana"; 
    console.log(nombreUsuario1); 
    nombreUsuario1="Juana"

    var nombreUsuario2 = "Juan";
    var nombreUsuario2 = "Juana";
    console.log(nombreUsuario2); 
    
    var apellido='Ramirez'
    var apellido='Ramos'
    console.log(apellido);


    //* CONST ✍
    //* 3. Declaración de const asignando un valor
        
    //* Ejemplo 1  Declaración sin valor ❌
    let nom
    console.log(nom);//undefined
    nom=4
    console.log(nom); // 4
    const PI
    console.log(PI);
    
    // const PI 

    //* Ejemplo 2  Declaración con valor ✔
    const PI = 3.14;
    console.log(PI);
    PI='hola'
    console.log(PI);

//! Buenas prácticas:
//* Utiliza nombres descriptivos.
//* Ejemplo 
    //* Quiero asignar el nombre de usuario Rosa 👧 a una variable 
    let userName="rosa"
    let x="rosa"
//* Usa camelCase para facilitar la lectura.
    let firstName    

// El sabio sape que pude campiar de ofinion 
// el neqio , no camkia de opikion
    
//! 2. Reglas de nombres
//* No pueden comenzar con números. 
let 123nombre=12
//* Pueden usar letras, dígitos, $ y _.
let nombre2='rosa'
console.log(nombre2);
let nombre3='juan'
console.log(nombre3);
let _nombreUser='Adela'
console.log(_nombreUser);
let $nombreUser='Adela'
console.log($nombreUser);


//* Sensibles a mayúsculas (edad y Edad son variables diferentes).
let edad=35
let Edad=36
let nombre='juan'
Nombre='juana'
console.log(Nombre);
console.log(Edad);

//! 3. Ámbito de variables
//* let y const tienen ámbito de bloque. //scope -> el alcance que tiene una variable en su contexto
//* var tiene ámbito de función o global. //scope

//Peru
let presidentePeru='👴'
{
  {let departamentoP1='Lima'
    console.log(presidentePeru);
  }
  {let departamentoP2='Huancayo'
    console.log(presidentePeru);
    
  }
  {let departamentoP3='chiclayo'}
  {let departamentoP4='amazonas'}
  {let departamentoP5='Tumbes'}
  {let departamentoP6='Huánuco'} 
  {let departamentoP7='Áncash'}
  {let departamentoP8='Cusco'}
}
//Bolivia
let presidenteBolivia='👨‍🦱'
{
 {
  let departamentoB1='La Paz'
  console.log(presidenteBolivia);
  
}
{
  let departamentoB2='Cochabamba'
  console.log(presidenteBolivia);
 }
 {
  let departamentoB3='Chuquisaca'
 }
}


//! Ejemplo:
//* Definimos el bloque de una programa mediante llaves {}
{
  let edad = 25 // Solo accesible dentro del bloque, pero fuera del bloque no está definido
  {
    let edad=40
    edad=36
    console.log(edad);
    
  }
  console.log(edad); //25
}
  console.log(nombre);
  
console.log(edad); // Error: edad no está definido

{
  var edadVar=23
  console.log(edadVar); //23
  {
    edadVar=35
    var edadVar=34
    console.log(edadVar);
    
    let nombre='yr'
    var edadVar1=56
    console.log(edadVar1);
  }
  console.log(edadVar);
  
}
console.log(nombre);
  let _nombre // variables globales
  {
    let _edad // variables locales , variable global
    {
      let _numero // variable local
    }
  }
//? **Sección 2: Tipos de Datos y Conversión de Tipos**

//! 1. Tipos primitivos
//* Number: Números (enteros y decimales).👉 1 2 3 1.5 -1 etc
//* String: Cadenas de texto.👉 "" '' ``
//* Boolean: true o false.
//* Undefined: Variable declarada sin valor.
//* Null: Representa "nada".
//* Symbol: Identificador único.

//! Ejemplo:
let numero = 0; //number
let texto = `hola`; // string
let activo = false; //boolean

//! 2. Operador typeof
// Nos permite saber el tipo de dato de una variable.
//! Ejemplo:
console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof activo); // boolean

//!Métodos de la cadena
// Se puede acceder a un carácter determinado usando corchetes y el índice>>número[posición]
    let nombre='juana'
    console.log(nombre[1]);
    console.log(nombre[2]);
    
//! Length
// Propiedad que devuelve el numero de caracteres que existe en la cadena
    let nombre='juana'
    console.log(nombre.length);
//! Splice

// El método splice permite agregar, eliminar o reemplazar elementos en un arreglo. Modifica el arreglo original.
    let nombre='roberto'
    console.log(nombre.slice(2,3));
    console.log(nombre);

//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
names.splice(2, 1, "Lucas"); // Reemplaza 1 elemento en la posición 2
console.log(names); // -> ["Olivia", "Emma", "Lucas", "Samuel"]

const nombresSplice=names.splice(1, 2); // Elimina 2 elementos desde la posición 1
console.log(nombresSplice);

console.log(names); // -> ["Olivia", "Samuel"]
//! Split
// El método split convierte una cadena en un arreglo, dividiéndola en partes según un delimitador especificado.
//* Ejemplo:
let text = "Olivia,Emma,Mateo,Samuel";
let namesArray = text.split(",");
console.log(namesArray); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(text);


let sentence = "Hola a todos";
let words = sentence.split(' ');
console.log(words); // -> ["Hola", "a", "todos"]

//! 3. Conversiones explícitas
// Nos permite convertir un tipo de dato a otro
//* String(): Convierte a cadena.
//* Number(): Convierte a número.
//* Boolean(): Convierte a booleano.

//! Ejemplo:
let cadena = String(123); //👉 convierte 123 a string "123"
let numeroDesdeCadena = Number("456"); //👉 convierte "456" a string 456
let booleano = Boolean(1); // 👉 convierte 1 a booleano true
console.log(typeof cadena);
console.log(typeof numeroDesdeCadena);
console.log(booleano);

//? **Sección 3: Arreglos y Objetos**

//! 1. Arreglos,
//* Estructuras que almacenan varios valores.
//* Se accede por índice, comenzando en 0.

//! Ejemplo:

let dia='Lunes' //string
let dias = ["Lunes", "Martes", "Miércoles"];

let foods=['Lunes',232, true, false]
console.log(foods);

console.log(dias[0]); // Lunes
console.log(dias[2]); // Miercoles

//! Métodos comunes:
//* push(): Agrega al final.
//* pop(): Elimina el último.
//* shift(): Elimina el primero.
//* unshift(): Agrega al inicio.

//! Length
/* La propiedad length se utiliza para obtener información sobre
   la longitud (el número de elementos) del arreglo, incluidas las posiciones vacías.*/
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

// let names = ["Olivia", "Emma", "Mateo", "Samuel" , ,"Amelia", ,"Amelia" ];
names[5] = "Amelia";
names[7] = "Amelia";

console.log(names.length); // -> 6

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names[3]); // -> Samuel
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Amelia

//! IndexOf
// El método indexOf se utiliza para buscar en el arreglo y localizar un valor dado,
// devolverá el número del indice donde se encuentra el valor .
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
console.log(names.indexOf("Leonardo")); // -> -1

//! Push
// El método push coloca un elemento al final del arreglo y aumenta su longitud.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names);

names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel", "Amelia"]

//! Unshift
// El método unshift agrega un nuevo elemento al inicio del arreglo.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
names.unshift("Amelia");
console.log(names); // -> ["Amelia", "Olivia", "Emma", "Mateo", "Samuel"]

//! Pop
// El método pop elimina el último elemento del arreglo y lo retorna.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let name = names.pop();
console.log(name); // -> Samuel
console.log(names); // -> ["Olivia", "Emma", "Mateo"]

//! Shift
// El método shift elimina el primer elemento del arreglo y lo retorna.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let name = names.shift();
console.log(name); // -> Olivia
console.log(names); // -> ["Emma", "Mateo", "Samuel"]

//! Reverse
// El método reverse invierte el orden de los elementos en el arreglo.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
names.reverse();
console.log(names); // -> ["Samuel", "Mateo", "Emma", "Olivia"]

//! Slice
// El método slice permite crear un nuevo arreglo a partir de elementos seleccionados.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo","Daria"];
let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]
let n2 = names.slice(1, 3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names.slice(0, -2);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]
console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]

//! Concat
// El método concat crea un nuevo arreglo combinando dos o más arreglos.
//* Ejemplo:
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat(otherNames);
console.log(allNames); // -> ["Olivia", "Emma", "Mateo", "Samuel", "William", "Jane"]


//! 2. Objetos
//* Estructuras que almacenan pares clave-valor.
let obj={}
console.log(obj);


//! Ejemplo:
let usuario = {
  nombre: "Ana",
  edad: 30
};
console.log(usuario.nombre); // Ana
console.log(usuario.edad); 


//? Contenido sobre Hoisting

//! 1. ¿Qué es el Hoisting?
// El Hoisting es un comportamiento de JavaScript que "mueve" las declaraciones de variables,
//  funciones o clases al principio de su contexto, 
// ya sea el archivo completo (global) o dentro de una función (local).
// Esto significa que puedes usar una variable o función antes de declararla.

//! 2. Hoisting con variables (var, let, const)
// - Las variables declaradas con `var` son inicializadas como `undefined` durante el hoisting.
// - Las variables declaradas con `let` y `const` son "temporalmente inaccesibles" hasta que son inicializadas. Esto se conoce como "Zona Temporal Muerta" (Temporal Dead Zone).

// Ejemplo con `var`:
console.log(nombre); // -> undefined
var nombre = "Juan";
console.log(nombre);


//! 3. Hoisting con funciones
// Las funciones declaradas con `function` son completamente "hoisted". Puedes llamarlas antes de declararlas.
saludar(); // -> "Hola, Mundo!"
function saludar() {
    console.log("Hola, Mundo!");
}


//? **Sección 4: Comentarios**

//! 1. Tipos de comentarios
//* Una línea: // Comentario
//* Múltiples líneas: /* Comentario */

//! Ejemplo:
// Este es un comentario de una línea
/*
Este es un comentario
multilínea
*/
// let nombres=2345

//! 2. Buenas prácticas
//* Usa comentarios para explicar código complejo.
//* Evita comentarios innecesarios.

// asi se asigna una variable
let suma= 2 /*dos representa el primer operando*/  + 3
console.log(suma);


//! 3. Ejemplo de documentación
/**
 * Calcula el área de un círculo.
 * @param {number} radio - El radio del círculo.
 * @returns {number} - Área del círculo.
 */
function calcularArea(radio) {
  return Math.PI * radio * radio;
}
Ñ
//? **Resumen**
//* Declara variables con let y const.
//* Usa nombres claros y descriptivos.
//* Conoce los tipos de datos y su conversión.
//* Utiliza comentarios para mejorar la legibilidad del código.
