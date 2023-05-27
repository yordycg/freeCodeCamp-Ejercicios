// ! 58 - Comprende los valores booleanos

function welcomeToBooleans() {
  return true; // Cambia esta línea
}

// ! 59 - Usa lógica condicional con las sentencias "If"

// sentencia 'if' toma decisiones en el codigo, segun condicines booleanas (true or false)

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}

// ! 60 - Comparación con el operador de igualdad (==)

// raliza conversion de tipo

function testEqual(val) {
  if (val == 12) {
    // conversion de tipo
    return 'Equal';
  }
  return 'Not Equal';
}
testEqual(10);

// ! 61 - Comparación con el operador de estricta igualdad (===)

// NO realiza conversion de tipo

function testEqual(val) {
  if (val === 7) {
    // no conversion de tipo
    return 'Equal';
  }
  return 'Not Equal';
}
testEqual(10);

// ! 62 - Practica comparando diferentes valores

function compareEquality(a, b) {
  if (a === b) {
    return 'Equal';
  }
  return 'Not Equal';
}
compareEquality(10, '10');

// ! 63 - Comparación con el operador de desigualdad (!=)

// retorna lo contrario a la comparacion
// si es true != retorna false
// si es false != retorna true

function testNotEqual(val) {
  if (val != 99) {
    return 'Not Equal';
  }
  return 'Equal';
}
testNotEqual(10);

// ! 64 - Comparación con el operador de estricta desigualdad (!==)

function testStrictNotEqual(val) {
  if (val !== 17) {
    return 'Not Equal';
  }
  return 'Equal';
}
testStrictNotEqual(10);

// ! 65 - Comparación con el operador "mayor que

function testGreaterThan(val) {
  if (val > 100) {
    // Cambia esta línea
    return 'Over 100';
  }

  if (val > 10) {
    // Cambia esta línea
    return 'Over 10';
  }

  return '10 or Under';
}

testGreaterThan(10);

// ! 66 - Comparación con el operador "mayor o igual que"

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Cambia esta línea
    return '20 or Over';
  }

  if (val >= 10) {
    // Cambia esta línea
    return '10 or Over';
  }

  return 'Less than 10';
}

testGreaterOrEqual(10);

// ! 67 - Comparación con el operador "menor que"

function testLessThan(val) {
  if (val < 25) {
    // Cambia esta línea
    return 'Under 25';
  }

  if (val < 55) {
    // Cambia esta línea
    return 'Under 55';
  }

  return '55 or Over';
}

testLessThan(10);

// ! 68 - Comparación con el operador "menor o igual que"

function testLessOrEqual(val) {
  if (val <= 12) {
    // Cambia esta línea
    return 'Smaller Than or Equal to 12';
  }

  if (val <= 24) {
    // Cambia esta línea
    return 'Smaller Than or Equal to 24';
  }

  return 'More Than 24';
}

testLessOrEqual(10);

// ! 69 - Comparaciones con el operador lógico "and"

function testLogicalAnd(val) {
  // Cambia solo el código debajo de esta línea

  if (val <= 50 && val >= 25) {
    return 'Yes';
  }

  // Cambia solo el código encima de esta línea
  return 'No';
}

testLogicalAnd(10);

// ! 70 - Comparaciones con el operador lógico "or"

function testLogicalOr(val) {
  // Cambia solo el código debajo de esta línea

  if (val < 10 || val > 20) {
    return 'Outside';
  }

  // Cambia solo el código encima de esta línea
  return 'Inside';
}

testLogicalOr(15);

// ! 71 - Introducción a las sentencias "Else"

function testElse(val) {
  let result = '';
  // Cambia solo el código debajo de esta línea

  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }

  // Cambia solo el código encima de esta línea
  return result;
}

testElse(4);

// ! 72 - Introducción a las sentencias "Else If"

function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}

testElseIf(7);

// ! 73 - Orden lógico de las sentencias "if else"

function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}

orderMyLogic(7);

// ! 74 - Encadena sentencias if else

function testSize(num) {
  // Cambia solo el código debajo de esta línea
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  }

  return 'Change Me';
  // Cambia solo el código encima de esta línea
}

testSize(7);
