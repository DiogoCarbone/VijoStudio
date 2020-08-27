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

/* BOTTOM PAGE MAIL SYSTEM SCRIPT */

document.getElementById('submit').addEventListener('click', () => {

	const formInputs = document.querySelectorAll('#contact-form-container input');


	let allValid = true;

	for (let i = 0; i < formInputs.length; i++) {
		const isRequired = formInputs[i].dataset.obrigatorio;
		if (isRequired == "true") {
			console.log('checando');
			/* CHECKING FOR EMPTY ENTRIES */
			if (formInputs[i].value === "") {
				allValid = false;
				console.log('valor inválido');
				formInputs[i].classList.add("mandatory");
				formInputs[i].placeholder = 'Please complete this field';
			} else {
				formInputs[i].classList.remove("mandatory");
			}
		}
	}


	if (allValid === true) {
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

	}
});

/* START OF QUOTE MODAL MAILING SCRIPT */

document.getElementById('modal-submit').addEventListener('click', () => {
	const formInputs = document.querySelectorAll('.input-container input, .input-container textarea');
	console.log(formInputs);

	let allValid = true;

	for (let i = 0; i < formInputs.length; i++) {
		const isRequired = formInputs[i].dataset.obrigatorio;
		console.log(isRequired);
		if (isRequired == "true") {
			console.log('checando');
			/* CHECKING FOR EMPTY ENTRIES */
			if (formInputs[i].value === "") {
				allValid = false;
				console.log('valor inválido');
				formInputs[i].classList.add("mandatory");
				formInputs[i].placeholder = 'Please complete this field';
			} else {
				formInputs[i].classList.remove("mandatory");
			}
		}
	}

	if(allValid === true) {
	const templateParams = {
		to_name: 'Dennis',
		from_name: document.getElementById('modal-client-name').value,
		client_email: document.getElementById('modal-email-address').value,
		company_name: document.getElementById('modal-company-name').value,
		budget_range: document.getElementById('myList').value,
		message_html: document.getElementById('tellus-input').value,
		client_phone: document.getElementById('phone-input').value = "" ? document.getElementById('phone-input').value : "Not Provided",
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
		}
});


/* VIDEO MODALS - CREATED AND DESTROYED ON CLICK AND EXIT */

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

document.querySelector('#sisense').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/7ZQsfRYN_lg" frameborder="0"`,
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

document.querySelector('#top10apply').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/_OjCS5ph5q0" frameborder="0"`,
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

document.querySelector('#guardicore').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/8FASNJd0x2k" frameborder="0"`,
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

document.querySelector('#melio-online').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/fyvWWf3TTB8" frameborder="0"`,
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

document.querySelector('#microsoft-bluehat').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/Yf9HP5-_eNU" frameborder="0"`,
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

document.querySelector('#poalim').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/eJ-aHTkdw1Q" frameborder="0"`,
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

document.querySelector('#monday-conference').addEventListener('click', () => {
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/bYIOcGxTlVA" frameborder="0"`,
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
	const modalContent = [
		`<div class="modal micromodal-slide" id="monday-video" aria-hidden="true">`,
		`<div class="modal__overlay" tabindex="-1" data-micromodal-close>`,
		`<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">`,
		`<main class="modal__content" id="modal-1-content">`,
		`<iframe src="https://www.youtube.com/embed/B0Dql04zXKw" frameborder="0"`,
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

