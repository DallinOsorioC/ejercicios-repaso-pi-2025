/**
 * 30. Sumar números del arreglo

Tema: acumulador

const numeros = [5, 10, 15, 20]
Suma todos los elementos del arreglo usando for.
 */

const numeros = [5, 10, 15, 20]
let suma = 0
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}
console.log(suma) 