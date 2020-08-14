/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';
import MicroModal from 'micromodal';

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

window.addEventListener('DOMContentLoaded', () => {
	MicroModal.init();
	/* MicroModal.show('modal-1'); */
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

document.getElementById('submit').addEventListener('click', () => {
	MicroModal.show('modal-1');
	const objetoEnviar = {
		email: null,
		name: null,
		content: null
	}
	objetoEnviar.email = document.getElementById('contact-email').value;
	objetoEnviar.name = document.getElementById('client-name').value;

	fetch(`https://rytemailtest.herokuapp.com/email`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(objetoEnviar)
	}).then(response => response.json()).then((res) => {
		console.log(res);
	})
})