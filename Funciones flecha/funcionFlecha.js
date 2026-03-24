miFuncion();// esta funcion aplica el concepto de hoisting
// funcion normal 
function miFuncion(){
    console.log("mi funcion normal");
}

let miFuncionFlecha = () => {
    console.log('Esta es mi funcion flecha');
}

miFuncionFlecha();// esta es una funcion flecha

// tambien se puede declarar una funcion como variable
let miFuncionVar = function(){
    console.log('mi funcion como variable');
}

miFuncionVar();