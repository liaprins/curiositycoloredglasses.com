var screenwidth = window.innerWidth;
var menu = document.getElementById('navdetails');

if ((screenwidth < 1225) && (menu.hasAttribute('open'))) {
    menu.removeAttribute('open');
}