// not working :(

function menuClose() {
    var screenwidth = window.innerWidth;
    var menu = document.getElementById('navdetails');
    if (menu.hasAttribute('open') {         // if menu is open
        if (screenwidth < 1225)) {          // if open + mobile/tablet size
            menu.removeAttribute('open');   // close
        }
    } 
    else {                                  // if menu is closed
        if (screenwidth >= 1225)) {         // if closed + desktop size
            menu.setAttribute('open');      // open 
        }
    } 
}

window.addEventListener('resize', menuClose, false);