<?php

kirbytext::$tags['vocab'] = array(
  'attr' => array(
    'url'
  ),
  'html' => function($tag) {

    $url     	 = thisUrl();
    $vocab    	 = $tag->attr('vocab');
    $urlappendix = $tag->attr('url');

	/* Adding an id to these inline words so they can also be anchor-linked BACK up to, from the glossary, but had to preface this id with a "-" so it differs from the glossary anchor links */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover">' . $vocab . '</a></dfn><span class="inlinevocabcontainer">TEST</span>'; */
    
    /* pre-definitiontoggle class */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-vocab="">' . $vocab . '</a></dfn><span class="inlinevocabcontainer"> TEST </span>'; */
    
    /* adding definitiontoggle class */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-vocab="">' . $vocab . '</a></dfn><span id="definitioncontainer" class="inlinevocabcontainer definitiontoggleoff"> TEST </span>'; */

    /* testing out container being inside definition */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-vocab="">' . $vocab . '</a><span id="definitioncontainer" class="inlinevocabcontainer definitiontoggleoff"> TEST </span></dfn>'; */

    /* removing container from being here by default, since I'm going to build it with JS */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-vocab="">' . $vocab . '</a></dfn>'; */

    /* added data-hash-definition to store potential hash# for page */
    /* return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-hash-definition="' . $urlappendix . '-definition' . '" data-vocab="">' . $vocab . '</a></dfn>'; */

    /* decided no need for hash# */
    return '<dfn><a href="' . $url . '#' . $urlappendix . '" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-vocab="">' . $vocab . '</a></dfn>';

  }
);


