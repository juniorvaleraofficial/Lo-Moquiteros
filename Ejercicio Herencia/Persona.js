class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++ Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}
        `
    }
}

let personaP1 = new Persona('Juan', 'Rivera',25);
console.log(personaP1.toString());

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad, sueldo);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado}  ${this._sueldo}`;
    }
}

let empleadoE1 = new Empleado('Santiago', 'Vermudez', '35',55000);
console.log(empleadoE1.toString());

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad,fechaRegistro){
        super(nombre, apellido, edad,fechaRegistro);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

let clienteC1 = new Cliente('Rosmariana', 'Ventura', 21, new Date());
console.log(clienteC1.toString());