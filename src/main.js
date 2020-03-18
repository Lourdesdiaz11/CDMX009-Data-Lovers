import data from './data/pokemon/pokemon.js';
import pokemons from './data.js';

const root = document.querySelector('#root'); // dibujamos la tabla
const elementType = document.getElementsByClassName('elementType');
const currentPokemon = data.pokemon;
const selectSort = document.getElementById('select');

// funcion llenado tarjeta pokemon
function printData() {
  const scree = document.getElementById('_welcome');
  scree.style = 'display:none';
  document.getElementById('_welcome1').style.display = 'block';
  currentPokemon.forEach((pokemon) => { // recorremos todos los productos
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
    <dt>WEAKNESSES:</dt>
    <dt>${pokemon.weaknesses}</dt></div>
    </div>`;
    root.insertAdjacentHTML('beforeend', namePokemon);
  });
}
document.getElementById('meet1').addEventListener('click', printData);
// funcion filtros por tipo de elemento
function printData1(dataType) {
  root.innerHTML = '';
  dataType.forEach((pokemon) => { // recorremos todos los productos
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
    <dt>WEAKNESSES:</dt>
    <dt>${pokemon.weaknesses}</dt></div>
    </div>`;
    root.insertAdjacentHTML('beforeend', namePokemon);
  });
}
// funcion de filtrado de TIPO , A-Z y de Z-A
for (let i = 0; i < elementType.length; i += 1) {
  elementType[i].addEventListener('click', () => {
    const elementPokemon = elementType[i].id;
    const pokemonType = pokemons.filterType(elementPokemon);
    printData1(pokemonType);
    selectSort.addEventListener('change', () => {
      const valueSelect = selectSort.value;
      let pokemonsOrdered = [];
      if (valueSelect === 'orderAZ') {
        pokemonsOrdered = pokemons.sortbyNameAZ(pokemonType);
      } else if (valueSelect === 'orderZA') {
        pokemonsOrdered = pokemons.sortbyNameZA(pokemonType);
      } else if (valueSelect === 'defaultOption') {
        pokemonsOrdered = pokemons.sortbyNumber(pokemonType);
      }
      printData1(pokemonsOrdered);
    });
  });
}
selectSort.addEventListener('change', () => {
  const valueSelect1 = selectSort.value;
  let pokemonsOrdered1 = [];
  if (valueSelect1 === 'orderAZ') {
    pokemonsOrdered1 = pokemons.sortbyNameAZ(currentPokemon);
  } else if (valueSelect1 === 'orderZA') {
    pokemonsOrdered1 = pokemons.sortbyNameZA(currentPokemon);
  }else if (valueSelect1 === 'defaultOption') {
    pokemonsOrdered1 = pokemons.sortbyNumber(currentPokemon);
  }
  printData1(pokemonsOrdered1);
});
