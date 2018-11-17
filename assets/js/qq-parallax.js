
function getTops() {

    // SMALL GLASSES
    // var smallGlasses = document.getElementsByClassName('smallqqglasses').parentNode;
    var smallGlasses = document.getElementsByClassName('smallqqglasses');
    for (var g = 0; g < smallGlasses.length; g++) {
        var smallGlassesStartTop = smallGlasses[g].setAttribute('data-start-top', smallGlasses[g].offsetTop);
    }  // closing g for-loop
    
    // MEDIUM GLASSES
    var mediumGlasses = document.getElementsByClassName('mediumqqglasses');
    for (var h = 0; h < mediumGlasses.length; h++) {
        var bigGlassesStartTop = mediumGlasses[h].setAttribute('data-start-top', mediumGlasses[h].offsetTop);
    }  // closing h for-loop

    // BIG GLASSES
    var bigGlasses = document.getElementsByClassName('largeqqglasses');
    for (var i = 0; i < bigGlasses.length; i++) {
        var bigGlassesStartTop = bigGlasses[i].setAttribute('data-start-top', bigGlasses[i].offsetTop);
    }  // closing i for-loop

    /* // CANNOT GET THIS TO WORK :(  
    // MENU
    var menu = document.getElementById('navdetails');
    menu.setAttribute('data-start-top', menu.offsetTop);

    // PAGE TITLE
    var pageTitle = document.getElementById('qqpagetitle');
    pageTitle.setAttribute('data-start-top', pageTitle.offsetTop);

    // PAGE INTRO
    var pageIntro = document.getElementById('qqpagetext');
    pageIntro.setAttribute('data-start-top', pageIntro.offsetTop);
    */
}

window.addEventListener('DOMContentLoaded', getTops, false);

function parallaxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    // SMALL GLASSES
    // var smallGlasses = document.getElementsByClassName('smallqqglasses').parentNode;
    var smallGlasses = document.getElementsByClassName('smallqqglasses');
    var smallScrollRatio = -0.22;
    for (var g = 0; g < smallGlasses.length; g++) {
        smallGlassesStartTopData = parseInt(smallGlasses[g].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        smallGlasses[g].style.top = -((scrollTop * smallScrollRatio) - smallGlassesStartTopData) + 'px';
        smallGlasses[g].nextElementSibling.style.top = -((scrollTop * smallScrollRatio) - smallGlassesStartTopData) + 'px';
    }  // closing g for-loop
    
    // MEDIUM GLASSES
    var mediumGlasses = document.getElementsByClassName('mediumqqglasses');
    var mediumScrollRatio = -0.16;
    for (var h = 0; h < mediumGlasses.length; h++) {
        mediumGlassesStartTopData = parseInt(mediumGlasses[h].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        mediumGlasses[h].style.top = -((scrollTop * mediumScrollRatio) - mediumGlassesStartTopData) + 'px';
        mediumGlasses[h].nextElementSibling.style.top = -((scrollTop * mediumScrollRatio) - mediumGlassesStartTopData) + 'px';
    }  // closing h for-loop
    
    // BIG GLASSES
    var bigGlasses = document.getElementsByClassName('largeqqglasses');
    var bigScrollRatio = -0.035;
    for (var i = 0; i < bigGlasses.length; i++) {
        bigGlassesStartTopData = parseInt(bigGlasses[i].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        bigGlasses[i].style.top = -((scrollTop * bigScrollRatio) - bigGlassesStartTopData) + 'px';
        bigGlasses[i].nextElementSibling.style.top = -((scrollTop * bigScrollRatio) - bigGlassesStartTopData) + 'px';
    }  // closing i for-loop
      
    /* // CANNOT GET THIS TO WORK :(  
    // MENU
    var menu = document.getElementById('navdetails');
    var menuStartTopData = parseInt(menu.getAttribute('data-start-top'));
    menu.style.top = -((scrollTop * 0.3) - menuStartTopData) + 'px';

    // PAGE TITLE
    var pageTitle = document.getElementById('qqpagetitle');
    var pageTitleStartTopData = parseInt(pageTitle.getAttribute('data-start-top'));
    pageTitle.style.top = -((scrollTop * 0.2) - pageTitleStartTopData) + 'px';

    // PAGE TEXT
    var pageText = document.getElementById('qqpagetext');
    var pageTextStartTopData = parseInt(pageText.getAttribute('data-start-top'));
    pageText.style.top = -((scrollTop * 0.1) - pageTextStartTopData) + 'px';

    // TEST!!!!!!!!!!!!!!!!!
    var qqTest = document.getElementById('qqtest');
    qqTest.innerHTML = pageText.getAttribute('data-start-top');
    */
}

window.onscroll = (function(e) {
    parallaxScroll();
});