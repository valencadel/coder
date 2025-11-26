console.log('este se ve por consola en pantalla')
const socket = io();
const box = document.getElementById('box');
const appChat = document.getElementById('app-chat');
const teclaEnter = 'Enter';

// socket.emit('mensaje', 'Hola desde el cliente'); // el cliente esta emitiendo el mensaje para que el servidor lo escuche.

// socket.on('respuesta_mensaje', (data) => {
//   console.log('el servidor me envio el evento respuesta_mensaje con esta info:', data)
//   // el cliente (index.js) esta escuchando el evento respuesta_mensaje que envia el servidor (app.js) y cuando lo recibe, ejecuta la funcion que le pasamos como segundo parametro.
// })

let username = '';

Swal.fire({
  title: '¿Quien eres?',
  input: 'text',
  text: 'Escribe tu nombre',
  allowOutsideClick: false,
  inputValidator: (value) => {
    if (!value) {
      return 'Debes escribir un nombre'
    }
    return null;
  }
}).then((result) => {
  username = result.value;

  const welcomeMessage = document.getElementById('welcome-message');
  if (welcomeMessage) {
    welcomeMessage.textContent = `Bienvenid@ al chat ${username}!`;
  }

  socket.emit('usuario_conectado', { username });
})

box.addEventListener('keyup', (event) => {
  const { key, target } = event;
  if (key === teclaEnter && target.value.trim() !== '') {
    socket.emit('mensaje', { // el cliente esta emitiendo el mensaje para que el servidor lo escuche.
      username: username,
      message: target.value
    });
    box.value = ''; // limpia el input
  }
});

socket.on('lista_mensajes', (data) => {
  console.log('el servidor me envio el evento lista_mensajes con esta info:', data)
  // el cliente (index.js) esta escuchando el evento lista_mensajes que envia el servidor (app.js) y cuando lo recibe, ejecuta la funcion que le pasamos como segundo parametro.
  
  appChat.innerHTML = '';
  // limpio el chat para mostrar "solo" los mensajes nuevos
  data.forEach(chatMessage => {
    const p = document.createElement('p');
    p.innerText = `[${chatMessage.timestamp}] ${chatMessage.username}: ${chatMessage.message}`;
    appChat.appendChild(p);
  });
});