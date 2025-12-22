// Modulo Funciones incorporadas JavaScript

// obtener el largo de una cadena

let cadena1 = 'que tal?..';

console.log(cadena1.length);

// no podemos modificar una cadena en JavaScript 
// las cadenas son inmutables
cadena1[0] = 'x';
console.log(cadena1);

// si podemos asignar una nueva cadena 
cadena1 = 'hola...';
console.log(cadena1);

// recorrer los caracteres de una cadena 
for(let i= 0; i < cadena1.length; i++){
    console.log(` indice ={${i}} valor = {${cadena1[i]}}`);
}
