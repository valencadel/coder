// Helper function to display output
function display(content) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<div>${content}</div>`;
}

// Get button element
const testButton = document.getElementById('testButton');

// Add click event listener
testButton.addEventListener('click', () => {
    const timestamp = new Date().toLocaleTimeString();
    display(`Button clicked at: ${timestamp}`);
});

// Initial message
console.log("JavaScript file connected!");
display("JavaScript is ready for testing!");

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function sumar(a, b) {
//   return a + b;
// }

// let resultado = sumar(1, 2);
// console.log(resultado);

// // EJEMPLO DE AREA DE UN TRIANGULO
// // sin encapsular operaciones

// let base = 10;
// let altura = 5;
// let area = (base * altura) / 2;
// console.log(area);

// // encapsulando la logica de la funcion

// function areaTriangulo(base, altura) {
//   return (base * altura) / 2;
// }

// console.log(`El area del triangulo es ${areaTriangulo(10, 5)}`);

// // EJEMPLO DE PRECIOS CON DESCUENTOS

// function calcularPrecioConDescuento(precio, descuento) {
//   return precio - (precio * (descuento / 100));
// }

// console.log(`El precio con descuento es ${calcularPrecioConDescuento(100, 10)}`);
// console.log(`El precio con descuento es ${calcularPrecioConDescuento(100, 20)}`);

// // FUNCIONES MODULARES
// function precioFinal(precio, descuento, impuesto) {
//   let precioConDescuento = calcularPrecioConDescuento(precio, descuento);
//   return precioConDescuento + (precioConDescuento * impuesto / 100)
// }
// let total = precioFinal(100, 10, 21);
// console.log(total);

// function multa(dias) {
//   const multaPorDia = 0.5;
//   return multaPorDia * dias;
// }

// let multa1 = multa(10);
// console.log(multa1);

// function agregarLibro(titulo, autor, genero) {
//   return {titulo, autor, genero};
// }

// function mostrarLibro(libro) {
//   console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Genero: ${libro.genero}`);
// }

// let libro1 = agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fantasía");
// mostrarLibro(libro1);
