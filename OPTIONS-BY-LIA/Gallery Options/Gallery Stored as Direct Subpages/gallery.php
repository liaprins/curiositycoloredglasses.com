<?php

kirbytext::$tags['gallery'] = array(
    'html' => function($tag) {
    // get the page
    $page = $tag->page();
   
    // get the array of images, make sure to remove any whitespace using trim
    $images = array_map('trim', explode(',', $tag->attr('gallery')));
    $html = '';
      // loop through the image array
      foreach ($images as $slide) {
          // get the image
          $image = $page->image($slide);
          $html .= '<li>';
          // two ways to call images: the first is my invented (less reliable) way + link to itself
          $html .= '<a href="' . $page->contentURL() . '/' . $slide . '"> <img src="' . $page->contentURL() . '/' . $slide . '"> </a>';
          //I should use this way
          $html .= '<img src="' . $image->url() . '">';
          $html .= '</li>';
       }

      return $html;

  }
);
