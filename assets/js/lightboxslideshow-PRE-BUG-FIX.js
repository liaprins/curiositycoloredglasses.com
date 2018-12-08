







// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// LIGHTBOX SCRIPTS FIRST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// NAMED FUNCTION ----------------------------------------------------------------------------
// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
// ... and returns the ability to scroll vertically
function removeHashReturnScroll() { 
    // remove #hash
    history.pushState("", document.title, window.location.pathname + window.location.search);
    // return scrollability
    document.documentElement.style.overflow = 'auto';
}



/*
// TRYING IT LOWER DOWN IN SCRIPT TO SEE IF IT PERFORMS MORE CONSISTENTLY
// NAMED + USED FUNCTION ----------------------------------------------------------------------------
// vertically centers lightbox img
// used on resize + on click of an img to open lightbox
function verticallyCenter() {
    var singleLightbox = document.getElementById('singlelightbox');
    if (singleLightbox) {
        var lightboxImg = singleLightbox.firstElementChild;
        var imgHeight = lightboxImg.offsetHeight;
        singleLightbox.style.height = (window.innerHeight);
        singleLightbox.style.width = window.innerWidth;
        var lightboxHeight = singleLightbox.offsetHeight;
        lightboxImg.style.marginTop = (lightboxHeight - imgHeight)/2 + 'px';
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// vertically centers lightbox img upon screen resize
window.addEventListener('resize', verticallyCenter, false);
*/



// NAMED FUNCTION ----------------------------------------------------------------------------
// lightbox screen shows img corresponding to clicked indicator of img
// the functions that later call this function define the "imgToShow" according to the perspective of what was clicked in their corresponding event listener
// e.g. the clicked indicator of the "imgToShow" could be a non-current slide in regular view...
// or a lightbox dot corresponding to a non-current img
// or (not yet coded) a < or > arrow in lightbox view
function lightbox(imgToShow) {

    // create lightbox container
    var singleLightbox = document.createElement('div');
        
    // append lightbox to the <figure> element (the parent of imgToShow), since lightbox will be position: fixed; anyway
    imgToShow.parentNode.appendChild(singleLightbox);
        
    // give lightbox attributes
    // to identify it later
    singleLightbox.setAttribute('id', 'singlelightbox');
    // so it can be clicked (wherever the image, caption, etc is NOT) to close itself
    singleLightbox.setAttribute('data-lightbox-close', '');
        
    // give lightbox content: the <figure> element of image to show (includes its <figcaption> if there is one) + "x" button
    // !!! the src attributes (for "x" and "^" icons) vvv will have to update when I get proper hosting and URL set up! 
    // !!! or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
    // !!! or else construct its shape with CSS (research performance) vvv
    singleLightbox.innerHTML = singleLightbox.parentNode.innerHTML + '<img src="https://curiositycoloredglasses.com/assets/images/x.svg" alt="close" id="lightboxclose" class="close-x yellowhover" data-lightbox-x>';
        
    // remove unintentionally duplicated lightbox element from original
    // (duplicated when call the HTML of <figure> element it is attached to was duplicated as lightbox's content)
    var duplicate = singleLightbox.lastElementChild.previousElementSibling;
    singleLightbox.removeChild(duplicate);

    // style contents
    var lightboxImg = singleLightbox.firstElementChild;
    lightboxImg.setAttribute('class', 'contentimage singleimage lightboximage');

    // call NAMED FUNCTION
    // use JS to vertically center H imgs
    verticallyCenter();
        
    // add #hash
    var imgURL = singleLightbox.firstElementChild.getAttribute('src');
    var imgURLArray = imgURL.split('/');
    location.hash = imgURLArray[imgURLArray.length - 1];   

    // stop V scrollability
    document.documentElement.style.overflow = 'hidden';

    // caption, if there is one
    // this var distinguishes lightbox caption from a regular caption, because no where else would <figcaption> be direct child of a <div>
    var caption = document.querySelector('div>figcaption');
    if (caption) {

        // give caption attributes
        caption.setAttribute('class','xs-textface lightboxcaption hide');
        // caption.style.display = "block";    
        caption.style.display = "none";    

        // make caption's top rule able to be visible at all sizes when lightbox, but only above 1225 when not in lightbox
        var lightboxTopRule = caption.firstElementChild;
        // lightboxTopRule.style.display = "block";
            
        // add toggle icon
        var toggle = document.createElement('img');
        // !!! the src attributes (for "x" and "^" icons) vvv will have to update when I get proper hosting and URL set up! 
        // !!! or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
        // !!! or else construct its shape with CSS (research performance) vvv
        toggle.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/up-arrowhead.svg');
        toggle.setAttribute('title', 'Toggle caption visibility');
        toggle.setAttribute('alt', 'Toggle caption visibility');
        toggle.setAttribute('id', 'captiontoggle');
        toggle.setAttribute('class', 'close-x yellowhover');
        toggle.setAttribute('captiontoggle', '');
        singleLightbox.appendChild(toggle);
        /*
        // create fake top bar via <div>, since I can't use border, because I need to have padding to create white box, and border would span padding width
        var topRule = document.createElement('div');
        topRule.setAttribute('id', 'lightboxcaptionbar');
        singleLightbox.appendChild(topRule);   
        */
    } // close if (caption)
} // function




