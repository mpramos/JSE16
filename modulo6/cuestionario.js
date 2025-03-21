//! Módulo 6: Cuestionario 

//! 1. ¿Cuál de los siguientes es un error de sintaxis?
// while (condition {
    
// }
//* Opciones ✍:
//* a) Intentar modificar el valor de una constante.
//* b) Falta un paréntesis al cerrar una instrucción `while` ✔
//* c) Intentar declarar dos variables con el mismo nombre usando `let`.
//* d) Leer una propiedad de un objeto no declarado.

//! 2. ¿Por qué el intérprete no indica errores lógicos durante la ejecución del programa?
function sumar(a,b) {
    console.log(a*b);
}
sumar(3,4)

//* Opciones ✍:
//* a) Los errores lógicos no están relacionados con la sintaxis o semántica ✔
//* b) El intérprete no ejecuta el programa si hay errores lógicos.
//* c) Se pueden configurar para que sean detectados.
//* d) Porque no afectan la ejecución del programa.

//! 3. Analiza el siguiente código:
  "let y = 20;"
 console.log(y);
//! ¿Qué excepción se lanzará?
//* Opciones ✍:
//* a) SyntaxError
//* b) ReferenceError ✔
//* c) TypeError
//* d) RangeError

//! 4. Analiza el siguiente código:
let z 30;
 console.log(z);
//! ¿Qué excepción se lanzará?
//* Opciones ✍:
//* a) SyntaxError ✔
//* b) ReferenceError
//* c) RangeError
//* d) TypeError

//! 5. Analiza el siguiente código:
 let num = 50;
 consoole.log(num);
//! ¿Qué excepción se lanzará?
//* Opciones ✍:
//* a) ReferenceError ✔
//* b) TypeError
//* c) SyntaxError
//* d) RangeError

//! 6. Analiza el siguiente código:
 const valor = 15;
 onsole.log(valor);
 valor += 10;
//! ¿Qué excepción se lanzará?
//* Opciones ✍:
//* a) TypeError
//* b) SyntaxError
//* c) ReferenceError ✔
//* d) Ninguna excepción se lanzará.

//! 7. Analiza el siguiente código:
 const temp = 100;
 temp = 200;
//! ¿Qué excepción se lanzará?
//* Opciones ✍:
//* a) TypeError ✔
//* b) SyntaxError
//* c) ReferenceError
//* d) RangeError

//! 8. Analiza el siguiente código:
try {
    console.loog("Inicio");
} catch (error) {
    console.log("Error capturado");
} finally {
    console.log("Fin del programa");
}
//! ¿Qué ocurrirá como resultado?
//* Opciones ✍:
//* a) "Error capturado", "Fin del programa". ✔
//* b) "Inicio", "Fin del programa".
//* c) La ejecución se interrumpirá por el error.
//* d) "Inicio", "Error capturado".

//! 9. Analiza el siguiente código:
try {
    console.log("Hola mundo");
} catch (error) {
    console.log("Error detectado");
} finally {
    console.log("Adiós mundo");
}
//! ¿Qué ocurrirá como resultado?
//* Opciones ✍:
//* a) "Hola mundo", "Adiós mundo". ✔
//* b) "Error detectado", "Adiós mundo".
//* c) "Hola mundo", "Error detectado", "Adiós mundo".
//* d) "Error detectado" únicamente.

//! 10. ¿Qué es un punto de interrupción (breakpoint)?
//* Opciones ✍:
//* a) Un lugar donde el programa se pausa durante la depuración. ✔
//* b) Un comando para reiniciar el programa.
//* c) Un marcador donde el programa termina.
//* d) Una herramienta para medir el tiempo de ejecución.

//! 11. ¿Qué sucede cuando presionas el botón "Step" en un depurador?
//* Opciones ✍:
//* a) Ejecuta la siguiente instrucción y pausa nuevamente. ✔
//* b) Reinicia la ejecución del programa.
//* c) Ejecuta el programa hasta el próximo punto de interrupción.
//* d) Ejecuta todo el programa hasta el final.

//! 12. ¿Dónde puedes encontrar información sobre las funciones activas en el depurador?
//* Opciones ✍:
//* a) En la consola.
//* b) En el panel de "call stack" ✔
//* c) En el panel de observación (watch).
//* d) En el log de errores.

//! 13. ¿Cómo medirías el tiempo de ejecución de un fragmento de código?
//* Opciones ✍:
//* a) `console.time("inicio")` y `console.timeEnd("inicio")` ✔
//* b) `time.start()` y `time.end()`.
//* c) `console.measureStart()` y `console.measureEnd()`.
//* d) `timer.start()` y `timer.end()`.

//! 14. ¿Qué significa el método `finally` en un bloque `try...catch`?
//* Opciones ✍:
//* a) Se ejecuta solo si ocurre un error.
//* b) Siempre se ejecuta, independientemente de los errores. ✔
//* c) Se ejecuta antes del bloque `catch`.
//* d) Finaliza la ejecución del programa.
