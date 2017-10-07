function menuClose() {
    var screenwidth = window.innerWidth;
    var menu = document.getElementById('navdetails');
    if (screenwidth < 1225) {
    	if (menu) {    // Checking for its existence first, to save resources
        	menu.removeAttribute('open');
    	}    // closing checking if-statement
    } else {    // Checking for its existence first, to save resources
    	if (menu) {
	        menu.setAttribute('open', 'open');
	    }    // closing checking if-statement
    }
}

menuClose();
window.addEventListener('resize', menuClose, false);




function menuCloseWithoutX(e) {

    // id what was clicked
    var clickedThing = e.target;

    // the HTML element that holds everything within <body> except for <nav>
    var everythingExceptNav = document.getElementById('everythingexceptnav');

    // if the clicked thing was not part of the nav
    if (everythingExceptNav.contains(clickedThing)) {

        // close menu using first function in this script 
        // function includes parameter for needing to be <1225px screenwidth!
        menuClose();

    }

}

window.addEventListener('click', menuCloseWithoutX, false);