/**
 * 40. Validar correo electrónico

Tema: lógica dentro de función

Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."

Si es así, muestra "Correo válido", si no, "Correo inválido".

Solicita un correo al usuario.
 */

let readlineSync = require('readline-sync');
let correo = readlineSync.question("Introduce tu correo electrónico: ");

function validarCorreo(correo) {
  if (correo.includes('@') && correo.includes('.')) {
    console.log("Correo válido");
  } else {
    console.log("Correo inválido");
  }
}

validarCorreo(correo)