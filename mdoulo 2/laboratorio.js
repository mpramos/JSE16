// Usando los mismos datos que en el laboratorio anterior, cree la lista de contactos como una matriz, 
// cada elemento de la cual será un objeto que describe a un solo usuario. Por lo tanto, debemos 
// obtener una matriz de tres elementos, y cada objeto colocado en ella contendrá tres piezas de 
// información (nombre, teléfono y correo electrónico).

// Al final de la lista declarada de esta manera, agregue un nuevo contacto utilizando el método de matriz
//  apropiado. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

// Muestre el primer y el último contacto, nuevamente en el formato:
//  nombre / teléfono / correo electrónico. Utilice la propiedad length de la matriz para determinar el 
// índice del último elemento. Recuerde que los elementos de la matriz se indexan a partir de 0.


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

    let newData={
        name:'Maisie Haley',
        phone: '0913531030' ,
        email: 'risus.Quisque@urna.ca'
    }
    contacts.push(newData)
    console.log(contacts);
    
console.log('Mostrar el primer contacto');
   console.log( contacts[0]);
   
console.log('Mostrar el ultimo contacto');
let ultimoIndice=contacts.length-1
console.log(contacts[ultimoIndice]);

