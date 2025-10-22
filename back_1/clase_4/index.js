// npm init -y -> crea un package.json
// npm install express -> instala express que es un framework para crear servidores web en node.js
// npm install nodemon -> instala nodemon que es un servidor de desarrollo que reinicia el servidor cuando se hace un cambio en el codigo
// package.json -> scripts: "dev": "nodemon index.js" -> crea un script para ejecutar el servidor de desarrollo
// npm run dev -> ejecuta el servidor de desarrollo
// control + c -> para detener el servidor de desarrollo

// localhost:8080/ -> es la url del servidor

import express from 'express';

const app = express(); // crea una instancia de express

app.use(express.json()); // para que express pueda entender el formato json

// Array de 10 productos
const productos = [
  { id: 1, nombre: 'Auriculares Bluetooth', precio: 39999, stock: 25, tieneDescuento: true },
  { id: 2, nombre: 'Teclado Mecánico', precio: 79999, stock: 12, tieneDescuento: false },
  { id: 3, nombre: 'Mouse Gamer', precio: 34999, stock: 30, tieneDescuento: true },
  { id: 4, nombre: 'Monitor 24"', precio: 189999, stock: 8, tieneDescuento: false },
  { id: 5, nombre: 'Notebook 14"', precio: 899999, stock: 5, tieneDescuento: true },
  { id: 6, nombre: 'Silla Ergonómica', precio: 259999, stock: 10, tieneDescuento: false },
  { id: 7, nombre: 'Parlante Portátil', precio: 69999, stock: 20, tieneDescuento: true },
  { id: 8, nombre: 'Smartwatch', precio: 149999, stock: 18, tieneDescuento: false },
  { id: 9, nombre: 'Cargador USB-C', precio: 15999, stock: 40, tieneDescuento: true },
  { id: 10, nombre: 'Disco SSD 1TB', precio: 249999, stock: 7, tieneDescuento: false }
];


// crea un servidor en el puerto 8080
app.listen(8080, () => { 
    console.log('Servidor escuchando en el puerto 8080');
});

app.get('/', (req, res) => { // crea una ruta para la url /
    res.send('Hola Mundo');
});

app.get('/perfil', (req, res) => { // crea una ruta para la url /perfil
  res.send('Perfil del usuario');
});

app.get('/perfil/:id', (req, res) => { // crea una ruta para la url /perfil/:id
  const userId = req.params.id;
  res.send(`Perfil del usuario ${userId}`);
});

app.get('/productos', (req, res) => { // crea una ruta para la url /productos
  res.json(productos);
});

app.get('/productos/:id', (req, res) => { // crea una ruta para la url /productos/:id
  const productId = req.params.id;
  const idNumber = Number(productId);
  const producto = productos.find((p) => p.id === idNumber);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
});

// cuando quiero hacer una API estatica, uso el "/texto" para indicar la url especifica
// cuando quiero hacer una API dinamica, uso los parametros con los 2 puntos "/:id" para indicar en la url la parte que va a ser dinamica

// POST -> crear un recurso

app.post('/productos', (req, res) => { // crea una ruta para la url /productos
  const newProduct = req.body;
  // generar un id aleatorio para el producto
  // validar los campos del producto. En caso de no recibir alguno, responder con un 404 faltan parametros.
  // caso contrario, devolver un 200 con el id del producto y un mensaje de ok.
  productos.push(newProduct);

  res.status(201).json({payload: productos});
});

// metodo DELETE -> eliminar un recurso

app.delete('/productos/:id', (req, res) => { // crea una ruta para la url /productos/:id
  const productId = req.params.id;
  const idNumber = Number(productId);
  const producto = productos.find((p) => p.id === idNumber);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  productos = productos.filter((p) => p.id !== idNumber);
  res.status(200).json({message: 'Producto eliminado correctamente', payload: productos});
});