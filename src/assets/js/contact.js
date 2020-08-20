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
			to_name: 'Dennis',
			from_name: document.getElementById('name-input').value,
			client_email: document.getElementById('email-input').value,
			client_phone: document.getElementById('phone-input') == "" ? document.getElementById('phone-input').value : 'Not Provided',
			company_name: 'Not Provided',
			budget_range: 'Not Provided',
			message_html: document.getElementById('tellus-input').value,
		};
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

