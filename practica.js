// Modulo Funciones en JavaScript
// Funciones Recursivas en JS

function funcionRecursiva(numero){
    if(numero == 1){
        console.log(numero);
    }
    else{
        console.log(numero);
        funcionRecursiva(numero -1);
    }
}
// Llama a la funcion
funcionRecursiva(20);
