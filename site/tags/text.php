<?php

kirbytext::$tags['text'] = array(
  'attr' => array(
    'class'
  ),
  'html' => function($tag) {

    
    $class = $tag->attr('class');
    $text = $tag->attr('text');
    

    $html = '<p class="' . $class . '">' . $text . '</p>'; 
    return $html;

  }
);