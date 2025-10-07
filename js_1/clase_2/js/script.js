const user = 'valentin';
const password = '1234';
let intentos = 3;
let ingreso = false;

// for (let i = 0; i < intentos; i++) {
//   let userIngresado = prompt('Ingrese su usuario');
//   let passwordIngresado = prompt('Ingrese su contraseña');

//   if (userIngresado === user && passwordIngresado === password) {
//     alert('Bienvenido');
//   } else if (userIngresado === user && passwordIngresado !== password) {
//     alert('La contraseña es incorrecta');
//   } else if (userIngresado !== user && passwordIngresado === password) {
//     alert('El usuario es incorrecto');
//   } else {
//     alert('Usuario o contraseña incorrectos');
//   }
// };

let passwordIngresado = prompt('Ingrese su contraseña');

while (passwordIngresado != password) {
  passwordIngresado = prompt('Ingrese su contraseña');
  if (passwordIngresado === password) {
    alert('Bienvenido');
  } else {
    alert('La contraseña es incorrecta');
  }
}

const mensaje = document.getElementById("mensaje");

let descuentoInicial;

const descuentoPredeterminado = 10;
let descuentoAplicado = descuentoInicial ?? descuentoPredeterminado;
mensaje.textContent = `El descuento es del ${descuentoAplicado}%`;
