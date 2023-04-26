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
// ! 44 -
// ! 45 -
