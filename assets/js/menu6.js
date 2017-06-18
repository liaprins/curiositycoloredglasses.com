// define all variables

var menu = document.getElementById('navdetails');
var screenwidth = window.innerWidth;

var menuAttribute;
if (menu.hasAttribute('open')) {
    menuAttribute = 'open';
} else {
    menuAttribute = 'closed';
}

var menuStyle;
if (screenwidth >= 1225) {
    menuStyle = 'desktop';
} else {
    menuStyle = 'mobiletablet';
}

var menuAttributeStyle = menuAttribute + menuStyle;


// switch statement held inside function
function (menuToggle) {
    switch (menuAttributeStyle) {
        case 'openmobiletablet':
            menu.removeAttribute('open');
            break;
        case 'closeddesktop':
            menu.setAttribute('open', 'open');
            break;
        case 'closedmobiletablet':
            break;
        case 'opendesktop':
            break;
    }
}

// call event
window.addEventListener ('resize', menuToggle, false);