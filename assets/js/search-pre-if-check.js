var navSearchForm = document.getElementById('navsearchform');
var searchDecoy = document.getElementById('searchdecoy');
 
// The default HTML is set to work if ppl don't have JS;
// this function sets things up for the search animation if they do hav JS
function navSearchSetup() {
	searchDecoy.style.display = 'block';
	navSearchForm.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', navSearchSetup, false);


// This is the function that happens upon click of the search icon decoy
function decoyClick() {
	searchDecoy.style.display = 'none';
	navSearchForm.style.display = 'block';
}

searchDecoy.addEventListener('click', decoyClick, false);