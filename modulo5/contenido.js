//? Contenido : Funciones

//! 5.0.1 Funciones
/*
Las funciones son bloques reutilizables de código que realizan una tarea específica. 
Pueden aceptar parámetros y devolver resultados.
*/

//! Declaración de una función básica
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // -> ¡Hola, mundo!

//! Función con parámetros
function sumar(a, b) {
    return a + b;
}
let resultado=sumar(3,7)//10
console.log(resultado);
console.log(sumar(3, 7)); // -> 10

//! Función que no retorna nada (void)
function mostrarMensaje(mensaje) {
    console.log("El mensaje es:", mensaje);
}
mostrarMensaje("JavaScript es genial"); // -> El mensaje es: JavaScript es genial

//! Función que utiliza valores por defecto en parámetros
function saludarPersona(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}
saludarPersona(); // -> Hola, Invitado
saludarPersona("Carlos"); // -> Hola, Carlos

//! 5.0.3 Funciones de llamada
/*
Las funciones pueden ser invocadas en cualquier momento y tantas veces como sea necesario.
*/

//! Función utilizada varias veces
console.log(multiplicarPorDos(4)); // -> 8
console.log(multiplicarPorDos(7)); // -> 14

//! Funciones que llaman a otras funciones
function calcularCuadrado(numero) {
    let nombre='juana'
    console.log(nombre);
    
    return numero*numero; //4
}
function calcularCubo(numero) {
    return calcularCuadrado(numero) * numero; //8
}
console.log(calcularCubo(2)); // -> 18


//! 5.0.4 Funciones - Variables Locales
/*
Las variables locales solo son accesibles dentro de la función en la que fueron declaradas.
*/

//! Ejemplo con variables locales
function calcularAreaRectangulo(base, altura) {
    let area = base * altura; // Variable local
    return area;
}
console.log(calcularAreaRectangulo(5, 3)); // -> 15
// console.log(area); // -> Error: area no está definida

//! 5.0.5 Declaración de retorno
/*
El uso de `return` permite que una función devuelva un valor.
*/

//! Ejemplo simple
function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}
console.log(dividir(10, 2)); // -> Error: División por cero
console.log(dividir(10, 2)); // -> 5

//! 5.1.1 Validación de parámetros
/*
Podemos verificar los parámetros dentro de las funciones para asegurarnos de que son válidos.
*/

//! Ejemplo de validación de parámetros
function restar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Ambos argumentos deben ser números";
    }
    return a - b;
}
console.log(restar(10, 5)); // -> 5
console.log(restar(10, "cinco")); // -> Error: Ambos argumentos deben ser números

//! 5.1.2 Recursión
/*
La recursión permite que una función se llame a sí misma para resolver problemas repetitivos.
*/

//! Ejemplo: calcular factorial
// n!=n*(n-1)*(n-2).. . 1
// 5!= 5*4*3*2*1=120 =>5!= 5*4!
// 4!= 4*3*2*1 = 24 => 4!= 4*3!
// 3!= 3*2*1 = 6 =>    3!= 3*2!
// 2!= 2*1 =2 =>       2!=2*1! 
// 1!= 1 =1 =>         1!=1

// 3!=3*2*1=6

function factorial(n) {
    if (n === 0 || n === 1) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}
console.log(factorial(5)); // -> 120

//! Ejemplo: encontrar la suma de un array
function sumaArray(arr) {
    if (arr.length === 0) return 0; // Caso base
    return arr[0] + sumaArray(arr.slice(1)); // Llamada recursiva
}
console.log(sumaArray([1, 2, 3, 4])); // -> 10

//! 5.1.8 Funciones Arrow
/*
Las funciones flecha son una forma simplificada de escribir funciones.
*/
function name(params) {
    
}
name()
//! Ejemplo básico
const saludarArrow = () => console.log("¡Hola desde una función flecha!");
saludarArrow(); // -> ¡Hola desde una función flecha!

//! Con parámetros y retorno implícito

function cuadrado(num) {
    return num*num
}
let cua= cuadrado(2)
console.log(cua);

const elevarAlCuadrado = (num) => num * num;
console.log(elevarAlCuadrado(5)); // -> 25

//! Función flecha con bloque de código
const calcularSuma = (a, b) => {
    let resultado = a + b; // Bloque de código
    return resultado;
};
console.log(calcularSuma(8, 12)); // -> 20

//! Comparación de función tradicional vs función flecha
// Tradicional
function dividirNumeros(a, b) {
    return a / b;
}

// Flecha
const dividirNumerosArrow = (a, b) => a / b;
console.log(dividirNumeros(10, 2)); // -> 5
console.log(dividirNumerosArrow(10, 2)); // -> 5

//! 5.1.5 Callbacks
/*
Un callback es una función pasada como argumento a otra función.
*/
let cuah='wer'
let suma= (a,b)=> a+b
console.log(suma(3,4));
//! Ejemplo con callback
function procesarDatos(dato, callback) {
    console.log("Procesando dato:", dato);
    callback(dato);
}

procesarDatos(5, (dato) => console.log("Dato procesado:", dato * 2)); // -> Procesando dato: 5, Dato procesado: 10

//! SETTIMEOUT Y SETINTERVAL
setTimeout(() => {console.log('hola');
}, 3000);

let intervaloId=setInterval(() => {console.log('adios');
}, 2000);

setTimeout(() => {
    clearInterval(intervaloId)
}, 5000);
//! SORT
let nombres=['maria','juana','ana','marco','soledad','belen']
console.log(nombres.sort());
let numeros=[90,80,10,4,6,12]
console.log(numeros.sort((a,b)=>a-b));
console.log(numeros.sort((a,b)=>b-a));


