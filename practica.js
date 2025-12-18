// Modulo Matrices en JavaScript
// Sintaxis simplificada de matrices en JavaScript

let matriz=[[],[],[]];
let matrizSimple = [[10,20,30],[100,200,300],[1000,2000,3000]];// sintaxis simplificada

// Modificar los valores 
// Renglon [0]
matriz[0][0] = 50;
matriz[0][1] = 100;
matriz[0][2] = 75;

// Renglon [1]
matriz[1][0] = 150;
matriz[1][1] = 200;
matriz[1][2] = 500;

// Renglon [2]
matriz[2][0] = 250;
matriz[2][1] = 300;
matriz[2][2] = 350;


// Leer los valores
console.log("Matriz normal: ");
console.log(`matriz[2][2] = ${matriz[2][2]}`);
console.log("matriz simplificada: ");
console.log(`matrizSimple[0][1]; = ${matrizSimple[0][2]}`);