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


// ---- EJEMPLO FOR EACH ----
// array de palabras
const palabras = ['Hola', 'Mundo', 'JavaScript']; 

palabras.forEach(palabra => {
  console.log(palabra);
});

// array de objetos
// find es ideal cuando solo queres el primer elemento que cumpla con una condicion
// filter es ideal cuando queres todos los elementos que cumplen con una condicion
const cursos = [
  {
    nombre: 'JavaScript',
    duracion: 30,
    precio: 1000,
    
  },
  {
    nombre: 'Python',
    duracion: 20,
    precio: 800,
  },
  {
    nombre: 'Java',
    duracion: 40,
    precio: 1200,
  },
  {
    nombre: 'C#',
    duracion: 50,
    precio: 1500,
  },
  {
    nombre: 'Ruby',
    duracion: 60,
    precio: 1800,
  },
];

const cursos2 = [
  {
    nombre: 'JavaScript',
    duracion: 30,
    precio: 1000,
    
  },
  {
    nombre: 'Python',
    duracion: 20,
    precio: 800,
  },
  {
    nombre: 'Java',
    duracion: 40,
    precio: 1200,
  },
  {
    nombre: 'C#',
    duracion: 50,
    precio: 1500,
  },
  {
    nombre: 'Ruby',
    duracion: 60,
    precio: 1800,
  },
]

// podemos usar el find con una funcion flecha (arrow function) o funcion anonima
const resultado = cursos.find(curso => curso.nombre === 'JavaScript');
console.log(resultado);

// tambien se puede hacer con una funcion tradicional
const resultado2 = cursos.find(function(curso) {
  return curso.precio > 1000;
});
console.log(resultado2);

const noExiste = cursos.find(curso => curso.nombre === 'PHP');
console.log(noExiste);

const resultado3 = cursos.filter(curso => curso.precio > 1000);
console.log(resultado3);


// ---- EJEMPLO MAP ----
const nombres = cursos.map(curso => curso.nombre);
console.log(nombres);

const duraciones = cursos.map(curso => curso.duracion);
console.log(duraciones);

const cursoConDescuento = cursos.map(curso =>{
  return {
    ...curso,
    precio: curso.precio * 0.8,
  }
})
console.log(cursoConDescuento);

const duracionHoras = cursos.map(curso => curso.duracion * 60)
console.log(duracionHoras);


// ---- EJEMPLO REDUCE ----
const total = cursos.reduce((acumulado, curso) => acumulado + curso.precio, 0);
console.log(total);

const total2 = cursos.reduce((acumulado, curso) => {
  return acumulado + curso.precio;
}, 0);
console.log(total2);

const precioMasBarato = cursos.reduce((precioMasBarato, curso) => {
  if (curso.precio < precioMasBarato) {
    return curso.precio;
  }
  return precioMasBarato;
}, cursos[0].precio);
console.log(precioMasBarato);

const frutas = ['manzana', 'banana', 'naranja', 'uva', 'manzana', 'manzana', 'uva', 'naranja', 'uva', 'manzana', 'banana', 'naranja', 'uva', 'manzana', 'manzana', 'uva', 'naranja', 'uva'];

const contarFrutas = frutas.reduce((contador, fruta) => {
  contador[fruta] = (contador[fruta] || 0) + 1;
  return contador;
}, {});
console.log(contarFrutas);


// ---- EJEMPLO SORT ----
const numeros2 = [5, 2, 9, 1, 3, 6];

numeros2.sort((a, b) => a - b);
console.log(numeros2);

const palabras3 = ['auto', 'casa', 'Moto', 'barco', 'Avion'];
palabras3.sort();
console.log(palabras3);

const palabras4 = ['auto', 'casa', 'Moto', 'barco', 'avion'];
palabras4.sort((a, b) => a.localeCompare(b));
console.log(palabras4);

const cursosOrdenados = cursos.sort((a, b) => a.precio - b.precio);
console.log(cursosOrdenados);

const cursos2Ordenados = cursos2.sort((a, b) => b.precio - a.precio);
console.log(cursos2Ordenados);
