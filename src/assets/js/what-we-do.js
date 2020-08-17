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
			to_name: 'Denis',
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


