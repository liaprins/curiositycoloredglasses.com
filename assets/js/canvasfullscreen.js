// move figcaption to below canvas within figure element + append fullscreen button after canvas
function canvasFullScreen() {

	var allCanvas = document.querySelectorAll('.p5Canvas');

	for (i = 0; i < allCanvas.length; i++) {
		
		// document.getElementById('fullscreentest').innerHTML = String(allCanvas[i].previousElementSibling.nodeName);
		// if (String(allCanvas[i].previousElementSibling.nodeName) == 'FIGCAPTION') {
		if (allCanvas[i].previousElementSibling) {
			// move figcaption to below canvas within figure element
			var figCaption = allCanvas[i].previousElementSibling;
			figCaption.setAttribute('data-canvas-figcaption', '');
			figCaption.parentNode.removeChild(figCaption);
			allCanvas[i].parentNode.appendChild(figCaption);
		}
		
		// append fullscreen button after canvas
		var fullScreenButton = document.createElement('img');
		fullScreenButton.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-full-screen.svg');
		fullScreenButton.setAttribute('title', 'View in fullscreen mode');
		fullScreenButton.setAttribute('alt', 'View in fullscreen mode');
		fullScreenButton.setAttribute('class', 'fullscreentoggle tofullscreen');
		allCanvas[i].parentNode.appendChild(fullScreenButton);
		// DOM order within #sketch-holder is now:
		// 1. <canvas>
		// [2. <figcaption> (OPTIONAL!)]
		// 3. .tofullscreen button
	} // close for loop
	
} // close canvasFullScreen function

window.addEventListener('load', canvasFullScreen, false);




