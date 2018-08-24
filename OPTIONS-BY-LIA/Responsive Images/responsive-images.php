<?php

// image tag
$kirby->set('tag', 'image', array(
  'attr' => array(
    'width',
    'height',
    'alt',
    'text',
    'title',
    'class',
    'imgclass',
    'linkclass',
    'caption',
    'link',
    'target',
    'popup',
    'rel',
    'srcset',
    'sizes'
  ),
  'html' => function($tag) {

    $url     = $tag->attr('image');
    $alt     = $tag->attr('alt');
    $title   = $tag->attr('title');
    $link    = $tag->attr('link');
    $caption = $tag->attr('caption');
    $srcset  = $tag->attr('srcset');
    $sizes   = $tag->attr('sizes');
    $file    = $tag->file($url);

    // ADDED BY LIA vvv Try to get the caption from the image file
    if($file) {
      /* if($file->caption() != '') { */
        $metacaption = $file->caption();
      /* } */
    }
    // ADDED BY LIA ^^^ Try to get the caption from the image file

    // use the file url if available and otherwise the given url
    $url = $file ? $file->url() : url($url);

    // alt is just an alternative for text
    if($text = $tag->attr('text')) $alt = $text;

    // try to get the title from the image object and use it as alt text
    if($file) {

      if(empty($alt) and $file->alt() != '') {
        $alt = $file->alt();
      }

      if(empty($title) and $file->title() != '') {
        $title = $file->title();
      }

    }

    if(empty($alt)) $alt = pathinfo($url, PATHINFO_FILENAME);

    $sources = kirby_get_sources_array();

    // link builder
    $_link = function($image) use($tag, $url, $link, $file, $sources) {

      if(empty($link)) return $image;

      // build the href for the link
      if($link == 'self') {
        $href = $url;
      } else if($file and $link == $file->filename()) {
        $href = $file->url();
      } else if(isset($sources[$link])) { 
        $href = thumb($file, $sources[$link])->url();
      } else if($tag->file($link)) {
        $href = $tag->file($link)->url();
      } else {
        $href = $link;
      }

      return html::a(url($href), $image, array(
        'rel'    => $tag->attr('rel'),
        'class'  => $tag->attr('linkclass'),
        'title'  => $tag->attr('title'),
        'target' => $tag->target()
      ));

    };

    // srcset builder
    if($file && empty($srcset)) {
    	$srcset = kirby_get_srcset($file);
    }

    // sizes builder
    if($file && empty($sizes)) {
        $classes = ( ! empty( $tag->attr('imgclass'))) ? explode( ' ', $tag->attr('imgclass')) : '';
    	$sizes = kirby_get_sizes($file, $tag->attr('width'), $classes);
	}
    // allows src attribute to be overwritten
    $defaultsource = kirby()->option('responsiveimages.defaultsource');
    if ( isset($sources[$defaultsource])) {
        $url = thumb($file, $sources[$defaultsource])->url();
    }

    // image builder
    $_image = function($class) use($tag, $url, $alt, $title, $srcset, $sizes) {
      return html::img($url, array(
        'width'  => $tag->attr('width'),
        'height' => $tag->attr('height'),
        // 'class'  => $class,     //COMMENTED OUT BY LIA, IN FAVOR OF NEXT LINE vvv
        'class'  => $tag->attr('class', 'contentimage singleimage clickme'), //ADDED BY LIA If there is not a class supplied inline in the panel (via "class: xxx") then this class I already made, called "contentimage" will be applied, otherwise it will be the supplied class
        'img1'   => $tag->attr('singleimageidentifier', ''),    // ATTRIBUTE ADDED BY LIA, FOR JS LIGHTBOX SCRIPT
        'title'  => $title,
        'alt'    => $alt,
        'srcset' => $srcset,
        'sizes'  => $sizes
      ));
    };

    // if(kirby()->option('kirbytext.image.figure') or !empty($caption)) {        // COMMENTED OUT BY LIA in favor of next line
    if(kirby()->option('kirbytext.image.figure') or !empty($metacaption)) {    // MODIFIED BY LIA to account for my own-defined $metacaption instead of generic Kirby-defined $caption
      $image  = $_link($_image($tag->attr('imgclass')));
      $figure = new Brick('figure');
      // $figure->addClass($tag->attr('class'));    //COMMENTED OUT BY LIA, because I don't need the class applied to both the <figure> and <img> elements
      $figure->append($image);
      // if(!empty($caption)) {    // COMMENTED OUT BY LIA in favor of next section of code just below
        // $figure->append('<figcaption>' . html($caption) . '</figcaption>');    // COMMENTED OUT BY LIA in favor of next section of code just below
      
      // ADDED BY LIA vvv Ensures that images without captions will not have the border (horizontal bar)
      if(!$metacaption->empty()) {
        $figure->append('<figcaption class="s-textface">' . '<hr class="toprule">' . $file->caption() . '</figcaption>');
      } elseif(($metacaption->empty()) and (!empty($caption))) {
        $figure->append('<figcaption class="s-textface">' . '<hr class="toprule">' . html($caption) . '</figcaption>');
        // ADDED BY LIA ^^^ Ensures that images without captions will not have the border (horizontal bar)

      }
      return $figure;
    } else {
      $class = trim($tag->attr('class') . ' ' . $tag->attr('imgclass'));
      return $_link($_image($class));
    }

  }
));

