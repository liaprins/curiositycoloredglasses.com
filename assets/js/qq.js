// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqLink() {
    var glassesField = document.getElementById('qqparent');
    var qqContent = document.querySelectorAll('.qqcontents');
    var allGlasses = qqContent.length;
    var qqURL = window.location;
    if (window.location.hash) { // COMMENTING OUT FOR TESTING BEFORE THERE IS ABLE TO BE A HASH IN THE URL
        var hash = location.hash;
        for (var i = 0; i < allGlasses; i++) {
            if (qqContent) {    // Checking for its existence first, to save resources
                var currentIcon = qqContent[i].previousElementSibling;            
            }    // closing checking if-statement
            if (currentIcon.hasAttribute('data-id')) {    // Checking for its existence first, to save resources
                var iconName = '#' + currentIcon.getAttribute('data-id');
                // document.getElementById('jstest').innerHTML = iconName;
            }    // closing checking if-statement
            if (hash == iconName) {
                if (qqContent) {    // Checking for its existence first, to save resources
                    qqContent[i].style.display = 'block';
                    var qqSelectedClasses = currentIcon.getAttribute('class');
                    currentIcon.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');
                }    // closing checking if-statement
            } // close if (hash...
        } // close for loop
    } // close if 1
} // close function
window.addEventListener('DOMContentLoaded', qqLink, false);


// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

// Opens the entry when a lens circle is clicked, and closes it if the same lens or its pair is re-clicked
function qqIconClick(e) {
	var selectedLens = e.target;
    // verifying the area inside the "qqsection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedLensVerify = selectedLens.getAttribute('data-clickable');
    if (selectedLensVerify == 'yes') {
        // checking if clicked icon was closed when it was clicked
        var contentOfInterest = selectedLens.parentNode.nextElementSibling;
        // if (selectedLens.parentNode.nextElementSibling.style.display === 'none') {
        if (contentOfInterest.style.display === 'none') {
            var qqContent = document.querySelectorAll('.qqcontents');
            var allGlasses = qqContent.length;
	   	    // loop through other icons to check that they are not open, and close them if they are
            for (var i = 0; i < allGlasses; i++) {
			    if (qqContent) {    // Checking for its existence first, to save resources
                    // turning off each glasses' content
                    qqContent[i].style.display = 'none';
                    // removing the selected state from the glasses icon
                    qqContent[i].previousElementSibling.classList.remove('qqselected');
		        }    // closing checking if-statement
            }
            selectedLens.parentNode.nextElementSibling.style.display = 'block';
            var qqSelectedClasses = selectedLens.parentNode.getAttribute('class');
            selectedLens.parentNode.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');            
            var qqURLHash = selectedLens.parentNode.getAttribute('data-id');
            location.hash = qqURLHash; 
        } else {
            selectedLens.parentNode.nextElementSibling.style.display = 'none';
            selectedLens.parentNode.classList.remove('qqselected');
            removeHash();
        } // close inner if
        
    } // close outer if
    
} // close function

document.addEventListener('click', qqIconClick, false);


// Closes the entry via the "X" button
var qqCloseX = document.getElementById('qq-x');

function qqXOut(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('id') == 'qq-x') {
        clickedThing.parentNode.style.display = 'none';
        var selectedLens = clickedThing.parentNode.previousElementSibling;
        var qqSelectedClasses = selectedLens.classList.remove('qqselected');
        removeHash();
    }
}

window.addEventListener('click', qqXOut, false);




