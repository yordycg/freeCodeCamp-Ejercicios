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

// ! 2- Haz coincidir cadenas literales
