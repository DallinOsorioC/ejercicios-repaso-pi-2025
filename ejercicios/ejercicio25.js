/**
 * Menú interactivo (simulado)

Tema: do...while

Simula un menú que se muestra al menos una vez.

Si opcion es "A", muestra "Bienvenid@".

Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".

Repite mientras opcion no sea "3".
 */
let readline = require('readline-sync');

let opcion = "";
let nombreIngresado = "";
let mensaje = "";
do {
  opcion = readline.question("Ingrese una opción:\nA. Bienvenid@\nB. Bienvenid@ con nombre\n3. Salir ");

  switch (opcion) {
    case "A":
      mensaje = "Bienvenid@";
      break;
    case "B":
      nombreIngresado = readline.question("Ingrese su nombre:");
      mensaje = `Bienvenid@ ${nombreIngresado}`;
      break;
    case "3":
      mensaje = "Saliendo...";
      break;
    default:
      mensaje = "Opción no válida. Intente nuevamente.";
  }

  if (opcion !== "3") {
    console.log(mensaje);
  }
}while (opcion !== "3");