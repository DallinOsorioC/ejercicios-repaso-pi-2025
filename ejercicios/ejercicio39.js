/**
 * 
39. Suma de arreglo

Tema: función con arreglo como parámetro

Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números ingresados por el usuario según un menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números y que muestre la suma.

Utiliza push para ingresar cada número dado por el usuario


 */
let readline = require('readline-sync');
let arreglo = [];

function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

do {
    let numero = readline.questionInt('Ingrese un número: ');
    arreglo.push(numero);
    var continuar = readline.question('¿Desea ingresar otro número?: (s/n) ');
    if (continuar.toLowerCase() === 's') {
        continuar = true;
    } else {
        continuar = false;
    }
}while (continuar);

console.log('La suma total es: ' + sumarArreglo(arreglo));