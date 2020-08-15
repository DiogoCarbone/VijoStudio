/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';
import MicroModal from 'micromodal';
import emailjs from 'emailjs-com';

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

window.addEventListener('DOMContentLoaded', () => {
	MicroModal.init();
	/* MicroModal.show('modal-1'); */
	emailjs.init("user_Cyzt5zhpOEbvOcpYYLBlc");
	let menuOpen = false;
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
})

/* {
	"email": "rafaelytakei@gmail.com",
	"name": "Rafael",
	"content": "Testando email "
} */