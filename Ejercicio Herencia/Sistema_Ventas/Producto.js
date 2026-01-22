class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++ Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `id:|${this._idProducto}|\nnombre: "${this._nombre}"\nprecio: $${this._precio} USD`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 3;
    }
    constructor(){
        this._producto = [];
        this._idOrden = ++ Orden.contadorOrdenes;
    }

    get idProducto(){
        return this._idProducto;
    }

    agregarProductos(producto){
        if(this._producto.length < Orden.MAX_PRODUCTOS){
            this._producto.push(producto);
        }
        else{
            console.log("Usted paso el limite de productos:");
        }

    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._producto){
            totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

     mostrarOrden(){
        let productosOrden = '';
        for( let producto of this._producto){
            productosOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);
    }
}

let producto1 = new Producto('Honda accord 2026', 28.395);
let producto2 = new Producto('bugatti chiron',3000000);
let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
orden2.agregarProductos(producto1);
orden1.agregarProductos(producto1);
orden3.agregarProductos(producto2);
orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();