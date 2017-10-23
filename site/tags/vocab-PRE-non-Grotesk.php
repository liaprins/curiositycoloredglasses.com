<?php

kirbytext::$tags['vocab'] = array(
  'attr' => array(
    'url'
  ),
  'html' => function($tag) {

    $url     	 = thisUrl();
    $vocab    	 = $tag->attr('vocab');
    $urlappendix = $tag->attr('url');

    /* decided no need for hash# */
    return '<dfn><a href="' . $url . '#' . $urlappendix . '" title="Learn more" id="' . '-' . $urlappendix . '" class="vocabwordinline s-display yellowhover" data-definition-id="' . $urlappendix . '" data-vocab="">' . $vocab . '</a></dfn>';

  }
);


