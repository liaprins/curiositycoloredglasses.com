
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

    // BLOG NAME
    var blogName = document.getElementById('blogname');
    blogName.setAttribute('data-start-top', blogName.offsetTop);

    // TAGLINE
    var tagline = document.getElementById('tagline');
    tagline.setAttribute('data-start-top', tagline.offsetTop);

    // COMING SOON BOX
    var comingSoonBox = document.getElementById('comingsoonbox');
    comingSoonBox.setAttribute('data-start-top', comingSoonBox.offsetTop);
}

window.addEventListener('DOMContentLoaded', getTops, false);

function parallaxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    /*
    // SMALL GLASSES BG IMG (REMOVE WHEN SCROLL RATIO IS FINALIZED) ---------------------------------
    var smBGImg = document.getElementById('parallax-small');
    smBGImg.style.top = -(scrollTop * 0.8) + 'px';
    */
    
    // SMALL GLASSES
    var smallGlasses = document.getElementsByClassName('smallqqglasses');
    for (var g = 0; g < smallGlasses.length; g++) {
        smallGlassesStartTopData = parseInt(smallGlasses[g].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        smallGlasses[g].style.top = -((scrollTop * -0.22) - smallGlassesStartTopData) + 'px';
    }  // closing g for-loop
    
    /*
    // MEDIUM GLASSES BG IMG (REMOVE WHEN SCROLL RATIO IS FINALIZED) ---------------------------------
    var medBGImg = document.getElementById('parallax-medium');
    medBGImg.style.top = -(scrollTop * 0.888) + 'px';
    */
    // MEDIUM GLASSES
    var mediumGlasses = document.getElementsByClassName('mediumqqglasses');
    for (var h = 0; h < mediumGlasses.length; h++) {
        mediumGlassesStartTopData = parseInt(mediumGlasses[h].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        mediumGlasses[h].style.top = -((scrollTop * -0.16) - mediumGlassesStartTopData) + 'px';
    }  // closing h for-loop
    
    /*
    // BIG GLASSES BG IMG (REMOVE WHEN SCROLL RATIO IS FINALIZED) ---------------------------------
    var bigBGImg = document.getElementById('parallax-big');
    bigBGImg.style.top = -(scrollTop * 0.968) + 'px';
    */
    // BIG GLASSES
    var bigGlasses = document.getElementsByClassName('largeqqglasses');
    for (var i = 0; i < bigGlasses.length; i++) {
        bigGlassesStartTopData = parseInt(bigGlasses[i].getAttribute('data-start-top'));
        // ... (scrollTop * [INSERT SCROLL RATIO HERE]) ...
        bigGlasses[i].style.top = -((scrollTop * -0.035) - bigGlassesStartTopData) + 'px';
    }  // closing i for-loop
        
    /*
    // BLOG NAME
    var blogName = document.getElementById('blogname');
    var blogNameStartTopData = parseInt(blogName.getAttribute('data-start-top'));
    blogName.style.top = -((scrollTop * 0.3) - blogNameStartTopData) + 'px';

    // TAGLINE
    var tagline = document.getElementById('tagline');
    var taglineStartTopData = parseInt(tagline.getAttribute('data-start-top'));
    tagline.style.top = -((scrollTop * 0.2) - taglineStartTopData) + 'px';

    // COMING SOON BOX
    var comingSoonBox = document.getElementById('comingsoonbox');
    var comingSoonBoxStartTopData = parseInt(comingSoonBox.getAttribute('data-start-top'));
    comingSoonBox.style.top = -((scrollTop * 0.1) - comingSoonBoxStartTopData) + 'px';
    */
}

window.onscroll = (function(e) {
    parallaxScroll();
});