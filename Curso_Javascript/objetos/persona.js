let persona = {
    nombre: 'Pedro',
    apellido: 'Rondon',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Mario',
    apellido: 'Fulcal'
}

// uso del metodo call
// para usar el metodo en persona.nombreCompleto con los datos de persona2

console.log(persona.nombreCompleto.call(persona2));