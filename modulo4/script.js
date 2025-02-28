// Podemos mejorar un poco nuestro programa de lista de contactos mediante el uso de bucles. 
// Ahora puede intentar mostrar no solo el primer o el último contacto,
//  sino todos los contactos de la lista, independientemente de su número.

// Además, intente encerrar todo el programa en un bucle para que se le pregunte repetidamente 
// al usuario qué quiere hacer. El usuario puede elegir entre las siguientes opciones:

// Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir
//  nuevamente. El programa debe finalizar las acciones solo después de que el usuario dé un comando
//   especificado, por ejemplo, salir.
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

//todo Mostrar las opciones
// Mostrar el primer contacto (primero)
// Mostrar el último contacto (último)
// Mostrar todos los contactos (todos)
// Agregar un nuevo contacto (nuevo)
// Salir del programa (salir)

let ingreso=true
while (ingreso) {
    opcion= prompt(`Opción 1 : Mostrar el primer contacto
        Opción 2 : Mostrar el último contacto
        Opción 3 : Mostrar todos los contactos
        Opción 4 : Agregar un nuevo contacto
        Opción 5 : Salir del programa
        `)
    switch (opcion) {
        case '1':
            alert(`PRIMER CONTACTO ${contacts[0].name}`)
            break;
            case '2':
                let ultimaPosicion=contacts.length-1
                alert(`ULTIMO CONTACTO ${contacts[ultimaPosicion].name}`)
            break;
        case '3':
            alert('TODOS LOS CONTACTOS')
            for (const contact of contacts) {
                alert(`${contact.name}`)
            } 
            break;
        case '4':
            alert('INGRESA UN NUEVO CONTACTO')
            let nombreContacto= prompt('Ingrese el nombre del nuevo contacto')
            alert(nombreContacto);
            let telefonoContacto= prompt('Ingrese el telefono del nuevo contacto')
            alert(telefonoContacto);
            let emailContacto= prompt('Ingrese el email del nuevo contacto')
            alert(emailContacto); 
            let nuevoContacto={
                name: nombreContacto ,
                  phone: telefonoContacto ,
                  email: emailContacto
              }
              contacts.push(nuevoContacto)
              break;
        case '5':
            alert('fin del programa')
            ingreso=false  
        default:
            break;
    }   
}


//todo Cada opción debe ejecutar dicha tarea o asignación


