"use strict";

var drumKey = document.querySelectorAll(".drum");

for (var i = 0; i < drumKey.length; i++) {
  drumKey[i].addEventListener("click", mouseClick);
}

function mouseClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  console.log(key);
  switch (key) {
    case "w":
      var audio = new Audio("/sounds/crash.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "a":
      var audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "s":
      var audio = new Audio("/sounds/snare.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "d":
      var audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "j":
      var audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "k":
      var audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    case "l":
      var audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      document.querySelector(`.${key}`).style.color = "red";
      break;

    default:
      break;
  }
}
