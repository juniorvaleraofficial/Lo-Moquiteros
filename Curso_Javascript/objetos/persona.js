// uso de clases en JS
// Ejemplo de uso de la palabra static en JS
class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersonas = ++Persona.contadorPersonas;// contador de objetos 
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
        return this.idPersonas + ' ' + this.nombreCompleto();
    }

    static saludar(nombre){
        return 'Hola '+ nombre + ' desde el Metodo estatico: ';
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
console.log(empleado1.toString());

let empleado2 = new Empleado('Carlos', 'Duran', 'Administracion0');
console.log(empleado2.toString());