// move canvas into lightbox mode
function canvasToLightbox(e) {

	var clickedThing = e.target;

	if (clickedThing.classList.contains('tofullscreen')) {

		var toFullScreenButton = clickedThing;

		// style sketchHolder
		var sketchHolder = toFullScreenButton.parentNode;
		sketchHolder.classList.add('sketch-lightbox');

		// remove fullscreen button while it's still the last DOM node (before adding more nodes)
		var fullScreenIcon = sketchHolder.lastElementChild;
		fullScreenIcon.parentNode.removeChild(fullScreenIcon);

		/*/
		// style caption
		if (sketchHolder.firstElementChild.nextElementSibling.hasAttribute('data-canvas-figcaption')) {
			sketchHolder.firstElementChild.nextElementSibling.classList.add('lightboxcaption', 'hide');
			// add caption-toggling chevron
			var chevron = document.createElement('img');
			chevron.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/up-arrowhead.svg');	
	        chevron.setAttribute('title', 'Toggle caption visibility');
        	chevron.setAttribute('alt', 'Toggle caption visibility');
    	    chevron.setAttribute('id', 'captiontoggle');
	        // chevron.setAttribute('class', 'close-x yellowhover turn180'); // use this line instead of the next if I want chevron to start int eh other direction it does now
        	chevron.setAttribute('class', 'close-x yellowhover');
    	    chevron.setAttribute('canvascaptiontoggle', '');
	        sketchHolder.appendChild(chevron);
		} 
		*/


		// add "x"
		var closeX = document.createElement('img');
		closeX.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/x.svg');
		closeX.setAttribute('title', 'Close fullscreen mode');
		closeX.setAttribute('alt', 'Close fullscreen mode');
		closeX.setAttribute('id', 'lightboxclose');
		closeX.setAttribute('class', 'close-x yellowhover');
		closeX.setAttribute('data-canvas-x', '');
		sketchHolder.appendChild(closeX);
		


		// add regview icon + position
		var regViewIcon = document.createElement('img');
		regViewIcon.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-regular-view.svg');
		regViewIcon.setAttribute('title', 'Close fullscreen mode');
		regViewIcon.setAttribute('alt', 'Close fullscreen mode');
		regViewIcon.setAttribute('id', 'toregview');
		regViewIcon.setAttribute('class', 'fullscreentoggle');
		regViewIcon.setAttribute('data-canvas-x', '');
		sketchHolder.appendChild(regViewIcon);
		document.getElementById('fullscreentest').innerHTML = regViewIcon.getAttribute('title');






		// DOM order within #sketch-holder is now:
		// 1. <canvas>
		// [2. <figcaption> (OPTIONAL!)]
		// 3. .close-x button ADDED HERE; SHOULD ONLY EXIST WITHIN LIGHTBOX
		// 4. #toregview button
		// [5. chevron for figcaption toggling (OPTIONAL!)] ADDED HERE; SHOULD ONLY EXIST WITHIN LIGHTBOX


		// now resize canvas for lightbox (but... vvv)
		// TRANSFORM #sketch-holder INTO A LIGHTBOX-BG-LOOKALIKE (USE CSS FOR STYLING VIA JS-ADDED "sketch-lightbox" CLASS)
		// NOT CONVINCED THAT THIS IS THE BEST WAY TO FORCE CANVAS TO RESIZE
		// CIRCLE ONLY RESIZES B/C blogarticle.js' draw() IS ALWAYS RE-CHECKING ANY OF ITS INTERNAL PARAMETERS
		// AND I GAVE IT IF-STATEMENTS ABOUT SCREENWIDTH + CHECKING IF sketchHolder HAD CLASS OF .sketch-lightbox
		// IT MIGHT BE MUCH BETTER TO HAVE blogarticle.js LISTEN FOR A CLICK ON FULLSCREENBUTTON,
		// THEN TRIGGER A redraw(); AND/OR resizeCanvas(..., ...); 

		sketchHolder.firstElementChild.classList.add('canvaslightbox');

		// current canvas dimensions, reagardless of screenwidth
		var cWNow = sketchHolder.firstElementChild.offsetWidth;
		var cHNow = sketchHolder.firstElementChild.offsetHeight;
		// canvas dimensions in reg view, at 817+
		var cW = 642;
		var cH = ((cW * cHNow) / cWNow);
		// canvas' max allowed width within lightbox
		var ltMaxW = 1108;
		// aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
		var ltWPad = 117;
		var ltHPad = 96;

		if (window.innerWidth >= 1225) {
			if (((window.innerWidth - ltWPad) / (window.innerHeight - ltHPad)) > (cW / cH)) {				
				sketchHolder.firstElementChild.style.width = (((window.innerHeight - ltHPad) * cW) / cH) + "px";
				sketchHolder.firstElementChild.style.height = (window.innerHeight - ltHPad) + "px";
				sketchHolder.firstElementChild.style.marginTop = ((window.innerHeight - (window.innerHeight - ltHPad)) / 2) + "px";
				// document.getElementById('fullscreentest').innerHTML = '>=1225 (A)'; // TEST!!!
			} else {
				sketchHolder.firstElementChild.style.width = ltMaxW + "px";
				sketchHolder.firstElementChild.style.height = ((ltMaxW * cH) / cW) + "px";
				sketchHolder.firstElementChild.style.marginTop = ((window.innerHeight - ((ltMaxW * cH) / cW)) / 2) + "px";
				// document.getElementById('fullscreentest').innerHTML = '>=1225 (B)'; // TEST!!!
			}
		} else if (window.innerWidth >= 817) {
			if (((window.innerWidth - ltWPad) / (window.innerHeight - ltHPad)) > (cW / cH)) {
				sketchHolder.firstElementChild.style.width = (((window.innerHeight - ltHPad) * cW) / cH) + "px";  // IDENTICAL TO IF WITHIN 1225
				sketchHolder.firstElementChild.style.height = (window.innerHeight - ltHPad) + "px";  // IDENTICAL TO IF WITHIN 1225
				sketchHolder.firstElementChild.style.marginTop = ((window.innerHeight - (window.innerHeight - ltHPad)) / 2) + "px";  // IDENTICAL TO IF WITHIN 1225
				// document.getElementById('fullscreentest').innerHTML = '>=817 (A)'; // TEST!!!
			} else {
				sketchHolder.firstElementChild.style.width = (window.innerWidth - ltWPad) + "px";
				sketchHolder.firstElementChild.style.height = (((window.innerWidth - ltWPad) * cH) / cW) + "px";
				sketchHolder.firstElementChild.style.marginTop = ((window.innerHeight - (((window.innerWidth - ltWPad) * cH) / cW)) / 2) + "px";
				// document.getElementById('fullscreentest').innerHTML = '>=817 (B)'; // TEST!!!
			}
		} else { // <817
			if ((window.innerWidth / window.innerHeight) > (cW / cH)) {
				sketchHolder.firstElementChild.style.width = ((window.innerHeight * cW) / cH) + "px";
				sketchHolder.firstElementChild.style.height = window.innerHeight + "px";
				sketchHolder.firstElementChild.style.marginTop = 0;
				// document.getElementById('fullscreentest').innerHTML = '<817 (A)'; // TEST!!!
			} else {
				sketchHolder.firstElementChild.style.width = window.innerWidth + "px";
				sketchHolder.firstElementChild.style.height = ((window.innerWidth * cH) / cW) + "px";
				sketchHolder.firstElementChild.style.marginTop = ((window.innerHeight - ((window.innerWidth * cH) / cW)) / 2) + "px";
				// document.getElementById('fullscreentest').innerHTML = '<817 (B)'; // TEST!!!
			}
		}

    	// turning on an event listener only when lightbox is open; this way hitting "escape" key can close lightbox (via "function addESC()")
    	document.addEventListener('keydown', canvasCloseEsc);
    	// set hash for URL when open
    	if (sketchHolder.hasAttribute('data-hash')) {
			location.hash = sketchHolder.getAttribute('data-hash');
		}
	    // stop V scrollability
    	document.documentElement.style.overflow = 'hidden';

   		// style caption: if statemtn must come after everything else...
   		// because nothing after it within this function is read if its condition is not met 
   		// (i.e. if there is NOT a caption)
		if (sketchHolder.firstElementChild.nextElementSibling.hasAttribute('data-canvas-figcaption')) {
			sketchHolder.firstElementChild.nextElementSibling.classList.add('lightboxcaption', 'hide');
			// add caption-toggling chevron
			var chevron = document.createElement('img');
			chevron.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/up-arrowhead.svg');	
	        chevron.setAttribute('title', 'Toggle caption visibility');
        	chevron.setAttribute('alt', 'Toggle caption visibility');
    	    chevron.setAttribute('id', 'captiontoggle');
	        // chevron.setAttribute('class', 'close-x yellowhover turn180'); // use this line instead of the next if I want chevron to start int eh other direction it does now
        	chevron.setAttribute('class', 'close-x yellowhover');
    	    chevron.setAttribute('canvascaptiontoggle', '');
	        sketchHolder.appendChild(chevron);
		} 
	
	} // close if-statement that defines what was clicked
} // function

