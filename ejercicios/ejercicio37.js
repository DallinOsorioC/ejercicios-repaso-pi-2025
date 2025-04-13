/**
 * 37. Área de un triángulo

Tema: función con retorno

Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.

Llama a la función con los valores ingresados por el usuario e imprime el resultado.
 */
let readline = require('readline-sync');

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let base = readline.questionFloat("Ingrese la base del triángulo: ");
let altura = readline.questionFloat("Ingrese la altura del triángulo: ");
let area = console.log("El area del triangulo es: " + calcularAreaTriangulo(base, altura))