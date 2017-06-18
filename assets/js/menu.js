function menuClose() {
    var screenwidth = window.innerWidth;
    var menu = document.getElementById('navdetails');
    if (screenwidth < 1225) {
        menu.removeAttribute('open');
    } else {
        menu.setAttribute('open', 'open');
    }
}

window.addEventListener('DOMContentLoaded', menuClose, false);
window.addEventListener('resize', menuClose, false);