// ! 11 - suma dos numeros

/* 
- Number -> tipo de dato en js que representa los datos numericos
- + -> simbolo de la suma
*/

const sum = 10 + 10;
console.log(sum);

// ! 12 - resta de numeros

// - -> simbolo de la resta

const difference = 45 - 33;
console.log(difference);

// ! 13 - multiplicacion de numeros

// * -> simbolo de la multiplicacion

const product = 8 * 10;
console.log(product);

// ! 14 - divide un numero

// / -> simbolo de la division

const quotient = 66 / 33;
console.log(quotient);

// ! 15 - incrementa un numero en js

// incrementar o sumar 1 a una variable, usando -> ++

// i++ === i = i + 1

let myVar = 87;
myVar++;
console.log(myVar);

// ! 16 - decrementa un numero en js

// decrementa una variable por 1, usando -> --

// i-- === i = i - 1;

let myVariable = 11;
myVariable--;
console.log(myVariable);

// ! 17 - numeros decimales en js

// numeros decimales o numeros coma flotante o flotntes
// se calculan con precision finita, pueden producir resultados diferentes a los deseados

const ourDecimal = 5.7;

// ! 18 - multiplicacion 2 numeros decimales

const product2 = 2.0 * 2.5;
console.log(product2);

// ! 19 - division 2 numeros decimales

const quotient2 = 4.4 / 2.0;
console.log(quotient2);

// ! 20 - resto en javscript

// % -> entrega el resto de la division entre 2 numeros
// podemos comprobar si un numero es par o impar si el resto de % 2 es 0 , si es 1 es numero impar

let a = 5 % 2;
let b = 18 % 9;

console.log(`resto de 5 % 2:  ${a}`);
console.log(`resto de 18 % 9:  ${b}`);

// ! 21 - asignacion compuesta con adiccion aumentada

/* 
a = a + 4 === a += 4
*/

let c = 3;
let d = 17;
let e = 12;

c += 12;
d += 9;
e += 7;

console.log(c, d, e);

// ! 22 - asignacion compuesta con resta aumentada

let f = 3;
let g = 17;
let h = 12;

f -= 12;
g -= 9;
h -= 7;

console.log(f, g, h);

// ! 23 - asignacion compuesta con multiplicacion aumentada

let i = 3;
let j = 17;
let k = 12;

i *= 2;
j *= 1;
k *= 8;

console.log(i, j, k);

// ! 24 - asignacion compuesta con division aumentada

let l = 3;
let m = 17;
let n = 12;

l /= 5;
m /= 1;
n /= 3;

console.log(l, m, n);
