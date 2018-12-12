// *************************************************************************************************************
// move figcaption to below canvas within figure element + append fullscreen button after canvas
function canvasFullScreen() {

	var allCanvas = document.querySelectorAll('.p5Canvas');

	for (i = 0; i < allCanvas.length; i++) {
		
		// append fullscreen button after canvas
		var lightboxToggle = document.createElement('img');
		lightboxToggle.setAttribute('src', '../assets/images/to-full-screen.svg');
		lightboxToggle.setAttribute('title', 'View in fullscreen mode');
		lightboxToggle.setAttribute('alt', 'View in fullscreen mode');
		lightboxToggle.setAttribute('class', 'fullscreentoggle tofullscreen yellowhover');
		allCanvas[i].parentNode.appendChild(lightboxToggle);

		// id if there's a figcaption; if so, move it to be after canvas
		if (allCanvas[i].previousElementSibling) {
			var figCaption = allCanvas[i].previousElementSibling;
			figCaption.setAttribute('data-canvas-figcaption', '');
			figCaption.parentNode.removeChild(figCaption);
			allCanvas[i].parentNode.appendChild(figCaption);
		}
		
		// DOM order within #sketch-holder is now:
		// 1.) <canvas>
		// 2.) .fullscreentoggle button
		//[3.) <figcaption> (OPTIONAL!)]
		
	} // close for loop
	
} // close canvasFullScreen function

window.addEventListener('load', canvasFullScreen, false);




