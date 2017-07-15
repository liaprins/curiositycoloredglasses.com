function slideshow() {    // on page load
    var galleryList = document.getElementsByClassName('gallery');
      
    // hide all captions
    var galleryCaptionList = document.getElementsByClassName('gallerycaption');
    for (h = 0; h < galleryCaptionList.length; h++) {
        galleryCaptionList[h].style.display = "none";
    }    // close h
    
    // for each gallery
    for (i = 0; i < galleryList.length; i++) {
        // declare its name
        var galleryName = galleryList[i].getAttribute('id');

        //create dots container
        var dotsContainer = document.createElement('div');
        galleryList[i].appendChild(dotsContainer);
        dotsContainer.setAttribute('class', 'dotcontainer');

        // establish placeholder box to keep text after img at proper height
        var placeholderBox = document.createElement('div');
        galleryList[i].appendChild(placeholderBox);
        placeholderBox.style.position = 'relative';
        placeholderBox.style.top = '2.048rem';    // this size works for 1225+ only
        placeholderBox.style.height = 'calc(2.048rem + ' + galleryList[i].firstElementChild.offsetHeight + 'px)';    // 2.048rem works for 1225+ only
        placeholderBox.setAttribute('id', 'placeholderbox');

        // for each slide within each gallery (but subtract 2 to keep from counting the dotsContainer and placeholderBox as children)
        // starting at 1 instead of 0 to skip the first slide, so it stays within normal flow instead of being absolutely positioned
        for (j = 0; j < (galleryList[i].children.length - 2); j++) {

            // create dots + put dots into dots container
            var dot = document.createElement('span');
            dot.innerHTML = '-';
            dotsContainer.appendChild(dot);
            dotsList = dotsContainer.children;
            dotsList[0].innerHTML = '+';

            // position all slides' <li> elements horizontally (absolute) + add data-* attribute to recognize them as side slides if clicked on
            // var slide = galleryList[i].children;
            var slide = galleryList[i].children;
            slide[j].setAttribute('data-slide-index', (j));
            slide[j].setAttribute('data-sideslide', '');
            slide[j].style.position = "absolute";
            slide[j].style.left = 'calc(700px * ' + j + ')';    // this size works for 1225+ only

            // position <figure> element vertically (relative)
            slide[j].firstElementChild.style.position = "relative";    // styling <figure> to be relatively positioned within <li> which is absolutely positioned
            
            // set first slide up as "current slide"
            slide[0].removeAttribute('data-sideslide');
            slide[0].firstElementChild.style.top = '0';
            slide[0].setAttribute('id', galleryName + '-current');
    
        }   // close j

        // show first slide's caption, if it has one
        var firstCaption = galleryList[i].firstElementChild.firstElementChild.lastElementChild;
        if (firstCaption.hasAttribute('galleryfigcaption')) {
            firstCaption.style.display = "block";
        }    // close if

    }   // close i
}   // close function

// window.addEventListener('load', slideshow, false);
window.addEventListener('DOMContentLoaded', slideshow, false);



function selectOtherSlide(e) {    
    var clickedImg = e.target;
    var clickedSideSlide = clickedImg.parentNode.parentNode;

    // if the clicked element is a side slide (not the current slide or any other element)
    if (clickedSideSlide.hasAttribute('data-sideslide')) {

        var clickedIndex = clickedSideSlide.getAttribute('data-slide-index');
        var gallery = clickedSideSlide.parentNode;
        var galleryName = gallery.getAttribute('id');
        var currentSlide = document.getElementById(galleryName + '-current');
        var currentIndex = currentSlide.getAttribute('data-slide-index');

        var dotsContainer = clickedSideSlide.parentNode.lastElementChild.previousElementSibling;
        var dotsList = dotsContainer.children;
        // update dots
        for (k = 0; k < dotsList.length; k++) {
            if (k == clickedIndex) {
                dotsList[k].innerHTML = '+';
            } else {
                dotsList[k].innerHTML = '-';
            }

        }    // close k

        // moves entire gallery
        gallery.style.right = 'calc(700px * ' + clickedIndex + ')';    // !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)
        
        // keeps placeholderBox in current slide position + reflects its height
        var placeholderBox = gallery.lastElementChild;
        placeholderBox.style.right = 'calc(-700px * ' + clickedIndex + ')';    // this size works for 1225+ only
        placeholderBox.style.height = 'calc(2.048rem + ' + clickedSideSlide.firstElementChild.offsetHeight + 'px)';        

        // move caption visibility to clicked slide
        currentCaption = currentSlide.firstElementChild.lastElementChild;
        if (currentCaption.hasAttribute('galleryfigcaption')) {
            currentCaption.style.display = "none";
        }
        clickedSlideCaption = clickedSideSlide.firstElementChild.lastElementChild;
        if (clickedSlideCaption.hasAttribute('galleryfigcaption')) {
            clickedSlideCaption.style.display = "block";
        }

        // pass current slide attributes to clicked slide, and vice versa, for identification
        currentSlide.removeAttribute('id');
        clickedSideSlide.setAttribute('id', galleryName + '-current');
        currentSlide.setAttribute('data-sideslide', '');
        clickedSideSlide.removeAttribute('data-sideslide');
        
        // TEST
        var container = document.getElementById('slideshowtest');    // TEST
        container.innerHTML = clickedIndex;
    }    // close if
}    // close function

window.addEventListener('click', selectOtherSlide, false);

















