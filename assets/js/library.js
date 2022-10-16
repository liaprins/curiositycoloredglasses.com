var iconField = document.getElementById('librarysection');
var iconArticle = document.querySelectorAll('.libraryentry');
var fieldLength = iconArticle.length;
var libraryURL = window.location;

// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function libraryLink() {
    if (window.location.hash) {
        var hash = location.hash;
        for (var i = 0; i < fieldLength; i++) {
            if (iconArticle) {    // Checking for its existence first, to save resources
                var currentIcon = iconArticle[i].previousElementSibling;
            }    // closing checking if-statement
            if (currentIcon.hasAttribute('data-id')) {    // Checking for its existence first, to save resources
                var iconName = '#' + currentIcon.getAttribute('data-id');
            }    // closing checking if-statement
            if (hash == iconName) {
                if (iconArticle) {    // Checking for its existence first, to save resources
                    iconArticle[i].style.display = 'block';
                    currentIcon.setAttribute('class', 'libraryicon selected');
                }    // closing checking if-statement
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

    // verifying the area inside the "librarysection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedIconClass = selectedIcon.getAttribute('data-clickable');

    if (selectedIconClass == 'yes') {
        // checking if clicked icon was closed when it was clicked
        if (selectedIcon.nextElementSibling.style.display === 'none') {
	   	    // loop through other icons to check that they are not open, and closing them if they are
            for (var i = 0; i < fieldLength; i++) {
			    if (iconArticle) {    // Checking for its existence first, to save resources
                    iconArticle[i].style.display = 'none';
		            iconArticle[i].previousElementSibling.setAttribute('class', 'libraryicon');
		        }    // closing checking if-statement
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
}

iconField.addEventListener('click', libraryIconClick, false);


// Closes the entry via the "X" button
var libraryCloseX = document.getElementById('library-x');

function testFunction(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('id') == 'library-x') {

        clickedThing.parentNode.style.display = 'none';
        clickedThing.parentNode.previousElementSibling.setAttribute('class', 'libraryicon');
        removeHash();
    }
}

window.addEventListener('click', testFunction, false);




