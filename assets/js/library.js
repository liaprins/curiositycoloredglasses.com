var iconField = document.getElementById('librarysection');

function libraryClickTest(e) {
	var target = e.target;
	var newEl = document.createElement('p');
	var newText = document.createTextNode(e.target.getAttribute('class'));
	newEl.appendChild(newText);
	var position = target.parentNode;
	position.appendChild(newEl);
	// var testholder = document.getElementById('testholder');
	// testholder.innerHTML = e.target.getAttribute('src');
}

iconField.addEventListener('click', libraryClickTest, false);