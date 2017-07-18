// NAMED FUNCTION ----------------------------------------------------------------------------
// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
// ... and returns the ability to scroll vertically
function removeHashReturnScroll() { 
    // remove #hash
    history.pushState("", document.title, window.location.pathname + window.location.search);
    // return scrollability
    document.documentElement.style.overflow = 'auto';
}



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




// NAMED FUNCTION ----------------------------------------------------------------------------
// lightbox screen shows img corresponding to clicked indicator of img
// the functions that later call this function define the "imgToShow" according to the perspective of what was clicked in their corresponding event listener
// e.g. the clicked indicator of the "imgToShow" could be a non-current slide in regular view...
// or (not yet coded), a lightbox dot corresponding to a non-current img
function lightbox(imgToShow) {

    // if clicked element is a single image or the focus img in a gallery
    if (imgToShow.classList.contains('clickme')) {

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
        singleLightbox.innerHTML = singleLightbox.parentNode.innerHTML + '<img src="http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/x.svg" alt="close" id="lightboxclose" class="close-x yellowhover" data-lightbox-x>';
        
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
            caption.setAttribute('class','xs-textface lightboxcaption');
            
            // add toggle icon
            var toggle = document.createElement('img');
            // !!! the src attributes (for "x" and "^" icons) vvv will have to update when I get proper hosting and URL set up! 
            // !!! or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
            // !!! or else construct its shape with CSS (research performance) vvv
            toggle.setAttribute('src', 'http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/up-arrowhead.svg');
            toggle.setAttribute('alt', 'close caption');
            toggle.setAttribute('id', 'captiontoggle');
            toggle.setAttribute('class', 'close-x yellowhover');
            toggle.setAttribute('captiontoggle', '');
            singleLightbox.appendChild(toggle);
            // create fake rule via <div>, since I can't use border, because I need to have padding to create white box, and border would span padding width
            var topRule = document.createElement('div');
            topRule.setAttribute('id', 'lightboxcaptionbar');
            singleLightbox.appendChild(topRule);   

        } // close if (caption)

        // if imgToShow is a gallery img
        if (imgToShow.getAttribute('id') == ('galleryimage')) {
                
            // create container to hold dots, within lightbox
            var lightboxDotContainer = document.createElement('div');
            lightboxDotContainer.setAttribute('id', 'lightboxdotcontainer');
            
            // fill with contents of non-lightbox (regular view) dot container
            lightboxDotContainer.innerHTML = imgToShow.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.innerHTML;
            singleLightbox.appendChild(lightboxDotContainer);

        } // close gallery-if

    } // close if ('clickme')

} // function




// USED FUNCTION ----------------------------------------------------------------------------
// invoked when a regular-view img is clicked (if img is within a gallery, it must be the focus img...
    // ... this is defined in the first if-statement of the called img, because only the focus img has the "clickme" class)
// so the imgToShow is the clicked img
function clickRegularViewFocusImg(e) {
    var imgToShow = e.target;
    
    // call NAMED lightbox function
    lightbox(imgToShow);
    
} // close function

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.addEventListener('click', clickRegularViewFocusImg, false);




