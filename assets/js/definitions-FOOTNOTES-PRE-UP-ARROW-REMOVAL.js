//collect all inline vocab words (found across post text)
var inlineVocabWordList = document.getElementsByClassName('vocabwordinline');
var inlineNoteList = document.getElementsByClassName('notenumberinline');
var sidebarTotal = (inlineNoteList.length) + (inlineVocabWordList.length); // var not working; definition of var works fine independently



function vocabResize() {
	if (window.innerWidth >= 1225) {
		
		// looping through to remove the href attribute ...
		// ...only above 1225px screenwidth, so that vocabword still anchor links to glossary at smaller screensizes
		for (var j = 0; j < inlineVocabWordList.length; j++) {
			inlineVocabWordList[j].removeAttribute('href');
		}

		for (var y = 0; y < inlineNoteList.length; y++) {
			inlineNoteList[y].removeAttribute('href');
		}
	
	} else {
		
		for (var l = 0; l < inlineVocabWordList.length; l++) {
			
			// giving it back its href to link to glossary if not desktop size
			inlineVocabWordList[l].setAttribute('href', window.location + '#' + inlineVocabWordList[l].getAttribute('data-definition-id'));

			var openContainer = document.getElementById('definitioncontainer');
			if (openContainer) {
				openContainer.previousElementSibling.classList.remove("blackbg");
				openContainer.parentNode.removeChild(openContainer);
			}
		}

		for (var x = 0; x < inlineNoteList.length; x++) {
			
			// giving it back its href to link to glossary if not desktop size
			inlineNoteList[x].setAttribute('href', window.location + '#' + inlineNoteList[l].getAttribute('data-notes-id'));

			var openContainer = document.getElementById('definitioncontainer');
			if (openContainer) {
				openContainer.previousElementSibling.classList.remove("blackbg");
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
		// for (var j = 0; j < inlineVocabWordList.length; j++) {
		for (var j = 0; j < inlineVocabWordList.length; j++) {
			inlineVocabWordList[j].removeAttribute('href');
		}

		for (var z = 0; z < inlineNoteList.length; z++) {
			inlineNoteList[z].removeAttribute('href');
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
	    				// remove black box from inline vocab word
	    				containerCheck.previousElementSibling.setAttribute('class', 'vocabwordinline m-textface bold yellowhover');
	    				// close it (remove container)
	    				containerCheck.parentNode.removeChild(containerCheck);
	    			
	    			} else {

	    				// style inline vocab word in black box
	    				selectedVocab.setAttribute('class', 'vocabwordinline m-textface bold yellowhover blackbg');

	    				// OTHER CONTAINER!!!!!
    					var otherContainer = document.getElementById('definitioncontainer');

    					// close out any other open definitions and remove black box on its vocab word
	    				if (otherContainer) {
	    					otherContainer.previousElementSibling.classList.remove("blackbg");
    						otherContainer.parentNode.removeChild(otherContainer);
    					}

	    				// build container
	    				var container = document.createElement('span');
		    			selectedVocab.parentNode.appendChild(container);

		    			var containerInner = document.createElement('span');    // innerContainer 
		    			container.appendChild(containerInner);    // innerContainer 

		    			// give container attributes
		    			containerInner.setAttribute('id', 'containerinner');    // innerContainer 
	    				container.setAttribute('class', 'inlinevocabcontainer');
	    				container.setAttribute('id', 'definitioncontainer');


	    				// populate the container with the "X" button + definition HTML
				    	// this src attribute vvv will have to update when I get proper hosting and URL set up! 
    	    			// or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
			        	// or else construct its shape with CSS (research performance) vvv
    					// innerContainer 
    					containerInner.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/x.svg" alt="close" id="vocabclose" class="close-x yellowhover" data-vocab-x>' + definitionsList[i].innerHTML;

    					// remove unneeded elements from original glossary HTML
    					// remove up arrow that in glossary links to inline vocab word
    					// var anchorUp = containerInner.lastElementChild.firstElementChild.firstElementChild;
    					var anchorUp = containerInner.lastElementChild.firstElementChild.lastElementChild;
    					anchorUp.parentNode.removeChild(anchorUp);

    					// manipulate definition styles to differentiate from HTML pulled in from glossary
    					// x-button
    					var definitionX = containerInner.firstElementChild;    // innerContainer TEST

    					// <dt>
    					var wordAndPronunciation = definitionX.nextElementSibling;
    					wordAndPronunciation.setAttribute('class', 'glossaryvocabwordandaudio wordandpronunciation');
    				

    					if (wordAndPronunciation.lastElementChild.hasAttribute('data-audiolink')) {
    						
    						var audiolink = wordAndPronunciation.lastElementChild;
    						audiolink.setAttribute('id', 'audiolink');

    						var audioicon = audiolink.lastElementChild;
    						audioicon.setAttribute('id', 'inlineaudioicon');
    					}

    					var definitionText = wordAndPronunciation.nextElementSibling.firstElementChild;
    					definitionText.setAttribute('id', 'inlinedefinition');
    					definitionText.setAttribute('class', 'xs-textface definition');

    					// TEST!!!
    					var pronunciationSidebar = document.getElementById('pronunciation');   					
    				}
    			} 
    		} // close for loop
    	
    	} // close second if-statement

    	
    	// only run the function if an inline footnote was clicked
		if (selectedVocab.hasAttribute('data-notes')) {
			
			// collect all footnote numbers from bottom section of page
			var notesList = document.getElementsByClassName('notesdivclass');

			// loop through this for loop code as many times as there are definitions 	
	    	for (var i = 0; i < notesList.length; i++) {

	    		// if selected inline footnote matches one of the definitions being looped through...
	    		if ((selectedVocab.getAttribute('id')) == ('-' + notesList[i].getAttribute('data-notes-id'))) {

	    			var containerCheck = selectedVocab.nextElementSibling;

	    			// it is already open
	    			if (containerCheck) {
	    				// remove black box from inline vocab word
	    				containerCheck.previousElementSibling.setAttribute('class', 'notenumberinline s-textface bold yellowhover');
	    				// close it (remove container)
	    				containerCheck.parentNode.removeChild(containerCheck);
	    			
	    			} else {

	    				// style inline footnote in black box
	    				selectedVocab.setAttribute('class', 'notenumberinline s-textface bold yellowhover blackbg');

	    				// OTHER CONTAINER!!!!!
    					var otherContainer = document.getElementById('definitioncontainer');

    					// close out any other open definitions and remove black box on its vocab word
	    				if (otherContainer) {
	    					otherContainer.previousElementSibling.classList.remove("blackbg");
    						otherContainer.parentNode.removeChild(otherContainer);
    					}

	    				// build container
	    				var container = document.createElement('span');
		    			selectedVocab.parentNode.appendChild(container);

		    			var containerInner = document.createElement('span');    // innerContainer 
		    			container.appendChild(containerInner);    // innerContainer 

		    			// give container attributes
		    			containerInner.setAttribute('id', 'containerinner');    // innerContainer 
	    				container.setAttribute('class', 'inlinenotecontainer');
	    				container.setAttribute('id', 'definitioncontainer');


	    				// populate the container with the "X" button + definition HTML
				    	// this src attribute vvv will have to update when I get proper hosting and URL set up! 
    	    			// or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
			        	// or else construct its shape with CSS (research performance) vvv
    					// innerContainer 
    					containerInner.innerHTML = '<img src="https://curiositycoloredglasses.com/assets/images/x.svg" alt="close" id="vocabclose" class="close-x yellowhover" data-vocab-x><span>' + notesList[i].firstElementChild.innerHTML + '</span><p class="xs-textface notecontent">' + notesList[i].firstElementChild.nextElementSibling.innerHTML + '</p>';

    					/*
    					// remove unneeded elements from original glossary HTML
    					// remove up arrow that in glossary links to inline vocab word
    					// var anchorUp = containerInner.lastElementChild.firstElementChild.firstElementChild;
    					var anchorUp = containerInner.lastElementChild.firstElementChild.lastElementChild;
    					anchorUp.parentNode.removeChild(anchorUp);
    					*/

    					// manipulate definition styles to differentiate from HTML pulled in from glossary
    					// x-button
    					var noteX = containerInner.firstElementChild;    // innerContainer TEST


    					
    					
    					// sidebar note number style
    					var sidebarNoteNumber = noteX.nextElementSibling;
    					sidebarNoteNumber.setAttribute('class', 'notessectionnumber sidebarnotenumber m-textface bold glossaryvocabwordandaudio wordandpronunciation');
    					sidebarNoteNumber.nextElementSibling.setAttribute('id', 'inlinenotecontent');
    					
    					// TEST!!!
						document.getElementById('notestest').innerHTML = noteX.nextElementSibling.innerHTML + " note!";

    					/*
    					var definitionText = wordAndPronunciation.nextElementSibling.firstElementChild;
    					definitionText.setAttribute('id', 'inlinedefinition');
    					definitionText.setAttribute('class', 'xs-textface definition');
						*/ 					
    				}
    				
    			} // close if
    		} // close for loop
    		
    	} // close second if-statement

    } // close 1225 if-statement
} // close function

