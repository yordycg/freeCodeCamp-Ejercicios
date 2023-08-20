// ! 1- usa el metodo 'test'

/* 
- usamos expresiones regulares para 'coincidir' con partes de cadenas
- creamos patrones con ese proposito
- las comillas no son requeridas
/the/ -> buscaeremos la palabra/string 'the'

- expresionRegular.test(stringBuscar) -> retorna true o false, segun encuentre algo o no / test() es usado para probar expresiones regulares
*/

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log('🚀 ~ file: expresione_regulares.js:15 ~ result:', result);

// ! 2- Haz coincidir cadenas literales

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/; // Cambia esta línea
let result1 = waldoRegex.test(waldoIsHiding);

// ! 3- Coincide una cadena literal con diferentes posibilidades
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result2 = petRegex.test(petString);

// ! 4- Ignora la capitalización al coincidir

let myString1 = 'freeCodeCamp';
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result3 = fccRegex.test(myString1);

// ! 5- Extrae coincidencias

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea
let result4 = extractStr.match(codingRegex); // Cambia esta línea

// ! 6- Encuentra más que la primera coincidencia

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi; // Cambia esta línea
let result5 = twinkleStar.match(starRegex); // Cambia esta línea
console.log('🚀 ~ file: expresione_regulares.js:45 ~ result5:', result5);

// ! 7- Haz coincidir cualquier cosa con el comodín punto

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result6 = unRegex.test(exampleStr);

// ! 8- Haz coincidir un solo carácter con múltiples posibilidades

let quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi; // Cambia esta línea
let result7 = quoteSample.match(vowelRegex); // Cambia esta línea
console.log('🚀 ~ file: expresione_regulares.js:58 ~ result7:', result7);

// ! 9- Haz coincidir las letras del alfabeto

let quoteSample1 = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi; // Cambia esta línea
let result8 = quoteSample1.match(alphabetRegex);

// ! 10- Haz coincidir los números y las letras del alfabeto

let quoteSample2 = 'Blueberry 3.141592653s are delicious.';
let myRegex1 = /[h-s2-6]/gi; // Cambia esta línea
let result9 = quoteSample2.match(myRegex1); // Cambia esta línea

// ! 11- Haz coincidir caracteres individuales no especificados

let quoteSample3 = '3 blind mice.';
let myRegex2 = /[^aeiou0-9]/gi; // Cambia esta línea
let result10 = quoteSample3.match(myRegex2); // Cambia esta línea
console.log('🚀 ~ file: expresione_regulares.js:77 ~ result10:', result10);

// ! 12- az coincidir caracteres que aparecen una o más veces

let difficultSpelling = 'Mississippi';
let myRegex3 = /s+/gi; // Cambia esta línea
let result11 = difficultSpelling.match(myRegex3);
console.log('🚀 ~ file: expresione_regulares.js:84 ~ result11:', result11);

// ! 13- Haz coincidir caracteres que aparecen cero o más veces

// Cambia solo el código debajo de esta línea
let chewieQuote = '';
let chewieRegex = /Aa*/; // Cambia esta línea
// Cambia solo el código encima de esta línea

let result12 = chewieQuote.match(chewieRegex);

// ! 14- Encuentra caracteres con una coincidencia perezosa

let text = '<h1>Winter is coming</h1>';
let myRegex4 = /<h.*?1>/; // Cambia esta línea
let result13 = text.match(myRegex4);
console.log('🚀 ~ file: expresione_regulares.js:100 ~ result13:', result13);

// ! 15- Encuentra uno o más criminales en una cacería

let reCriminals = /C+/g;
// expresion regular codiciosa que encuentra uno o mas 'criminales'
// dentro de un grupo de personas

// ! 16- Haz coincidir patrones de cadena de inicio

let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/; // Cambia esta línea
let result14 = calRegex.test(rickyAndCal);

// ! 17- Haz coincidir patrones de cadena final

let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/; // Cambia esta línea
let result15 = lastRegex.test(caboose);

// ! 18- Coincide todas las letras y números

let quoteSample4 = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result16 = quoteSample4.match(alphabetRegexV2).length;

// ! 19- Haz coincidir todo menos letras y números

let quoteSample5 = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g; // Cambia esta línea
let result17 = quoteSample5.match(nonAlphabetRegex).length;

// ! 20- Coincide con todos los números

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g; // Cambia esta línea
let result18 = movieName.match(numRegex).length;
console.log('🚀 ~ file: expresione_regulares.js:137 ~ result18:', result18);

// ! 21- Coincide con todos los caracteres no numéricos

let movieName1 = '2001: A Space Odyssey';
let noNumRegex = /\D/g; // Cambia esta línea
let result19 = movieName1.match(noNumRegex).length;

// ! 22- Restringe posibles nombres de usuario

let username = 'JackOfAllTrades';
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Cambia esta línea
let result20 = userCheck.test(username);

// ! 23- Haz coincidir espacios en blanco

let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g; // Cambia esta línea
let result21 = sample.match(countWhiteSpace);

// ! 24- Haz coincidir caracteres que no sean espacios en blanco

let sample1 = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result22 = sample.match(countNonWhiteSpace);

// ! 25- Especifica el menor y mayor número de coincidencias

let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6}\sno/; // Cambia esta línea
let result23 = ohRegex.test(ohStr);

// ! 26- Especifica solo el menor número de coincidencias

let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result24 = haRegex.test(haStr);

// ! 27- Especifica el número exacto de coincidencias

let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result25 = timRegex.test(timStr);

// ! 28- Comprueba todos o ninguno

let favWord = 'favorite';
let favRegex = /favou?rite/; // Cambia esta línea
let result26 = favRegex.test(favWord);

// ! 29- Lookahead positivo y negativo

let sampleWord = 'astronaut';
let pwRegex = /(?=\w{6})(?=\D*\d{2,})/; // Cambia esta línea
let result27 = pwRegex.test(sampleWord);

// ! 30- Comprueba agrupaciones mixtas de caracteres

let myStrin3 = 'Eleanor Roosevelt';
let myRegex5 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Cambia esta línea
let result28 = myRegex.test(myString);

// ! 31- Reutiliza patrones usando grupos de captura

let repeatNum = '42 42 42';
let reRegex = /^(\d+) \1 \1$/; // Cambia esta línea
let result29 = reRegex.test(repeatNum);

// ! 32- Usa grupos de captura para buscar y reemplazar

let str = 'one two three';
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = '$3 $2 $1'; // Cambia esta línea
let result30 = str.replace(fixRegex, replaceText);

// ! 33- Elimina espacio en blanco del inicio y final

let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g; // Cambia esta línea
let result31 = hello.replace(wsRegex, ''); // Cambia esta línea
