var iconField = document.getElementById('librarysection');

function libraryIconClick(e) {
	var selectedIcon = e.target;

	var nameContainer = document.createElement('p');
	var nameContent = document.createTextNode(selectedIcon.parentNode.getAttribute('data-library-name'));
	var nameContainerExists = document.querySelector('.libraryentryname');

	var entryContainer = document.createElement('span');
	var entryContent = document.createTextNode(selectedIcon.parentNode.getAttribute('data-library-entry'));
	var entryContainerExists = document.querySelector('.libraryentryabout');

	var insertHere = selectedIcon.parentNode;

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