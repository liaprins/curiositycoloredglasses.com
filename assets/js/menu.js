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