// Modulo Funciones en JavaScript
// Objetos (Arrays) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20;
}

// Llama a la funcion
let arreglo = [10];
console.log(`Valor Antes de la funcion ${arreglo[0]}`);// paso por valor 
cambiarValor(arreglo);
console.log(`Valor despues de la funcion: ${arreglo[0]}`);// paso por referencia
