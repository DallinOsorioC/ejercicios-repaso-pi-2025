/**
 * 27. Juego del número secreto

Tema: do...while con condición

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.

Muestra: "¡Adivinaste!" cuando el intento sea correcto.

Haz que el valor de intento cambie dentro del bucle.
 */

let readline = require('readline-sync')
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1  
console.log(`El numero secreto es: ${NUMERO_SECRETO}`)
let intento = 0
let mensaje = ''
do {
    intento = readline.questionInt('Adivina el numero secreto (entre 1 y 100): ')
    if (intento === NUMERO_SECRETO) {
        mensaje = '¡Adivinaste!'
    } else if (intento < NUMERO_SECRETO) {
        mensaje = 'El numero secreto es mayor.'
    } else {
        mensaje = 'El numero secreto es menor.'
    }
    console.log(mensaje)
}   while (intento !== NUMERO_SECRETO)
console.log('Fin del juego')