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

let monitor1 = new Monitor();
monitor1.marca = "Nvdia";
monitor1.tamano = "9:16";

console.log(monitor1.toString());
