
import 'Styles/main.scss';

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

window.addEventListener('DOMContentLoaded', () => {
    let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('#navbar-links').style.display = 'flex';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('#navbar-links').style.display = 'none';
  }
});
});