// USED FUNCTION ----------------------------------------------------------------------------
// invoked when a lightbox dot is clicked
function clickLightboxDot(e) {
    var clickedLightboxDot = e.target;

    // !!!!!!!!!!!!!!! data-dot-index is also an attribute of regular view dots... so this could still apply to them !!!!!!!!!!!!!!!
    if (clickedLightboxDot.hasAttribute('data-dot-index')) {

        var dotsLightboxContainer = clickedLightboxDot.parentNode;
        var gallerySlides = dotsLightboxContainer.parentNode.parentNode.parentNode.parentNode;
    
        // for loop to be able to define imgToShow, based on clickedLightboxDot
        for (m = 0; m < dotsLightboxContainer.children.length; m++) {

            // find slide with matching index to current dot
            if (gallerySlides.children[m].getAttribute('data-slide-index') == clickedLightboxDot.getAttribute('data-dot-index')) {
                var imgToShow = gallerySlides.children[m].firstElementChild.firstElementChild;


                // !!! call NAMED lightbox function
                // lightbox(imgToShow);    // COMMENTED OUT WHILE TROUBLESHOOTING vvvvv

                // TROUBLESHOOTING WHY NAMED FUNCTION WON'T WORK
                // COPIED AND PASTED IT IN HERE DIRECTLY, INSTEAD OF CALLING IT
                // COMMENTING OUT EVERYTHING AND TESTING EACH LINE INIVIDUALLY

                // NAMED FUNCTION TROUBLESHOOTING vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


                // if clicked element is a single image
                // //// if (imgToShow.classList.contains('clickme')) {

                    // ADDING IF-STATEMENT TO CHECK IF A LIGHTBOX IS ALREADY OPEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // may need to move to being lower down within function, if it's better to close existing lightbox after new one is open...
                    // but needs to be before id of 'singlelightbox' is added to new lightbox!
                    var existingLightbox = document.getElementById('singlelightbox');
                    if (existingLightbox) {
                        existingLightbox.parentNode.removeChild(existingLightbox);
                        // removeHashReturnScroll();
                    }


                    // create lightbox container
                    var singleLightbox = document.createElement('div');        
                    // appending lightbox to the clicked img, since lightbox will be placed absolutely anyway (I think)
                    imgToShow.parentNode.appendChild(singleLightbox);
                    
                    // give lightbox attributes
                    singleLightbox.setAttribute('id', 'singlelightbox');
                    singleLightbox.setAttribute('data-lightbox-close', '');
                    
                    // give lightbox content: clicked image + "x" button if no caption
                    // this src attributes (for "x" and "^" icons) vvv will have to update when I get proper hosting and URL set up! 
                    // or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
                    // or else construct its shape with CSS (research performance) vvv
                    singleLightbox.innerHTML = singleLightbox.parentNode.innerHTML + '<img src="http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/x.svg" alt="close" id="lightboxclose" class="close-x yellowhover" data-lightbox-x>';
                    
                    //remove unintentionally duplicated lightbox element from original
                    var duplicate = singleLightbox.lastElementChild.previousElementSibling;
                    singleLightbox.removeChild(duplicate);

                    // style contents
                    var lightboxImg = singleLightbox.firstElementChild;
                    lightboxImg.setAttribute('class', 'contentimage singleimage lightboximage');
                    
                    // use JS to vertically center H imgs
                    verticallyCenter();
                    
                    // add #hash
                    var imgURL = singleLightbox.firstElementChild.getAttribute('src');
                    var imgURLArray = imgURL.split('/');
                    location.hash = imgURLArray[imgURLArray.length - 1];   
                    
                    // DOESN'T SEEM TO BE NEEDED FOR LIGHTBOX...?
                    // stop scrollability
                    // document.documentElement.style.overflow = 'hidden';
                    
                    // caption
                    var caption = document.querySelector('div>figcaption');
                    if (caption) {
            
                        // give caption attributes
                        caption.setAttribute('class','xs-textface lightboxcaption');
            
                        
                        // add toggle icon + top rule
                        var toggle = document.createElement('img');
                        toggle.setAttribute('src', 'http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/up-arrowhead.svg');
                        toggle.setAttribute('alt', 'close caption');
                        toggle.setAttribute('id', 'captiontoggle');
                        toggle.setAttribute('class', 'close-x yellowhover');
                        toggle.setAttribute('captiontoggle', '');
                        singleLightbox.appendChild(toggle);
                        
                        var topRule = document.createElement('div');
                        topRule.setAttribute('id', 'lightboxcaptionbar');
                        singleLightbox.appendChild(topRule);


                    } // close if (caption)
                    
                    // if clicked img is a gallery img
                    if (imgToShow.getAttribute('id') == ('galleryimage')) {
                
                        // ADDING DURING TROUBLESHOOTING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        caption.style.display = "block";
                        
                        var lightboxDotContainer = document.createElement('div');
                        lightboxDotContainer.setAttribute('id', 'lightboxdotcontainer');
                        // fill with contents of non-lightbox (regular view) dot container
                        lightboxDotContainer.innerHTML = imgToShow.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.innerHTML;
                        singleLightbox.appendChild(lightboxDotContainer);
                        
                        for (n = 0; n < lightboxDotContainer.children.length; n++) {
                            
                            // add attribute to identify lightbox dots as lightbox dots (apart from regular view dots)
                            // COMMENTING THIS OUT FOR TESTING!
                            // lightboxDotContainer.children[n].setAttribute('data-lightbox-dot', '');
                        
                            // remove data-* attribute identifying dots as regular view dots...?
                            

                        }
                        
                    } // close gallery-if
                    

                // //// } // close if ('clickme')


                // NAMED FUNCTION TROUBLESHOOTING ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            }  // close if

        }  // close m

    } // close if

} // close function

window.addEventListener('click', clickLightboxDot, false);




function toggleCaption(e) {
    var captionToggleIcon = e.target;
    if (captionToggleIcon.hasAttribute('captiontoggle')) {
        captionToggleIcon.classList.toggle('turn180');
        captionToggleIcon.previousElementSibling.previousElementSibling.removeAttribute('style');
        captionToggleIcon.previousElementSibling.previousElementSibling.classList.toggle('hide');
        captionToggleIcon.nextElementSibling.classList.toggle('hide');
    }
}

window.addEventListener('click', toggleCaption, false);




// closing by clicking white space
function lightboxSpaceClose(e) {
    clickedSpace = e.target;
    if (clickedSpace.hasAttribute('data-lightbox-close')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedSpace.parentNode.removeChild(lightboxToClose);
        removeHashReturnScroll();
    }
}

window.addEventListener('click', lightboxSpaceClose, false);



// "x" button
function lightboxXClose(e) {
    clickedX = e.target;
    if (clickedX.hasAttribute('data-lightbox-x')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedX.parentNode.parentNode.removeChild(lightboxToClose);
        removeHashReturnScroll();
    }
}

window.addEventListener('click', lightboxXClose, false);




