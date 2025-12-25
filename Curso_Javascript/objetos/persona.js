// Funcion constructor de tipo persona
// Agregar metodo a un constructor de Objetos

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre +' '+ this.apellido;
    }
}

let padre = new Persona('Martin', 'Peralta', 'mPeralta@mail.com');
let madre = new Persona('Raquel', 'Rivera', 'rRivera@mail.com');

console.log(padre.nombreCompleto());
padre.nombre = 'Hector';
console.log(padre);
console.log(madre.nombreCompleto());
