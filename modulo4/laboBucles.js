// Mostrar el primer contacto (primero)
// Mostrar el último contacto (último)
// Mostrar todos los contactos (todos)
// Agregar un nuevo contacto (nuevo)
// Salir del programa (salir)

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

]

let desicion=true
while (desicion) {
    let respuesta=prompt(`  
        🐱‍👤 Selecciona una Opcion
        
        Opcion 1: Para mostrar el primer contacto
        Opcion 2: Para mostrar el ultimo contacto
        Opcion 3: Para agregar un nuevo contacto
        Opcion 4: Para salir
        `, 1)
        
switch (respuesta) {
    case '1':
        console.log('seleccionaste la primera opcion');
        alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email} `);
        break;
        case '2':
        console.log('seleccionaste la segunda opcion');
        alert(`${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email} `);
        break;
        case '3':
            console.log('seleccionaste la tercera opcion');
            let nameP= prompt('ingrese el nombre del nuevo contacto')
            let phoneP= prompt('ingrese el telefono del nuevo contacto')
            let emailP= prompt('ingrese el email del nuevo contacto')
            
            contacts.push({ 
                name: nameP,
                phone: phoneP,
                email: emailP
            })
            for (const contacto of contacts) {
            alert(`${contacto.name} / ${contacto.phone} / ${contacto.email} `);
        }
        break;
        case '4':
            alert(`🐱‍👤 Gracias por tu tiempo`)
            desicion=false
    default:
        break;
}
    
}
