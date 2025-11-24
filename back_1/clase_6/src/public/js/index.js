console.log('este se ve por consola en pantalla')
const socket = io();

socket.emit('mensaje', 'Hola desde el cliente'); // el cliente esta emitiendo el mensaje para que el servidor lo escuche.

socket.on('respuesta_mensaje', (data) => {
  console.log('el servidor me envio el evento respuesta_mensaje con esta info:', data)
  // el cliente (index.js) esta escuchando el evento respuesta_mensaje que envia el servidor (app.js) y cuando lo recibe, ejecuta la funcion que le pasamos como segundo parametro.
})