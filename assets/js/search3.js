var navSearchButton = document.getElementById('navsearchbutton');
var navSearchForm = document.getElementById('navsearchform');
var yellowMenu = document.getElementById('navdetails');

var searchDecoy = document.getElementById('searchdecoy');

function decoyClick() {
	searchDecoy.style.display = 'none';
	navSearchForm.style.display = 'block';
}

searchDecoy.addEventListener('click', decoyClick, false);