/**
 * 32. Buscar un nombre

Tema: búsqueda en arreglo

const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']
Busca si "Lucía" está en el arreglo.

Si está, muestra "Nombre encontrado".

Si no, muestra "Nombre no encontrado".

 */

const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']
const nombreABuscar = 'Lucía'

let encontrado = false
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreABuscar) {
        encontrado = true
        break
    }
}

if (encontrado) {
    console.log("Nombre encontrado")
}else {
    console.log("Nombre no encontrado")
}