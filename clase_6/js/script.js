// ----  funciones de orden superior ----
// ---- EJEMPLO 1 ----
const numeros = [1, 2, 3, 4, 5];

function cadaUno(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

cadaUno(numeros, console.log);

// ---- EJEMPLO 2 ---
function mayorQue(n) {
  return function(m) {
    return m > n;
  }
}

const mayorQue10 = mayorQue(10);

console.log(mayorQue10(11));
console.log(mayorQue10(8));

// ---- EJEMPLO 3 ----
function suma(a, b) {
  return a + b;
}

function sumaDeCuadrados(a, b) {
  return suma(a * a, b * b);
}

console.log(sumaDeCuadrados(2, 3));


