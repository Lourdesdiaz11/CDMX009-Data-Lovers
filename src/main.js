//import { example } from './data.js';

//console.log(example);

function showAndHide (){

  let screen = document.getElementById("theme");
  screen.style = "display:none";
  document.getElementById('theme2').style.display ="block";
}

document.getElementById("meet").onclick = function() {showAndHide()};
