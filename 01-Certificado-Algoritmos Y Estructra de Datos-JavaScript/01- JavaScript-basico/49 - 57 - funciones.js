// ! 49 - Escribe JavaScript reutilizable utilizando funciones

// funciones -> codigo reutilizable, hacen algo especifico

function reusableFunction() {
  console.log("Hi World");
}
// llamar o invocar a la funcion, usando nombre + parentesis
reusableFunction();

// ! 50 - Pasa valores a las funciones utilizando argumentos

// parametros = placeholder de un tipo de dato,  al momento de crear una funcion
// argumentos = tipos de datos dados o introducidos al momento de llamar / invocar una funcion

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(2, 3);
functionWithArgs(8, 5);

// ! 51 - Devuelve un valor de una función utilizando "Return"

// return -> envia un valor fuera de una funcion

function timesFive(a) {
  return a * 5;
}
timesFive(5);
console.log(timesFive(10));

// ! 52 - Ámbito global y funciones

/* 
* ambito o scope -> se refiere a la visibilidad de las variables
* ambito global -> variables definidas FUERA de un bloque de funcion 
*               -> pueden ser observadas desde cualquier lugar

* var -> declara en ambito global
* let / const -> tiene un ambito de bloque, depende donde se llamen
*             -> pueden ser globales o no
*/

// ! 53 - Ámbito local y funciones

function myLocalScope() {
  // Cambia solo el código debajo de esta línea
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Ejecuta y verifica la consola
// myVar no está definida afuera de myLocalScope
console.log("outside myLocalScope", myVar);

// ! 54 - Ambito global vs. local en funciones

// * es posible tener variables locales y globales con el mismo nombre
// * 'variable local' tiene precedencia (mas peso? mas importantcia?) sobre la 'variable global'

function myOutfit() {
  // Cambia solo el código debajo de esta línea
  let outerWear = "sweater";
  // Cambia solo el código encima de esta línea
  return outerWear;
}

myOutfit();

// ! 55 - Comprendiendo el valor indefinido devuelto por una función

// * return -> declaracion de devolucion (no tiene que estar incluida)
// * cuando se llame a una funcion sin return, el valor devuleto es 'undefined'

function addFive() {
  sum = sum + 5;
}

addFive(); // esta funcion retorna 'undefined'

// ! 56 - Asignación con un valor devuelto

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// * podemos asignar y almacenar el retorno de una funcion

// ! 57 - Permanece en línea

/*
 * queue (cola) -> estructura de datos 'abstracta'
 *             -> los elementos se mantienen en orden
 *             -> los nuevo elementos se añaden a la parte posterior de la queue
 *             -> elementos antiguos se retiran de la parte delantera de la queue
 */

function nextInLine(arr, item) {
  let agregarNumQueue;
  arr.push(item);
  let retornarFirstNumQueue = arr.shift();
  return retornarFirstNumQueue;
}

// Configuración
let testArr = [1, 2, 3, 4, 5];

// Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
