// ! 96 - Itera con el bucle "while" de JavaScript

const myArray = [];

// Cambia solo el código debajo de esta línea

let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// ! 97 - Itera con los bucles "for" de JavaScript

const myArray2 = [];

// Cambia solo el código debajo de esta línea

for (let i = 1; i <= 5; i++) {
  myArray2.push(i);
}

// ! 98 - Itera números impares con un bucle "for"

const myArray3 = [];

// Cambia solo el código debajo de esta línea

for (let i = 1; i <= 9; i += 2) {
  myArray3.push(i);
}

// ! 99 - Cuenta hacia atrás con un bucle "for"

const myArray4 = [];

// Cambia solo el código debajo de esta línea
for (let i = 9; i >= 0; i -= 2) {
  myArray4.push(i);
}

// ! 100 - Itera a través de un arreglo con un bucle "for"

const myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// ! 101 - Anida bucles "for"

function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// ! 102 - Itera con el bucle "do...while" de JavaScriptq

const myArray1 = [];
let i2 = 10;

// Cambia solo el código debajo de esta línea
do {
  myArray1.push(i2);
  i2++;
} while (i2 < 5);
{
}
