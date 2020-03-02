//import { example } from './data.js';

//console.log(example);

function showAndHide (){

  let screen = document.getElementById("theme");
  screen.style = "display:none";
  document.getElementById('theme1').style.display ="block";

}

document.getElementById("meet1").onclick = function() {showAndHide()};

const showPokemons = document.getElementById('showPokemons');
const dataPokemon = window.POKEMON.pokemon;
const root = document.getElementById('root');
//funcion que jala la data con la prepiedades que especifique

const printData = (data) => {
  root.innerHTML = '';

  data.forEach(pokemon => {
    let namePokemon = `<div class="tarjeta"> <h2> ${pokemon.num} </h2> <h3> ${pokemon.name} </h3>    <figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>
    <p> TYPE: ${pokemon.type} </p>
    <p>HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>CANDY:${pokemon.candy}</p>
    <p>CANDY COUNT:${pokemon.candy_count}</p>
    <p>EGG: ${pokemon.egg}</p>
    <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
    <p>SPAWN TIME:${pokemon.spawn_time}</p>
    <p>MULTIPLIERS:${pokemon.multipliers}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> </div>
    `

    root.insertAdjacentHTML("beforeend", namePokemon);


  })
}


showPokemons.addEventListener("click",() => {
   printData(dataPokemon)

})
