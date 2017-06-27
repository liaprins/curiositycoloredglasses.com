var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;
var libraryURL = window.location;

// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
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

// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

// Opens the entry when icon is clicked, and closes it if re-clicked
function libraryIconClick(e) {
	var selectedIcon = e.target;
    if (selectedIcon.nextElementSibling.style.display === 'none') {
		for (var i = 0; i < fieldLength; i++) {
			iconArticle[i].style.display = 'none';
			iconArticle[i].previousElementSibling.setAttribute('class', 'libraryicon');
		}
        selectedIcon.nextElementSibling.style.display = 'block';
        selectedIcon.setAttribute('class', 'libraryicon selected');
        var entryURLHash = selectedIcon.getAttribute('data-id');
        location.hash = entryURLHash; 
    } else {
        selectedIcon.nextElementSibling.style.display = 'none';
        selectedIcon.setAttribute('class', 'libraryicon');
        removeHash();
    }
}

iconField.addEventListener('click', libraryIconClick, false);







