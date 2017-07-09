// var contentImageList = document.getElementsByClassName('contentimage');

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
        
        //give lightbox content: clicked image + "x" button
        // this src attribute vvv will have to update when I get proper hosting and URL set up! 
        // or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
        // or else construct its shape with CSS (research performance) vvv
        singleLightbox.innerHTML = singleLightbox.parentNode.innerHTML + '<img src="http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/x.svg" alt="close" id="lightboxclose" class="close-x yellowhover" data-lightbox-x>';
        
        //remove unintentionally duplicated lightbox element from original
        var duplicate = singleLightbox.lastElementChild.previousElementSibling;
        singleLightbox.removeChild(duplicate);

        // style contents
        var lightboxImg = singleLightbox.firstElementChild;
        // lightboxImg.setAttribute('class', 'contentimage singleimage lightboximage');    // USE THIS FOR FINAL
        lightboxImg.setAttribute('id', 'lightboximage');    // ID FOR TESTING, TO OVERRIDE THE OTHER CLASSES' MEDIAQUERY SIZE SETTINGS

        // use JS to vertically center H imgs
        var imgHeight = lightboxImg.offsetHeight;
        singleLightbox.style.height = (window.innerHeight);
        singleLightbox.style.width = window.innerWidth;
        var lightboxHeight = singleLightbox.offsetHeight;
        lightboxImg.style.marginTop = (lightboxHeight - imgHeight)/2 + 'px';
        // lightboxImg.style.top = (lightboxHeight - imgHeight)/2 + 'px';
    }
}

window.addEventListener('click', openSupersimplelightbox, false);



// closing by clicking white space
function lightboxSpaceClose(e) {
    clickedSpace = e.target;
    if (clickedSpace.hasAttribute('data-lightbox-close')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedSpace.parentNode.removeChild(lightboxToClose);
    }
}

window.addEventListener('click', lightboxSpaceClose, false);



// "x" button
function lightboxXClose(e) {
    clickedX = e.target;
    if (clickedX.hasAttribute('data-lightbox-x')) {
        var lightboxToClose = document.getElementById('singlelightbox');
        clickedX.parentNode.parentNode.removeChild(lightboxToClose);
    }
}

window.addEventListener('click', lightboxXClose, false);

