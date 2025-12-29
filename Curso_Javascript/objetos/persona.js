// uso de clases en JS
// POLIMORFISMO EN JS
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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
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

    // Sobreescritura en JS
    nombreCompleto(){
        return super.nombreCompleto() + ': ' + this._departamento;
    }

}

let persona1 = new Persona('Junior', 'Valera');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Gonzales', 'Recursos Humanos');

console.log(`SR ${empleado1.nombreCompleto()}`);

console.log(empleado1.toString());