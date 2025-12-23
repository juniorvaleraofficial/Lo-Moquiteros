// diferencia entre objetos y tipo primitivos
// funciones en objetos

// primitivo
let x = 10;
console.log(typeof(x));
// objeto
let persona = {
    nombre: 'Junior',
    apellido: 'Valera',
    edad: 30,
    email: 'detoprox@gmail.com',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());