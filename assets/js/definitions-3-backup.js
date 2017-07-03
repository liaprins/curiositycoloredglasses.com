function vocabTest(e) {

	if (window.innerWidth >= 1225) {
		
		//collect all inline vocab words (found across post text)
		var inlineVocabWordList = document.getElementsByClassName('vocabwordinline');

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

			// where the definition will go
			var container = selectedVocab.parentNode.nextElementSibling;

			// loop through this for loop code as many times as there are definitions 	
	    	for (var i = 0; i < definitionsList.length; i++) {

	    		// if selected inline vocab word matches one of the definitions being looped through...
	    		if ((selectedVocab.getAttribute('id')) == ('-' + definitionsList[i].getAttribute('data-definition-id'))) {

	    			// populate the container with the definition HTML
    				container.innerHTML = definitionsList[i].innerHTML;

    				// track visibility with existence of data-vocab-visible attribute
    				selectedVocab.setAttribute('data-vocab-visible', '');
    			}
    		} // close for loop
    	} // close second if-statement
    } // close 1225 if-statement
} // close function

window.addEventListener('click', vocabTest, false);