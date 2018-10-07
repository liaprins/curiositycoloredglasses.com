
function getBoxTops() {

    // SMALL BOXES
    var smallBoxes = document.getElementsByClassName('smallqqbox');
    for (var g = 0; g < smallBoxes.length; g++) {
        var smallBoxesStartTop = smallBoxes[g].setAttribute('data-start-top', smallBoxes[g].offsetTop);
    }  // closing g for-loop
    
    // MEDIUM BOXES
    var mediumBoxes = document.getElementsByClassName('mediumqqbox');
    for (var h = 0; h < mediumBoxes.length; h++) {
        var bigBoxesStartTop = mediumBoxes[h].setAttribute('data-start-top', mediumBoxes[h].offsetTop);
    }  // closing h for-loop

    // BIG BOXES
    var bigBoxes = document.getElementsByClassName('largeqqbox');
    for (var i = 0; i < bigBoxes.length; i++) {
        var bigBoxesStartTop = bigBoxes[i].setAttribute('data-start-top', bigBoxes[i].offsetTop);
    }  // closing i for-loop
}

window.addEventListener('DOMContentLoaded', getBoxTops, false);

function parallaxBoxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    // SMALL BOXES
    var smallBoxes = document.getElementsByClassName('smallqqbox');
    var smallScrollRatio = -0.22;
    for (var g = 0; g < smallBoxes.length; g++) {
        smallBoxesStartTopData = parseInt(smallBoxes[g].getAttribute('data-start-top'));
        smallBoxes[g].style.top = -((scrollTop * smallScrollRatio) - smallBoxesStartTopData) + 'px';
        smallBoxes[g].style.top = -((scrollTop * smallScrollRatio) - smallBoxesStartTopData) + 'px';
    }  // closing g for-loop
    
    // MEDIUM BOXES
    var mediumBoxes = document.getElementsByClassName('mediumqqbox');
    var mediumScrollRatio = -0.16;
    for (var h = 0; h < mediumBoxes.length; h++) {
        mediumBoxesStartTopData = parseInt(mediumBoxes[h].getAttribute('data-start-top'));
        mediumBoxes[h].style.top = -((scrollTop * mediumScrollRatio) - mediumBoxesStartTopData) + 'px';
        mediumBoxes[h].style.top = -((scrollTop * mediumScrollRatio) - mediumBoxesStartTopData) + 'px';
    }  // closing h for-loop
    
    // BIG BOXES
    var bigBoxes = document.getElementsByClassName('largeqqbox');
    var bigScrollRatio = -0.035;
    for (var i = 0; i < bigBoxes.length; i++) {
        bigBoxesStartTopData = parseInt(bigBoxes[i].getAttribute('data-start-top'));
        bigBoxes[i].style.top = -((scrollTop * bigScrollRatio) - bigBoxesStartTopData) + 'px';
        bigBoxes[i].style.top = -((scrollTop * bigScrollRatio) - bigBoxesStartTopData) + 'px';
    }  // closing i for-loop
}

window.onscroll = (function(e) {
    parallaxBoxScroll();
});