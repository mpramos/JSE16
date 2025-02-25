//! Preguntas

//! 1. Calcula el valor de la siguiente operación:
// let resultado = 3 * (2 + 5) - 4;
console.log(resultado);

//* Opciones ✍:
//* a) 17
//* b) 19
//* c) 20
//* d) 21

//! 2. ¿Qué operador utilizamos para elevar un número a una potencia en JavaScript?
//* Opciones ✍:
console.log(2**3);

//* a) ^
//* b) **
//* c) **=
//* d) ***

//! 3. Analiza el siguiente código:
let texto = "123";
texto = +texto;

//! ¿Qué contendrá la variable texto después de la ejecución?
//* Opciones ✍:
//* a) "123"
//* b) 123
//* c) NaN
//* d) "+123"
console.log(texto);
console.log(typeof texto);

//! 4. Dado el siguiente código:
let a = 5;
let b = ++a;
b = 6
//! ¿Qué valores tendrán las variables a y b?
//* Opciones ✍:
//* a) a: 6, b: 5
//* b) a: 5, b: 6
//* c) a: 6, b: 6
//* d) a: 5, b: 5


//! 5. Evalúa la expresión:
console.log(!(false || true && false));
//* Opciones ✍:
//* a) true 
//* b) false
//* c) null
//* d) undefined

//! 6. Analiza la operación:
// let resultado = "" || 42;

//! ¿Qué valor tendrá la variable resultado?
//* Opciones ✍:
//* a) ""
//* b) 42
//* c) null
//* d) false
console.log(resultado);

//! 7. ¿Qué resultado obtendremos al comparar las cadenas "Hola" y "hola" usando el operador >?
//* Opciones ✍:
//* a) true
//* b) false
//* c) "Hola"
//* d) undefined
console.log("Hola">"hola")
//! 8. Analiza el siguiente fragmento:
let num = "5";
let x = (num === 5);
let y = (num == 5);

//! ¿Qué valores tendrán x e y después de la ejecución?
//* Opciones ✍:
//* a) x: false, y: true
//* b) x: true, y: false
//* c) x: true, y: true
//* d) x: false, y: false
console.log(x);
console.log(y);

//! 9. ¿Qué operador permite verificar si dos valores son exactamente iguales y del mismo tipo?
//* Opciones ✍:
//* a) ==
//* b) ===
//* c) =
//* d) !==

//! 10. ¿Qué método del objeto window se utiliza para mostrar un cuadro de diálogo de confirmación?
//* Opciones ✍:
//* a) alert()
//* b) prompt()
//* c) confirm()
//* d) dialog()

//! 11. Dado el siguiente código:
let resultado = 10 / 0;

//! ¿Qué contendrá la variable resultado después de su ejecución?
//* Opciones ✍:
//* a) Infinity
//* b) NaN
//* c) 0
//* d) undefined
console.log(resultado);

//! 12. ¿Qué método convierte un número flotante en una cadena con un número fijo de decimales?
//* Opciones ✍:
//* a) toString()
//* b) toFixed()
//* c) toPrecision()
//* d) toDecimal()

let numero=3.1415926
// let cadena=numero.toFixed(3)
let cadena=numero.toString()
console.log(cadena);
console.log(typeof cadena);


//! 13. ¿Qué valor retorna el método window.prompt si el usuario ingresa "Hola" y presiona OK?
//* Opciones ✍:
//* a) null
//* b) undefined
//* c) "Hola"
//* d) true

//! 14. Analiza el siguiente código:
let test = prompt("Ingresa algo", "Defecto");
//! ¿Qué valor tendrá test si el usuario cierra el cuadro de diálogo sin ingresar nada?
//* Opciones ✍:
//* a) null
//* b) "Defecto"
//* c) ""
//* d) undefined