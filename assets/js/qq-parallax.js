
function getTops() {

    // SMALL GLASSES
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
}

window.addEventListener('DOMContentLoaded', getTops, false);

function parallaxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    // SMALL GLASSES
    var smallGlasses = document.getElementsByClassName('smallqqglasses');
    var smallScrollRatio = -0.22;
    for (var g = 0; g < smallGlasses.length; g++) {
        smallGlassesStartTopData = parseInt(smallGlasses[g].getAttribute('data-start-top'));
        smallGlasses[g].style.top = -((scrollTop * smallScrollRatio) - smallGlassesStartTopData) + 'px';
        smallGlasses[g].nextElementSibling.style.top = -((scrollTop * smallScrollRatio) - smallGlassesStartTopData) + 'px';
    }  // closing g for-loop
    
    // MEDIUM GLASSES
    var mediumGlasses = document.getElementsByClassName('mediumqqglasses');
    var mediumScrollRatio = -0.16;
    for (var h = 0; h < mediumGlasses.length; h++) {
        mediumGlassesStartTopData = parseInt(mediumGlasses[h].getAttribute('data-start-top'));
        mediumGlasses[h].style.top = -((scrollTop * mediumScrollRatio) - mediumGlassesStartTopData) + 'px';
        mediumGlasses[h].nextElementSibling.style.top = -((scrollTop * mediumScrollRatio) - mediumGlassesStartTopData) + 'px';
    }  // closing h for-loop
    
    // BIG GLASSES
    var bigGlasses = document.getElementsByClassName('largeqqglasses');
    var bigScrollRatio = -0.035;
    for (var i = 0; i < bigGlasses.length; i++) {
        bigGlassesStartTopData = parseInt(bigGlasses[i].getAttribute('data-start-top'));
        bigGlasses[i].style.top = -((scrollTop * bigScrollRatio) - bigGlassesStartTopData) + 'px';
        bigGlasses[i].nextElementSibling.style.top = -((scrollTop * bigScrollRatio) - bigGlassesStartTopData) + 'px';
    }  // closing i for-loop
}

window.onscroll = (function(e) {
    parallaxScroll();
});