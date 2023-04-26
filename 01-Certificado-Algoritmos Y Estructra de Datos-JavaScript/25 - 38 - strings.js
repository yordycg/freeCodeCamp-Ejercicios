// ! 25 - comillas literales en cadenas / strigs

// usar  '\' slash antes de para que se imprima la comilla, y no tener problemas en el string

const myStr = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);

// ! 26 - citas cadenas con comillas simples

// combinar "" comillas dobles y comillas simples '', y NO hacer uso de \

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);

// ! 27 - Escapa secuencias en cadenas

/* 

\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\t	tabulador
\r	retorno del carro
\b	backspace
\f	fuente de formulario 

*/

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

// ! 28 - Concatena cadenas con el operador "más"

const myStr4 = "This is the start. " + "This is the end.";
console.log(myStr4);

// ! 29 - Concatena cadenas con el operador "más igual"

// concatenar usado += (cuidado con los espacios)

let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";
console.log(myStr5);

// ! 30 - Construye cadenas con variables

const myName = "Yordy";
const myStr6 = "My name is " + myName + " and I am well!";
console.log(myStr6);

// ! 31 - Agrega variables a cadenas

const someAdjective = "muy intenso, pero feliz";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
console.log(myStr7);

// ! 32 - Encuentra la longitud de una cadena

// .length -> nos indica la longitud de una cadena

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// ! 33 - Utiliza la notación de corchetes para encontrar el primer carácter en una cadena

// con [index] podemos retornar el elemento que esta en la posicion 'index'
// en programacion se comienza a contar desde el cero (0)

let lastNameLength2 = 0;
const lastName2 = "Lovelace";

lastNameLength2 = lastName2[0];
console.log(lastNameLength2);

// ! 34 - Comprende la inmutabilidad de las cadenas

let myStr8 = "Jello World";
// myStr8[0] = 'J' // error -> no podemos asignar un caracter especifico, es necesario escribir el string completo
myStr8 = "Hello World";
console.log(myStr8);

// ! 35 - Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena

// [index] -> podemos obtener cualquier letra de un string, solo tiene que estar dentro del rango

const lastName3 = "Lovelace";

const thirdLetterOfLastName = lastName3[2];
console.log(thirdLetterOfLastName);

// ! 36 - Utiliza la notación de corchetes para encontrar el último carácter en una cadena

// podemos combinas [index] y .length para obtener el ultimo caracter de una cadena
// .length - 1 -> nos retorna el ultimo caracter, porque .length trabajo con el LARGO TOTAL
// [index] trabaja con las posiciones, que viene siendo 1 menos, por que INICIA DESDE CERO

const lastName4 = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// ! 37 - Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena

// el inicio de un string es cero, pero al final no es -1

const lastName5 = "Lovelace";

const secondToLastLetterOfLastName = lastName5[lastName5.length - 2];
console.log(secondToLastLetterOfLastName);

// ! 38 - Palabra en blanco

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb;
console.log(wordBlanks);