window.addEventListener('click', canvasToLightbox, false);





// NAMED FUNCTION ----------------------------------------------------------------------------
function canvasClose() {
       	// even though it selects just the first thing that fits this description, there can only ever be one of these with this class at a time by definition, so this should be fine
    	var sketchHolder = document.querySelector('.sketch-lightbox');
    	if (sketchHolder.firstElementChild.nextElementSibling.hasAttribute('data-canvas-figcaption')) {
			sketchHolder.firstElementChild.nextElementSibling.classList.remove('lightboxcaption');
			sketchHolder.firstElementChild.nextElementSibling.classList.remove('hide');
			// var canvasCaptionToggle = sketchHolder.firstElementChild.nextElementSibling.nextElementSibling;
			var canvasCaptionToggle = document.getElementById('captiontoggle');
			sketchHolder.removeChild(canvasCaptionToggle);
		}
		// remove "x" button
		var closeX = document.getElementById('lightboxclose');
		sketchHolder.removeChild(closeX);
		// swap back out regview icon for fullscreen icon again + position
        // var regViewIcon = sketchHolder.lastElementChild;
        var regViewIcon = document.getElementById('toregview');
        sketchHolder.removeChild(regViewIcon);
        var fullScreenButton = document.createElement('img');
        fullScreenButton.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-full-screen.svg');
		fullScreenButton.setAttribute('title', 'View in fullscreen mode');
		fullScreenButton.setAttribute('alt', 'View in fullscreen mode');
		fullScreenButton.setAttribute('class', 'fullscreentoggle tofullscreen');
		sketchHolder.appendChild(fullScreenButton);
		// DOM order within #sketch-holder is now back to:
		// 1. <canvas>
		// [2. <figcaption> (OPTIONAL!)]
		// 3. .tofullscreen button

		// TRANSFORM #sketch-holder OUT OF LIGHTBOX-BG-LOOKALIKE (REMOVE JS-ADDED "sketch-lightbox" CLASS)
		sketchHolder.classList.remove('sketch-lightbox');
        // lightbox canvas dimensions, reagardless of screenwidth
		var cWLb = sketchHolder.firstElementChild.offsetWidth;
		var cHLb = sketchHolder.firstElementChild.offsetHeight;
		// canvas dimensions in reg view, at 817+
		var cWRegViewLarge = 642;
		var cHRegViewLarge = ((cWRegViewLarge * cHLb) / cWLb);
		// canvas dimensions in reg view, at <817
		var cWRegViewSmall = 78.571;
		var cHRegViewSmall = ((cWRegViewSmall * cHLb) / cWLb);
        if (window.innerWidth >= 817) {
        	sketchHolder.firstElementChild.style.width = cWRegViewLarge + "px";
        	sketchHolder.firstElementChild.style.height = cHRegViewLarge + "px";
        } else {
        	sketchHolder.firstElementChild.style.width = cWRegViewSmall + "vw";
        	sketchHolder.firstElementChild.style.height = cHRegViewSmall + "vw";
        }

		// RETURN TO ACTIVATE THESE LATER!
        document.removeEventListener('keydown', addESC); // is turned on when lightbox is open, and only needed when it's open, so removing to save resources when not needed
        // call NAMED function
        removeHashReturnScroll();
}