// NAMED FUNCTION ----------------------------------------------------------------------------
function populateLightboxDots(imgToShow) {
    
    // if imgToShow is a gallery img
    if (imgToShow.getAttribute('id') == ('galleryimage')) {
            
        // DOTS
        // create container to hold dots, within lightbox
        var lightboxDotContainer = document.createElement('div');
        lightboxDotContainer.setAttribute('id', 'lightboxdotcontainer');
        // fill with contents of non-lightbox (regular view) dot container
        lightboxDotContainer.innerHTML = imgToShow.parentNode.parentNode.parentNode.lastElementChild.innerHTML;
        // attach to lightbox
        var lightboxAgain = document.getElementById('singlelightbox');
        lightboxAgain.appendChild(lightboxDotContainer);

        // ARROWS
        // create container to hold arrows, within lightbox
        var lightboxArrowContainer = document.createElement('div');
        lightboxAgain.appendChild(lightboxArrowContainer);
        lightboxArrowContainer.setAttribute('class', 'arrowcontainer lightboxarrowcontainer');
        // lightboxArrowContainer.style.position = 'relative';
        lightboxArrowContainer.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/left-arrowhead.svg" alt="retreat" title="Previous image" class="galleryarrows lightboxarrows yellowhover" data-retreatlightboxarrow>' + '<img src="https://curiositycoloredglasses.com/assets/images/right-arrowhead.svg" alt="advance" title="Next image" class="galleryarrows lightboxarrows yellowhover" data-advancelightboxarrow>';

    } // close gallery-if
} // close function




