
let name1='Maxwell'  
let phone1='(0191) 719 6495'
let email1='Curabitur.egestas.nunc@nonummyac.co.uk'

let name2='Raja Villarreal'  
let phone2='0866 398 2895'
let email2='posuere.vulputate@sed.com'

let name3='Helen Richards'  
let phone3='0800 1111'
let email3='libero@convallis.edu'


console.log(`${name1}/ ${phone1} / ${email1} `);
console.log(`${name3}/ ${phone3} / ${email3} `); /*✔*/

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
// console.log(contacts); /*✔*/
console.log(contacts.length -1);


console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email} `);

// Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
let nuevoContacto={
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}
contacts.push(nuevoContacto)
console.log(`${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email} `);