// USED FUNCTION ----------------------------------------------------------------------------
// (white space surrounding sketch, within lightbox mode) || ("x" button or "to reg view" button)
function xOrRegViewIconOrWhiteSpaceClick(e) {
    clickedThing = e.target;
    // id either X or toRegView button
    if ((clickedThing.hasAttribute('data-canvas-x')) || (clickedThing.classList.contains('sketch-lightbox'))) {
		canvasClose();
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to a click on the lightbox "x" button
window.addEventListener('click', xOrRegViewIconOrWhiteSpaceClick, false);





// USED FUNCTION ----------------------------------------------------------------------------
// EVENT LISTENER TURNED ON WITHIN LAST LINE (~100) OF "function canvasLightbox(e)"
// escape key to exit from lightbox
var canvasCloseEsc = function(e) {
  if (e.keyCode == 27) {
	canvasClose();
  } 
}




// NAMED + USED FUNCTION ----------------------------------------------------------------------------
// toggles lightbox caption open/closed
function toggleCanvasCaption(e) {
    var captionToggleIcon = e.target;
    if (captionToggleIcon.hasAttribute('canvascaptiontoggle')) {
        captionToggleIcon.classList.toggle('turn180');
        // captionToggleIcon.previousElementSibling.removeAttribute('style');
        // captionToggleIcon.previousElementSibling.classList.toggle('hide');
        captionToggleIcon.parentNode.firstElementChild.nextElementSibling.removeAttribute('style');
        captionToggleIcon.parentNode.firstElementChild.nextElementSibling.classList.toggle('hide');
    }
}

// EVENT LISTENER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// responds to clicks on caption toggle
window.addEventListener('click', toggleCanvasCaption, false);




































