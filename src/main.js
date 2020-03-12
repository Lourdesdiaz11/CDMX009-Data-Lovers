import data from './data/pokemon/pokemon.js';
import {
  filterType, sortbyNameAZ, sortbyNameZA, sortbyNumber,
} from './data.js';

const root = document.querySelector('#root'); // dibujamos la tabla
const elementType = document.getElementsByClassName('elementType');
// const showAll = document.getElementById('showAll');
// const order =document.getElementById('Order');
const allPokemon = data.pokemon;
const currentPokemon = allPokemon;
let selectSort = document.getElementById('select');
let valueSelect = selectSort.value;
let pokemonsOrdered = [];

// funcion llenado tarjeta pokemon
function printData() {
  data.pokemon.forEach((pokemon) => { // recorremos todos los productos
    const namePokemon = `<div  class="tarjeta" id="card"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
    <dt>TYPE: ${pokemon.type} </dt>
    <div class="overlay translucent"></div>
    <div class="overlay">
    <dt>HEIGHT:${pokemon.height}</dt>
    <dt>WEIGHT:${pokemon.weight}</dt>
    <dt>CANDY:${pokemon.candy}</dt>
    <dt>CANDY COUNT:${pokemon.candy_count}</dt>
    <dt>EGG: ${pokemon.egg}</dt>
    <dt>SPAWN CHANCE: ${pokemon.spawn_chance}</dt>
    <dt>AVERANGE SPAWNS: ${pokemon.avg_spawns}</dt>
    <dt>SPAWN TIME:${pokemon.spawn_time}</dt>
    <dt>MULTIPLIERS:${pokemon.multipliers}</dt>
    <dt>WEAKNESSES:${pokemon.weaknesses}</dt></div>
    </div>`;
    root.insertAdjacentHTML('beforeend', namePokemon);
  });
}
document.getElementById('meet1').addEventListener('click', printData);
// funcion filtros por tipo de elemento
function printData1(data) {
  root.innerHTML = '';
  data.forEach((pokemon) => { // recorremos todos los productos
    const namePokemon = `<div  class="tarjeta" id="card"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
    <dt>TYPE: ${pokemon.type} </dt>
    <div class="overlay translucent"></div>
    <div class="overlay">
    <dt>HEIGHT:${pokemon.height}</dt>
    <dt>WEIGHT:${pokemon.weight}</dt>
    <dt>CANDY:${pokemon.candy}</dt>
    <dt>CANDY COUNT:${pokemon.candy_count}</dt>
    <dt>EGG: ${pokemon.egg}</dt>
    <dt>SPAWN CHANCE: ${pokemon.spawn_chance}</dt>
    <dt>AVERANGE SPAWNS: ${pokemon.avg_spawns}</dt>
    <dt>SPAWN TIME:${pokemon.spawn_time}</dt>
    <dt>MULTIPLIERS:${pokemon.multipliers}</dt>
    <dt>WEAKNESSES:${pokemon.weaknesses}</dt></div>
    </div>`;
    root.insertAdjacentHTML('beforeend', namePokemon);
  });
}

// funcion de filtrado de TIPO , A-Z y de Z-A
for (let i = 0; i < elementType.length; i++) {
  elementType[i].addEventListener('click', () => {
    const elementPokemon = elementType[i].id;
    const pokemonType = filterType(currentPokemon, elementPokemon);
    printData1(pokemonType);
    selectSort.addEventListener('change', () => {
      if (valueSelect === 'orderAZ') {
        pokemonsOrdered = sortbyNameAZ(pokemonType);
      } else if (valueSelect === 'orderZA') {
        pokemonsOrdered = sortbyNameZA(pokemonType);
      } else if (valueSelect === 'defaultOption') {
        pokemonsOrdered = sortbyNumber(pokemonType);
      }
      printData1(pokemonsOrdered);
    });
  });
}

// funcion oculta pantalla de BIENVENIDA
function showAndHide() {
  const screen = document.getElementById('_welcome');
  screen.style = 'display:none';
  document.getElementById('_welcome1').style.display = 'block';
}
document.getElementById('meet1').addEventListener('click', showAndHide);
// Funcion muestra todos de menor a mayor
/* _showAll.addEventListener("click",() => {
sortbyNumber1_151(currentPokemon)
printData(currentPokemon)
}) */

selectSort = document.getElementById('select');
selectSort.addEventListener('change', () => {
  valueSelect = selectSort.value;
  pokemonsOrdered = [];
  if (valueSelect === 'orderAZ') {
    sortbyNameAZ(currentPokemon);
    pokemonsOrdered = sortbyNameAZ(currentPokemon);
  } else if (valueSelect === 'orderZA') {
    sortbyNameZA(currentPokemon);
    pokemonsOrdered = sortbyNameZA(currentPokemon);
  }
  // printData1(currentPokemon);
  printData1(pokemonsOrdered);
});
