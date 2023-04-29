// ! 39 - Almacena múltiples valores en una variable utilizando los arreglos de JavaScript

// arrays -> permiten guardar varios tipos de datos, dentro de un elemento
// definir un 'array' con corchetes [] y la palabra reservada de 'const'

const sandwich = ["peanut butter", "jelly", "bread"];

const myArray = ["yordy", 23];
console.log(myArray);

// ! 40 - Anida un arreglo dentro de otro arreglo

// podemos anidar, guardar un array dentro de otro
const myArray2 = [
  ["yordy", 23],
  ["fany", "ryu", "akira"],
];
console.log(myArray2);

// ! 41 - Accede a los datos de un arreglo con índices

// podemos acceder a los datos de los array con sus [index] igual que con los strings

const myArray3 = [50, 60, 70];
let myData = myArray3[0];
console.log(myData);

// ! 42 - Modifica los datos de un arreglo con índices

// a diferencia de los string, SI PUEDO CAMBIAR los DATOS DE UN ARRAY

const myArray4 = [18, 64, 99];
console.log(myArray4);

myArray4[0] = 45;
console.log(myArray4);

// ! 43 - Accede a arreglos multidimensionales con índice

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];

// ! 44 - Manipular arreglos con el método push

// .push() -> añade datos al final de un array, toma 1 o mas parametros

const myArray6 = [["John, 23"], ["cat", 2]];
myArray6.push(["dog", 3]);
console.log(myArray6);

// ! 45 - Manipular arreglos con el método pop

// .pop() -> elimina el ultimo valor, y si lo guardamos en una variable lo 'retorna'

const myArray7 = [["John, 23"], ["cat", 2]];
let removedFromMyArray = myArray7.pop();
console.log(myArray7);

// ! 46 - Manipular arreglos con el método shift

// .shift() -> elimina el primer elemento, y lo puede retorna (si guardamos su variable)

const myArray8 = [["John, 23"], ["dog", 3]];
let removedFromMyArray2 = myArray8.shift();
console.log(myArray8);

// ! 47 - Manipular arreglos con el método unshift

// .unshift() -> agregar elementos al principio del array

const myArray9 = [["John, 23"], ["dog", 3]];
let removedFromMyArray3 = myArray9.unshift(["Paul", 35]);
console.log(myArray9);

// ! 48 - Lista de compras

const myList = [
  ["Chocolate Bar", 15],
  ["tomato", 5],
  ["bread", 8],
  ["cheese", 3],
  ["fries", 5],
];
console.log(myList);
