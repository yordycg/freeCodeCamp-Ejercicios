// ! 83 - Construye objetos en JavaScript

const myDog = {
  // Cambia solo el código debajo de esta línea
  name: 'akira',
  legs: 4,
  tails: 1,
  friends: ['fany', 'ryu'],

  // Cambia solo el código encima de esta línea
};

// ! 84 - Accede a propiedades de objetos con notación de puntos

// Configuración
const testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

// Cambia solo el código debajo de esta línea
const hatValue = testObj.hat; // Cambia esta línea
const shirtValue = testObj.shirt; // Cambia esta línea

// ! 85 - Accede a propiedades de objetos con notación de corchete

// Configuración
const testObj2 = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};

// Cambia solo el código debajo de esta línea
const entreeValue = testObj2['an entree']; // Cambia esta línea
const drinkValue = testObj2['the drink']; // Cambia esta línea

// ! 86 - Accede a propiedades de objetos con variables

// Configuración
const testObj3 = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
};

// Cambia solo el código debajo de esta línea
const playerNumber = 16; // Cambia esta línea
const player = testObj3[playerNumber]; // Cambia esta línea

// ! 87 - Actualizando las propiedades de un objeto

// Configuración
const myDog1 = {
  name: 'Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};

// Cambia solo el código debajo de esta línea
myDog1.name = 'Happy Coder';

// ! 88 - Añade nuevas propiedades a un objeto de JavaScript

const myDog2 = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};
myDog2.bark = 'woof';

// ! 89 - Elimina propiedades en un objeto de JavaScript

// Configuración
const myDog3 = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
  bark: 'woof',
};

// Cambia solo el código debajo de esta línea
delete myDog3.tails;

// ! 90 - Usa objetos para hacer búsquedas

// Configuración
function phoneticLookup(val) {
  let result = '';

  // Cambia solo el código debajo de esta línea
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  return lookup[val];

  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Cambia solo el código encima de esta línea
  return result;
}

phoneticLookup('charlie');

// ! 91 - Verifica las propiedades de un objeto

// * hasOwnProperty('propiedad_Buscar') -> retorna 'true' si la pripiedad esta en el objeto, retorna 'false' si no se encuentra

function checkObj(obj, checkProp) {
  // Cambia solo el código debajo de esta línea
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
  // Cambia solo el código encima de esta línea
}

// ! 92 - Manipulando objectos complejos

const myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  {
    artist: 'B.I',
    title: 'Gray',
    release_year: 2022,
    formats: ['cd', 'spotify', 'youtube'],
  },
];

// ! 93 - Accede a objetos anidados

const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

const gloveBoxContents = myStorage.car.inside['glove box'];

// ! 94 - Accede a arreglos anidados

const myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];

const secondTree = myPlants[1].list[1];

// ! 95 - Colección de discos
// ! 96 -
// ! 97 -
// ! 98 -
// ! 99 -
// ! 100 -
