/**
 * 19. Calculadora básica

Tema: condiciones múltiples + operadores

let num1 = 12
let num2 = 3
let operacion = '+'
Usa if/else if para realizar:

Suma, resta, multiplicación o división según operacion. Muestra el resultado final.
 */

let readline = require('readline-sync');

let operacion = readline.question('INGRESE LA OPERACION A REALIZAR: "+", "-", "*", "/" : ');

let num1 = parseFloat(readline.question('\nIngrese el numero 1: '));
let num2 = parseFloat(readline.question('\nIngrese el numero 2: '));

if (operacion === '+') {
    console.log(`El resultado de la suma es: ${num1 + num2}`);
} else if (operacion === '-') {
    console.log(`El resultado de la resta es: ${num1 - num2}`);
} else if (operacion === '*') {
    console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
} else if (operacion === '/') {
    if (num2 !== 0) {
        console.log(`El resultado de la división es: ${num1 / num2}`);
    } else {
        console.log('Error: No se puede dividir por cero.');
    }
} else {
    console.log('Operación inválida. Inténtelo de nuevo con una operación válida.');
}
