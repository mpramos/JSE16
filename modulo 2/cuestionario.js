//? PREGUNTAS
//! 1. Necesitamos almacenar el nombre de un usuario en una variable. ¿Cuál de las siguientes
//! opciones es más clara y adecuada?
//* Opciones 🏝:
//* a) user
//* b) userName ✔
//* c) name
//* d) un

//! 2. ¿Cuál es la forma correcta de declarar una variable en JavaScript?
//* Opciones 🏝:
//* a) let user; ✔
//* b) variable user;
//* c) let user;
//* d) user variable;

//! 3. Analice el siguiente código:
let value = 100;
value = 200;
//  ¿Qué ocurrirá?
//* Opciones 🏝:
//* a) Error por re-declaración. ✔
//* b) La variable tendrá el valor 300.
//* c) La variable tendrá el valor 200.
//* d) La variable tendrá el valor 100.

//! 4. En el siguiente código, ¿cuál será el resultado?
let count = 10;
count = count + 5;
console.log(Count);
//* Opciones 🏝:
//* a) 15.
//* b) Error: 'Count' no está definido ✔
//* c) undefined.
//* d) 10.

//! 5. ¿Cómo declaramos una constante correctamente en JavaScript?
//* Opciones 🏝:
//* a) const pi = 3.14; ✔
//* b) constant pi = 3.14;
//* c) const pi;
//* d) let const pi = 3.14;

//! 6. ¿Cuál es el tipo de dato predeterminado de una variable declarada pero no inicializada?
// let nombre
// console.log(nombre);

//* Opciones 🏝:
//* a) null.
//* b) undefined. ✔
//* c) empty.
//* d) NaN.

//! 7. ¿Qué resultado obtendremos al ejecutar el siguiente código?
let x = '5';
let y = Number(x);
console.log(typeof y);
//* Opciones 🏝:
//* a) string.
//* b) number ✔
//* c) boolean.
//* d) object.

//! 8. ¿Qué tipo de datos es 'null' en JavaScript?
console.log(typeof null) //null

//* Opciones 🏝:
//* a) undefined.
//* b) object. ✔
//* c) null.
//* d) string.

//! 9. Si realizamos la operación:
let z = 0/0;
console.log(z);
console.log(typeof z);

console.log( z);
console.log(  Number('abc')); 
console.log(Number('5'));
//! ¿Cuál será el valor de 'z'?
//* Opciones 🏝:
//* a) 0.
//* b) Infinity.
//* c) undefined.
//* d) NaN. ✔

//! 10. ¿Cuál es el operador que utilizamos para determinar el tipo de una variable en JavaScript?
//* Opciones 🏝:
//* a) typeof().
//* b) instanceOf().
//* c) typeof ✔
//* d) checkType().

//! 11. ¿Qué resultado obtendremos al ejecutar el siguiente código?
//! let arr = [10, 20, 30];
//! arr.push(40);
//! console.log(arr);
//* Opciones 🏝:
//* a) [10, 20, 30, 40] ✔
//* b) [40, 10, 20, 30].
//* c) [10, 20, 30].
//* d) Error.

//! 12. ¿Qué método utilizamos para eliminar el primer elemento de un arreglo?
// let arr = [10, 20, 30];
 arr.shift()
 console.log(arr);
 
//* Opciones 🏝:
//* a) pop().
//* b) shift(). ✔
//* c) unshift().
//* d) splice().

//! 13. ¿Qué tipo de datos tiene una variable que almacena el valor 'true'?
//* Opciones 🏝:
//* a) boolean. ✔
//* b) logical.
//* c) object.
//* d) string.

//! 14. Analice el siguiente código:
let greeting = 'Hello';
greeting = greeting + ' World';
console.log(greeting);
//! ¿Qué resultado se mostrará?
//* Opciones 🏝:
//* a) Hello.
//* b) Hello World. ✔
//* c) undefined.
//* d) Error.

//! 15. ¿Cuál de los siguientes valores es considerado 'falsy' en JavaScript?
// Verdaderos 'hola' true 123 -123 7.8
// Falsos '' false 0
//* Opciones 🏝:
//* a) 0. ✔
//* b) 'false'.
//* c) '0'.
//* d) [] (un arreglo vacío).

//! 16. Analice el siguiente código:
function test() {
   let x = 10;
   console.log(x);
}
test();
console.log(x);
//* Opciones 🏝:
//* a) 10 y luego error. ✔
//* b) 10 y luego undefined.
//* c) 10 y luego 10.
//* d) Error.

//! 17. ¿Qué ocurre si declaramos una variable dentro de una función usando 'var'?
var nombre3=9
{
   var nombre2='juana'
   {
       var edad=56
       {
               console.log(nombre3);
               
       }
   }
   console.log(edad);
   
}
function mostrarText() {
   var nombre='Cesar'
   console.log(nombre);
}
mostrarText()
console.log(nombre);