// *************************************************************************************************************
// click fullscreen button to move canvas into lightbox mode
function canvasToLightbox(e) {

	var clickedThing = e.target;

	if (clickedThing.classList.contains('tofullscreen')) {

		// all UI var's defined except for chevron, which must be defined within if-statement at end (dependent upon existence of <figcaption> or not)
		var lightboxToggle = clickedThing;
		var sketchHolder = lightboxToggle.parentNode;
		var canvas = sketchHolder.firstElementChild;
		var closeX = document.createElement('img');

		// style sketchHolder to mimic image's lightboxes
		sketchHolder.classList.add('sketch-lightbox');

		// --------------------------------------------------------------------------------
		// RESIZE CANVAS FOR LIGHTBOX (BUT SEE NOTES WIHTIN GITHUB ISSUE #176!)
		
		// add class to canvas to position it H'ly with CSS
		canvas.classList.add('canvaslightbox');

		// all var's needed to resize canvas at various screenwidths
		// current canvas dimensions, regardless of screenwidth
		var cWNow = canvas.offsetWidth;
		var cHNow = canvas.offsetHeight;
		// canvas dimensions in reg view, at 817+
		var cW = 642;
		var cH = ((cW * cHNow) / cWNow);
		// canvas' max allowed width within lightbox
		var ltMaxW = 1108;
		// aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
		var ltWPad = 117;
		var ltHPad = 96;

		// size according to lightbox style-rules for each screenwidth
		if (window.innerWidth >= 1225) {
			if (((window.innerWidth - ltWPad) / (window.innerHeight - ltHPad)) > (cW / cH)) {				
				canvas.style.width = (((window.innerHeight - ltHPad) * cW) / cH) + "px";
				canvas.style.height = (window.innerHeight - ltHPad) + "px";
				canvas.style.marginTop = ((window.innerHeight - (window.innerHeight - ltHPad)) / 2) + "px";
			} else {
				canvas.style.width = ltMaxW + "px";
				canvas.style.height = ((ltMaxW * cH) / cW) + "px";
				canvas.style.marginTop = ((window.innerHeight - ((ltMaxW * cH) / cW)) / 2) + "px";
			}
		} else if (window.innerWidth >= 817) {
			if (((window.innerWidth - ltWPad) / (window.innerHeight - ltHPad)) > (cW / cH)) {
				canvas.style.width = (((window.innerHeight - ltHPad) * cW) / cH) + "px";  // IDENTICAL TO IF WITHIN 1225
				canvas.style.height = (window.innerHeight - ltHPad) + "px";  // IDENTICAL TO IF WITHIN 1225
				canvas.style.marginTop = ((window.innerHeight - (window.innerHeight - ltHPad)) / 2) + "px";  // IDENTICAL TO IF WITHIN 1225
			} else {
				canvas.style.width = (window.innerWidth - ltWPad) + "px";
				canvas.style.height = (((window.innerWidth - ltWPad) * cH) / cW) + "px";
				canvas.style.marginTop = ((window.innerHeight - (((window.innerWidth - ltWPad) * cH) / cW)) / 2) + "px";
			}
		} else { // <817
			if ((window.innerWidth / window.innerHeight) > (cW / cH)) {
				canvas.style.width = ((window.innerHeight * cW) / cH) + "px";
				canvas.style.height = window.innerHeight + "px";
				canvas.style.marginTop = 0;
			} else {
				canvas.style.width = window.innerWidth + "px";
				canvas.style.height = ((window.innerWidth * cH) / cW) + "px";
				canvas.style.marginTop = ((window.innerHeight - ((window.innerWidth * cH) / cW)) / 2) + "px";
			}
		}


		// --------------------------------------------------------------------------------
		// ADD OTHER LIGHTBOX-NECESSARY FUNCTIONALITY

    	// set hash for URL when open
    	if (sketchHolder.hasAttribute('data-hash')) {
			location.hash = sketchHolder.getAttribute('data-hash');
		}
		
	    // stop V scrollability
    	document.documentElement.style.overflow = 'hidden';

    	// set up escape key functionality, for exiting (separate function will follow)
        // turning on an event listener only when lightbox is open; this way hitting "escape" key can close lightbox (via "function addESC()")
    	document.addEventListener('keydown', canvasCloseEsc);


		// --------------------------------------------------------------------------------
		// FLESH OUT ALL LIGHTBOX-RELATED BUTTONS except for chevron, which must be defined within if-statement at end (dependent upon existence of <figcaption> or not)

		// swap from "to-full-screen" icon over to "to-reg-view" icon
		lightboxToggle.setAttribute('src', '../assets/images/to-regular-view.svg');
		lightboxToggle.setAttribute('title', 'Close fullscreen mode');
		lightboxToggle.setAttribute('alt', 'Close fullscreen mode');
		lightboxToggle.setAttribute('id', 'toregview');
		lightboxToggle.setAttribute('class', 'fullscreentoggle yellowhover');
		lightboxToggle.setAttribute('data-canvas-x', '');		

		// add "x"; created as <img> node within var list
		closeX.setAttribute('src', '../assets/images/x.svg');
		closeX.setAttribute('title', 'Close fullscreen mode');
		closeX.setAttribute('alt', 'Close fullscreen mode');
		closeX.setAttribute('id', 'lightboxclose');
		closeX.setAttribute('class', 'close-x yellowhover');
		closeX.setAttribute('data-canvas-x', '');
		sketchHolder.appendChild(closeX);
		

		// --------------------------------------------------------------------------------
		// DEFINE + FLESH OUT CAPTION TOGGLE

		// id if caption exists; if so add chevron
		if (lightboxToggle.nextElementSibling.hasAttribute('data-canvas-figcaption')) {
			
			var caption = lightboxToggle.nextElementSibling;
			caption.classList.add('lightboxcaption', 'hide');

			// add caption-toggling chevron (functionality is added within function toggleCanvasCaption(e))
			var chevron = document.createElement('img');
			chevron.setAttribute('src', '../assets/images/up-arrowhead.svg');	
	        chevron.setAttribute('title', 'Toggle caption visibility');
        	chevron.setAttribute('alt', 'Toggle caption visibility');
    	    chevron.setAttribute('id', 'captiontoggle');
        	chevron.setAttribute('class', 'close-x yellowhover');
    	    chevron.setAttribute('canvascaptiontoggle', '');
	        sketchHolder.appendChild(chevron);
		}

		// DOM order within #sketch-holder is now:
		// 1.) canvas
		// 2.) lightboxToggle
		//[3.) caption (OPTIONAL!)]
		// 3.) [or 4.)] .closeX
		//[5.) chevron
	
	} // close if-statement that defines what was clicked
} // function

window.addEventListener('click', canvasToLightbox, false);





