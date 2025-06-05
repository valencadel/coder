// Get button references
const saludo = document.getElementById('saludo');
const localStorageBtn = document.getElementById('localStorageBtn');
const sessionStorageBtn = document.getElementById('sessionStorageBtn');

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

const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    saludo.textContent = `¡Hola ${nombreGuardado}!`;
}
