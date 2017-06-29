<?php

kirbytext::$tags['vocab'] = array(
  'attr' => array(
    'url'
  ),
  'html' => function($tag) {

    $url     	 = thisUrl();
    $vocab    	 = $tag->attr('vocab');
    $urlappendix = $tag->attr('url');

    return '<a href="' . $url . '#' . $urlappendix . '">' . $vocab . '</a>';

  }
);


