import data from './data/pokemon/pokemon.js';

export function filterType(dataPokemon, elementPokemon) {
  return dataPokemon.filter(pokemon => {
    // let typePokemon = pokemon.type[0]
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemon.type[i] === elementPokemon) {
        return true
      }
    }
  });
}

export function sortbyNameAZ(pokemonArray) {
  const sortName =
    pokemonArray.sort((prev, next) => {
      if (prev.name > next.name) {
        return 1;
      } else if (prev.name < next.name) {
        return -1;
      } else {
        return 0;
      }
    });
  return sortName
}

export function sortbyNameZA(pokemonArray) {
  const sortName =
    pokemonArray.sort((prev, next) => {
      if (prev.name < next.name) {
        return 1;
      } else if (prev.name > next.name) {
        return -1;
      } else {
        return 0;
      }
    });
  return sortName
}
