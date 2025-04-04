persona1={
 nombre:'juana',
 edad:37,
 obtenerNombre: function () {
    console.log(this.nombre);
    
 }
}

persona1.obtenerNombre()
persona2=
{
 nombre:'juan',
 edad:37,
 obtenerNombre: function () {
    console.log(this.nombre);
    
 }
}
persona3={
 nombre:'pedro',
 edad:40,
 obtenerNombre: function () {
    console.log(this.nombre);
    
 }
}
console.error('hola');


class Persona {
    constructor(name, age){
        this.nombre=name,
        this.edad=age
    }
}

const persona1= new Persona('juan',37)
const persona2= new Persona('rosa',37)
const persona3= new Persona('roberto',37)
const persona4= new Persona('andrea',37)
const persona5= new Persona('luis',37)
const persona6= new Persona('roberta',37)
const persona7= new Persona('juana',37)
const persona8= new Persona('pedro',37)
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
console.log(persona5);
console.log(persona6);
console.log(persona7);
console.log(persona8);
