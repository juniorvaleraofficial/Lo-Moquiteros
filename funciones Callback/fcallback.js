// funcion callback es una funcion que llama a otra funcion

function mensaje(m){
    console.log(m);
}

function sumar(n1, n2, msj){
    let resultado = n1 + n2;
    msj(`Resultado = ${resultado}`);
}

sumar(5,5, mensaje);