/**
 *  Returns the srcset attribute value for a given Kirby file
 *  Generates thumbnails on the fly
 *
 *  @param   File  $file
 *  @uses   kirby_get_sources_array
 *  @uses   thumb
 *
 *  @return  string
 */
function kirby_get_srcset( $file ) {
    $srcset = $file->url() .' '. $file->width() .'w';
    $sources_arr = kirby_get_sources_array( $file );

    foreach ($sources_arr as $source) {
        $thumb = thumb($file, $source);
        $srcset .= ', '. $thumb->url() .' '. $thumb->width() .'w';
    }
    return $srcset;
}

/**
 *  Returns the image sources for a given Kirby file 
 *
 *  @return  array
 */
function kirby_get_sources_array() {
    $sources_arr = kirby()->option('responsiveimages.sources');

    // set some arbitrary defaults
    if (empty($sources_arr)) {
        $sources_arr = array(
            'small'  => array('width' => 480),
            'medium' => array('width' => 768),
            'large'  => array('width' => 1200),
        );
    }
    return $sources_arr;
}

/**
 *  Returns the sizes attribute value for a given Kirby file
 *
 *  @param   File  $file
 *  @param   int  $width  Optional. Use when you want to force image to a certain width (retina/high-PPi usecase)
 *  @uses   kirby_get_sizes_array()
 *
 *  @return  string
 */
function kirby_get_sizes( $file, $width = null, $imgclass = array() ) {

    $sizes = '';
    $sizes_arr = kirby_get_sizes_array( $file, $width );

    foreach ( $sizes_arr as $key => $size ) {

        // skip if the size should only be applied to a given class
        if (is_string($key) && ! empty($imgclass) && ! in_array($key, $imgclass)) {
            continue;
        }

        // Use 100vw as the size value unless something else is specified.
        $size_value = ( $size['size_value'] ) ? $size['size_value'] : '100vw';
        // If a media length is specified, build the media query.
        if ( ! empty( $size['mq_value'] ) ) {
            $media_length = $size['mq_value'];
            // Use max-width as the media condition unless min-width is specified.
            $media_condition = ( ! empty( $size['mq_name'] ) ) ? $size['mq_name'] : 'max-width';
            // If a media_length was set, create the media query.
            $media_query = '(' . $media_condition . ": " . $media_length . ') ';
        } else {
            // If not meda length was set, $media_query is blank.
            $media_query = '';
        }
        // Add to the source size list string.
        $sizes .= $media_query . $size_value . ', ';
    }
    // Remove the trailing comma and space from the end of the string.
    $sizes = substr( $sizes, 0, -2 );

    return $sizes;
}

/**
 *  Returns the sizes for a given Kirby file
 *
 *  Uses 'responsiveimages.sizes' option to let site owners overwrite the defaults
 *  
 *  @param   File  $file
 *  @param   int  $width  Optional. Use when you want to force image to a certain width (retina/high-PPi usecase)
 *
 *  @return  array
 */
function kirby_get_sizes_array( $file, $width = null ) {

    // let users overwrite the sizes via config
    $sizes_arr = kirby()->option('responsiveimages.sizes');

    // let users overwrite the native image size via attribute
    $img_width = ( empty($width) ? $file->width() : $width ) . 'px';

    // default to the image width
    if (empty($sizes_arr)) {
        $sizes_arr = array(
            array(
                'size_value' => '100vw',
                'mq_value'   => $img_width,
                'mq_name'    => 'max-width'
            ),
            array(
                'size_value' => $img_width
            ),
        );
    } else {
        $sizes_arr = array_map(function($value) use ($img_width) {
            // allow config rules relative to native image size
            return str_replace( '$img_width', $img_width, $value );
        }, $sizes_arr);
    }

    return $sizes_arr;
}