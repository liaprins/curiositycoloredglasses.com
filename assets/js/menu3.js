// not working :(

function menuClose() {
    var screenwidth = window.innerWidth;
    var menu = document.getElementById('navdetails');
    if (screenwidth < 1225) {               // if mobile/tablet size
        if (menu.hasAttribute('open')) {    // if mobile/tablet size + open
            menu.removeAttribute('open');   // close
        }
    } 
    else {                                  // if desktop size
        if (menu.hasAttribute('open')) {    // if desktop size + open do nothing
        } 
        else {                              // if desktop size + closed
            menu.setAttribute('open');      // open 
        }
    } 
}

window.addEventListener('resize', menuClose, false);