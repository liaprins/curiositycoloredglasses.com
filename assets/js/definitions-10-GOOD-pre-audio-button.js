//collect all inline vocab words (found across post text)
var inlineVocabWordList = document.getElementsByClassName('vocabwordinline');



function vocabResize() {
	if (window.innerWidth >= 1225) {
		
		// looping through to remove the href attribute ...
		// ...only above 1225px screenwidth, so that vocabword still anchor links to glossary at smaller screensizes
		for (var j = 0; j < inlineVocabWordList.length; j++) {
			inlineVocabWordList[j].removeAttribute('href');
		}
	
	} else {
		
		for (var l = 0; l < inlineVocabWordList.length; l++) {
			
			// giving it back its href to link to glossary if not desktop size
			inlineVocabWordList[l].setAttribute('href', window.location + '#' + inlineVocabWordList[l].getAttribute('data-definition-id'));

			var openContainer = document.getElementById('definitioncontainer');

			if (openContainer) {
				openContainer.parentNode.removeChild(openContainer);
			}

		}
	}
}

window.addEventListener('resize', vocabResize, false);



function vocabTest(e) {

	if (window.innerWidth >= 1225) {

		// looping through to remove the href attribute ...
		// ...only above 1225px screenwidth, so that vocabword still anchor links to glossary at smaller screensizes
		for (var j = 0; j < inlineVocabWordList.length; j++) {
			inlineVocabWordList[j].removeAttribute('href');
		}

		var selectedVocab = e.target;

		// only run the function if an inline vocab word was clicked
		if (selectedVocab.hasAttribute('data-vocab')) {
			
			// collect all definitions (found in glossary area)
			var definitionsList = document.getElementsByClassName('vocabwordanddefinitionclass');

			// loop through this for loop code as many times as there are definitions 	
	    	for (var i = 0; i < definitionsList.length; i++) {

	    		// if selected inline vocab word matches one of the definitions being looped through...
	    		if ((selectedVocab.getAttribute('id')) == ('-' + definitionsList[i].getAttribute('data-definition-id'))) {

	    			var containerCheck = selectedVocab.nextElementSibling;

	    			// it is already open
	    			if (containerCheck) {
	    				
	    				// close it (remove container)
	    				containerCheck.parentNode.removeChild(containerCheck);
	    			
	    			} else {

    					var otherContainer = document.getElementById('definitioncontainer');

    					// close out any other open definitions
	    				if (otherContainer) {
    						otherContainer.parentNode.removeChild(otherContainer);
    					}

	    				// build container
	    				var container = document.createElement('span');
		    			selectedVocab.parentNode.appendChild(container);

		    			// var containerInner = document.createElement('span');
		    			// container.appendChild(containerInner);

		    			// give container attributes
		    			// containerInner.setAttribute('id', 'containerinner');
	    				container.setAttribute('class', 'inlinevocabcontainer');
	    				container.setAttribute('id', 'definitioncontainer');

	    				// populate the container with the "X" button + definition HTML
				    	// this src attribute vvv will have to update when I get proper hosting and URL set up! 
    	    			// or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
			        	// or else construct its shape with CSS (research performance) vvv
    					// containerInner.innerHTML = '<img src="http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/x.svg" alt="close" id="vocabclose" class="close-x yellowhover" data-vocab-x>' + definitionsList[i].innerHTML;
    					container.innerHTML = '<img src="http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/x.svg" alt="close" id="vocabclose" class="close-x yellowhover" data-vocab-x>' + definitionsList[i].innerHTML;

    					// remove unneeded elements from original glossary HTML
    					// remove up arrow that in glossary links to inline vocab word
    					// var anchorUp = containerInner.lastElementChild.firstElementChild.firstElementChild;
    					var anchorUp = container.lastElementChild.firstElementChild.firstElementChild;
    					anchorUp.parentNode.removeChild(anchorUp);

    					// manipulate definition styles to differentiate from HTML pulled in from glossary
    					// x-button
    					var definitionX = container.firstElementChild;

    					// <dt>
    					var wordAndPronunciation = definitionX.nextElementSibling;
    					wordAndPronunciation.setAttribute('class', 'glossaryvocabwordandaudio wordandpronunciation');
    				
    					var definitionText = wordAndPronunciation.nextElementSibling.firstElementChild;
    					definitionText.setAttribute('id', 'inlinedefinition');

    					var definitionIllustration = definitionText.nextElementSibling;
    					definitionIllustration.setAttribute('class', 'vocabillustration inlineillustration');
    				}
    			} 
    		} // close for loop
    	} // close second if-statement
    } // close 1225 if-statement
} // close function

window.addEventListener('click', vocabTest, false);



// !!! vocabX not being recognized because it doesn't exist until a vocabword is clicked
// var vocabX = document.getElementById('vocabclose');

function vocabXClose(e) {
	
	var clickedX = e.target;

	if (clickedX.hasAttribute('data-vocab-x')) {
		
		var containerOfX = clickedX.parentNode;

		containerOfX.parentNode.removeChild(containerOfX);

	}
}

window.addEventListener('click', vocabXClose, false);
