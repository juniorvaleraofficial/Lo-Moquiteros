// Objetos 
// funciones en objetos
let persona = {
    nombre: 'Junior',
    apellido: 'Valera',
    edad: 30,
    email: 'detoprox@gmail.com',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        return this.idioma = lang.toUpperCase();
    },   
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.idioma);

persona.lang = 'En';

console.log(persona.lang);