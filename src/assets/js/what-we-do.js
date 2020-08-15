import 'Styles/main.scss';
import MicroModal from 'micromodal'; // es6 module

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

window.addEventListener('DOMContentLoaded', () => {
  let menuOpen = false;
  MicroModal.init();
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
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

document.querySelector('#monday').addEventListener('click', () => {
  MicroModal.show('modal-1');
})
document.querySelector('#melio-loan').addEventListener('click', () => {
  MicroModal.show('modal-2');
})
document.querySelector('#poalim').addEventListener('click', () => {
  MicroModal.show('modal-3');
})
document.querySelector('#guardicore').addEventListener('click', () => {
  MicroModal.show('modal-4');
})
document.querySelector('#gala').addEventListener('click', () => {
  MicroModal.show('modal-5');
})
document.querySelector('#melio-online').addEventListener('click', () => {
  MicroModal.show('modal-6');
})
document.querySelector('#monday-conference').addEventListener('click', () => {
  MicroModal.show('modal-7');
})
document.querySelector('#microsoft-bluehat').addEventListener('click', () => {
  MicroModal.show('modal-8');
})