"use strict";// uso de modo strict
let x = 5;
let resultado = '';
try {
    y = 20;
    if(isNaN (resultado)) throw 'no es un Numero';
    else if(resultado === '') throw 'Es una cadena vacia';
    else if(resultado >= 0) throw 'Es un numero Positivo';
    else if(resultado < 0) throw 'Es un numero Negativo';
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina la revision de errores');
}

console.log(x);
// Modulo Funciones incorporadas JavaScript

//Redondeo y truncado en JavaScript
let numero = 5.7, redondeo, truncado;

// en el redondeo redondea a partir de 5 > 6
redondeo = Math.round(numero);
console.log(redondeo);

// en el truncado elimina la parte decimal
truncado = Math.trunc(numero);
console.log(truncado);
