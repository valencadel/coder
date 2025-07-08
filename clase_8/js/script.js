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

// Botones search
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const searchResult = document.getElementById('searchResult');

// Botones list
const loadAllBtn = document.getElementById('loadAllBtn');
const load20Btn = document.getElementById('load20Btn');
const clearListBtn = document.getElementById('clearListBtn');
const pokemonList = document.getElementById('pokemonList');

// evento search
searchBtn.addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemonSearch').value;
    fetchOnePokemon(pokemonName);
});

// evento random
randomBtn.addEventListener('click', () => {
    fetchARandomPokemon();
});


async function fetchPokemonList() {
    try {
        const response = await fetch(POKEMON_LIST_ENDPOINT);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        handlePokemonError(error, pokemonList, 'Error al cargar la lista de Pokémon');
    }
};


async function fetchOnePokemon(id) {
    if (!id) {
        handlePokemonError(new Error('No Pokemon ID provided'), searchResult);
        return;
    }

    try {
        const response = await fetch(POKEMON_ENDPOINT + id);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        console.log(data);
        displayPokemonInSearch(data);
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        handlePokemonError(error, searchResult);
    }
}

async function fetchARandomPokemon() {
    const response = await fetch(POKEMON_ENDPOINT + Math.floor(Math.random() * 151));
    const data = await response.json();
    console.log(data);
    displayPokemonInSearch(data);
}


function handlePokemonError(error, targetElement, customMessage = null) {
    let errorMessage = customMessage || 'Ha ocurrido un error.';
    
    if (!customMessage) {
        if (error.message === 'No Pokemon ID provided') {
            errorMessage = 'Por favor ingrese un nombre o ID de Pokémon.';
        } else if (error.message === 'Pokemon not found') {
            errorMessage = 'No se encontró ningún Pokémon con ese nombre.';
        } else if (error.message.includes('fetch')) {
            errorMessage = 'Error de conexión. Verifique su conexión a internet.';
        }
    }

    if (targetElement) {
        targetElement.innerHTML = `<p class="error-message">${errorMessage}</p>`;
    } else {
        console.error('Error:', errorMessage);
    }
}

function displayPokemonInSearch(pokemon) {
    searchResult.innerHTML = '';
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemon-card';
    pokemonCard.innerHTML = `
        <img class="pokemon-image" style="display: block; margin: 0 auto;" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>Tipo: ${pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)} ${
          pokemon.types[1]?.type.name ? ' / ' + pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1) : ''
        }</p>
        <p>Habilidades: ${pokemon.abilities.map(ability => ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)).join(', ')}</p>
    `;
    searchResult.appendChild(pokemonCard);
}

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