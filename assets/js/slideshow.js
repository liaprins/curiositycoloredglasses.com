// NOTE TO SELF: When get to styling for different screensizes, do a search for "1225" to find comments about everywhere the code needs to be retrofitted


// USED FUNCTION ----------------------------------------------------------------------------
// on page load, if there are galleries, create them into slideshows
function slideshow() {    
    
    // find any/all galleries in the blogpost
    var galleryList = document.getElementsByClassName('gallery');
      
    // hide all captions
    var galleryCaptionList = document.getElementsByClassName('gallerycaption');
    for (h = 0; h < galleryCaptionList.length; h++) {
        galleryCaptionList[h].style.display = "none";
    }    // close h
    
    // for each gallery
    for (i = 0; i < galleryList.length; i++) {
        
        // declare its name, so it can be identified later vs other galleries on the page
        var galleryName = galleryList[i].getAttribute('id');

        // create dots container for each gallery
        var dotsContainer = document.createElement('div');
        galleryList[i].appendChild(dotsContainer);
        dotsContainer.setAttribute('class', 'dotcontainer');
        dotsContainer.setAttribute('id', 'regviewdotcontainer');
        dotsContainer.style.position = 'relative';

        // establish placeholder box to keep text after img at proper height
        var placeholderBox = document.createElement('div');
        galleryList[i].appendChild(placeholderBox);
        placeholderBox.style.position = 'relative';
        placeholderBox.style.top = '2.048rem';    // this size works for 1225+ only ...see if this can be styled with CSS and mediaqueries instead
        placeholderBox.style.height = 'calc(2.048rem + ' + galleryList[i].firstElementChild.offsetHeight + 'px)';    // 2.048rem works for 1225+ only ...see if this can be styled with CSS and mediaqueries instead
        placeholderBox.setAttribute('id', 'placeholderbox');

        // for each slide within each gallery (but subtract 2 to keep from counting the dotsContainer and placeholderBox as children)
        for (j = 0; j < (galleryList[i].children.length - 2); j++) {

            // create dots + put dots into dots container
            // var dot = document.createElement('span');
            var dot = document.createElement('div');
            // dot.innerHTML = '-';    // TEMPORARY
            dot.setAttribute('class', 'dot');
            dotsContainer.appendChild(dot);
            dotsList = dotsContainer.children;
            dotsList[j].setAttribute('data-dot-index', (j));
            dotsList[j].setAttribute('class', 'dot');
            // storing the gallery name as an attribute so it can be pulled in a later function to find and declare the gallery
            dotsList[j].setAttribute('data-galleryname', galleryName);
            // then override the first dot, to indicate it is the current dot/slide
            // dotsList[0].innerHTML = '+';
            dotsList[0].setAttribute('class', 'dot dotfill');

            // position all slides' <li> elements horizontally (absolute) + add data-* attribute to recognize them as side slides if clicked on
            var slide = galleryList[i].children;
            slide[j].setAttribute('data-slide-index', (j));
            slide[j].setAttribute('data-sideslide', '');
            slide[j].style.position = "absolute";
            // position slides at increments equal to the post text width + 1 margin
            slide[j].style.left = 'calc(700px * ' + j + ')';    // this size works for 1225+ only

            // position <figure> element vertically (relative) within <li> element, so it can be even with top of first slide
            slide[j].firstElementChild.style.position = "relative";    // styling <figure> to be relatively positioned within <li> which is absolutely positioned
            
            // set first slide up as "current slide"
            slide[0].removeAttribute('data-sideslide');
            slide[0].firstElementChild.style.top = '0';
            slide[0].setAttribute('id', galleryName + '-current');
            // making current img clickable to open lightbox (in a different function), by adding "clickme" class
            slide[0].firstElementChild.firstElementChild.setAttribute('class', 'contentimage clickme');
    
        }   // close j

        // show first slide's caption, if it has one
        var firstCaption = galleryList[i].firstElementChild.firstElementChild.lastElementChild;
        if (firstCaption.hasAttribute('data-galleryfigcaption')) {
            firstCaption.style.display = "block";
        }    // close if

    }   // close i
}   // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// creates slideshow from galleries on page/DOM content load
// window.addEventListener('load', slideshow, false);
window.addEventListener('DOMContentLoaded', slideshow, false);





