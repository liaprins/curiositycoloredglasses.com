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

window.addEventListener('resize', verticallyCenter, false);


function openSupersimplelightbox(e) {
    clickedImg = e.target;

    // if clicked element is a single image
    if (clickedImg.classList.contains('singleimage')) {
        // TESTING
        var testContainer = document.getElementById('lightboxtest');
        testContainer.innerHTML = clickedImg.parentNode.innerHTML;

        // create lightbox container
        var singleLightbox = document.createElement('div');
        
        // appending lightbox to the clicked img, since lightbox will be placed absolutely anyway (I think)
        clickedImg.parentNode.appendChild(singleLightbox);
        
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
        // lightboxImg.setAttribute('class', 'contentimage singleimage lightboximage');    // USE THIS FOR FINAL
        lightboxImg.setAttribute('class', 'contentimage singleimage lightboximage');    // ID FOR TESTING, TO OVERRIDE THE OTHER CLASSES' MEDIAQUERY SIZE SETTINGS

        // use JS to vertically center H imgs
        verticallyCenter();
        
        // add #hash
        var imgURL = singleLightbox.firstElementChild.getAttribute('src');
        var imgURLArray = imgURL.split('/');
        location.hash = imgURLArray[imgURLArray.length - 1];   

        // stop scrollability
        document.documentElement.style.overflow = 'hidden';

        // caption
        var caption = document.querySelector('div>figcaption');
        if (caption) {
            
            // give caption attributes
            caption.setAttribute('class','s-textface lightboxcaption');
            
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
        }
    }
}

window.addEventListener('click', openSupersimplelightbox, false);



function toggleCaption(e) {
    var captionToggleIcon = e.target;
    if (captionToggleIcon.hasAttribute('captiontoggle')) {
        captionToggleIcon.classList.toggle('turn180');
        captionToggleIcon.previousElementSibling.previousElementSibling.classList.toggle('hide');
        captionToggleIcon.nextElementSibling.classList.toggle('hide');
    }
}

window.addEventListener('click', toggleCaption, false);



// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
function removeHashReturnScroll() { 
    // remove #hash
    history.pushState("", document.title, window.location.pathname + window.location.search);
    // return scrollability
    document.documentElement.style.overflow = 'auto';
}



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




