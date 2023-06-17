// ! 103 - Reemplaza bucles usando recursión

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Cambia solo el código encima de esta línea
}
console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));

// ! 104 - Búsqueda de perfiles

// Configuración
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    // ! OJO CONO ORDENO LOS IF
    if (name === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }

  return 'No such contact';
}

lookUpProfile('Akira', 'likes');

// ! 105 - Genera fracciones aleatorias con JavaScript

function randomFraction() {
  return Math.random();
}

// ! 106 - Genera números enteros aleatorios con JavaScript

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// ! 107 - Genera números enteros aleatorios dentro de un rango

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// ! 108 - Utiliza la función "parseInt"

function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger('56');

// ! 109 - Utiliza la función "parseInt" con Radix (Base)

function convertToInteger(str) {
  // 2 -> sistema binario solo tiene 2 numeros
  return parseInt(str, 2);
}
// numero binario
convertToInteger('10011');

// ! 110 - Usa el operador condicional (ternario)

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// ! 111 - Usa múltiples operadores condicionales (ternarios)

function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10);

// ! 112 - Utiliza recursión para crear una cuenta regresiva

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// ! 113 - Usa recursión para crear un rango de números

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
