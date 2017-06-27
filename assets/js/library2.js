var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;

var libraryURL = window.location;

function libraryIconClick(e) {

	var selectedIcon = e.target;

    if (selectedIcon.nextElementSibling.style.display === 'none') {
		for (var i = 0; i < fieldLength; i++) {
			iconArticle[i].style.display = 'none';
			iconArticle[i].previousElementSibling.setAttribute('class', 'libraryicon');
		}
        selectedIcon.nextElementSibling.style.display = 'block';
        selectedIcon.setAttribute('class', 'libraryicon selected');
        
        var entryURLHash = selectedIcon.getAttribute('id');
        location.hash = entryURLHash; 
   
    } else {
        selectedIcon.nextElementSibling.style.display = 'none';
        selectedIcon.setAttribute('class', 'libraryicon');
        location.hash = '';
        // libraryURL.replace('#', '');    // NOT WORKING
    }
}

iconField.addEventListener('click', libraryIconClick, false);

window.addEventListener('DOMContentLoaded', function() {
    location.hash = '';
    // libraryURL.replace('#', '');    // NOT WORKING
}, false);