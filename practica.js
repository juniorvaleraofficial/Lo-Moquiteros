// Modulo Matrices en JavaScript
// Iterar una matriz en JavaScript

let matriz = [[10,20,30],[100,200,300],[1000,2000,3000]];// sintaxis simplificada

console.log(matriz.length);
console.log(matriz[0].length);

for (let fila = 0; fila < matriz.length; fila++) {
    for (let col = 0; col < matriz[fila].length; col++){
        console.log(`matriz[${fila}][${col}] = ${matriz[fila][col]}`);
    }
}

for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    console.log(element);
    
}