// uso de clases en JS
// uso de GET y SET en JS
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
}

let persona1 = new Persona('Junior', 'Valera');
persona1._nombre = 'Junior Alexis';
console.log(persona1);