// NAMED FUNCTION ----------------------------------------------------------------------------
// called when a regular view sideslide or dot is clicked
// several parameters are declared, all of which need to be defined in the functions that call this NAMED function
// ...from the perspective of what was clicked for that function (e.g. sideslide, dot, etc)
// causes slideshow to move to the indicated slide
function advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide) {
    
    // update regular view dots
    var dotsList = dotsContainer.children;
    // compare dot index to selected img index
    for (k = 0; k < dotsList.length; k++) {
        if (k == clickedIndex) {
            // dotsList[k].innerHTML = '+';
            dotsList[k].setAttribute('class', 'dot dotfill')
        } else {
            // dotsList[k].innerHTML = '-';    // TEMPORARY
            dotsList[k].setAttribute('class', 'dot')
        } // close if
    } // close k

    // moves entire gallery
    gallery.style.right = 'calc(700px * ' + clickedIndex + ')';    // !!! 1225+ only !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)

    // keeps placeholderBox in current slide position + reflects its height
    var placeholderBox = gallery.lastElementChild;
    // need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the first slide
    placeholderBox.style.right = 'calc(-700px * ' + clickedIndex + ')';    // this size works for 1225+ only
    placeholderBox.style.height = 'calc(2.048rem + ' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';        
    // keeps dotsContainer in current slide position: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the front of the gallery
    dotsContainer.style.left = 'calc(700px * ' + clickedIndex + ')';    // this size works for 1225+ only

    // move caption visibility to clicked slide
    var currentCaption = currentSlide.firstElementChild.lastElementChild;
    // currentCaption = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
    // first check if it is a caption (slides without captions will have a different element in that specified DOM ^^^ position)
    if (currentCaption.hasAttribute('data-galleryfigcaption')) {
        currentCaption.style.display = "none";
    }

    clickedSlideCaption = clickedSideSlide.firstElementChild.lastElementChild;
    if (clickedSlideCaption.hasAttribute('data-galleryfigcaption')) {
        clickedSlideCaption.style.display = "block";
    }

    // pass current slide attributes to clicked slide, and vice versa, for identification
    currentSlide.firstElementChild.firstElementChild.setAttribute('class', 'contentimage');
    clickedSideSlide.firstElementChild.firstElementChild.setAttribute('class', 'contentimage clickme');
    currentSlide.removeAttribute('id');
    clickedSideSlide.setAttribute('id', galleryName + '-current');
    currentSlide.setAttribute('data-sideslide', '');
    clickedSideSlide.removeAttribute('data-sideslide');
}




// USED FUNCTION ----------------------------------------------------------------------------
// for clicking on sideslides in regular view
function selectOtherSlide(e) {  

    var clickedThing = e.target;
    var clickedThingGrandparent = clickedThing.parentNode.parentNode;    // <li> element, if clickedThing was a side slide's <img>

    if (clickedThingGrandparent.hasAttribute('data-sideslide')) {

        var imgToShow = clickedThing;

        // declare variables needed for named function
        var clickedSideSlide = clickedThingGrandparent;
        var dotsContainer = clickedSideSlide.parentNode.lastElementChild.previousElementSibling;
        var gallery = clickedSideSlide.parentNode;
        var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
        var galleryName = gallery.getAttribute('id');
        var currentSlide = document.getElementById(galleryName + '-current');

        // calls NAMED FUNCTION
        advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

    }    // close if
}    // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to click in regular view on a slide slide
window.addEventListener('click', selectOtherSlide, false);




