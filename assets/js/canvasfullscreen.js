// append fullscreen button after canvas + move figcaption to below canvas within figure element
function canvasFullScreen() {

	var allCanvas = document.querySelectorAll('.p5Canvas');

	for (i = 0; i < allCanvas.length; i++) {

		var fullScreenButton = document.createElement('img');
		fullScreenButton.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-full-screen.svg');
		fullScreenButton.setAttribute('title', 'View in fullscreen mode');
		fullScreenButton.setAttribute('alt', 'View in fullscreen mode');
		fullScreenButton.setAttribute('class', 'fullscreentoggle tofullscreen');
		allCanvas[i].parentNode.appendChild(fullScreenButton);

		var figCaption = allCanvas[i].previousElementSibling;
		figCaption.parentNode.removeChild(figCaption);
		allCanvas[i].parentNode.appendChild(figCaption);

	} // close for loop
	
} // close canvasFullScreen function

window.addEventListener('load', canvasFullScreen, false);





function canvasLightbox(e) {

	var clickedThing = e.target;

	if (clickedThing.classList.contains('tofullscreen')) {

		var toFullScreenButton = clickedThing;


		// INSERT JS CODE TO TRANSFORM #sketch-holder INTO A LIGHTBOX-BG-LOOKALIKE (USE CSS FOR STYLING VIA JS-ADDED CLASS)

		var sketchHolder = toFullScreenButton.parentNode;
		sketchHolder.classList.add('sketch-lightbox');
		// style caption
		sketchHolder.lastElementChild.classList.add('lightboxcaption');
		//change fullscreen icon + position
		var regViewIcon = sketchHolder.firstElementChild.nextElementSibling;
		regViewIcon.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/to-regular-view.svg');
		regViewIcon.setAttribute('title', 'Close fullscreen mode');
		regViewIcon.setAttribute('alt', 'Close fullscreen mode');
		regViewIcon.setAttribute('class', 'fullscreentoggle toregview');
		// add caption-toggling chevron
		var chevron = document.createElement('img');
		chevron.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/up-arrowhead.svg');
        chevron.setAttribute('title', 'Toggle caption visibility');
        chevron.setAttribute('alt', 'Toggle caption visibility');
        chevron.setAttribute('id', 'captiontoggle');
        chevron.setAttribute('class', 'close-x yellowhover');
        chevron.setAttribute('captiontoggle', '');
        sketchHolder.appendChild(chevron);
		// add "x"
		var closeX = document.createElement('img');
		closeX.setAttribute('src', 'https://curiositycoloredglasses.com/assets/images/x.svg');
		closeX.setAttribute('title', 'Close fullscreen mode');
		closeX.setAttribute('alt', 'Close fullscreen mode');
		closeX.setAttribute('id', 'lightboxclose');
		closeX.setAttribute('class', 'close-x yellowhover');
		sketchHolder.appendChild(closeX);

		// NOT CONVINCED THAT THIS IS THE BEST WAY TO FORCE CANVAS TO RESIZE
		// CIRCLE ONLY RESIZES B/C blogarticle.js' draw() IS ALWAYS RE-CHECKING ANY OF ITS INTERNAL PARAMETERS
		// AND I GAVE IT IF-STATEMENTS ABOUT SCREENWIDTH + CHECKING IF sketchHolder HAD CLASS OF .sketch-lightbox
		// IT MIGHT BE MUCH BETTER TO HAVE blogarticle.js LISTEN FOR A CLICK ON FULLSCREENBUTTON,
		// THEN TRIGGER A redraw(); AND/OR resizeCanvas(..., ...); 
		// AND ALSO RE-CONFIGURE pE RATIO ACCORDING TO ALL THE BREAKPOINTS THAT INFLUENCE AN IMG/CANVAS'S WIDTH/HEIGHT IN LIGHTBOX
		// AND ALSO DEPENDS WHETHER MAX HEIGHT OR MAX WIDTH IS REACHED FIRST, WHEN COMPARING TO SCREEN DIMENSIONS

		sketchHolder.firstElementChild.classList.add('canvaslightbox');

		// current canvas dimensions, reagardless of screenwidth
		var cWNow = sketchHolder.firstElementChild.offsetWidth;
		var cHNow = sketchHolder.firstElementChild.offsetHeight;
		// canvas dimesnions in reg view, at 817+
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

	}
} // function

window.addEventListener('click', canvasLightbox, false);




