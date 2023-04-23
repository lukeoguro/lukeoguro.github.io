import './style.css';

// Menu
const menu = document.getElementById("menu");
const menuItems = [...document.getElementsByClassName("menuItem")];

menu.addEventListener("click", (e) => {
  e.preventDefault();

  menuItems.forEach(menuItem => {
    menuItem.classList.toggle("hidden");
    menuItem.classList.toggle("flex");
  });
});

// Asciinema
import * as AsciinemaPlayer from 'asciinema-player';

AsciinemaPlayer.create('/edamame.cast', document.getElementById('demo'), {
  loop: true,
  autoPlay: true,
  theme: 'nord',
  rows: 24,
  cols: 80,
});