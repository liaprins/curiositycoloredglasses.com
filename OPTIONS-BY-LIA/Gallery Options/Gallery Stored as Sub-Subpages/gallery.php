<?php

kirbytext::$tags['gallery'] = array(
  'html' => function($tag) {

    $gallerypage = $tag->attr('gallery');
    //var_dump($gallerypage);
    $page = $tag->page()->children()->find($gallerypage);

    $html = '<ul>';

    foreach($page->images() as $slide) {
      $html .= '<li>';
      $html .= '<img src="' . $slide->url() . '">';
      $html .= '</li>';
    }

    $html .= '</ul>';

    return $html;

  }
);

// As of now, each image links to a non-existant anchor link. 
// The reason it doesn't exist is because it would need to be 
// created via a foreach loop in the blogarticle.php template, just like the definitions are
// (the definition tag creates links which reference the anchor links created in the blogarticle.php template).
// When I get to javascript, I may realize I need to do just that.