//* Opciones 🏝:
//* a) La variable será global.
//* b) La variable tendrá alcance de función. ✔
//* c) La variable será local solo en el bloque actual.
//* d) Error.

//! 18. ¿Qué significa 'shadowing' en JavaScript?
let edad=56
{
   let edad=45
   console.log(edad);
}
//* Opciones 🏝:
//* a) Declarar una variable con el mismo nombre en un ámbito diferente.✔
//* b) Cambiar el valor de una variable global.
//* c) Sobreescribir una función.
//* d) Error.

//! 19. ¿Cómo accedemos al valor de la propiedad 'age' en el siguiente objeto?
let person = { name: 'Ana', age: 30 };
//* Opciones 🏝:
//* a) person.age ✔
//* b) person[age].
//* c) age.person.
//* d) get(person.age).

//! 20. ¿Qué método utilizamos para unir dos arreglos en uno nuevo?
//* Opciones 🏝:
//* a) join().
//* b) concat() ✔
//* c) merge().
//* d) append().
const numeros=[1,2,3,4,4]
const letras=['a','b','c']
console.log( numeros.concat(letras));


//! 21. Dado el código:
let numbers = [1, 2, 3];
numbers.pop();
console.log(numbers);
//* Opciones 🏝:
//* a) [1, 2, 3].
//* b) [1, 2] ✔
//* c) [2, 3].
//* d) [3].

//! 22. ¿Qué método utilizamos para verificar si un elemento existe en un arreglo?
//* Opciones 🏝:
//* a) includes() ✔
//* b) exists().
//* c) find().
//* d) has().

let _numeros=[1,2,3,4]
console.log(_numeros.includes(1));


//! 23. ¿Qué valor tendrá 'x' después de ejecutar el siguiente código?
let x = '10' + 5;
console.log(x);

//* Opciones 🏝:
//* a) 15.
//* b) '105' ✔
//* c) undefined.
//* d) NaN.
console.log(typeof x);


//! 24. ¿Qué método invierte el orden de los elementos en un arreglo?
//* Opciones 🏝:
//* a) reverse() ✔
//* b) flip().
//* c) invert().
//* d) reorder().
let frutas=['🍊','🥭','🍌','🍎','🍇','🍈','🍏','🍉']
console.log(frutas.reverse());


//! 25. ¿Cuál es la mejor práctica para escribir comentarios en el código?
//* Opciones 🏝:
//* a) Explicar todo el código en comentarios.
//* b) Usar comentarios para aclarar fragmentos complejos o inusuales ✔
//* c) No usar comentarios.
//* d) Escribir comentarios en un idioma diferente al código.

//! 26. ¿Qué tipo de comentario se utiliza para una línea en JavaScript?
//* Opciones 🏝:
//* a) // Comentario de línea. ✔
//* b) /* Comentario de línea. */
//* c) <!-- Comentario de línea. -->
//* d) ### Comentario de línea.

//! 27. ¿Qué método utilizamos para conocer la longitud de un arreglo?
//* Opciones 🏝:
//* a) array.count.
//* b) array.length ✔
//* c) array.size.
//* d) array.len.
let foods=['🍗','🥘','🍲','🥙']
console.log(foods.length);


//! 28. ¿Qué valor devolverá el siguiente código?
let x = 10 / 0;
console.log(x);

//* Opciones 🏝:
//* a) NaN.
//* b) Infinity. ✔
//* c) 0.
//* d) Error.
console.log(x);
console.log(typeof x);


//! 29. ¿Qué función convierte una cadena en un número?
//* Opciones 🏝:
//* a) parseInt().
//* b) parseFloat().
//* c) Number(). ✔
//* d) Todas las anteriores.

// parseInt
let numero1=parseInt('42')
let numero2=parseInt('42.7')
console.log(numero1);
console.log(typeof numero1);
console.log(numero2);
console.log(typeof numero2);

// parseFloat
let numero3=parseFloat('42.5')
let numero4=parseFloat('42')
console.log(numero3);
console.log(typeof numero3);
console.log(numero4);
console.log(typeof numero4);

//Number
console.log(Number('42.5'));
console.log(Number('42'));

//! 30. Dado un arreglo:
let arr = ['a', 'b', 'c'];
//¿Cómo podríamos eliminar el segundo elemento?
//* Opciones 🏝:
//* a) arr.splice(1, 1) ✔
//* b) arr.pop(1).
//* c) arr.remove(1).
//* d) arr.delete(1).
console.log(arr.splice(1,1));
console.log(arr);