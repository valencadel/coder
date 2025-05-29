const Productos = []
const carrito = []
let bandera = true

function crearProducto(nombre, precio) {
  const producto = {
    // id: Productos.length + 1,
    nombre : nombre,
    precio : precio
  }

  Productos.push(producto)
}

function mostrarProductos() {
  if (Productos.length === 0) {
    alert('No hay productos para mostrar')
    return
  }
  let mensaje = 'Los productos son: \n'

  for (let i = 0; i < Productos.length; i++) {
    mensaje += `\n ${Productos[i].nombre} - $${Productos[i].precio}`
  }
  alert(mensaje)
}

const seleccionarNombres = (array) => {
  const nombresProductos = []

  for (let i = 0; i < array.length; i++) {
    nombresProductos.push(array[i].nombre)
  }
  return nombresProductos
}

const buscarProducto = function(nombre){
  const Nombres = seleccionarNombres(Productos)

  let index = Nombres.indexOf(nombre)
  if (index === -1) {
    alert('No se encontro el producto')
    return
  } else {
    const NombresCarrito = seleccionarNombres(Productos)

    let indexCarrito = NombresCarrito.indexOf(nombre)

    if (indexCarrito === -1) {
      let objetosDelCarrito = {
        nombre: Productos[index].nombre,
        precio: Productos[index].precio,
        cantidad: 1
      }
      carrito.push(objetosDelCarrito)
    } else {
      carrito[indexCarrito].cantidad += 1
    }
  }
}

const mostrarCarrito = () => {
  let mensaje = 'Los productos en el carrito son: \n'
  let total = 0

  if (carrito.length === 0) {
    alert('No hay productos en el carrito')
    return
  }
  for (let i = 0; i < carrito.length; i++) {
    mensaje += `${carrito[i].nombre} - $${carrito[i].precio}\n`
    total += carrito[i].precio
  }
  mensaje += `\n El total de la compra es: $${total}`
  alert(mensaje)
}

const menuBienvenida = "Bienvenido a la tienda de productos!\n 1- Ver productos \n 2- Agregar productos al listado\n 3- Agregar productos al carrito\n 4- Ver carrito\n 0- Salir"

while (bandera) {
  let opciones = Number(prompt(menuBienvenida))

  switch (opciones) {
    case 0:
      bandera = false
      break

    case 1:
      mostrarProductos()
      break

    case 2:
      let nombreParcial = prompt("Ingrese el nombre del producto")
      let precioParcial = Number(prompt("Ingrese el precio del producto"))
      crearProducto(nombreParcial, precioParcial)
      break

    case 3:
      let nombreParcial2 = prompt("Ingrese el nombre del producto")
      buscarProducto(nombreParcial2)
      break

    case 4:
      mostrarCarrito()
      break

    default:
      break
  }
}
