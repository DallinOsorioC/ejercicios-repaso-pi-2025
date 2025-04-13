/**
 * 28. Validación de contraseña

Tema: verificación en do...while

const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.

Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final.
 */
let readline = require('readline-sync')
const CONTRASENA_CORRECTA = 'claveSegura'
let contrasenaIngresada = ''
let mensaje = ''
do {
    contrasenaIngresada = readline.question('Ingrese la contrasenia: ')
    if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
        mensaje = 'Contraseña incorrecta'
    } else {
        mensaje = 'Acceso permitido'
    }
    console.log(mensaje)
} while (contrasenaIngresada !== CONTRASENA_CORRECTA)