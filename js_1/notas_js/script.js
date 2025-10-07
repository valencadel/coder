const number = 1000;
console.log(number);

const text = "Hola Mundo";
console.log(text);

const boolean = true;
console.log(boolean);

const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);

// alert("Hola Mundo");

// let nombre = prompt("¿Cuál es tu nombre?"); // término de entrada
// console.log("Hola, " + nombre);


let suma = 1 + 2;
console.log(suma);
if (suma > 2) {
  console.log("La suma es mayor que 2");
} else {
  console.log("La suma es menor que 2");
}

// for (let i = 0; i <= 4; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// for (; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// do {
//   console.log('Numero: ' + i);
//   i++;
// } while (i < 5)

// en el ciclo FOR, la inicializacion y la actualizacion de la variable se hace en el encabezado del ciclo  
// en el ciclo WHILE, la inicializacion suele hacerse fuera del ciclo y la actualizacion de la variable se hace en el cuerpo del ciclo
// en el ciclo DO WHILE, la inicializacion suele hacerse fuera del ciclo y la actualizacion de la variable se hace en el cuerpo del ciclo. Por otra parte, el cuerpo del ciclo se ejecuta al menos una vez.

const parrafo = document.getElementById("parrafo");
parrafo.textContent = "Parrafo modificado";

// let nombre = prompt("¿Cuál es tu nombre?");
// console.log(nombre); // imprime el valor de la variable nombre

// let edad = prompt("¿Cuál es tu edad?");
// console.log(edad); // imprime el valor de la variable edad

// let suma2 = 2 + '2'
// console.log(suma2); // imprime 22
// console.log(typeof suma2);

// let suma3 = 2 - '2'
// console.log(suma3); // imprime 0
// console.log(typeof suma3);

// console.log(2 == '2'); // true igualdad de valor sin importar el tipo 
// console.log(2 === '2'); // false igualdad de valor y tipo

// console.log(2 != '2'); // false desigualdad de valor sin importar el tipo
// console.log(2 !== '2'); // true desigualdad de valor y tipo

// console.log(2 > 1); // true mayor que
// console.log(2 < 1); // false menor que
// console.log(2 >= 1); // true mayor o igual que
// console.log(2 <= 1); // false menor o igual que

// console.log(true && false); // false && AND operator
// console.log(true || false); // true || OR operator  devuelve el primer valor true o el ultimo valor false si todos son false. Considera valores falsy como 0, '', null, undefined, NaN, false.
// console.log(!true); // false ! NOT operator
// console.log(!false); // true

// let temperatura = 32;
// let advertencia = (temperatura < 0) || (temperatura > 30);
// console.log(advertencia); // true

let edad = null;
let nombre = 'Valentin';
if (edad !== null && edad !== undefined) {
  console.log(`tienen ${edad} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log('Informacion incompleta')
  }
}

// operador nullish coalescing (??) solo devuelve el valor de la derecha si el operador de la izquierda es null o undefined. En cualquier otro caso, devuelve el valor de la izquierda.
let valor = 0;
let resultado = valor ?? 'No hay valor';
console.log(resultado);