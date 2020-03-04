//import { example } from './data.js';

const showPokemons = document.getElementById('meet1');
const _showAll = document.getElementById('showAll');
const dataPokemon = window.POKEMON.pokemon;
const root = document.getElementById('root');
const elementType = document.getElementsByClassName('elementType')

function showAndHide (){
  let screen = document.getElementById("_welcome");
  screen.style = "display:none";
  document.getElementById('_welcome1').style.display ="block";
}

//funcion que jala la data con la prepiedades que especifique

const printData = (data) => {
  root.innerHTML = '';
  data.forEach(pokemon => {
    let namePokemon = `<div class="tarjeta"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
<p> TYPE: ${pokemon.type} </p>
`
    root.insertAdjacentHTML("beforeend", namePokemon);
  })
}

//funcion que imprime la data filtrada por elementos
for (let i = 0; i < elementType.length; i++) {
  elementType[i].addEventListener('click', () => {
    let elementPokemon = elementType[i].id;
    let pokemonType = window.pokemon.filterPokemons(dataPokemon, elementPokemon);
    window.pokemon.ordenarPorNombre(pokemonType);
    printData(pokemonType);


  });


}
showPokemons.addEventListener("click",() => {
   printData(dataPokemon)
})
_showAll.addEventListener("click",() => {
   printData(dataPokemon)
})
