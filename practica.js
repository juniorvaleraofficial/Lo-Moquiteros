// Modulo Funciones en JavaScript
// Ejemplo de paso de cadena en JS

function cambiarValor(parametro){
    parametro = "adios"
    cadena[0] = parametro;
}
let cadena = [0];
// Llama a la funcion
cadena[0] = "hola"
console.log(`Valor Antes de la funcion ${cadena[0]}`);
cambiarValor(cadena[0]);
console.log(`Valor despues de la funcion: ${cadena[0]}`);
