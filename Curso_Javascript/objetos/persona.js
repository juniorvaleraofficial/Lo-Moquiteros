// uso de clases en JS
// HERENCIA DE CLASES EN JS
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

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido, departamento);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento = departamento;
    }
}

let persona1 = new Persona('Junior', 'Valera');
console.log(persona1.apellido);

let empleado1 = new Empleado('Maria', 'Gonzales', 'Recursos Humanos');

console.log(`La señora ${empleado1.nombre} ${empleado1.apellido} Trabaja en el departamento de ${empleado1.departamento}`);