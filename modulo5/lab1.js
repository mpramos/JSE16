// showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y el segundo es 
// el número de índice del contacto que se va a mostrar; dentro de la función, verifique si se pasan los 
// argumentos correctos, es decir, si los contactos son una matriz (use la construcción instanceofArray para esto);

// showAllContacts: la función debe tomar un argumento, la lista de contactos; dentro de la función, verifique si
//  el argumento dado es una matriz;

// addNewContact: la función debe tomar cuatro argumentos, una lista de contactos y los datos del nuevo contacto,
//  es decir: nombre, teléfono y email; Antes de agregar un nuevo contacto, verifique si el argumento pasado es
//   una matriz y si los nuevos datos de contacto tienen algún valor.

let contacts=[
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    },
    {
        name: "Aelen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    },
    
]
let showContact=(lista,indice)=> {
    if (lista instanceof Array &&  typeof indice ==='number') {
        alert(`${lista[indice].name} / ${lista[indice].phone} / ${lista[indice].email} `)
    } else {
        alert(`Datos incorrectos , debe pasar una lista y un numero`)
        
    }
};
let showAllContacts=(lista)=>{
    if (lista instanceof Array) {
        for (const elemento of lista) {
            alert(`${elemento.name} / ${elemento.phone} / ${elemento.email} `)
        }
    } else{
        alert(`Debe ingresar una lista`)
        
    }
}
let addNewContact=(lista,nombre, telefono, email )=>{
if (lista instanceof Array && nombre && telefono && email) {
    lista.push({ 
        name: nombre,
        phone: telefono,
        email: email
    })
}
}

let desicion=true
while (desicion) {
    let respuesta=prompt(`  
        🐱‍👤 Selecciona una Opcion
        
        Opcion 1: Para mostrar el primer contacto 0
        Opcion 2: Para mostrar el ultimo contacto length-1
        Opcion 3: Para agregar un nuevo contacto
        Opcion 4: Para ordenar los contactos 
        Opcion 5: Para salir
        `, 1)
        
switch (respuesta) {
    case '1':
        console.log('seleccionaste la primera opcion');
        showContact(contacts,0)
        break;
        case '2':
            console.log('seleccionaste la segunda opcion');
            showContact(contacts,contacts.length-1)
            break;
            case '3':
                console.log('seleccionaste la tercera opcion');
                let nameP= prompt('ingrese el nombre del nuevo contacto')
                let phoneP= prompt('ingrese el telefono del nuevo contacto')
                let emailP= prompt('ingrese el email del nuevo contacto')
                 addNewContact(contacts, nameP, phoneP, emailP)
                 showAllContacts(contacts)
                break;
            case '4':
                    let opcion= prompt(`
                        🐱‍👤 Desea filtrar los contactos por:
                        Opcion 1: nombre 👨
                        Opcion 2: Telefono 📞
                        Opcion 3: Email 📨
                        `, 1)
                    let opcionConvertido= Number(opcion)    
                    console.log(' tipo de opcion',typeof opcionConvertido);
                   if (opcionConvertido===1) {
                   let contactsNameSort=contacts.sort((a,b)=>{
                       let retVal = 0;
                       if (a.name > b.name) {
                           retVal = 1;
                        } else {
                            retVal = -1;
                        }
                        return retVal;
                   });
                   alert(`Contactos ordenados por nombre ${showAllContacts(contactsNameSort)}`)
                } else if(opcionConvertido===2){
                       let contactsNameSort=contacts.sort((a,b)=>{
                           let retVal = 0;
                           if (a.phone > b.phone) {
                               retVal = 1;
                            } else {
                                retVal = -1;
                            }
                            return retVal;
                       });
                       alert(`Contactos ordenados por telefono ${showAllContacts(contactsNameSort)}`)
                    
                } else if(opcionConvertido===3){
                       let contactsNameSort=contacts.sort((a,b)=>{
                           let retVal = 0;
                           if (a.email > b.email) {
                               retVal = 1;
                            } else {
                                retVal = -1;
                            }
                            return retVal;
                       });
                       alert(`Contactos ordenados por email ${showAllContacts(contactsNameSort)}`)
                     
                   } else{

                   }
        
                                   break;
                case '5':
                    alert(`🐱‍👤 Gracias por tu tiempo`)
                    desicion=!desicion
                    default:
        break;
    }
    
}
