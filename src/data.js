// import data from './data/pokemon/pokemon.js';
export function filterType(allPokemon, elementPokemon) {
  const filtered = [];
  for (let i = 0; i < allPokemon.length; i += 1) {
    for (let e = 0; e < allPokemon[i].type.length; e += 1) {
      if (allPokemon[i].type[e] === elementPokemon) {
        filtered.push(allPokemon[i]);
      }
    }
  }
  return filtered;
}
export function sortbyNameAZ(pokemonArray) {
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
export function sortbyNameZA(pokemonArray) {
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
export function sortbyNumber(pokemonArray) {
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

/* export function filterName(allPokemon, namepokemon) {
  let filtered1 = [];
      for (let i = 0; i < allPokemon.length; i++){
          for (let e = 0; e < allPokemon[i].id.length; e++) {
              if(allPokemon[i].id[e] === elementPokemon){
                  filtered.push(allPokemon[i]);
              }
          }
      }
      return filtered1;
  } */
