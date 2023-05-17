// ! 58 - Comprende los valores booleanos

function welcomeToBooleans() {
    return true; // Cambia esta línea
}

// ! 59 - Usa lógica condicional con las sentencias "If"

// sentencia 'if' toma decisiones en el codigo, segun condicines booleanas (true or false)

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

// ! 60 - Comparación con el operador de igualdad (==)

// raliza conversion de tipo

function testEqual(val) {
    if (val == 12) {
        // conversion de tipo
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

// ! 61 - Comparación con el operador de estricta igualdad (===)

// NO realiza conversion de tipo

function testEqual(val) {
    if (val === 7) {
        // no conversion de tipo
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

// ! 62 - Practica comparando diferentes valores

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

// ! 63 - Comparación con el operador de desigualdad (!=)

// retorna lo contrario a la comparacion
// si es true != retorna false
// si es false != retorna true

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// ! 64 - Comparación con el operador de estricta desigualdad (!==)

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

// ! 65 - Comparación con el operador "mayor que
// ! 66 -
// ! 67 -
// ! 68 -
// ! 69 -
// ! 70 -
