const parrafo = document.getElementById("parrafo");
parrafo.textContent = "Parrafo modificado";

const mensaje = document.getElementById("mensaje");

let descuentoInicial;

const descuentoPredeterminado = 10;
let descuentoAplicado = descuentoInicial ?? descuentoPredeterminado;