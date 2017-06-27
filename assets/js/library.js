var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;
var libraryURL = window.location;


function libraryLink() {
    if (window.location.hash) {
        var hash = location.hash;
        for (var i = 0; i < fieldLength; i++) {
            var currentIcon = iconArticle[i].previousElementSibling;
            var iconName = '#' + currentIcon.getAttribute('data-id');
            if (hash == iconName) {
                iconArticle[i].style.display = 'block';
                currentIcon.setAttribute('class', 'libraryicon selected');
            }
        }
    } 
}

window.addEventListener('DOMContentLoaded', libraryLink, false);


function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function libraryIconClick(e) {
	var selectedIcon = e.target;
    if (selectedIcon.nextElementSibling.style.display === 'none') {
		for (var i = 0; i < fieldLength; i++) {
			iconArticle[i].style.display = 'none';
			iconArticle[i].previousElementSibling.setAttribute('class', 'libraryicon');
		}
        selectedIcon.nextElementSibling.style.display = 'block';
        selectedIcon.setAttribute('class', 'libraryicon selected');
        // var entryURLHash = selectedIcon.getAttribute('id');    // I used a made-up attribute (data-id) instead of the typical id attribute to hold this data, because by definition, if the "id" attribute matches the hash of a page, the page will "jump" to that element when the hash in the URL changes/appears
        var entryURLHash = selectedIcon.getAttribute('data-id');
        location.hash = entryURLHash; 
    } else {
        selectedIcon.nextElementSibling.style.display = 'none';
        selectedIcon.setAttribute('class', 'libraryicon');
        removeHash();
    }
}

iconField.addEventListener('click', libraryIconClick, false);