window.addEventListener('click', vocabTest, false);



function vocabXClose(e) {
	
	var clickedX = e.target;

	if (clickedX.hasAttribute('data-vocab-x')) {
		
		var containerOuter = clickedX.parentNode.parentNode;

		// remove black box from inline vocab word
	    // containerOuter.previousElementSibling.setAttribute('class', 'vocabwordinline m-textface bold yellowhover');
	    containerOuter.previousElementSibling.classList.remove("blackbg");
	    
	    // remove definition
		containerOuter.parentNode.removeChild(containerOuter);
	}
}

window.addEventListener('click', vocabXClose, false);




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// FIX TO GLOSSARY: MAKING DEFINITIONS WITHOUT AN ILLUSTRATION FILL THE FULL-WIDTH !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function glossaryDefinitionWidth() {

	// TEST!!!
	// document.getElementById('notestest').innerHTML = sidebarTotal;

	var glossaryList = document.querySelector('dl').children;
	var glossaryListCount = glossaryList.length;

	// loop through all vocab words within glossary only
	for (var i = 0; i < glossaryListCount; i++) {
		
		// for each vocab word in glossary, if there is not an illustration...
		if (glossaryList[i].lastElementChild.lastElementChild.getAttribute('class') != 'vocabillustration') {

			// assign special classes to these elements to allow them to be wider, since they have no illustrations
			glossaryList[i].firstElementChild.setAttribute('class', 'glossaryvocabwordandaudio lonedefinitionwidth');
			glossaryList[i].lastElementChild.firstElementChild.setAttribute('class', 's-textface definition lonedefinitionwidth');

		}
	}	
}

window.addEventListener('DOMContentLoaded', glossaryDefinitionWidth, false);


