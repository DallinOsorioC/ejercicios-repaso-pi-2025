/**
 * 38. Verificar si un número es par

Tema: función condicional

Crea una función esPar(numero). La función debe retornar true si el número es par, o false si es impar.

Prueba la función con el número 7.
 */

let readline = require('readline-sync');

function esPar(numero) {
    return numero % 2 === 0;
}

let numero = readline.questionInt("Ingrese un número: ");
let resultado = console.log(esPar(numero) ? "El número es par." : "El número es impar.");