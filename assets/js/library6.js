var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;

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
        window.location.hash = '#' + entryURLHash; 
    } else {
        selectedIcon.nextElementSibling.style.display = 'none';
        selectedIcon.setAttribute('class', 'libraryicon');
        window.location.hash = '';
    }
}

iconField.addEventListener('click', libraryIconClick, false);