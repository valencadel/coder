import express from 'express';
import PetsRoutes from './routes/pets.route.js';
import UsersRoutes from './routes/users.route.js';
import path from 'node:path';
import handlebars from 'express-handlebars';
import viewRoutes from './routes/views.route.js';
import { Server } from 'socket.io';

const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine()); // le defino a express que va a usar el motor de plantilla con la extension handlebars
app.set('views', path.join(process.cwd(), 'src', 'views')); // le defino a express que va a usar las vistas en la carpeta views
app.set('view engine', 'handlebars');

// si no le defino un path en el primer parametro al use, lo defaultea en '/'
// app.use(express.static(path.join(process.cwd(), 'src', 'public')))
// ahora el html solo me lo muestra si ponge /static en la url
app.use(express.static(path.join(process.cwd(), 'src', 'public')))

// si le especifico a use el primer parametro de ruta, lo aplica siempre a la misma
app.use('/api/users', UsersRoutes);
app.use('/api/pets', PetsRoutes);
app.use('/', viewRoutes)

const httpServer = app.listen(PORT,() => { //esto va a devolver una instancia del servidor http
  console.log(`Server is running on port ${PORT}`);
})

const serverSocket = new Server(httpServer) // creo un servidor de socket.io

const BBDD_CHAT = [];

serverSocket.on('connection', (socket) => { // cuando un cliente se conecta, se ejecuta esta funcion, el metodo on es para escuchar eventos. Hay eventos por defecto, como el connection, que hace referncia a cada vez que un cliente nuevo se conecta
  console.log('nuevo cliente conectado ->', socket.id)
  
  // socket.on('mensaje', (data) => { // el servidor debe estar escuchando el evento que envia el cliente.
  //   console.log(data)
    
  //   serverSocket.emit('respuesta_mensaje', 'Un usuario me saludó desde el servidor')
    // cuando el servidor emite, el cliente debe estar escuchando dicho evento.
  // })

  socket.on('usuario_conectado', (data) => {
    console.log('nuevo usuario conectado ->', data.username)
    // Una vez que el usuario se registra, enviamos el historial de mensajes
    socket.emit('lista_mensajes', BBDD_CHAT);
  });

  socket.on('mensaje', (data) => { // data es el objeto que envia el cliente -> { username: 'nombre', message: 'mensaje' }
    const messageWithTimestamp = {
      ...data,
      timestamp: new Date().toLocaleTimeString()
    };
    BBDD_CHAT.push(messageWithTimestamp);
    serverSocket.emit('lista_mensajes', BBDD_CHAT);
  })
})