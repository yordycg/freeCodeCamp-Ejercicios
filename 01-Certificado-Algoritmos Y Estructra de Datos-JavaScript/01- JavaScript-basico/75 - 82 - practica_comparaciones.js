// ! 75 - Código de golf

const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return 'Change Me';
  // Cambia solo el código encima de esta línea
}

golfScore(5, 4);

// ! 76 - Seleccionando entre muchas opciones con declaración switch

function caseInSwitch(val) {
  let answer = '';
  // Cambia solo el código debajo de esta línea

  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }
  // Cambia solo el código encima de esta línea
  return answer;
}

caseInSwitch(1);

// ! 77 - Agrega una opción predeterminada en las declaraciones switch

function switchOfStuff(val) {
  let answer = '';
  // Cambia solo el código debajo de esta línea
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
  }

  // Cambia solo el código encima de esta línea
  return answer;
}

switchOfStuff(1);

// ! 78 - Múltiples opciones idénticas en las declaraciones "switch"

function sequentialSizes(val) {
  let answer = '';
  // Cambia solo el código debajo de esta línea
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }

  // Cambia solo el código encima de esta línea
  return answer;
}

sequentialSizes(1);

// ! 79 - Reemplazando cadenas de "If Else" por "Switch"

function chainToSwitch(val) {
  let answer = '';
  // Cambia solo el código debajo de esta línea

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 7:
      answer = 'Ate Nine';
      break;
  }

  // Cambia solo el código encima de esta línea
  return answer;
}

chainToSwitch(7);

// ! 80 - Devuelve valores booleanos desde funciones

function isLess(a, b) {
  // Cambia solo el código debajo de esta línea
  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }
  return a < b;
  // Cambia solo el código encima de esta línea
}

isLess(10, 15);

// ! 81 - Patrón de devolución anticipado para funciones

// Configuración
function abTest(a, b) {
  // Cambia solo el código debajo de esta línea
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Cambia solo el código encima de esta línea

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// ! 82 - Conteo de cartas

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  }
  if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count--;
  }

  if (count > 0) return count + ' Bet';
  return count + ' Hold';
  // Cambia solo el código encima de esta línea
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
