function menuClose() {
    var screenwidth = window.innerWidth;
    var menu = document.getElementById('navdetails');
    if (screenwidth < 1225) {
    menu.removeAttribute('open');
    }  
}

window.addEventListener('resize', menuClose, false);




