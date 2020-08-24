/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';
import MicroModal from 'micromodal';
import emailjs from 'emailjs-com';
import Inputmask from 'inputmask'

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
document.querySelector('#request-quote-btn').addEventListener('click', () => {
	MicroModal.show('request-quote');
  })

  document.getElementById('submit').addEventListener('click', () => {
	const templateParams = {
		to_name: 'Dennis',
		from_name: document.getElementById('client-name').value,
		client_email: document.getElementById('client-email').value,
	}
	document.getElementById('submit').innerHTML = 'Sending';
	
	emailjs.send('gmail','contact_page_message', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
		.then((response) => {
		   console.log('SUCCESS!', response.status, response.text);
		   document.getElementById('submit').innerHTML = 'Email Sent';
		}, (err) => {
		   console.log('FAILED...', err);
		   document.getElementById('submit').innerHTML = 'Please Try Again';
		});
})

document.getElementById('modal-submit').addEventListener('click', () => {
	const templateParams = {
		to_name: 'Dennis',
		from_name: document.getElementById('modal-client-name').value,
		client_email: document.getElementById('email-address').value,
		client_phone: document.getElementById('phone-input').value,
		company_name: document.getElementById('company-name').value,
		budget_range: document.getElementById('myList').value,
		message_html: document.getElementById('tellus-input').value,
	};

	document.getElementById('modal-submit').innerHTML = 'Sending';
	
	emailjs.send('gmail','contact_page_message', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
		.then((response) => {
		   console.log('SUCCESS!', response.status, response.text);
		   document.getElementById('modal-submit').innerHTML = 'Email Sent';
		}, (err) => {
		   console.log('FAILED...', err);
		   document.getElementById('modal-submit').innerHTML = 'Please Try Again';
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