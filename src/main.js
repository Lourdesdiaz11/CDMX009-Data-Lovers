//import { example } from './data.js';

//console.log(example);

function showAndHide (){

  let screen = document.getElementById("theme");
  screen.style = "display:none";
  document.getElementById('theme1').style.display ="block";

}

document.getElementById("meet1").onclick = function() {showAndHide()};
