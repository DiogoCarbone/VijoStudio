/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';
import MicroModal from 'micromodal';
import emailjs from 'emailjs-com';

const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

window.addEventListener('DOMContentLoaded', () => {
	MicroModal.init();
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
		MicroModal.show('monday-video');
	  })
	  document.querySelector('#melio-loan').addEventListener('click', () => {
		MicroModal.show('melio-loan-video');
	  })
	  document.querySelector('#poalim').addEventListener('click', () => {
		MicroModal.show('poalim-video');
	  })
	  document.querySelector('#guardicore').addEventListener('click', () => {
		MicroModal.show('guardicore-video');
	  })
/* 	  document.querySelector('#gala').addEventListener('click', () => {
		MicroModal.show('#gala-video');
	  }) */
	  document.querySelector('#melio-online').addEventListener('click', () => {
		MicroModal.show('melio-online-video');
	  })
	  document.querySelector('#monday-conference').addEventListener('click', () => {
		MicroModal.show('monday-conference-video');
	  })
	  document.querySelector('#microsoft-bluehat').addEventListener('click', () => {
		MicroModal.show('microsoft-bluehat-video');
	  })
	  document.querySelector('#top10apply').addEventListener('click', () => {
		MicroModal.show('top10apply-video');
	  })
	  document.querySelector('#sisense').addEventListener('click', () => {
		MicroModal.show('sisense-video');
	  })

	  document.querySelector('#request-quote-btn').addEventListener('click', () => {
		MicroModal.show('request-quote');
	  })