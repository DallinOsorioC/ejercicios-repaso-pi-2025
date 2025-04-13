/**
 * 44. Aplicar IVA a productos

Tema: map()

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
Crea un nuevo arreglo con los precios incluyendo 12% de IVA.

Muestra el nuevo arreglo con los precios modificados.

 */

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 }
]

const IVA = 0.12
const preciosConIVA = productos.map(producto => {
    return {
        ...producto,
        precio: (producto.precio * (1 + IVA)).toFixed(2) 
    }
})

console.log(preciosConIVA)