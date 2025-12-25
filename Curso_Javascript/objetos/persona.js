// Objetos 
// funciones en objetos
let persona = {
    nombre: 'Junior',
    apellido: 'Valera',
    edad: 30,
    email: 'detoprox@gmail.com',
   get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);