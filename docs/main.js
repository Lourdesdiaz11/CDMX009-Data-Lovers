//import { example } from './data.js';

const showPokemons = document.getElementById('meet1');
const dataPokemon = window.POKEMON.pokemon;
const root = document.getElementById('root');

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
showPokemons.addEventListener("click",() => {
   printData(dataPokemon)
})
