//! Desestructuración y propagación
//? La desestructuración es una forma de descomprimir matrices y objetos y asignarlos a una variable distinta.

//* Destrucción de arreglos
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)


const names = ['Juan', 'Pedro', 'David', 'Susana']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)

//   Desestructuración durante la iteración

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

//* const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
  
//   for(const [first, second, third] of fullStack) {
//   console.log(first, second, third)
//*   }

//! Desestructuración de objetos
// Al desestructurar, el nombre de la variable que utilizamos debe ser exactamente igual a la clave o propiedad del objeto.
//  Vea el ejemplo a continuación.

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)

//! Cambio de nombre durante la estructuración
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p)
//   Si la clave no se encuentra en el objeto, la variable se asignará a indefinida. En ocasiones, 
//   la clave podría no estar en el objeto; en ese caso, podemos asignar un valor predeterminado durante la declaración. Véase el ejemplo.
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter = 60 } = rectangle
  
  console.log(width, height, area, perimeter) //20 10 200 60
  //Let us modify the object:width to 30 and perimeter to 80

  //! Desestructuración de objetos durante la iteración

  const todoList = [
    {
      task:'Prepare JS Test',
      time:'20/3/2025 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'20/3/2025 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'20/3/2025 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }


//! Desestructuración y Propagación en el Proyecto de Inventario (Arreglo Local)

    //? Productos iniciales
const productos = [
    { id: 1, nombre: 'Camisa Hombre', categoria: 'Ropa de Hombre', precio: 20, stock: 15 },
    { id: 2, nombre: 'Vestido Mujer', categoria: 'Ropa de Mujer', precio: 30, stock: 10 },
    { id: 3, nombre: 'Anillo de Plata', categoria: 'Joyería', precio: 50, stock: 5 },
    { id: 4, nombre: 'Laptop', categoria: 'Electrónicos', precio: 500, stock: 3 },
    { id: 5, nombre: 'Cámara', categoria: 'Electrónicos', precio: 300, stock: 2 },
  ];
  
  //? 🔍 Obtener producto por ID
  const obtenerProducto = (idProducto) => {
    const producto = productos.find(({ id }) => id === idProducto);
    if (producto) {
      const { nombre, precio, stock } = producto;
      console.log(`Producto: ${nombre}, Precio: ${precio}, Stock: ${stock}`);
    } else {
      console.log('No se encontró el producto.');
    }
  };
  
  //? 🔍 Agregar un nuevo producto
  const agregarProducto = (nuevoProducto) => {
    const productoBase = { stock: 0, disponible: true };
    const productoARegistrar = { ...productoBase, ...nuevoProducto, id: productos.length + 1 };
    productos.push(productoARegistrar);
    console.log('Producto agregado exitosamente:', productoARegistrar);
  };
  
  //? 🔍 Actualizar un producto
  const actualizarProducto = (idProducto, cambios) => {
    const index = productos.findIndex(({ id }) => id === idProducto);
    if (index !== -1) {
      productos[index] = { ...productos[index], ...cambios };
      console.log('Producto actualizado exitosamente:', productos[index]);
    } else {
      console.log('No se encontró el producto.');
    }
  };
  
  //? 🔍 Listar todos los productos
  const listarProductos = () => {
    productos.forEach(({ nombre, precio, stock, categoria }) => {
      console.log(`Producto: ${nombre}, Categoría: ${categoria}, Precio: ${precio}, Stock: ${stock}`);
    });
  };
  
  // Ejemplos de uso:
  listarProductos();
  obtenerProducto(1);
  agregarProducto({ nombre: 'Gorra', categoria: 'Ropa de Hombre', precio: 15 });
  actualizarProducto(3, { stock: 8 });
  listarProductos();
  