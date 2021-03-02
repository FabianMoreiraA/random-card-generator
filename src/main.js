/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icono = tipoCarta();

  document.getElementById("numc").innerHTML = numeroCarta();
  if (icono == "&hearts;" || icono == "&diams;") {
    document.getElementById("icontop").classList.add("bottomIconRed");
    document.getElementById("iconbottom").classList.add("topIconRed");
    document.getElementById("icontop").innerHTML = icono;
    document.getElementById("iconbottom").innerHTML = icono;
  } else {
    document.getElementById("icontop").classList.add("bottomIcon");
    document.getElementById("iconbottom").classList.add("topIcon");
    document.getElementById("icontop").innerHTML = icono;
    document.getElementById("iconbottom").innerHTML = icono;
  }
  console.log(icono);
  console.log(numeroCarta());
};

function tipoCarta() {
  let figura = Math.floor(Math.random() * 4) + 1;
  let cartaFigura = "";
  switch (figura) {
    case 1:
      cartaFigura = "&spades;";
      break;
    case 2:
      cartaFigura = "&clubs;";
      break;
    case 3:
      cartaFigura = "&hearts;";
      break;
    case 4:
      cartaFigura = "&diams;";
      break;
  }
  return cartaFigura;
}

function numeroCarta() {
  let numCarta = Math.floor(Math.random() * 13) + 1;
  let carta = "";
  switch (numCarta) {
    case 11:
      carta = "J";
      break;
    case 12:
      carta = "Q";
      break;
    case 13:
      carta = "K";
      break;
    default:
      carta = numCarta;
  }
  return carta;
}
