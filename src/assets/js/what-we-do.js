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

	emailjs.send('gmail', 'contact_page_message', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
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

	emailjs.send('gmail', 'contact_page_message', templateParams, 'user_Cyzt5zhpOEbvOcpYYLBlc')
		.then((response) => {
			console.log('SUCCESS!', response.status, response.text);
			document.getElementById('modal-submit').innerHTML = 'Email Sent';
		}, (err) => {
			console.log('FAILED...', err);
			document.getElementById('modal-submit').innerHTML = 'Please Try Again';
		});
})

document.querySelector('#monday').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/Kk7Q2jZSEI4" frameborder="0"`,
		`allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"`,
		`allowfullscreen></iframe>`,
		`</main>`,
		`</div>`,
		`</div>`,
		`</div>`,
	].join('');

	document.querySelector('body').insertAdjacentHTML('beforeend', modalContent);
	MicroModal.show('monday-video', {
		onClose: (modal) => {
			document.getElementById(modal.id).remove();
		}
	});
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