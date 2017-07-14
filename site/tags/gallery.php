<?php

kirbytext::$tags['gallery'] = array(
  'html' => function($tag) {

    // In example provided by forum, everything currently called $galleryname had been called $gallerypage, 
    // but I renamed it so the "$gallerypage" term was available for what had been called $page, 
    // so it better represented just the gallery page in my mind.
    // Recap: In example provided by forum, everything (including the comments below) currently called $galleryname had been called $gallerypage, 
    // and everything currently called $gallerypage had been called $page (in case I need to open the forum thread with a Q again)



    $galleryname = $tag->attr('gallery');
    
    // var_dump($galleryname);   
    $gallerypage = $tag->page()->children()->find($galleryname);




    $html = '<ul class="gallery" id="' . $galleryname . '">';   // id added by Lia

    // ADDED BY LIA FOR SLIDESHOW VIA JAVASCRIPT PURPOSES
    // $html = '<div class="advancecontainer">';


    if($gallerypage) {    // Added by Lia to "check" first if gallery and images exist; without this, calling a non-existent gallery with (gallery: xxx) kirbytag will throw a breaking error!
      if($gallerypage->images() != '') {    // Added by Lia
        $slide = $gallerypage->image();    // Added by Lia



        foreach($gallerypage->images()->sortBy('sort', 'asc') as $slide) {
        $html .= '<li>';
            
            $html .= '<figure>';

                $html .= '<img src="' . $slide->url() . '" alt="' . $slide->alt() . '" class="contentimage" id="galleryimage">';
                
                
                // Ensures that images without captions will not have the border (horizontal bar)
                if(!$slide->caption()->empty()):


                    $html .= '<figcaption class="s-textface caption">';   

                        $html .= $slide->caption();
 

                    $html .= '</figcaption>';


                endif;


            $html .= '</figure>';


        $html .= '</li>';
        }    // closing the foreach loop


     }    // Closing the if statements from above, part of the if statement above added by Lia
    }    // Closing the if statements from above, part of the if statement above added by Lia


    // $html .= '</div>';    // ADDED BY LIA FOR SLIDESHOW VIA JAVASCRIPT PURPOSES

    $html .= '</ul>';

    return $html;

  }
);

// As of now, each image links to a non-existant anchor link. 
// The reason it doesn't exist is because it would need to be 
// created via a foreach loop in the blogarticle.php template, just like the definitions are
// (the definition tag creates links which reference the anchor links created in the blogarticle.php template).
// When I get to javascript, I may realize I need to do just that.