<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options
*/


/* SETTING UP EMAIL ALERTS FOR COMMENTS VIA KIRBY PLUGIN */
/*
c::set('comments.use.email', true);
c::set('comments.email.to', array('liajprins@gmail.com'));

c::set('comments.email.subject', '"New comment on {{ page.title }} by {{ comment.user.name }}."'));
*/

/* MAKING COMMENTS' "PAGES" INVISIBLE AUTOMATICALLY SO THEY DON'T RETURN AS SEARCH RESULTS */
c::set('comments.pages.comment.visible', false);


/* ADDING DEBUGGING ABILITY FOR PHP, WHILE IN CREATION/TESTING MODE ONLY! 
(SHOULD REMOVE BY DELETING THE LINE COMPLETELY BEFORE PUBLISHING PUBLICILY!) */
c::set('debug', true);


/* RESPONSIVE IMAGES ------------------------------------------------------- */

/* RESPONSIVE IMAGES CONFIGURATIONS; read more in plugin's readme: https://github.com/jancbeck/kirby-responsive-images/blob/master/README.md
"SIZES" */
/* THESE CROPS WON'T BE PULLED AT ALL FOR SOME REASON WHEN "DEFAULT SOURCE" (BELOW) IS SET; 
AND WHEN IT'S COMMENTED OUT, RESPONSIVE IMAGES WON'T BE PULLED EITHER, BUT I AM LEAVING THIS CODE IN CASE THE PLUG-IN CREATOR RESPONDS TO MY GITHUB ISSUE */
c::set('responsiveimages.sizes', array( 
    'contentimage' => array(
        'size_value' => '100vw',
        'mq_value'   => '817px',
        'mq_name'    => 'max-width'
    ),
    'contentimage' => array(
        'size_value' => '1108px'
    ),
));

/* RESPONSIVE IMAGES CONFIGURATIONS
"SOURCES" */
/* THESE CROPS WON'T BE PULLED AT ALL FOR SOME REASON WHEN "DEFAULT SOURCE" (BELOW) IS SET; 
AND WHEN IT'S COMMENTED OUT, RESPONSIVE IMAGES WON'T BE PULLED EITHER, BUT I AM LEAVING THIS CODE IN CASE THE PLUG-IN CREATOR RESPONDS TO MY GITHUB ISSUE */
c::set('responsiveimages.sources', array( 
    'small'  => array('width' => 390),
    'medium' => array('width' => 650),
    'large' => array('width' => 816),
    'x-large'  => array('width' => 1108, 'grayscale' => true) // good for debugging
));

/* RESPONSIVE IMAGES CONFIGURATIONS
"DEFAULT SOURCE" */
/* COMMENTING THIS OUT, BECAUSE IT TAKES OVER AND THE CROPS WON'T BE PULLED AT ALL FOR SOME REASON, ONLY THIS ONE EVER */
/* c::set('responsiveimages.defaultsource', 'small'); */


