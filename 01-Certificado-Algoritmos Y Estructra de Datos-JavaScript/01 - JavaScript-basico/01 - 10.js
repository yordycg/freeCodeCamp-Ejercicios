// ! 01 - Comenta tu codigo

// comentario en una linea

/* comentario
en varias
lineas
*/

// ! 02 - declarar variables

/* 
- tipos de datos javascript:
undefined/null/boolean/string/sumbol/bigint/number/objet

- usamos variables para guardar diferentes tipos de datos
*/

var myName;

// ! 03 - almacenar valores con el operador de asignacion

// usamos el simbolo '=' para asignar
// el lado derecho del simbolo = , se le asigna al izquierda

var a;
a = 7;

// ! 04 - asignar el valor de una variable a otra variable

// podemos asignar una variable dentro de otra, y asi tengan
// el mismo valor

var b;
b = 7;
var c;
c = b;

// ! 05 - inicializa variables con el operador de asignacion

// podemos inicializar una variable con su valor, en una sola lina

var d = 9;

// ! 06 -  declarar variables de cadena

// una cadena es una serie de caracteres encerrados entre comillas
// simples, dobles o invertidas.

var myFirstName = "Yordy";
var myLastName = "Carmona";

// ! 07 - variables no inicializadas

/* 
- variables solo declardas tienen un valor 'undefined'
- undefined en una operacion matematica === a NaN (Not a Number)
- undefined en una concatenacion === undefined
*/

// var e; -> undefined
// var f; -> undefined
// var g; -> undefined

var e = 5;
var f = 10;
var g = "I am a";

e = e + 1;
f = f + 5;
g = g + " String!";

console.log(e);
console.log(f);
console.log(g);

// ! 08 - sensibilidad de mayusculas en las variables

/*
- en javascript la capitalizacion importa, palabras entre minusculas y mayusculas
- MYVAR != MyVar != myvar
- buena practica = usar camelCase (primera letra minusculas, y siguente letra en mayusculas, pero solo la primera letra)

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

*/

// ! 09 - diferencia entre 'var' y 'let'

/* 
- var: usarla permite cambiar las variables definidas con anterioridad, y no se muestra ningun error
- let: tiene un scope diferentea var, inicio en ES6, buena practica usarla
*/

let catName = "Oliver";
let catSound = "Meow!";

// ! 10 - variable de solo lectura con 'const'

/* const:
- tiene todas las ventajas de 'let' pero solo permite que sea de lectura, no se puede modificar
- buena practica escribir la variable en MAYUSCULAS

*/

const FCC = "freeCodeCamp"; // no puede modificarse
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
