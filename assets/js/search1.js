var navSearchButton = document.getElementById('navsearchbutton');

function navSearchButtonClick() {
	var navSearchForm = document.getElementById('navsearchform');
	var navSearchInput = document.getElementById('navsearchinput');

	var yellowMenu = document.getElementById('navdetails');

	navSearchButton.classList.toggle('testclass');

	if (navSearchForm.hasAttribute('action')) {
		navSearchForm.setAttribute("action", "<?= $site->find('search')->url() ?>");
		navSearchButton.setAttribute('id', 'navsearchbutton');
		navSearchButton.setAttribute('type', 'submit');
		navSearchInput.setAttribute('id', 'navsearchinput');
	} else {
		navSearchForm.removeAttribute('action');
		navSearchButton.removeAttribute('id');
		navSearchButton.setAttribute('type', 'button');
		navSearchInput.removeAttribute('id');
		yellowMenu.setAttribute('open', 'open');
	}
}

navSearchButton.addEventListener('click', navSearchButtonClick, false);