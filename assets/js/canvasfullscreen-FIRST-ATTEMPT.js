// append fullscreen button after canvas
function canvasFullScreen() {

	var allCanvas = document.querySelectorAll('.p5Canvas');

	for (i = 0; i < allCanvas.length; i++) {

		var fullScreenButton = document.createElement('img');
		fullScreenButton.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-full-screen.svg');
		fullScreenButton.setAttribute('title', 'View in fullscreen mode');
		fullScreenButton.setAttribute('alt', 'View in fullscreen mode');
		fullScreenButton.setAttribute('class', 'fullscreentoggle tofullscreen');
		allCanvas[i].parentNode.appendChild(fullScreenButton);

	} // close for loop
	
} // close canvasFullScreen function

window.addEventListener('load', canvasFullScreen, false);





function canvasLightbox(e) {

	var clickedThing = e.target;

	if (clickedThing.classList.contains('tofullscreen')) {

		var toFullScreenButton = clickedThing;

	    // create lightbox container
    	var canvasLightbox = document.createElement('div');
        // append lightbox to the <figure> element (the parent of both <canvas> and the fullscreen button), since lightbox will be position: fixed; anyway
    	toFullScreenButton.parentNode.appendChild(canvasLightbox); 
        // give lightbox attributes
    	// to identify it later
    	canvasLightbox.setAttribute('id', 'canvaslightbox');
	    // so it can be clicked (wherever the image, caption, etc is NOT) to close itself
    	canvasLightbox.setAttribute('data-lightbox-close', '');

	    // give lightbox content: the <figure> element of image to show (includes its <figcaption> if there is one) + "x" button
    	// !!! the src attributes (for "x" and "^" icons) vvv will have to update when I get proper hosting and URL set up! 
	    // !!! or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
    	// !!! or else construct its shape with CSS (research performance) vvv
	    canvasLightbox.innerHTML = canvasLightbox.parentNode.innerHTML + '<img src="https://curiositycoloredglasses.com/assets/images/x.svg" alt="close" id="lightboxclose" class="close-x yellowhover" data-lightbox-x>';

	    // MAY NEED TO REMOVE (VIA JS, HERE) THE fullScreenButton THAT IS RE-BUILT BY DEFAULT AS PART OF THE LIGHTBOX BUILD, BY NATURE OF IT BEING CONTAINED WITHIN <figure>
	    // MAY ALSO NEED TO REMOVE (OR SOMETHING) ORIGINAL <canvas> ELEMENT FROM BEHIND LIGHTBOX, SO THIS ONE WITHIN LIGHTBOX CAN WORK...

    	// remove unintentionally duplicated lightbox element from original
	    // (duplicated when call the HTML of <figure> element it is attached to was duplicated as lightbox's content)
    	var duplicate = canvasLightbox.lastElementChild.previousElementSibling;
	    canvasLightbox.removeChild(duplicate);

    	var regViewCanvas = toFullScreenButton.previousElementSibling; // only as long as <figcaption> remains before it sequentially within code/DOM...
    	document.getElementById('fullscreentest').innerHTML = regViewCanvas.getAttribute('id'); // TEST!!!
    	regViewCanvas.parentNode.removeChild(regViewCanvas);

	    /*
    	// style canvas within lightbox; WILL COME BACK TO HOW TO BEST DO THIS LATER...
    	var lightboxCanvas = canvasLightbox.firstElementChild.nextElementChild; // only as long as <figcaption> remains before it sequentially within code/DOM...
	    // lightboxCanvas.setAttribute('class', 'contentimage singleimage lightboximage');

	    // call NAMED FUNCTION
    	// use JS to vertically center H imgs
	    verticallyCenter();
	    */

	    // add #hash (as long as I remembered/cared to add one as a "data-hash" attribute within panel, manually via HTML to "sketch-holder")
    	var hash = toFullScreenButton.parentNode.getAttribute('data-hash');
    	if (hash) {
	    	location.hash = hash; 
	    }

	    // stop V scrollability
    	// document.documentElement.style.overflow = 'hidden';
	}

    /*   
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
		*/

        /*
        // create fake top bar via <div>, since I can't use border, because I need to have padding to create white box, and border would span padding width
        var topRule = document.createElement('div');
        topRule.setAttribute('id', 'lightboxcaptionbar');
        singleLightbox.appendChild(topRule);   
        */

       /*
    } // close if (caption)
    */
} // function

window.addEventListener('click', canvasLightbox, false);




