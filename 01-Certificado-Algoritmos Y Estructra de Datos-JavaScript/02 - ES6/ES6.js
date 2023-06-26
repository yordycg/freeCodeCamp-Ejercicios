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

// ! 11 -
// ! 12 -
// ! 13 -
// ! 14 -
// ! 15 -
// ! 16 -
// ! 17 -
// ! 18 -
// ! 19 -
// ! 20 -
// ! 21 -
// ! 22 -
// ! 23 -
// ! 24 -
// ! 25 -
// ! 26 -
// ! 27 -
// ! 28 -
// ! 29 -
// ! 30 -
