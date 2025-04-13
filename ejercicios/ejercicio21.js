/**
 * Tema: switch + strings

let opcion = 'editar'
Muestra según el valor de opcion:

"ver" → "Mostrando perfil"
"editar" → "Editando datos"
"salir" → "Saliendo del sistema"
Otro → "Opción no válida"
 */
let opcion = 'editar'

switch (opcion) {
    case 'ver':
        console.log("Mostrando perfil")
        break
    case 'editar':
        console.log("Editando datos")
        break
    case 'salir':
        console.log("Saliendo del sistema")
        break
    default:
        console.log("Opción no válida")
}
