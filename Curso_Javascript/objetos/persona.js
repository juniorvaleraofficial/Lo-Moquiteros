// Funcion constructor de tipo persona
// uso de Prototype en JS

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre +' '+ this.apellido;
    }
}
Persona.prototype.tel = '809-966-3715';

let padre = new Persona('Martin', 'Peralta', 'mPeralta@mail.com');
let madre = new Persona('Raquel', 'Rivera', 'rRivera@mail.com');
console.log(padre.tel);
madre.tel = '829-440-4818';
console.log(madre.tel);
