// ! 1- Compara el alcance de las palabras clave "var" y "let"
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// ! 2 - Muta un arreglo declarado con const
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// ! 3 - Prevenir la mutacion del objeto
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ! 4 - Una funcion flecha para escribir funciones anonimas de manera breve
const magic = () => new Date();

// ! 5 - Esribe funciones flecha con parametros
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// ! 6 - Establece parametros por defecto para tus funciones
const increment = (number, value = 1) => number + value;

// ! 7 - Utiliza el parametro rest con parametros de funcion
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// ! 8 - Utiliza el operador de propagacion para evaluar los arreglos en el luegar
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Cambia esta línea

console.log(arr2);

// ! 9 - Usa sintaxis de destructuracion para extraer valores de objetos
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// ! 10 - Usa sintaxis de destructuracion para asignar variables desde objetos
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// ! 11 - Usa sintaxis de desestructuración para asignar variables desde objetos anidados

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday2 },
} = LOCAL_FORECAST;

// ! 12 - Usa sintaxis de desestructuración para asignar variables desde arreglos

let a = 8,
  b = 6;
[a, b] = [b, a];

// ! 13 - Desestructuración vía elementos rest

function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// ! 14 - Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;

// ! 15 - Crea cadenas usando plantillas literales

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  const failureItems = [];
  for (const itemsLi of arr) {
    const output = `<li class="text-warning">${itemsLi}</li>`;
    failureItems.push(output);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

// ! 16 - Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};

// ! 17 - Escribe funciones breves y declarativas con ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// ! 18 - Usa sintaxis de clases para definir una función constructora

class Vegetable {
  constructor(_name) {
    this.name = _name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

// ! 19 - Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }

  get temperature() {
    return this._celsius;
  }

  set temperature(celsius) {
    return (this._celsius = celsius);
  }
}

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

// ! 20 - Crea un módulo para scripts

<>
  <script src="index.js" type="module" />
</>;

// ! 21 - Utiliza la exportación para compartir un bloque de código

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString };

// ! 22 - Reutiliza código de JavaScript utilizando import
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString('hello');
lowercaseString('WORLD!');

// ! 23 - Use * para importar todo de un archivo

import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString('hello');
stringFunctions.lowercaseString('WORLD!');

// ! 24 - Crear un fallback de exportación con export default

// solo puede existir un 'export default' por archivo
export default function subtract(x, y) {
  return x - y;
}

// ! 25 - Importa una exportación por defecto

import subtract from './math_functions.js';

subtract(7, 4);

// ! 26 - Crea una promesa de JavaScript

// const makeServerRequest = new Promise((resolve, reject) => {});

// ! 27 - Cumpleta una promesa con "resolve" y "reject"

// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer;

//   if (responseFromServer) {
//     resolve('We got the data');
//   } else {
//     reject('Data not received');
//   }
// });

// ! 28 - Maneja una promesa cumplida usando then

// const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve('We got the data');
//   } else {
//     reject('Data not received');
//   }
// });

// makeServerRequest.then((result) => {
//   console.log(result);
// });

// ! 29 - Maneja una promesa rechazada usando catch

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
  let responseFromServer = false;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