// USED FUNCTION ----------------------------------------------------------------------------
// makes the regular view dots advance/retreat the regular view slideshow
function clickDot(e) {
    var clickedThing = e.target;
    var clickedThingParent = clickedThing.parentNode;

    // if the clicked element is a dot that is not the current dot
    // if (clickedThing.hasAttribute('data-dot-index')) {
    if (clickedThingParent.getAttribute('id') == 'regviewdotcontainer') {

        var clickedDot = clickedThing;

        // declare vars for advanceOrRetreat function
        var dotsContainer = clickedThingParent;
        var gallery = dotsContainer.parentNode;
        var clickedIndex = clickedDot.getAttribute('data-dot-index');
        var galleryName = gallery.getAttribute('id');
        var currentSlide = document.getElementById(galleryName + '-current');
        
        // for loop to be able to define clickedSideSlide, based on currentDotIndex
        for (l = 0; l < dotsContainer.children.length; l++) {

            // find slide with matching index to current dot
            if (clickedDot.getAttribute('data-dot-index') == gallery.children[l].getAttribute('data-slide-index')) {
                var clickedSideSlide = gallery.children[l];

                // calling NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);        

            }  // close if
        }  // close l

        // set newly clicked dot to filled
        // clickedDot.innerHTML = '+';
        clickedDot.setAttribute('class', 'dot dotfill')
    }  // close if
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to click on a regular-view dot (not a lightbox dot)
window.addEventListener('click', clickDot, false);




// USED FUNCTION ----------------------------------------------------------------------------
// makes lightbox dots advance/retreat the regular view slideshow beneath them
// creates and populates lightbox for slide corresponding to clicked dot
function lightboxDots(e) {

    clickedThing = e.target;
    clickedThingParent = clickedThing.parentNode;

    if (clickedThingParent.getAttribute('id') == 'lightboxdotcontainer') {

        var clickedLightboxDot = clickedThing;

        // declare vars for advanceOrRetreat function
        // mine data-* attribute from dot to get current gallery's name
        var galleryName = clickedLightboxDot.getAttribute('data-galleryname');
        var gallery = document.getElementById(galleryName);
        var dotsContainer = gallery.lastElementChild.previousElementSibling;
        var clickedIndex = clickedLightboxDot.getAttribute('data-dot-index');
        var currentSlide = document.getElementById(galleryName + '-current');

        
        var currentCaptionDuringLightbox = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
        
        // find the current slide's index
        var currentIndex = currentSlide.getAttribute('data-slide-index');

        // if the reg view current slide has a caption && if the clicked do is NOT the current dot, hide the caption
        if (currentCaptionDuringLightbox.hasAttribute('data-galleryfigcaption')
            && (clickedIndex != currentIndex)) {
            currentCaptionDuringLightbox.style.display = "none";
        }

        // for loop to be able to define clickedSideSlide, based on currentDotIndex
        for (l = 0; l < dotsContainer.children.length; l++) {
            
            // find slide with matching index to current dot
            // if (clickedDot.getAttribute('data-dot-index') == gallery.children[l].getAttribute('data-slide-index')) {
            if (clickedIndex == gallery.children[l].getAttribute('data-slide-index')) {
                
                var clickedSideSlide = gallery.children[l];

                // calling NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);        

            }  // close if
        }  // close l

        // all functionality for building lightbox upon lightbox dot click
        var dotsLightboxContainer = clickedThingParent;
        
        // for loop to be able to define imgToShow, based on clickedLightboxDot
        for (m = 0; m < dotsLightboxContainer.children.length; m++) {

            // find slide with matching index to current dot
            if (gallery.children[m].getAttribute('data-slide-index') == clickedLightboxDot.getAttribute('data-dot-index')) {
                var imgToShow = gallery.children[m].firstElementChild.firstElementChild;

                // remove current lightbox
                var currentLightbox = document.getElementById('singlelightbox');
                currentLightbox.parentNode.removeChild(currentLightbox);

                // call NAMED lightbox function
                lightbox(imgToShow);  

                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow);               

            }  // close if
        }  // close m
    } // close if
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to clicks on lightbox dots
window.addEventListener('click', lightboxDots, false);










