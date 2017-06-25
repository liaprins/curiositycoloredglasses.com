var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;


function libraryIconClick(e) {

	var selectedIcon = e.target;

	var insertHere = selectedIcon.nextElementSibling;

	var nameContainer = document.createElement('p');
	var nameContent = document.createTextNode(insertHere.getAttribute('data-library-name'));
	var nameContainerExists = document.querySelector('.libraryentryname');

	var entryContainer = document.createElement('p');
	var entryContent = document.createTextNode(insertHere.getAttribute('data-library-entry') + fieldLength);
	var entryContainerExists = document.querySelector('.libraryentryabout');

	if (selectedIcon.hasAttribute('data-icon-status')) {
        selectedIcon.removeAttribute('data-icon-status');
		nameContainer.className = 'libraryentryname s-display';
		nameContainer.appendChild(nameContent);
		entryContainer.className = 'libraryentryabout s-textface';
		entryContainer.appendChild(entryContent);
		insertHere.appendChild(nameContainer);
		insertHere.appendChild(entryContainer);
    } else {
        selectedIcon.setAttribute('data-icon-status', 'closed');
        insertHere.removeChild(nameContainerExists);
        insertHere.removeChild(entryContainerExists);
    }
}

iconField.addEventListener('click', libraryIconClick, false);