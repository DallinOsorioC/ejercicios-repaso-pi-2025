/**
 * 18. Validar usuario y contraseña

Tema: doble condición

let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.

Si lo son, imprime "Acceso permitido"; si no, "Datos incorrectos".
 */

let usuario = 'admin'
let contrasena = '1234'

if (usuario === 'admin' && contrasena === '1234') {
    console.log(`Acceso permitido`)
} else {
    console.log(`Acceso Denegado`)
}
