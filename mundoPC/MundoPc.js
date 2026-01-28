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
        return `\nID COMPUTADORA: ${this._idcomputadora}\nNOMBRE: ${this._nombre}\nMONITOR: ${this._monitor}\nTECLADO: ${this._teclado}\nMOUSES: ${this._raton}`;
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

    mostrarOrden(){
        for (const key in this._computadora) {
            if (!Object.hasOwn(this._computadora, key)) continue;
            const miOrden = this._computadora[key];
            console.log(`ID Orden ${this._idOrdenes}\nMI Orden:{${miOrden}\n}`);
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

}
// declarar Objetos
let mouse1 = new Raton();
let mouse2 = new Raton();
let mouse3 = new Raton();
let teclado1 = new Teclado();
let teclado2 = new Teclado();
let monitor1 = new Monitor();
let monitor2 = new Monitor();
let pcGamer = new Computadora();
let pcEscritorio = new Computadora();
let pcPortatil = new Computadora();
let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
let orden4 = new Orden();

// Objetos tipo Raton
mouse1._marca = "Mouse pad"
mouse1._tipoEntrada = "USB";
mouse2._marca = " Logitech G";
mouse2._tipoEntrada = "HDMI";
mouse3._marca = "Dell";
mouse3._tipoEntrada = "HDMI";

// Objetos tipo teclado
teclado1._marca = "Teclado Logitech";
teclado1._tipoEntrada = "USB";
teclado2._marca = "Teclado Portatil";
teclado2._tipoEntrada = "USB";

// Objetos tipo Monitor
monitor1._marca = "SMI";
monitor1._tamano = "9:16";
monitor2._marca = "Asus stand";
monitor2._tamano = "1080 full HD";

// Objetos tipo Computadora
pcGamer._nombre = "Lenovo";
pcGamer._monitor = monitor1.marca;
pcGamer._teclado = teclado1._marca;
pcGamer._raton = mouse2._marca;

pcEscritorio._nombre = "Dell";
pcEscritorio._monitor = monitor2._marca;
pcEscritorio._teclado = teclado1._marca;
pcEscritorio._raton = mouse3._marca;

pcPortatil._nombre = "Apple";
pcPortatil._monitor = monitor2._marca;
pcPortatil._teclado = teclado2._marca;
pcPortatil.raton = mouse2._marca;


// Agregar orden:
orden1.agregarComputadora(pcGamer);
orden2.agregarComputadora(pcEscritorio);
orden3.agregarComputadora(pcPortatil);
orden4.agregarComputadora(pcPortatil);

// Imprimir orden:
console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());
console.log(orden3.mostrarOrden());
console.log(orden4.mostrarOrden());