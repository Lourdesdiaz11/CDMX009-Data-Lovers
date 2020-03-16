import data from './data/pokemon/pokemon.js';

function filterType(type) {
  const filter = data.pokemon.filter((poke) => poke.type.includes(type));
  return filter;
}
function sortbyNameAZ(pokemonArray) {
  const sortName = pokemonArray.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    } if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });
  return sortName;
}
function sortbyNameZA(pokemonArray) {
  const sortName = pokemonArray.sort((prev, next) => {
    if (prev.name < next.name) {
      return 1;
    } if (prev.name > next.name) {
      return -1;
    }
    return 0;
  });
  return sortName;
}
function sortbyNumber(pokemonArray) {
  const sortNumber = pokemonArray.sort((prev, next) => {
    if (prev.num > next.num) {
      return 1;
    } if (prev.num < next.num) {
      return -1;
    }
    return 0;
  });
  return sortNumber;
}
const pokemons = {
  filterType, sortbyNameAZ, sortbyNameZA, sortbyNumber,
};
export default pokemons;
