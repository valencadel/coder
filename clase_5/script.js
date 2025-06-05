// Get button references
const saludo = document.getElementById('saludo');
const localStorageBtn = document.getElementById('localStorageBtn');
const sessionStorageBtn = document.getElementById('sessionStorageBtn');
const clearLocalStorageBtn = document.getElementById('clearLocalStorageBtn');
const clearSessionStorageBtn = document.getElementById('clearSessionStorageBtn');

// Local Storage button event
localStorageBtn.addEventListener('click', () => {
    // Add your local storage functionality here
    const nombre = prompt('Ingrese su nombre');
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        saludo.textContent = `¡Hola ${nombre}!`;
    }
});

// Session Storage button event
sessionStorageBtn.addEventListener('click', () => {
    localStorage.removeItem('nombreUsuario');
    saludo.textContent = '¡Hola!';
});

// Clear Local Storage button event
clearLocalStorageBtn.addEventListener('click', () => {
    localStorage.clear();
    console.log('Local Storage cleared');
    alert('Local Storage has been cleared!');
});

// Clear Session Storage button event
clearSessionStorageBtn.addEventListener('click', () => {
    sessionStorage.clear();
    console.log('Session Storage cleared');
    alert('Session Storage has been cleared!');
});

const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    saludo.textContent = `¡Hola ${nombreGuardado}!`;
};

let nombre2 = 'Raul';
let edad = 45

localStorage.setItem('nombrePersona', nombre2);
localStorage.setItem('edadPersona', edad);

let nombrePersona = localStorage.getItem('nombrePersona');
let edadPersona = parseInt(localStorage.getItem('edadPersona'));

console.log(nombrePersona);
console.log(edadPersona);

let nombreSession = 'Pepito';
let edadSession = 20;

sessionStorage.setItem('nombreSession', nombreSession);
sessionStorage.setItem('edadSession', edadSession);

