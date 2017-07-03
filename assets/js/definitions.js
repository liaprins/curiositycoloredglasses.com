function vocabTest(e) {
	var selectedVocab = e.target;

	// only run the function if an inline vocab word was clicked
	if (selectedVocab.hasAttribute('data-vocab')) {
		//collect all inline vocab words (found across post text)
		var inlineVocabWordList = document.getElementsByClassName('vocabwordinline');
		// collect all definitions (found in glossary area)
		var definitionsList = document.getElementsByClassName('vocabwordanddefinitionclass');

		// where the definition will go
		var container = selectedVocab.parentNode.nextElementSibling;

		// container.innerHTML = /* definitionsList[0].innerHTML + */selectedVocab.innerHTML + ' selectedVocab id=' + selectedVocab.getAttribute('id') + ' definitionsList[0] id=' + definitionsList[0].getAttribute('data-definition-id');    // TEST
	
    	for (var i = 0; i < definitionsList.length; i++) {

    		if ((selectedVocab.getAttribute('id')) == ('-' + definitionsList[i].getAttribute('data-definition-id'))) {

    			container.innerHTML = definitionsList[i].innerHTML;

    		}

    	} // close for loop
    } // close original if-statement
} // close function

window.addEventListener('click', vocabTest, false);