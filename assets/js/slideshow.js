function slideshow() {
    var galleryList = document.getElementsByClassName('gallery');
    
    // for each gallery
    for (i = 0; i < galleryList.length; i++) {
        // declare its name
        var galleryName = galleryList[i].getAttribute('id');

        //create dots container
        var dotsContainer = document.createElement('div');
        galleryList[i].appendChild(dotsContainer);

        // for each slide within each gallery (but subtract 2 to keep from counting the dotsContainer and advanceContainer as children)
        // starting at 1 instead of 0 to skip the first slide, so it stays within normal flow instead of being absolutely positioned
        
        // for (j = 1; j < (galleryList[i].children.length - 2); j++) {
        for (j = 0; j < (galleryList[i].children.length - 1); j++) {
            // create dots
            var dot = document.createElement('span');
            dot.innerHTML = '+';
            // put dots into dots container
            dotsContainer.appendChild(dot);

            // position all slides' <li> elements horizontally (absolute) + add data-* attribute to recognize them as side slides if clicked on
            var slide = galleryList[i].children;
            slide[j].setAttribute('data-slide-index', (j));
            slide[j].setAttribute('data-sideslide', '');
            slide[j].style.position = "absolute";
            // !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)
            slide[j].style.left = 'calc(700px * ' + j + ')';    // this size works for 1225+ only

            // position <figure> element vertically (relative)
            slide[j].firstElementChild.style.position = "relative";    // styling <figure> to be relatively positioned within <li> which is absolutely positioned
            slide[j].firstElementChild.style.top = 'calc(-4.1rem - ' + (slide[0].offsetHeight) + 'px)';
            
            // reset settings for first slide (default "current slide"): make it relatively positioned to push text down below it; get rid of data-* attribute identifying side slides for clicking
            slide[0].removeAttribute('data-sideslide');
            slide[0].style.position = "relative";
            slide[0].firstElementChild.style.top = '0';
            slide[0].setAttribute('id', galleryName + '-current');
    
        }   // close j
    }   // close i
}   // close function

window.addEventListener('load', slideshow, false);



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
        var difference = clickedIndex - currentIndex;

        // !!! THIS LINE OF CODE WILL NEED TO BE MEDIAQUERIED WITHIN JS, VIA if-statements on window.screenWidth (see menu.js)
        gallery.style.right = 'calc(700px * ' + clickedIndex + ')';

        // redistribute attributes
        currentSlide.removeAttribute('id');
        clickedSideSlide.setAttribute('id', galleryName + '-current');
        currentSlide.setAttribute('data-sideslide', '');
        clickedSideSlide.removeAttribute('data-sideslide');
        
        // TEST
        var container = document.getElementById('slideshowtest');    // TEST
        container.innerHTML = difference;
        
    }
}

window.addEventListener('click', selectOtherSlide, false);


