// USED FUNCTION ----------------------------------------------------------------------------
// invoked when a regular-view img is clicked (if img is within a gallery, it must be the focus img...
// ... this is defined in the first if-statement vvv, because only the focus img has the "clickme" class)
// so the imgToShow is the clicked img
function clickRegularViewFocusImg(e) {
    // var imgToShow = e.target;
    var clickedThing = e.target;
    
    // if clicked element is a single image or the focus img in a gallery
    if (clickedThing.classList.contains('clickme')) {

        // define imgToShow
        var imgToShow = clickedThing;

        // call NAMED lightbox function
        lightbox(imgToShow);

        // call NAMED function to populate lightbox dots
        populateLightboxDots(imgToShow);

    } // close if ('clickme')
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.addEventListener('click', clickRegularViewFocusImg, false);


/*
// !!!!!!!!!!!!!!!!!!! IS THIS "FUNCTION" REALLY NEEDED IN CODE? I CANNOT FIND THAT IT IS CALLED ANYWHERE!
// MAY NEED TO BE REMOVED! vvvvv
// USED FUNCTION ----------------------------------------------------------------------------
// invoked when a lightbox dot is clicked
function clickLightboxDot(e) {
    
    var clickedThing = e.target;

    if (clickedThing.parentNode.getAttribute('id') == 'lightboxdotcontainer') {

        var clickedLightboxDot = clickedThing;
        var dotsLightboxContainer = clickedLightboxDot.parentNode;
        var gallerySlides = dotsLightboxContainer.parentNode.parentNode.parentNode.parentNode;
        
        // for loop to be able to define imgToShow, based on clickedLightboxDot
        for (m = 0; m < dotsLightboxContainer.children.length; m++) {

            // find slide with matching index to current dot
            if (gallerySlides.children[m].getAttribute('data-slide-index') == clickedLightboxDot.getAttribute('data-dot-index')) {
                var imgToShow = gallerySlides.children[m].firstElementChild.firstElementChild;

                // remove current lightbox
                var currentLightbox = document.getElementById('singlelightbox');
                currentLightbox.parentNode.removeChild(currentLightbox);

                // call NAMED lightbox function
                lightbox(imgToShow);  

                // call NAMED function to populate lightbox dots
                populateLightboxDots(imgToShow);               

            }  // close if
        }  // close m
    } // close if
} // close function
// !!!!!!!!!!!!!!!!!!! IS THIS "FUNCTION" REALLY NEEDED IN CODE? I CANNOT FIND THAT IT IS CALLED ANYWHERE!
// MAY NEED TO BE REMOVED! ^^^^^
*/



// NAMED + USED FUNCTION ----------------------------------------------------------------------------
// toggles lightbox caption open/closed
function toggleCaption(e) {
    var captionToggleIcon = e.target;
    if (captionToggleIcon.hasAttribute('captiontoggle')) {
        captionToggleIcon.classList.toggle('turn180');
        captionToggleIcon.previousElementSibling.previousElementSibling.removeAttribute('style');
        captionToggleIcon.previousElementSibling.previousElementSibling.classList.toggle('hide');
        // if I want dots to hide at same time vvv
        // captionToggleIcon.nextElementSibling.classList.toggle('hide');
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to clicks on caption toggle
window.addEventListener('click', toggleCaption, false);




// USED FUNCTION ----------------------------------------------------------------------------
// close lightbox by clicking white space
function lightboxSpaceClose(e) {
    clickedSpace = e.target;
    if (clickedSpace.hasAttribute('data-lightbox-close')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedSpace.parentNode.removeChild(lightboxToClose);
        // call NAMED function
        removeHashReturnScroll();
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to clicks on white space
window.addEventListener('click', lightboxSpaceClose, false);




// USED FUNCTION ----------------------------------------------------------------------------
// "x" button
function lightboxXClose(e) {
    clickedX = e.target;
    if (clickedX.hasAttribute('data-lightbox-x')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedX.parentNode.parentNode.removeChild(lightboxToClose);
        // call NAMED function
        removeHashReturnScroll();
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to a click on the lightbox "x" button
window.addEventListener('click', lightboxXClose, false);




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// SLIDESHOW SCRIPTS BEGIN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// USED FUNCTION ----------------------------------------------------------------------------
// on page load, if there are galleries, create them into slideshows
function slideshow() {    
    
    // find any/all galleries in the blogpost
    var galleryList = document.getElementsByClassName('gallery');

    // get screen width
    var screenWidth = window.innerWidth;
      
    // hide all captions
    var galleryCaptionList = document.getElementsByClassName('gallerycaption');
    for (h = 0; h < galleryCaptionList.length; h++) {
        galleryCaptionList[h].style.display = "none";
    }    // close h
    
    // for each gallery
    for (i = 0; i < galleryList.length; i++) {
        
        // declare its name, so it can be identified later vs other galleries on the page
        var galleryName = galleryList[i].getAttribute('id');

        // create advance/retreat arrows for each gallery
        var arrowContainer = document.createElement('div');
        galleryList[i].appendChild(arrowContainer);
        arrowContainer.setAttribute('class', 'arrowcontainer');
        arrowContainer.style.position = 'relative';
        arrowContainer.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/left-arrowhead.svg" alt="retreat" title="Previous image" class="galleryarrows yellowhover" data-retreatarrow>' + '<img src="https://curiositycoloredglasses.com/assets/images/right-arrowhead.svg" alt="advance" title="Next image" class="galleryarrows yellowhover" data-advancearrow>';

        // establish placeholder box to keep text after img at proper height
        var placeholderBox = document.createElement('div');
        galleryList[i].appendChild(placeholderBox);
        placeholderBox.style.position = 'relative';
        // (1.) HERE ?!?!?! vvvvv
        placeholderBox.style.top = '1.024rem';    // this size works for 1225+ only ...see if this can be styled with CSS and mediaqueries instead
        // placeholderBox.style.top = 0;
        placeholderBox.setAttribute('id', 'placeholderbox');

        // create dots container for each gallery
        // var dotsContainer = document.createElement('div');
        var dotsContainer = document.createElement('span');
        galleryList[i].appendChild(dotsContainer);
        dotsContainer.setAttribute('class', 'dotcontainer');
        dotsContainer.setAttribute('id', 'regviewdotcontainer');
        dotsContainer.style.position = 'relative';

        // show first slide's caption, if it has one
        var firstCaption = galleryList[i].firstElementChild.firstElementChild.lastElementChild;
        if (firstCaption.hasAttribute('data-galleryfigcaption')) {
            firstCaption.style.display = "block";
        }

        // if the first slide has a caption & the screen is less than 1225px wide
        if ((firstCaption.hasAttribute('data-galleryfigcaption')) && (screenWidth < 1225)) {
            // if there is a caption, set this as the placeholder box's height (just the height of the <figure> element)
            placeholderBox.style.height = 'calc(' + galleryList[i].firstElementChild.firstElementChild.offsetHeight + 'px)';    
        } else {
            placeholderBox.style.height = 'calc(1.072rem + ' + galleryList[i].firstElementChild.firstElementChild.offsetHeight + 'px)';   
        }

        // the height of placeholderBox has to be moved to render AFTER the caption is made visible in the DOM, otherwise the caption will come in at 0px high since it will still be hidden!
        // placeholderBox.style.height = 'calc(2.048rem + ' + galleryList[i].firstElementChild.firstElementChild.offsetHeight + 'px)';    // 2.048rem works for 1225+ only ...see if this can be styled with CSS and mediaqueries instead

        // for each slide within each gallery (but subtract 3 to keep from counting the arrowContainer, dotsContainer and placeholderBox as children)
        for (j = 0; j < (galleryList[i].children.length - 3); j++) {

            // create dots + put dots into dots container
            var dot = document.createElement('span');
            dot.setAttribute('class', 'dot dotunfilled');
            dot.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/dot.svg" alt="go to this slide" class="dotimg dotimgunfilled">';
            dotsContainer.appendChild(dot);
            dotsList = dotsContainer.children;
            dotsList[j].setAttribute('data-dot-index', (j));
            // dotsList[j].setAttribute('class', 'dot dotunfilled');    // I THINK THIS IS NOT NEEDED HERE
            // storing the gallery name as an attribute so it can be pulled in a later function to find and declare the gallery
            dotsList[j].setAttribute('data-galleryname', galleryName);
            // then override the first dot, to indicate it is the current dot/slide
            dotsList[0].setAttribute('class', 'dot');
            dotsList[0].innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/dot-filled.svg" alt="go to this slide" class="dotimg dotimgfill">';

            // position all slides' <li> elements horizontally (absolute) + add data-* attribute to recognize them as side slides if clicked on
            var slide = galleryList[i].children;
            slide[j].setAttribute('data-slide-index', (j));
            slide[j].setAttribute('data-sideslide', '');
            slide[j].style.position = "absolute";
            // position slides at increments equal to the post text width + 1 margin
            // slide[j].style.left = 'calc(700px * ' + j + ')';    // this size works for 1225+ only
            var screenWidth = window.innerWidth;
            if (screenWidth < 817) {
                slide[j].style.left = 'calc(85.714vw * ' + j + ')';
            } else {
                slide[j].style.left = 'calc(700px * ' + j + ')';
            }

            // position <figure> element vertically (relative) within <li> element, so it can be even with top of first slide
            slide[j].firstElementChild.style.position = "relative";    // styling <figure> to be relatively positioned within <li> which is absolutely positioned
            
            // set first slide up as "current slide"
            slide[0].removeAttribute('data-sideslide');
            slide[0].firstElementChild.style.top = '0';
            slide[0].setAttribute('id', galleryName + '-current');
            // making current img clickable to open lightbox (in a different function), by adding "clickme" class
            slide[0].firstElementChild.firstElementChild.setAttribute('class', 'contentimage clickme');
            
            // make first slide's caption NOT have a white left edge (so it won't cover home glasses)
            // but subsequent slides need the white left edge as a border with previous image behind, so this only applies to first image
            if (slide[0].firstElementChild.lastElementChild.hasAttribute('data-galleryfigcaption')) {
                var firstGalleryCaption = slide[0].firstElementChild.lastElementChild;
                // firstGalleryCaption.setAttribute('class', 's-textface caption gallerycaption whiteedge');
                firstGalleryCaption.setAttribute('class', 'xs-textface caption gallerycaption whiteedge');
            }

            dotsContainer.style.top = 'calc(-' + (placeholderBox.offsetHeight - slide[0].firstElementChild.firstElementChild.offsetHeight) + 'px + 1.536rem)';

            ////////////////////////////////////////////////////////////////////////////////////////////////////
            // ARROWS!!! STYLE THEM HERE vvvvv
            arrowContainer.style.top = 'calc(' + (slide[0].firstElementChild.firstElementChild.offsetHeight) + 'px + 1.024rem)';
            arrowContainer.style.left = 0;
            ////////////////////////////////////////////////////////////////////////////////////////////////////

        }   // close j
    }   // close i

    // when page is refreshed, this removes the lightbox's #hash from the URL, since refreshing the page automatically also removes the lightbox view, so this syncs the URL back up with the view onscreen
    removeHashReturnScroll();

}   // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// creates slideshow from galleries on page/DOM content load
window.addEventListener('load', slideshow, false);
// window.addEventListener('DOMContentLoaded', slideshow, false);





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
            dotsList[k].setAttribute('class', 'dot');
            dotsList[k].innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/dot-filled.svg" alt="go to this slide" class="dotimg dotimgfill">';
        } else {
            dotsList[k].setAttribute('class', 'dot dotunfilled');
            dotsList[k].innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/dot.svg" alt="go to this slide" class="dotimg dotimgunfilled">';
        } // close if
    } // close k
    
    var arrowContainer = gallery.lastElementChild.previousElementSibling.previousElementSibling;
    var placeholderBox = gallery.lastElementChild.previousElementSibling;
    var screenWidth = window.innerWidth;

    if (screenWidth < 817) {
        // moves entire gallery
        gallery.style.right = 'calc(85.714vw * ' + clickedIndex + ')';    // !!! 1225+ only !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)
        // keeps placeholderBox in current slide position + reflects its height: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the first slide
        placeholderBox.style.right = 'calc(-85.714vw * ' + clickedIndex + ')';    // this size works for 1225+ only
        // keeps dotsContainer in current slide position: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the front of the gallery
        dotsContainer.style.left = 'calc(85.714vw * ' + clickedIndex + ')';    // this size works for 1225+ only
        // keeps arrows in current slide position: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the front of the gallery
        arrowContainer.style.left = 'calc(85.714vw * ' + clickedIndex + ')';    // this size works for 1225+ only
        // ARROWS!!! STYLE THEM HERE vvvvv
        arrowContainer.style.top = 'calc(' + clickedSideSlide.firstElementChild.offsetHeight + 'px + 1.024rem)';
    } else {
        // moves entire gallery
        gallery.style.right = 'calc(700px * ' + clickedIndex + ')';    // !!! 1225+ only !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)
        // keeps placeholderBox in current slide position + reflects its height: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the first slide
        placeholderBox.style.right = 'calc(-700px * ' + clickedIndex + ')';    // this size works for 1225+ only
        // keeps dotsContainer in current slide position: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the front of the gallery
        dotsContainer.style.left = 'calc(700px * ' + clickedIndex + ')';    // this size works for 1225+ only
        // keeps arrows in current slide position: need to move it in the opposite direction and same increment that the slide moved, to offset it otherwise being attached to the front of the gallery
        arrowContainer.style.left = 'calc(700px * ' + clickedIndex + ')';    // this size works for 1225+ only
        // ARROWS!!! STYLE THEM HERE vvvvv
        arrowContainer.style.top = 'calc(' + clickedSideSlide.firstElementChild.offsetHeight + 'px + 1.024rem)';
    }

    // move caption visibility to clicked slide
    var currentCaption = currentSlide.firstElementChild.lastElementChild;
    // first check if it is a caption (slides without captions will have a different element in that specified DOM ^^^ position)
    if (currentCaption.hasAttribute('data-galleryfigcaption')) {
        currentCaption.style.display = "none";
    }

    clickedSlideCaption = clickedSideSlide.firstElementChild.lastElementChild;
    if (clickedSlideCaption.hasAttribute('data-galleryfigcaption')) {
        clickedSlideCaption.style.display = "block";
    }

    // if the selected slide has a caption & the screen is less than 1225px wide
    if ((clickedSlideCaption.hasAttribute('data-galleryfigcaption')) && (screenWidth < 1225)) {
        // if there is a caption, set this as the placeholder box's height (just the height of the <figure> element)
        placeholderBox.style.height = 'calc(' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';               
    } else {
        placeholderBox.style.height = 'calc(1.072rem + ' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';               
    }

    // the height of placeholderBox has to be moved to render AFTER the caption is made visible in the DOM, otherwise the caption will come in at 0px high since it will still be hidden!
    // placeholderBox.style.height = 'calc(2.048rem + ' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';               
    // placeholderBox.style.height = 'calc(' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';               

    // position dots container so it is between caption and img (for less than 1225, but still works perfectly for 1225+ also!)
    dotsContainer.style.top = 'calc(-' + (placeholderBox.offsetHeight - clickedSideSlide.firstElementChild.firstElementChild.offsetHeight) + 'px + 1.536rem)';

    // pass current slide attributes to clicked slide, and vice versa, for identification
    currentSlide.firstElementChild.firstElementChild.setAttribute('class', 'contentimage');
    clickedSideSlide.firstElementChild.firstElementChild.setAttribute('class', 'contentimage clickme');
    currentSlide.removeAttribute('id');
    clickedSideSlide.setAttribute('id', galleryName + '-current');
    currentSlide.setAttribute('data-sideslide', '');
    clickedSideSlide.removeAttribute('data-sideslide');
}    // close advanceOrRetreat function




// USED FUNCTION ----------------------------------------------------------------------------
// for clicking on arrows in regular view
function clickGalleryArrow(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('class') == ('galleryarrows yellowhover')) {

        var dotsContainer = clickedThing.parentNode.parentNode.lastElementChild;
        var gallery = clickedThing.parentNode.parentNode;
        var galleryName = gallery.getAttribute('id');
        var currentSlide = document.getElementById(galleryName + '-current');

        // get total number of slides in gallery; subtract 3 to prevent counting arrowContainer, dotsContainer, and placeholderBox
        var slideCount = gallery.children.length - 3;
        
        if (clickedThing.hasAttribute('data-advancearrow')) {

            // if current slide is not the last slide
            // (slideCount - 1) because the index starts at 0, not 1, so need to subtract 1 from count to match them up
            if (currentSlide.getAttribute('data-slide-index') != (slideCount - 1)) {

                // id'ing the next slide
                var clickedSideSlide = currentSlide.nextElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } else {    // implied that advance arrow was clicked when last slide was current

                // id'ing the first slide
                var clickedSideSlide = currentSlide.parentNode.firstElementChild;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } // closing inner if/else statement

        } else {    // implied that retreat arrow was clicked

            // if current slide is not the first slide
            if (currentSlide.getAttribute('data-slide-index') != 0) {

                // id'ing previous slide
                var clickedSideSlide = currentSlide.previousElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } else {    // implied that retreat arrow was clicked when first slide was current

                // id'ing the last slide
                var clickedSideSlide = currentSlide.parentNode.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } // closing inner if/else statement

        } // closing semi-outer if/else statement
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to click in regular view on a left or right arrow
window.addEventListener('click', clickGalleryArrow, false);




// SWIPE FOR BOTH REGULAR VIEW GALLERY && LIGHTBOX VIEW!!!
window.onload = function() {

    document.addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);

        var swipedThing = e.target;

        // REG VIEW LEFT SWIPE
        if ((swipedThing.getAttribute('id') == ('galleryimage')) && (swipedThing.classList.contains('clickme'))) {
            
            var dotsContainer = swipedThing.parentNode.parentNode.parentNode.lastElementChild;
            var gallery = swipedThing.parentNode.parentNode.parentNode;
            var galleryName = gallery.getAttribute('id');
            var currentSlide = document.getElementById(galleryName + '-current');

            // get total number of slides in gallery; subtract 3 to prevent counting arrowContainer, dotsContainer, and placeholderBox
            var slideCount = gallery.children.length - 3;

            // if current slide is not the last slide
            // (slideCount - 1) because the index starts at 0, not 1, so need to subtract 1 from count to match them up
            if (currentSlide.getAttribute('data-slide-index') != (slideCount - 1)) {

                // id'ing the next slide
                var clickedSideSlide = currentSlide.nextElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } else {    // implied that advance arrow was clicked when last slide was current

                // id'ing the first slide
                var clickedSideSlide = currentSlide.parentNode.firstElementChild;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } // closing inner if/else statement

        } // close if FOR REG VIEW LEFT SWIPE


        // LIGHTBOX LEFT SWIPE
        if (swipedThing.classList.contains('lightboximage')) {

            // declare vars for advanceOrRetreat function
            // mine data-* attribute from last dot right before arrows to get current gallery's name
            var galleryName = swipedThing.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
            var gallery = swipedThing.parentNode.parentNode.parentNode.parentNode;
            var dotsContainer = gallery.lastElementChild;
            var currentSlide = document.getElementById(galleryName + '-current');
        
            var currentCaptionDuringLightbox = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
        
            // find the current slide's index
            var currentIndex = currentSlide.getAttribute('data-slide-index');

            // if the reg view current slide has a caption
            if (currentCaptionDuringLightbox.hasAttribute('data-galleryfigcaption')) {
                currentCaptionDuringLightbox.style.display = "none";
            }

            // all functionality for building lightbox upon lightbox arrow click
            var dotsLightboxContainer = swipedThing.parentNode.lastElementChild.previousElementSibling;

            // get total number of slides in gallery; subtract 3 to prevent counting arrowContainer, dotsContainer, and placeholderBox
            var slideCount = gallery.children.length - 3;

            var currentLightbox = document.getElementById('singlelightbox');

            // if current img is not the last one in gallery
            // (slideCount - 1) because the index starts at 0, not 1, so need to subtract 1 from count to match them up
            if (currentSlide.getAttribute('data-slide-index') != (slideCount - 1)) {

                // id'ing the next slide
                var clickedSideSlide = currentSlide.nextElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                // define imgToShow for NAMED functions called within the following nested if-statements
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } else {    // implied that advance arrow was clicked when last slide was current

                // id'ing the first slide
                var clickedSideSlide = currentSlide.parentNode.firstElementChild;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } // closing inner if/else statement

        } // close if

    }); // close swiped-left inner function



    // respond to right-swipe
    document.addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);

        var swipedThing = e.target;

        // REG VIEW RIGHT SWIPE
        if ((e.target.getAttribute('id') == ('galleryimage')) && (e.target.classList.contains('clickme'))) {
            
            var dotsContainer = swipedThing.parentNode.parentNode.parentNode.lastElementChild;
            var gallery = swipedThing.parentNode.parentNode.parentNode;
            var galleryName = gallery.getAttribute('id');
            var currentSlide = document.getElementById(galleryName + '-current');

            // if current slide is not the first slide
            if (currentSlide.getAttribute('data-slide-index') != 0) {

                // id'ing previous slide
                var clickedSideSlide = currentSlide.previousElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } else {    // implied that retreat arrow was clicked when first slide was current

                // id'ing the last slide
                var clickedSideSlide = currentSlide.parentNode.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);

            } // closing inner if/else statement

        } // close if FOR REG VIEW RIGHT SWIPE


        // LIGHTBOX RIGHT SWIPE
        if (swipedThing.classList.contains('lightboximage')) {

            // declare vars for advanceOrRetreat function
            // mine data-* attribute from last dot right before arrows to get current gallery's name
            var galleryName = swipedThing.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
            var gallery = swipedThing.parentNode.parentNode.parentNode.parentNode;
            var dotsContainer = gallery.lastElementChild;
            var currentSlide = document.getElementById(galleryName + '-current');
        
            var currentCaptionDuringLightbox = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
        
            // find the current slide's index
            var currentIndex = currentSlide.getAttribute('data-slide-index');

            // if the reg view current slide has a caption
            if (currentCaptionDuringLightbox.hasAttribute('data-galleryfigcaption')) {
                currentCaptionDuringLightbox.style.display = "none";
            }

            // all functionality for building lightbox upon lightbox arrow click
            var dotsLightboxContainer = swipedThing.parentNode.lastElementChild.previousElementSibling;

            // get total number of slides in gallery; subtract 3 to prevent counting arrowContainer, dotsContainer, and placeholderBox
            var slideCount = gallery.children.length - 3;

            var currentLightbox = document.getElementById('singlelightbox');

            // if current slide is not the first slide
            if (currentSlide.getAttribute('data-slide-index') != 0) {

                // id'ing previous slide
                var clickedSideSlide = currentSlide.previousElementSibling;
                // var clickedIndex = -1;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } else {    // implied that retreat arrow was clicked when first slide was current

                // id'ing the last slide
                var clickedSideSlide = currentSlide.parentNode.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } // closing inner if/else statement

        } // close if

    }); // close swiped-RIGHT inner function
} // close overall swipe reg. view function




