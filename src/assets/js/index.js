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

/* DATA ENTRY VALIDATION */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const company = document.getElementById('company');
const tellus = document.getElementById('tellus');
const submit = document.getElementById('modal-submit');

/* submit.addEventListener('click'); */

/* END OF DATA ENTRY VALIDATION */


	document.getElementById('modal-submit').addEventListener('click', () => {
		const templateParams = {
			to_name: 'Dennis',
			from_name: document.getElementById('modal-client-name').value,
			client_email: document.getElementById('modal-email-address').value,
			company_name: document.getElementById('modal-company-name').value,
			budget_range: document.getElementById('myList').value,
			message_html: document.getElementById('tellus-input').value,
			client_phone: document.getElementById('phone-input').value,
		};
		console.log(templateParams);
		let completeForm = false;

		for (let j = 0, j < Object.keys(templateParams) , i++) {
			console.log(key);
			console.log(templateParams[key]);
			if (templateParams[key] == '') {
				completeForm = false;
			}
		}
/* 		document.getElementById('modal-submit').innerHTML = 'Sending';
		
		emailjs.send('gmail','contact_page_message', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
			.then((response) => {
			   console.log('SUCCESS!', response.status, response.text);
			   document.getElementById('modal-submit').innerHTML = 'Email Sent';
			}, (err) => {
			   console.log('FAILED...', err);
			   document.getElementById('modal-submit').innerHTML = 'Please Try Again';
			}); */
	})