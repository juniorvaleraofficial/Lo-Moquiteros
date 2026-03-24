// funcion callback es una funcion que llama a otra funcion

function mensaje(m){
    console.log(m);
}

function sumar(n1, n2, msj){
    let resultado = n1 + n2;
    msj(`Resultado = ${resultado}`);
}

sumar(5,5, mensaje);

// funciones asincronas con setTimeOut

function mifuncionCallback(){
    console.log('Se ejecuta despues de 3 segundos: ');
}

setTimeout(mifuncionCallback,3000);

setTimeout(() => console.log(`se ejecuta despues de 1 segundos`),1000);

setTimeout(() => console.log(`se ejecuta despues de 2 segundos`),2000);

setTimeout(() => console.log(`se ejecuta despues de 4 segundos`),4000);

setTimeout(function (){console.log('Se ejecuta despues de 5 segundos');}, 5000 );