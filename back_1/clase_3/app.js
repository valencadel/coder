// const fs = require('fs'); // importación de la librería fs

// creacion de un archivo

// fs.writeFileSync('archivo.txt', 'Hola Mundo');
// console.log('Archivo creado');

// lectura de un archivo

// const contenido = fs.readFileSync('archivo.txt', 'utf-8');
// console.log('El contenido del archivo es: ', contenido);

// agregar contenido a un archivo

// fs.appendFileSync('archivo.txt', ', chupenme los 2 huevos');
// console.log('Contenido agregado al archivo');

// eliminar un archivo

// fs.unlinkSync('archivo.txt');
// console.log('Archivo eliminado');

// const fs = require('fs').promises;

// async function crearArchivo() {
//   const data = 'contenido que va adentro del archivo';

//   try {
//     await fs.writeFile('archivo.txt', data);
//     console.log('Archivo creado');
//   } catch (error) {
//     console.error('Error al crear el archivo:', error);
//   }
// }

// crearArchivo();

import bcrypt from 'bcrypt';

function createHash(password) {
  const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(password, '=>', hash);
  return hash;
}

function isValidPassword(password, userPassword) {
  const passwordValido = bcrypt.compareSync(password, userPassword);
  console.log(password, '=>', userPassword, '=>', passwordValido);
  return passwordValido;
}

class UsersManager {
  static usuarios = [];

  static crearUsuario({nombre, apellido, usernmae, password}) {
    this.usuarios.push({
      nombre, 
      apellido, 
      usernmae, 
      password: createHash(password)
    });
    console.log('Usuario creado');
  }

  static mostrarUsuarios() {
    console.log(this.usuarios);
  }

  static validarUsuario(usernmae, password) {
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.usernmae === usernmae);
    if (!usuarioEncontrado) return console.log('Usuario no encontrado');

    const isValid = isValidPassword(password, usuarioEncontrado.password);

    if (!isValid) return console.log('Contraseña incorrecta');

    console.log('Usuario validado');
  }
}

UsersManager.crearUsuario({
  nombre: 'Valentin',
  apellido: 'Cadel',
  usernmae: 'valentin',
  password: '123456'
});

// UsersManager.mostrarUsuarios();

UsersManager.validarUsuario('valentin', '123456');