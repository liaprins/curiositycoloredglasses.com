var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;

/*
function closeOpenIcons() {
	if (iconArticle[0] != selectedIcon && iconArticle[0].hasAttribute('data-icon-status') {	   
	} else {
		iconArticle[0].setAttribute('data-icon-status', 'closed');
        insertHere.removeChild(nameContainerExists);
        insertHere.removeChild(entryContainerExists);
	}
}
*/


function libraryIconClick(e) {

	var selectedIcon = e.target;

	var insertHere = selectedIcon.nextElementSibling;

	var nameContainer = document.createElement('p');
	var nameContent = document.createTextNode(insertHere.getAttribute('data-library-name'));
	var nameContainerExists = document.querySelector('.libraryentryname');

	var entryContainer = document.createElement('p');
	// var entryContent = document.createTextNode(insertHere.getAttribute('data-library-entry') + fieldLength + test);
	var entryContainerExists = document.querySelector('.libraryentryabout');

	if ((iconArticle[0].previousElementSibling != selectedIcon) && (selectedIcon.hasAttribute('data-icon-status'))) {
		var test;
		test = 'not beaker';

		var entryContent = document.createTextNode(insertHere.getAttribute('data-library-entry') + fieldLength + test);

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

/*
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
*/

}


iconField.addEventListener('click', libraryIconClick, false);