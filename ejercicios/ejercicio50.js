/**
 * 50. Buscar posición de un color

Tema: indexOf()

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
Encuentra y muestra la posición de "Azul" dentro del arreglo.


 */

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
const colorBuscado = 'Azul'
const posicion = colores.indexOf(colorBuscado)

if (posicion !== -1) {
    console.log(`El color ${colorBuscado} se encuentra en la posición ${posicion}.`)
}else {
    console.log(`El color ${colorBuscado} no se encuentra en el arreglo.`)
}