// *************************************************************************************************************
// NAMED FUNCTION ----------------------------------------------------------------------------
function canvasClose() {
	
    // all UI var's defined except for chevron, which must be defined within if-statement at end (dependent upon existence of <figcaption> or not)
	var sketchHolder = document.querySelector('.sketch-lightbox'); // even though it selects just the first thing that fits this description, there can only ever be one of these with this class at a time by definition, so this should be fine
    var canvas = sketchHolder.firstElementChild;
   	var lightboxToggle = canvas.nextElementSibling;
    var closeX = document.getElementById('lightboxclose');


	// --------------------------------------------------------------------------------
	// RESIZE CANVAS OUT OF LIGHTBOX BACK INTO REG VIEW STYLES (BUT SEE NOTES WITHIN GITHUB ISSUE #176!)

	// remove class from canvas to remove special lightbox-positioning-styles
	canvas.classList.remove('canvaslightbox');

	// all var's needed to resize canvas at various screenwidths
    // lightbox canvas dimensions, reagardless of screenwidth
	var cWLb = canvas.offsetWidth;
	var cHLb = canvas.offsetHeight;
	// canvas dimensions in reg view, at 817+
	var cWRegViewLarge = 642;
	var cHRegViewLarge = ((cWRegViewLarge * cHLb) / cWLb);
	// canvas dimensions in reg view, at <817
	var cWRegViewSmall = 78.571;
	var cHRegViewSmall = ((cWRegViewSmall * cHLb) / cWLb);


    if (window.innerWidth >= 817) {
       	canvas.style.width = cWRegViewLarge + "px";
       	canvas.style.height = cHRegViewLarge + "px";
       	canvas.style.marginTop = 0;
    } else {
       	canvas.style.width = cWRegViewSmall + "vw";
       	canvas.style.height = cHRegViewSmall + "vw";
       	canvas.style.marginTop = 0;
    }

    
	// --------------------------------------------------------------------------------
	// ADD OTHER LIGHTBOX-REMOVAL FUNCTIONALITY

	// RETURN TO ACTIVATE THESE LATER!
    document.removeEventListener('keydown', addESC); // is turned on when lightbox is open, and only needed when it's open, so removing to save resources when not needed

    // call NAMED function
    removeHashReturnScroll();


    // --------------------------------------------------------------------------------
	// RESTORE NORMAL STYLE TO CAPTION + REMOVE CAPTION CHEVRON

   	// id if caption exists, if so put caption back to normal visibility + remove chevron
   	if (lightboxToggle.nextElementSibling.hasAttribute('data-canvas-figcaption')) {
		
		var caption = lightboxToggle.nextElementSibling;
		caption.classList.remove('lightboxcaption');
		caption.classList.remove('hide');

		var chevron = document.getElementById('captiontoggle');
		sketchHolder.removeChild(chevron);
	}


	// --------------------------------------------------------------------------------
	// RESTORE REG VIEW SETTINGS TO UI ELEMENTS

	// change lightboxToggle back into "to-full-screen" icon + functionality
	lightboxToggle.setAttribute('src', '../assets/images/to-full-screen.svg');
	lightboxToggle.setAttribute('title', 'View in fullscreen mode');
	lightboxToggle.setAttribute('alt', 'View in fullscreen mode');
	lightboxToggle.setAttribute('class', 'fullscreentoggle tofullscreen yellowhover');

	// remove "X" 
	sketchHolder.removeChild(closeX);

	// remove special lightbox-like styling from sketchHolder 
	sketchHolder.classList.remove('sketch-lightbox'); // this must come last since this var, and therefore other UI vars, are defined by the presence of this class attached to sketchHolder!
}




// *************************************************************************************************************
// id either X or toRegView button
function xOrRegViewIconOrWhiteSpaceClick(e) {
    clickedThing = e.target;
    // (white space surrounding sketch, within lightbox mode) || ("x" button or "to reg view" button)
    if ((clickedThing.hasAttribute('data-canvas-x')) || (clickedThing.classList.contains('sketch-lightbox'))) {
    // if ((clickedThing.getAttribute('id') == 'lightboxclose') || (clickedThing.classList.contains('sketch-lightbox'))) {
		canvasClose();
    }
}

// responds to a click on the lightbox "x" button
window.addEventListener('click', xOrRegViewIconOrWhiteSpaceClick, false);






// *************************************************************************************************************
// escape key to exit from lightbox; event listener turned on within "function canvasLightbox(e)"
var canvasCloseEsc = function(e) {
  if (e.keyCode == 27) {
	canvasClose();
  } 
}




// *************************************************************************************************************
// toggles lightbox caption open/closed
function toggleCanvasCaption(e) {

    var clickedThing = e.target;

    if (clickedThing.hasAttribute('canvascaptiontoggle')) {

    	var chevron = clickedThing;
        chevron.classList.toggle('turn180');

        var caption = chevron.previousElementSibling.previousElementSibling;
        caption.removeAttribute('style');
        caption.classList.toggle('hide');
    }
}

// responds to clicks on caption toggle
window.addEventListener('click', toggleCanvasCaption, false);



































