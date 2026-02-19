class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalle(){
        return `Gerente:\nEmpleado Nombre:${this.nombre}\nSueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,depaltamento){
        super(nombre,sueldo,depaltamento);
        this.depaltamento = depaltamento;
    }
    obtenerDetalle(){
        return`{Gerente\nEmpleado: ${this.nombre}\nSueldo: ${this.sueldo}\nDepaltamento: ${this.depaltamento}}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalle());
}

let G0 = new Empleado('Velinda', 15000,'Gerencia');
let G1 = new Gerente('Juan Rivera', 85000, 'Sistemas Informaticos');

imprimir(G0);
console.log("\n");
imprimir(G1);