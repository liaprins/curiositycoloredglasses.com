<?php

kirbytext::$tags['note'] = array(
  'attr' => array(
    'url'
  ),
  'html' => function($tag) {

    $url     	 = thisUrl();
    $note    	 = $tag->attr('note');
    $urlappendix = $tag->attr('url');

    /* decided no need for hash# */
    return '<sup><a href="' . $url . '#' . $urlappendix . '" title="Learn more" id="' . '-' . $urlappendix . '" class="notenumberinline s-textface bold yellowhover" data-notes-id="' . $urlappendix . '" data-notes="">' . $note . '</a></sup>';

  }
);


