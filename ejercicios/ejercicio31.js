/**
 * 31. Contar números pares

Tema: condición dentro de for

const numeros = [2, 7, 10, 15, 22, 33]
Cuenta cuántos números del arreglo son pares.

 */

const numeros = [2, 7, 10, 15, 22, 33]
let contador = 0    

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contador++
    }
}
console.log(`La cantidad de números pares es: ${contador}`)