// USED FUNCTION ----------------------------------------------------------------------------
// for clicking on sideslides in regular view
function selectOtherSlide(e) {  

    var clickedThing = e.target;
    var clickedThingGrandparent = clickedThing.parentNode.parentNode;    // <li> element, if clickedThing was a side slide's <img>

    if (clickedThingGrandparent.hasAttribute('data-sideslide')) {

        var imgToShow = clickedThing;

        // declare variables needed for named function
        var clickedSideSlide = clickedThingGrandparent;
        var dotsContainer = clickedSideSlide.parentNode.lastElementChild;
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
    var clickedThingGrandparent = clickedThingParent.parentNode;

    // if the clicked element is a dot that is not the current dot
    if (clickedThingGrandparent.getAttribute('id') == 'regviewdotcontainer') {

        // var clickedDot = clickedThing;
        var clickedDot = clickedThingParent;

        // declare vars for advanceOrRetreat function
        var dotsContainer = clickedThingGrandparent;
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
        clickedDot.setAttribute('class', 'dot')
        // clickedDot.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/dot-filled.svg" alt="go to this slide" class="dotimg">';
    }  // close if
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to click on a regular-view dot (not a lightbox dot)
window.addEventListener('click', clickDot, false);




// USED FUNCTION ----------------------------------------------------------------------------
// makes lightbox dots advance/retreat the regular view slideshow beneath them
// creates and populates lightbox for slide corresponding to clicked dot
function lightboxDots(e) {

    var clickedThing = e.target;
    var clickedThingParent = clickedThing.parentNode;
    var clickedThingGrandparent = clickedThingParent.parentNode;

    if (clickedThingGrandparent.getAttribute('id') == 'lightboxdotcontainer') {

        var clickedLightboxDot = clickedThingParent;

        // declare vars for advanceOrRetreat function
        // mine data-* attribute from dot to get current gallery's name
        var galleryName = clickedLightboxDot.getAttribute('data-galleryname');
        var gallery = document.getElementById(galleryName);
        var dotsContainer = gallery.lastElementChild;
        var clickedIndex = clickedLightboxDot.getAttribute('data-dot-index');
        var currentSlide = document.getElementById(galleryName + '-current');

        
        var currentCaptionDuringLightbox = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
        
        // find the current slide's index
        var currentIndex = currentSlide.getAttribute('data-slide-index');

        // if the reg view current slide has a caption && if the clicked dot is NOT the current dot, hide the caption
        if (currentCaptionDuringLightbox.hasAttribute('data-galleryfigcaption')
            && (clickedIndex != currentIndex)) {
            currentCaptionDuringLightbox.style.display = "none";
        }

        // for loop to be able to define clickedSideSlide, based on currentDotIndex
        for (l = 0; l < dotsContainer.children.length; l++) {
            
            // find slide with matching index to current dot
            if (clickedIndex == gallery.children[l].getAttribute('data-slide-index')) {
                
                var clickedSideSlide = gallery.children[l];

                // calling NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);        

            }  // close if
        }  // close l

        // all functionality for building lightbox upon lightbox dot click
        var dotsLightboxContainer = clickedThingGrandparent;
        
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




// USED FUNCTION ----------------------------------------------------------------------------
// makes lightbox dots advance/retreat the regular view slideshow beneath them
// creates and populates lightbox for slide corresponding to clicked dot
function lightboxArrows(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('class') == ('galleryarrows lightboxarrows yellowhover')) {

        var clickedLightboxArrow = clickedThing;

        // declare vars for advanceOrRetreat function
        // mine data-* attribute from last dot right before arrows to get current gallery's name
        var galleryName = clickedLightboxArrow.parentNode.previousElementSibling.firstElementChild.getAttribute('data-galleryname');
        var gallery = document.getElementById(galleryName);
        var dotsContainer = gallery.lastElementChild;
        var currentSlide = document.getElementById(galleryName + '-current');
        
        var currentCaptionDuringLightbox = currentSlide.firstElementChild.lastElementChild.previousElementSibling;
        
        // find the current slide's index
        var currentIndex = currentSlide.getAttribute('data-slide-index');

        // if the reg view current slide has a caption
        if (currentCaptionDuringLightbox.hasAttribute('data-galleryfigcaption')) {
            currentCaptionDuringLightbox.style.display = "none";
        }

        // all functionality for building lightbox upon lightbox arrow click
        var dotsLightboxContainer = clickedThing.parentNode.previousElementSibling;

        // get total number of slides in gallery; subtract 3 to prevent counting arrowContainer, dotsContainer, and placeholderBox
        var slideCount = gallery.children.length - 3;

        var currentLightbox = document.getElementById('singlelightbox');

        if (clickedThing.hasAttribute('data-advancelightboxarrow')) {

            // if current img is not the last one in gallery
            // (slideCount - 1) because the index starts at 0, not 1, so need to subtract 1 from count to match them up
            if (currentSlide.getAttribute('data-slide-index') != (slideCount - 1)) {

                // id'ing the next slide
                var clickedSideSlide = currentSlide.nextElementSibling;
                // var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                // define imgToShow for NAMED functions called within the following nested if-statements
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } else {    // implied that advance arrow was clicked when last slide was current

                // id'ing the first slide
                var clickedSideSlide = currentSlide.parentNode.firstElementChild;
                // var clickedIndex = -(slideCount - 1);
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } // closing inner if/else statement

        } else {    // implied that retreat arrow was clicked

            // if current slide is not the first slide
            if (currentSlide.getAttribute('data-slide-index') != 0) {

                // id'ing previous slide
                var clickedSideSlide = currentSlide.previousElementSibling;
                // var clickedIndex = -1;
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } else {    // implied that retreat arrow was clicked when first slide was current

                // id'ing the last slide
                var clickedSideSlide = currentSlide.parentNode.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling;
                // var clickedIndex = (slideCount - 1);
                var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
                // calls NAMED FUNCTION
                advanceOrRetreat(clickedSideSlide, dotsContainer, gallery, clickedIndex, galleryName, currentSlide);
                var imgToShow = clickedSideSlide.firstElementChild.firstElementChild;
                // remove current lightbox
                currentLightbox.parentNode.removeChild(currentLightbox);
                // call NAMED lightbox function
                lightbox(imgToShow);  
                // call NAMED function to populate lightbox dots (defined in lightbox.js)
                populateLightboxDots(imgToShow); 

            } // closing inner if/else statement
        } // closing semi-outer if/else statement
    } // close if
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to clicks on lightbox arrows
window.addEventListener('click', lightboxArrows, false);




// TRYING IT LOWER DOWN IN SCRIPT TO SEE IF IT PERFORMS MORE CONSISTENTLY
// NAMED + USED FUNCTION ----------------------------------------------------------------------------
// vertically centers lightbox img
// used on resize + on click of an img to open lightbox
function verticallyCenter() {
    var singleLightbox = document.getElementById('singlelightbox');
    if (singleLightbox) {
        var lightboxImg = singleLightbox.firstElementChild;
        var imgHeight = lightboxImg.offsetHeight;
        singleLightbox.style.height = (window.innerHeight);
        singleLightbox.style.width = window.innerWidth;
        var lightboxHeight = singleLightbox.offsetHeight;
        lightboxImg.style.marginTop = (lightboxHeight - imgHeight)/2 + 'px';
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// vertically centers lightbox img upon screen resize
window.addEventListener('resize', verticallyCenter, false);




function lightboxSlideshowResize() {

    // this will reload the page as it is resized, and will keep its relative height the same; reloading the page will force it to run through all the existing (above) functions, so it will be resetting placeholderBox height, dotsContainer location, etc as resizing happens
    location.reload();

}

// window.addEventListener('resize', lightboxSlideshowResize, false);
window.addEventListener('orientationchange', lightboxSlideshowResize, false);



















// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TESTING SWIPE vvv !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!























// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TESTING SWIPE ^^^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!