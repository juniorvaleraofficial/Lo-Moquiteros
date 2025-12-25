// diferencia entre objetos y tipo primitivos
// funciones en objetos
let persona = {
    nombre: 'Junior',
    apellido: 'Valera',
    edad: 30,
    email: 'detoprox@gmail.com',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

/** for (const nombrePropiedad in persona) {
    
    console.log(persona[nombrePropiedad]);
}


let personaArray = Object.values(persona);
console.log(personaArray);

*/

let personaString = JSON.stringify(persona);
console.log(personaString);