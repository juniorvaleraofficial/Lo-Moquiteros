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

// paso de argumetnos a Call en JavaScript
// para usar el metodo en persona.nombreCompleto con los datos de persona2

console.log(persona.nombreCompleto.call(persona2, 'ing', '1809-966-3715'));