// Pokemon API Practice - JavaScript File
// This file is intentionally left empty for you to implement the functionality

// API Base URL: https://pokeapi.co/api/v2/

// Available endpoints:
// - Pokemon: https://pokeapi.co/api/v2/pokemon/{id or name}
// - Pokemon List: https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
// - Pokemon Species: https://pokeapi.co/api/v2/pokemon-species/{id or name}

// TODO: Implement the following functionality:
// 1. Search Pokemon by name or ID
// 2. Load Pokemon list (all 151 or first 20)
// 3. Display Pokemon details
// 4. Error handling for API calls
// 5. Loading states
// 6. Random Pokemon functionality

console.log('Pokemon API Practice - Ready to implement!');

// Base URL
const API_BASE = 'https://pokeapi.co/api/v2/';

// Endpoints
const POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON_LIST_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

async function fetchPokemonList() {
    try {
        const response = await fetch(POKEMON_LIST_ENDPOINT);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
    }
};

// fetchPokemonList();

// async function first() {
//   console.log("Primera función");
//   second();
//   console.log("Primera función - Parte 2");
// }

// function second() {
//   console.log("Segunda función");
// }

// first();

// Ejemplo de setTimeout
// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esto es asincrónico");
// }, 2000);

// console.log("Fin");

try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Se produjo un error:", error.message);
} finally {
  console.log("Operación completada.");
}

function dividir(a, b) {
  if (b === 0) {
      throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}