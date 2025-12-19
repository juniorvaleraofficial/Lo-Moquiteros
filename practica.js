// Modulo Funciones en JavaScript
// Ejemplo de paso de cadena en JS

function cambiarValor(parametro){
    parametro = "adios"
}

// Llama a la funcion
let cadena = "hola"
console.log(`Valor Antes de la funcion ${cadena}`);
cambiarValor(cadena);
console.log(`Valor despues de la funcion: ${cadena}`);
