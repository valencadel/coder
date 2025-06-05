// AGREGAR EVENTOS A LOS BOTONES DE LOCAL STORAGE Y SESSION STORAGE
const saludo = document.getElementById('saludo');
const localStorageBtn = document.getElementById('localStorageBtn');
const sessionStorageBtn = document.getElementById('sessionStorageBtn');
const clearLocalStorageBtn = document.getElementById('clearLocalStorageBtn');
const clearSessionStorageBtn = document.getElementById('clearSessionStorageBtn');

// EVENTO DEL BOTON DE LOCAL STORAGE
localStorageBtn.addEventListener('click', () => {
    // Add your local storage functionality here
    const nombre = prompt('Ingrese su nombre');
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        saludo.textContent = `¡Hola ${nombre}!`;
    }
});

// EVENTO DEL BOTON DE SESSION STORAGE
sessionStorageBtn.addEventListener('click', () => {
    localStorage.removeItem('nombreUsuario');
    saludo.textContent = '¡Hola!';
});

// EVENTO DEL BOTON DE LIMPIAR LOCAL STORAGE
clearLocalStorageBtn.addEventListener('click', () => {
    localStorage.clear();
    console.log('Local Storage cleared');
    alert('Local Storage has been cleared!');
});

// EVENTO DEL BOTON DE LIMPIAR SESSION STORAGE
clearSessionStorageBtn.addEventListener('click', () => {
    sessionStorage.clear();
    console.log('Session Storage cleared');
    alert('Session Storage has been cleared!');
});

const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    saludo.textContent = `¡Hola ${nombreGuardado}!`;
};

// ------------------PRUEBAS DE LOCAL STORAGE Y SESSION STORAGE-------------------------------
// let nombre2 = 'Raul';
// let edad = 45

// localStorage.setItem('nombrePersona', nombre2);
// localStorage.setItem('edadPersona', edad);

// let nombrePersona = localStorage.getItem('nombrePersona');
// let edadPersona = parseInt(localStorage.getItem('edadPersona'));

// console.log(nombrePersona);
// console.log(edadPersona);

// let nombreSession = 'Pepito';
// let edadSession = 20;

// sessionStorage.setItem('nombreSession', nombreSession);
// sessionStorage.setItem('edadSession', edadSession);

// ------------------PRUEBAS DE COMO GUARDAR UN OBJETO JSON EN LOCAL STORAGE--------------------------

const usuario = {
    nombre: 'Raul',
    edad: 45,
    email: 'raul@gmail.com',
    password: '123456'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

console.log(localStorage.getItem('usuario'));

const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

console.log(usuarioGuardado);

const carrito = {
    productos: [
        {
            nombre: 'Producto 1',
            precio: 100,
            cantidad: 2
        },
        {
            nombre: 'Producto 2',
            precio: 200,
            cantidad: 1
        }
    ]
};

localStorage.setItem('carrito', JSON.stringify(carrito));

console.log(localStorage.getItem('carrito'));

const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));

console.log(carritoGuardado.productos.length);

