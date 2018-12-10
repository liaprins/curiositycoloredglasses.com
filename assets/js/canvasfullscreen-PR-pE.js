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
		


		var canvasCurrentWidth = sketchHolder.firstElementChild.offsetWidth;
		var canvasCurrentHeight = sketchHolder.firstElementChild.offsetHeight;
		// THIS vvv WOULD NEED MUCH FINESSING: MANY BREAKPOINTS, AND HOW TO SPECIFY IF MAX-HEIGHT IS REACHED BEFORE MAX WIDTH, ETC
		var canvasNewWidth = 1108; // well, max-width, and only for 1225+...
		var canvasResizeRatio = (canvasNewWidth / canvasCurrentWidth);
		sketchHolder.firstElementChild.style.width = canvasNewWidth + "px";
		sketchHolder.firstElementChild.style.height = (canvasCurrentHeight * canvasResizeRatio) + "px";
		

    	document.getElementById('fullscreentest').innerHTML = cH; // TEST!!!



	}
} // function

window.addEventListener('click', canvasLightbox, false);




