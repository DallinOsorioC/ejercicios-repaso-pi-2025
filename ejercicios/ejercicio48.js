/**
 * 48. Verificar si un producto está en la lista

Tema: includes()

const productos = ['Mouse', 'Teclado', 'Monitor']
Verifica si "Monitor" está en el arreglo.

Muestra true o false.
 */

const productos = ['Mouse', 'Teclado', 'Monitor']
const productoBuscado = 'Monitor'
const existe = productos.includes(productoBuscado)
console.log(existe) 