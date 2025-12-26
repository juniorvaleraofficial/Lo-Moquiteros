let persona = {
    nombre: 'Pedro',
    apellido: 'Rondon',
    nombreCompleto: function(titulo, tel){
        return titulo +': ' + this.nombre + ' ' + this.apellido + ' '+ tel;
    }
}

let persona2 = {
    nombre: 'Mario',
    apellido: 'Fulcal'
}

// paso de argumentos con apply en JavaScript
// para usar el metodo en persona.nombreCompleto con los datos de persona2

console.log(persona.nombreCompleto.apply(persona2, ['ing', '+1 809-966-3715']));