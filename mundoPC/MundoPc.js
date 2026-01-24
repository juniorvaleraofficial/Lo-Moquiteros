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

let mouse1 = new Raton();
let mouse2 = new Raton();

mouse1._marca = "acer";
mouse1._tipoEntrada = "USB";
mouse2._marca = "Windows Mouses";
mouse2._tipoEntrada = "Tipo C";

console.log(mouse1.toString());
console.log(mouse2.toString());