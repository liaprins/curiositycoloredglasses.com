// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqLink() {
    var glassesField = document.getElementById('qqparent');
    var qqContent = document.querySelectorAll('.qqcontents');
    var allGlasses = qqContent.length;
    var qqURL = window.location;
    if (window.location.hash) {
        var hash = location.hash;
        for (var i = 0; i < allGlasses; i++) {
            if (qqContent) {    // Checking for its existence first, to save resources
                var currentIcon = qqContent[i].previousElementSibling;            
            }    // closing checking if-statement
            if (currentIcon.hasAttribute('data-id')) {    // Checking for its existence first, to save resources
                var iconName = '#' + currentIcon.getAttribute('data-id');
            }    // closing checking if-statement
            // ...if the clicked icon's name matches the hash
            if (hash == iconName) {
                if (qqContent) {    // Checking for its existence first, to save resources
                    // ...show the content
                    qqContent[i].style.display = 'block';
                    var qqSelectedClasses = currentIcon.getAttribute('class');
                    // ... and assign the classes for a selected icon
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

// Opens the entry when the container of the glasses is clicked, and closes it if the same lens or its pair is re-clicked
function qqIconClick(e) {
	var selectedContainer = e.target;
    // verifying the area inside the "qqsection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedContainerVerify = selectedContainer.getAttribute('data-clickable');
    if (selectedContainerVerify == 'yes') {
        // checking if clicked icon was closed when it was clicked
        var contentOfInterest = selectedContainer.nextElementSibling;
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
            selectedContainer.nextElementSibling.style.display = 'block';
            var qqSelectedClasses = selectedContainer.getAttribute('class');
            selectedContainer.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');            
            var qqURLHash = selectedContainer.getAttribute('data-id');
            location.hash = qqURLHash; 
        } else {
            selectedContainer.nextElementSibling.style.display = 'none';
            selectedContainer.classList.remove('qqselected');
            removeHash();
        } // close inner if
        
    } // close outer if
    
} // close function

document.addEventListener('click', qqIconClick, false);







// Opens the entry when a lens circle, knob, or trapezoid is clicked, and closes it if it or any of its counterparts is re-clicked
function qqIconInnardsClick(e) {
    var selectedInnards = e.target;
    // verifying the area inside the "qqsection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedInnardsVerify = selectedInnards.getAttribute('data-innards-clickable');
    if (selectedInnardsVerify == 'yes') {
        // checking if clicked icon was closed when it was clicked
        var contentOfInterest = selectedInnards.parentNode.nextElementSibling;
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
            selectedInnards.parentNode.nextElementSibling.style.display = 'block';
            var qqSelectedClasses = selectedInnards.parentNode.getAttribute('class');
            selectedInnards.parentNode.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');            
            var qqURLHash = selectedInnards.parentNode.getAttribute('data-id');
            location.hash = qqURLHash; 
        } else {
            selectedInnards.parentNode.nextElementSibling.style.display = 'none';
            selectedInnards.parentNode.classList.remove('qqselected');
            removeHash();
        } // close inner if
        
    } // close outer if
    
} // close function

document.addEventListener('click', qqIconInnardsClick, false);






// Closes the entry via the "X" button
var qqCloseX = document.getElementById('qq-x');

function qqXOut(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('id') == 'qq-x') {
        clickedThing.parentNode.style.display = 'none';
        var selectedContainer = clickedThing.parentNode.previousElementSibling;
        var qqSelectedClasses = selectedContainer.classList.remove('qqselected');
        removeHash();
    }
}

window.addEventListener('click', qqXOut, false);




