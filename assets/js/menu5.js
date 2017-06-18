// define all variables

var menu = document.getElementById('navdetails');
var screenwidth = window.innerWidth;

var menuAttribute;
if (menu.hasAttribute('open')) {
    menuAttribute = 'open';
}

var menuStyle;
if (screenwidth >= 1225) {
    menuStyle = 'desktop';
}

var menuAttributeStyle = menuAttribute + menuStyle;


// switch statement held inside function
function (menuToggle) {
    switch (menuAttributeStyle) {
        case 'open':
            menu.removeAttribute('open');
            break;
        case 'desktop':
            menu.setAttribute('open', 'open');
            break;
        default:
            break;
    }
}

// call event
window.addEventListener ('resize', menuToggle, false);