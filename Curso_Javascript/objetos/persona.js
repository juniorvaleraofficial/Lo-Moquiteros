// Funcion constructor de tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Martin', 'Peralta', 'mPeralta@mail.com');
let madre = new Persona('Raquel', 'Rivera', 'rRivera@mail.com');

console.log(padre);
console.log(madre);
