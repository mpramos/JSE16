//! Desestructuración y propagación
//? La desestructuración es una forma de descomprimir arreglos y objetos y asignarlos a una variable distinta.

// let numUno=  numbers[0]
// let numDos=  numbers[1]
//  let numTres=  numbers[2]
//  console.log(numUno);
//  console.log(numDos);
//  console.log(numTres);
//* Destrucción de arreglos
const numbers = [1, 2, 3]

const [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)


let names = ['Juan', 'Pedro', 'David', 'Susana']
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
let [firstPerson, ,thirdPerson, fourthPerson] = names
console.log(firstPerson,thirdPerson, fourthPerson)
// console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

//  let back=fullStack[1][2] ✔
  let [frontEnd, backEnd] = fullStack
  let [html,css,js,react]=frontEnd
  let [node,express,mongodb]=backEnd
  console.log(frontEnd)
  console.log(backEnd)
  console.log(html,css,js,react);
  console.log(node,express,mongodb);

//   Desestructuración durante la iteración


for (const numero of [1,2,3,4]) {
    console.log(numero);
}


const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo'],['Colombia', 'Bogota']]
for (const [country, city] of countries) {
console.log(`${country} -> ${city}`)
}

const fullStackT = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  // for(const [first, second, third, fourth] of fullStackT) {
  // console.log(first, second, third,fourth)
  // }

//! Desestructuración de objetos
// Al desestructurar, el nombre de la variable que utilizamos debe ser exactamente igual a la clave
//  o propiedad del objeto.
//  Vea el ejemplo a continuación.

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let {  height, area, width , perimeter } = rectangle
  
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
    
    for (const {task:tarea, time:fecha, completed:completado} of todoList){
      console.log(tarea, fecha, completado)
    }


//! Desestructuración y Propagación en el Proyecto de Inventario (Arreglo Local)



//! Operador de Propagación (...)

//? Arreglos


const nums=[1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3,...rest]=nums
console.log(num1,num2,num3,rest);

const pares=[0,2,4,6,8,10]
const impares=[1,3,5,7,9]
//  ->0x234234 ['cursoA' ]
//  let curso='cursoA'
//  ->0x234234 ['cursoB' ]
  //  let cursoCopia=curso
  //  let cursoCopia='cursoB'
  const paresCopia= [...pares]
  paresCopia.push(12)
  console.log(paresCopia);
  const imparesCopia= [...impares]
  imparesCopia.push(11)
  console.log(imparesCopia);
  // console.log(imparesCopia);
  // console.log(pares);
  // console.log(impares);
  
  const todos= [...pares, ...impares]
  console.log(todos);
  //? Objetos
  const usuario={
    nombre:'Roberto',
    pais:'Colombia',
    ciudad:'Bogota'
  }
  
  let usuarioCopia= {...usuario}
  usuarioCopia.telefono='123123'
  console.log(usuarioCopia);
  console.log(usuario);
  
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
    const producto = productos.find(({id}) => id === idProducto);
    if (producto) {
      const { nombre, precio, stock } = producto;
      console.log(`Producto: ${nombre}, Precio: ${precio}, Stock: ${stock}`);
    } else {
      console.log('No se encontró el producto.');
    }
  };
  obtenerProducto(1);
  
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
  agregarProducto({ nombre: 'Gorra', categoria: 'Ropa de Hombre', precio: 15 });
  actualizarProducto(3, { stock: 8 });
  listarProductos();
  