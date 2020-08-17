/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';
import MicroModal from 'micromodal';
import emailjs from 'emailjs-com';

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

	document.getElementById('submit').addEventListener('click', () => {
		const templateParams = {
			message_html: 'I am working',
			to_name: 'Dennis',
			from_name: document.getElementById('client-name').value,
			client_email: document.getElementById('client-email').value,
		};
		
		emailjs.send('gmail','template_XzxHkYzl', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
			.then((response) => {
			   console.log('SUCCESS!', response.status, response.text);
			}, (err) => {
			   console.log('FAILED...', err);
			});
	})

	
	document.getElementById('submit-button1').addEventListener('click', () => {
		const templateParams = {
			to_name: 'Denis',
			from_name: document.getElementById('name-input').value,
			client_email: document.getElementById('email-input').value,
			message_html: document.getElementById('tellus-input').value,
			client_number: document.getElementById('phone-input').value,
			client_address: document.getElementById('address-input').value
		};
		
		emailjs.send('gmail','template_XzxHkYzl', templateParams, 'contact_page_message')
			.then((response) => {
			   console.log('SUCCESS!', response.status, response.text);
			}, (err) => {
			   console.log('FAILED...', err);
			});
	})

