/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(lista) {
    let numeroAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numeroAleatorio];
  }

  let pinta = ["♦", "♥", "♠", "♣"];
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function generarCarta() {
    let pintaCarta = aleatorio(pinta);
    let elementoPintaCarta = document.querySelector("#pintaCartaArriba");
    elementoPintaCarta.innerHTML = pintaCarta;

    let numeroCarta = aleatorio(numero);
    let elementoNumeroCarta = document.querySelector("#numeroCarta");
    elementoNumeroCarta.innerHTML = numeroCarta;
    let elementoPintaCartaAbajo = document.querySelector("#pintaCartaAbajo");
    elementoPintaCartaAbajo.innerHTML = pintaCarta;

    elementoPintaCartaAbajo.style.transform = "rotate(180deg)";

    if (pintaCarta == "♥" || pintaCarta == "♦") {
      elementoPintaCartaAbajo.style.color = "red";
      elementoPintaCarta.style.color = "red";
      elementoNumeroCarta.style.color = "red";
    } else {
      elementoPintaCartaAbajo.style.color = "black";
      elementoPintaCarta.style.color = "black";
      elementoNumeroCarta.style.color = "black";
    }
  }

  generarCarta();

  let generarCartaBtn = document.querySelector("#generarCartaBtn");
  generarCartaBtn.addEventListener("click", generarCarta);
};
