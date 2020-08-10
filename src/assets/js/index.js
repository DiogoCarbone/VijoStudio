/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';

window.addEventListener('DOMContentLoaded', () => {});

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navbarLinks.toggleClass("d-none");
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


