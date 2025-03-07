//? Módulo 6: Errores, excepciones, depuración y solución de problemas

//! 6.0 Sección 1 – Errores y excepciones – Parte 1

//! 6.0.1 Errores y excepciones
/*
Los errores son problemas en el código que impiden su ejecución.
Las excepciones son errores que pueden ser controlados con bloques específicos.
*/

//! Ejemplo de un error
console.log('juana');
console.log(10 / ); // SyntaxError: Unexpected token ')'


//! Ejemplo de una excepción
try {
  console.log(variableNoDefinida);
} catch (error) {
  console.log("Error atrapado:", error.message); // Output: Error atrapado: variableNoDefinida is not defined
}
console.log('hola');
  
  //! 6.0.3 Errores en JavaScript
  /*
  En JavaScript existen varios tipos de errores:
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
  */
  
  //! Ejemplo de ReferenceError
  // console.log(noDeclarada); // ReferenceError: noDeclarada is not defined
  console.log(nombre);
  
  //! Ejemplo de TypeError
  let algo='sjdjdjdjdjJ'
  let algunNumero=45
  // console.log(algo.toUpperCase());
  // console.log(algo.toLowerCase());
  console.log(algunNumero.toLowerCase());
  
  num.toUpperCase()
  //! Ejemplo de Error de rango
  let frutas=['manzana', 'platano','cereza']
console.log(frutas[5]);
console.log(frutas.slice(10,20));

let comidas= Array(5)
console.log(comidas);
  
  //! 6.1 Sección 2 – Errores y Excepciones – Parte 2
  
  //! 6.1.2 Bloque try...catch
  /*
  El bloque try...catch permite manejar errores en tiempo de ejecución.
  */
  
  try {
    JSON.parse("malformado: true"); // Error de sintaxis
  } catch (error) {
    console.log("Error al parsear JSON:", error.message);
  }
  
  //! 6.1.4 Bloque finally
  /*
  El bloque finally se ejecuta después de try y catch, sin importar si hubo error.
  */
  
  try {
    console.log("Intentando...");
  } finally {
    console.log("Bloque finally ejecutado."); // Siempre se ejecuta
  }

  let a = 10;
  try {
      a = b; // First ReferenceError
  } catch (error) {
      try {
       console.log(b); // Second ReferenceError
      } catch {
       console.log("Second catch!"); // -> Second catch!
      }
  } finally{
    console.log('suceda de todos modos');
  }
  



  //! 6.1.6 Lanzar excepciones personalizadas con throw
  /*
  Podemos crear nuestras propias excepciones utilizando la palabra clave `throw`.
  */
 throw new Error("hola");
 console.log('hola Mundo');
  
  try {
    const edad = -1;
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa.");
    }
  } catch (error) {
    console.log("Error personalizado:", error.message);
  }
  
  //! 6.2 Sección 3 – Depuración de código y solución de problemas
  
  //! 6.2.2 Depuración básica
  /*
  La depuración es el proceso de identificar y corregir errores en el código.
  */
  
  console.log("Inicio del programa"); // Añadimos mensajes para verificar el flujo
  
  //! 6.2.5 Uso de `debugger`
  /*
  La declaración `debugger` pausa la ejecución del programa y abre las herramientas de depuración.
  */
  
  let x = 10;
  debugger; // Pausa aquí si estás en un entorno con depurador
  x += 5;
  
  //! 6.2.9 Uso de `Step over`, `Step into`, y `Step out`
  /*
  Estas funciones permiten controlar la ejecución paso a paso:
  - Step over: Ejecuta la siguiente línea.
  - Step into: Entra en la función.
  - Step out: Sale de la función.
  */
  
  //! 6.2.10 Pila de llamadas (Call stack)
  /*
  La pila de llamadas muestra el historial de funciones invocadas.
  */
  
  function funcionA() {
    funcionB();
  }
  function funcionB() {
    console.trace(); // Muestra el stack de llamadas
  }
  funcionA();
  
  //! 6.2.14 Medición del tiempo de ejecución
  /*
  Podemos medir el tiempo de ejecución de fragmentos de código.
  */
  
  console.time("Tiempo de ejecución");
  for (let i = 0; i < 1000000; i++) {console.log(i);
  } // Operación pesada
  console.timeEnd("Tiempo de ejecución"); // Muestra el tiempo en ms
  console.time("Tiempo de ejecución while");
  let i=0
  while (i< 1000000) {
    console.log(i);
    i++
    
  }
  console.timeEnd("Tiempo de ejecución while"); // Muestra el tiempo en ms
  