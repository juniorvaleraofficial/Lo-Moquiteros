class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRatones = ++Raton.contadorRatones;
    }
    get idRatones(){
        return this._idRatones;
    }

    toString(){
        return `{ID(${this.idRatones})\nMarca: ${this._marca} \nTipo de salida: ${this._tipoEntrada} \n}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclados = ++Teclado.contadorTeclados;
    }

    get idTeclados(){
        return this.idTeclados;
    }

    toString(){
        return `\nID: ${this._idTeclados} \nTipo de entrada: ${this.tipoEntrada}\nMarca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        return this._tamano = tamano;
    }

    toString(){
        return`ID: ${this.idMonitor}\nMarca: ${this.marca}\nTamaño: ${this.tamano}`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idcomputadora = ++ Computadora.contadorComputadoras;
    }
    get idcomputadora(){
        return this._idcomputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        return this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        return this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        return this._raton = raton;
    }

    toString(){
        return `\nID: ${this._idcomputadora}\nNOMBRE: ${this._nombre}\nMONITOR: ${this._monitor}\nTECLADO: ${this._teclado}\nMOUSES: ${this._raton}`;
    }

}

class Orden{
    static contadorOrdenes = 0;
    static MAX_ORDENES(){
        return 3;
    }
    constructor(){
        this._computadora = [];
        this._idOrdenes = ++Orden.contadorOrdenes;
    }
    agregarComputadora(computadora){
        if(this._computadora.length < Orden.MAX_ORDENES()){
            this._computadora.push(computadora);
        }
        else{
            return "Agregue una cantidad valida: ";
        }

    }
    get idOrdenes(){
        return this._idOrdenes;
    }
    get computadora(){
        return this._computadora;
    }
    set computadora(computadora){
        return this._computadora = computadora;
    }

    toString(){
        return `ID Orden ${this.idOrdenes}\nComputadora: ${this._computadora}`;
    }

}

let mouse1 = new Raton();
let teclado1 = new Teclado();
let monitor1 = new Monitor();

mouse1._marca = "Mouse pad"
mouse1._tipoEntrada = "USB";
teclado1._marca = "Teclado luminico";
teclado1._tipoEntrada = "C";
monitor1._marca = "SMI";
monitor1._tamano = "9:16";

let pcGamer = new Computadora();

pcGamer._nombre = "PC GAMER";
pcGamer._monitor = monitor1.marca;
pcGamer._teclado = teclado1._marca;
pcGamer._raton = mouse1._marca;

let orden1 = new Orden();

orden1.agregarComputadora(pcGamer);

console.log(orden1.toString());