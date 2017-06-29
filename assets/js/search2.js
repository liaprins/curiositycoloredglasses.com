var navSearchButton = document.getElementById('navsearchbutton');

function navSearchButtonClick() {
	var navSearchForm = document.getElementById('navsearchform');
	var navSearchInput = document.getElementById('navsearchinput');

	if (navSearchForm.hasAttribute('action')) {
		navSearchForm.removeAttribute('action');
		navSearchButton.removeAttribute('id');
		navSearchButton.removeAttribute('type');
		navSearchInput.removeAttribute('id');
	} else {
		navSearchForm.setAttribute("action", "<?= $site->find('search')->url() ?>");
		navSearchButton.setAttribute('id', 'navsearchbutton');
		navSearchButton.setAttribute('type', 'submit');
		navSearchInput.setAttribute('id', 'navsearchinput');
	}
}

navSearchButton.addEventListener('click', navSearchButtonClick, false);