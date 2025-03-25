/*
====================================================
✅ SISTEMA DE INVENTARIO USANDO MÉTODOS FUNCIONALES
====================================================
Este script muestra cómo aplicar métodos funcionales
como forEach(), map(), filter(), reduce(), find(),
some(), sort() y every() en un sistema de inventarios.

@Autor: Evolutech especialidad de JavaScript ✨
@Fecha: 24/03/2025
*/

// *📦 Array de productos en el inventario
const inventario = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica', precio: 1200, stock: 4, fechaIngreso: '2025-03-15' },
    { id: 2, nombre: 'Smartphone', categoria: 'Electrónica', precio: 800, stock: 20, fechaIngreso: '2025-03-14' },
    { id: 3, nombre: 'Mouse', categoria: 'Accesorios', precio: 20, stock: 50, fechaIngreso: '2025-03-10' },
    { id: 4, nombre: 'Teclado', categoria: 'Accesorios', precio: 45, stock: 30, fechaIngreso: '2025-03-11' },
    { id: 5, nombre: 'Monitor', categoria: 'Electrónica', precio: 300, stock: 15, fechaIngreso: '2025-03-13' },
    { id: 6, nombre: 'Audífonos', categoria: 'Accesorios', precio: 100, stock: 25, fechaIngreso: '2025-03-12' },
  ];

   //! 📌 forEach
// ? Itera un elemento de arreglo. Usamos forEach solo con arreglos. Toma una función de devolución
// ? de llamada con elementos, parámetro de índice y arreglo en sí. El índice y el arreglo son opcionales.
  // *🟢 Mostrar todos los nombres de productos
  console.log('📌 Productos en Inventario:');
  // inventario.forEach(producto => console.log(producto.nombre));

  //! 📌 map
// ?  Itera los elementos de un arreglo y los modifica. Toma una función de devolución de llamada con elementos, 
// ?  índice, parámetro de arreglo y devuelve un nuevo arreglo.
  // *🔵 Crear un array con nombres en mayúsculas
  const nombresMayus = inventario.map(producto => producto.precio * 0.3);
  // console.log('\n📝 Nombres en mayúsculas:', nombresMayus);
  // console.log(inventario);
  

  //! 📌 filter
  // ? filtra los elementos que cumplen las condiciones de filtrado y devuelve un arreglo.
  // *🟣 Filtrar productos de categoría "Electrónica"
  const productosElectronicos = inventario.filter(producto => producto.categoria === 'Electrónica');
  // console.log('\n🔍 Productos Electrónicos:', productosElectronicos);
  
  //! 📌 reduce
  //?Reduce toma una función de devolución de llamada. La función de devolución de llamada toma el acumulador,
  //?la corriente y el valor inicial opcional como parámetro y devuelve un solo valor. Es una buena práctica
  //?definir un valor inicial para el valor del acumulador. Si no especificamos este parámetro, por defecto el acumulador obtendrá la matriz.
  //?Si nuestra matriz es una matriz vacía, entonces arrojará un error
  // *🟡 Calcular precio total del inventario
  const totalPrecio = inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
  // console.log('\n💲 Precio Total del Inventario:', totalPrecio);
  
  //! 📌 find
  //?  Devuelve el primer elemento que cumple la condición
  // *🟠 Buscar un producto específico
  const productoTeclado = inventario.find(producto => producto.nombre === 'Teclado');
  // console.log('\n🔎 Producto encontrado:', productoTeclado);
  
  //! 📌 some
  //?  Comprueba si algunos de los elementos son similares en un aspecto. Devuelve un valor booleano
  // *🔴 Comprobar si algún producto tiene stock bajo (menor a 5)
  const hayStockBajo = inventario.some(producto => producto.stock < 5);
  // console.log('\n❓ ¿Hay productos con stock bajo?:', hayStockBajo);
  
  //! 📌 sort
  //?  Comprueba si algunos de los elementos son similares en un aspecto. Devuelve un valor booleano
  // *🟤 Ordenar productos por precio (menor a mayor)
  const productosOrdenados = [...inventario].sort((a, b) => a.precio - b.precio);
  // console.log('\n📂 Productos ordenados por precio:', productosOrdenados);
  
  //! 📌 every
  //?  Comprueba si todos los elementos son similares en un aspecto. Devuelve un valor booleano
  // *🟢 Verificar si todos los productos son electrónicos
  const todosElectronicos = inventario.every(producto => producto.categoria === 'Electrónica');
  console.log('\n✅ ¿Todos son electrónicos?:', todosElectronicos);
  