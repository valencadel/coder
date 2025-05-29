const array = [1, 2, 3, 4, 5];
console.log(array.splice())
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array.forEach(element => {
//     console.log(element);
// });


// let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
// let indice = nombres.indexOf('José');
// console.log(indice); 

// let numeros = [40,1,5,200,34];
// numeros.sort((a, b) => a - b);
// console.log(numeros); 
// numeros.join();
// console.log(numeros); 

// let palabras = ["auto", "zorro", "programacion", "Banana"];
// palabras.sort((a,b) => a.localeCompare(b));
// console.log(palabras); 

// numeros.reverse();
// console.log(numeros); 

// let palabras2 = ["auto", "zorro", "programacion", "Banana"];
// let resultado = palabras2.join();
// console.log(resultado);

const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
}

console.log(persona);

const semaforo = {
    rojo: 'detenerse',
    amarillo: 'precaucion',
    verde: 'continuar'
}

console.log(semaforo.rojo);

let arrayObjetos = [];
arrayObjetos.push({
    id: 1,
    nombre: 'producto 1'
});
arrayObjetos.push({
  id: 2,
  nombre: 'producto 2'
});
arrayObjetos.push({
  id: 3,
  nombre: 'producto 3'
});
console.log(arrayObjetos);

for (let objeto of arrayObjetos) {
  console.log(objeto.nombre);
}
