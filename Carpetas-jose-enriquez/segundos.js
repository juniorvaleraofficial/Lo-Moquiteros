// constantes
const klk = 15;
console.log(klk);

/* despues que una constantes tiene un valor 
no se puede modificar durante el programa */

/*OPERADORES (-RESTA,*MULTIP,+SUMA,/DIVISION,%PORCENTAJE,
**POTENCIA,++INCREMENTO,--DECREMENTO,) */

let a, b, c, d, e, f, i, j, k;

//SUMA
a = 3 + 5;
console.log(a);

//RESTA 
b = 5-3;
console.log(b);

//MULTI
c = a * b;
console.log(c);

//DIVISION
d = b / 2.5;
console.log(d);

//modulo 
f = 9 % 2;
console.log(f);

// potencia
e = 2 ** 3;
console.log(e);

// incremento y descremento

j = 5
// pre-incremento
++j;
console.log(j);
// post-incremento
j++;
console.log(j);

//pre-decremento
--j;
console.log(j);
//post-decremento
j--;
console.log(j);

// EJEMPLO DE VALOR DENTRO DE RANGO
let minimo = 0, maximo = 5;

//valor para saber si esta dentro del rango
let dato = 3; //se puede modificar el valor y se cambiara auto, tu vera.

//revisamos si esta dentro de rango
let dentrorango = dato >= minimo && dato <= maximo;
console.log('valor dentro rango: ', dentrorango);

//sentencias IF

let valor = 10;

if(valor > 0){
    console.log('valor positivo',{valor});
}
else{
    console.log('valor cero o negativo', {valor} );
}