
import data from './data/pokemon/pokemon.js';
import {filterType,sortbyName} from './data.js';


// import {typeFilter} from './data.js';

let root = document.querySelector('#root'); //dibujamos la tabla
let elementType = document.getElementsByClassName('elementType');
const _showAll = document.getElementById('showAll');
const dataPokemon = data.pokemon;

//funcion llenado tarjeta pokemon
function printData(){
  root.innerHTML = '';
  data.pokemon.forEach(pokemon =>{ //recorremos todos los productos
   let namePokemon = `<div class="tarjeta"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
    <dt>TYPE: ${pokemon.type} </dt>
    <dt>HEIGHT:${pokemon.height}</dt>
    <dt>WEIGHT:${pokemon.weight}</dt>
    <dt>CANDY:${pokemon.candy}</dt>
    <dt>CANDY COUNT:${pokemon.candy_count}</dt>
    <dt>EGG: ${pokemon.egg}</dt>
    <dt>SPAWN CHANCE: ${pokemon.spawn_chance}</dt>
    <dt>AVERANGE SPAWNS: ${pokemon.avg_spawns}</dt>
    <dt>SPAWN TIME:${pokemon.spawn_time}</dt>
    <dt>MULTIPLIERS:${pokemon.multipliers}</dt>
    <dt>WEAKNESSES:${pokemon.weaknesses}</dt></div>`
      root.insertAdjacentHTML("beforeend", namePokemon);
 })}
 document.getElementById("meet1").addEventListener('click',printData);
//funcion filtros por tipo de elemento
 function printData1(data){
   root.innerHTML = '';
   data.forEach(pokemon =>{ //recorremos todos los productos
    let namePokemon = `<div class="tarjeta"><figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>  ${pokemon.num} ${pokemon.name}
     <dt>TYPE: ${pokemon.type} </dt>
     <dt>HEIGHT:${pokemon.height}</dt>
     <dt>WEIGHT:${pokemon.weight}</dt>
     <dt>CANDY:${pokemon.candy}</dt>
     <dt>CANDY COUNT:${pokemon.candy_count}</dt>
     <dt>EGG: ${pokemon.egg}</dt>
     <dt>SPAWN CHANCE: ${pokemon.spawn_chance}</dt>
     <dt>AVERANGE SPAWNS: ${pokemon.avg_spawns}</dt>
     <dt>SPAWN TIME:${pokemon.spawn_time}</dt>
     <dt>MULTIPLIERS:${pokemon.multipliers}</dt>
     <dt>WEAKNESSES:${pokemon.weaknesses}</dt></div>`
     root.insertAdjacentHTML("beforeend", namePokemon);

  })}
for (let i = 0; i < elementType.length; i++) {
  elementType[i].addEventListener('click', () => {
    let elementPokemon = elementType[i].id;
    let pokemonType = filterType(dataPokemon, elementPokemon);
    let filter=sortbyName(pokemonType);
     printData1(filter);
  });
}
//funcion oculta pantalla de BIENVENIDA
function showAndHide (){
  let screen = document.getElementById("_welcome");
  screen.style = "display:none";
  document.getElementById('_welcome1').style.display ="block";
}

document.getElementById("meet1").addEventListener('click',showAndHide);

_showAll.addEventListener("click",() => {
   printData(dataPokemon)
})
