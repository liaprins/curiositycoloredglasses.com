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


/* Make curiositycoloredglasses.com go straight to the main page, instead of curiositycoloredglasses.com/blog */
/* UN-comment the segment below when launch */
/*
c::set('home','blog');

c::set('routes', array(
  array(
    'pattern' => '(:any)',
    'method' => 'GET|POST',
    'action'  => function($uid) {

      $page = page($uid);

      if(!$page) $page = page('blog/' . $uid);
      if(!$page) $page = site()->errorPage();

      return site()->visit($page);

    }
  ),
  array(
    'pattern' => 'blog/(:any)',
    'method' => 'GET|POST',
    'action'  => function($uid) {
      go($uid);
    }
  )
));
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



