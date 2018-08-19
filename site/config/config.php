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

c::set('license', 'K2-PERSONAL-fdada1c0afcc423b250087458443fd20');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options
*/

/* Make liaprins.com go straight to the main page, instead of liaprins.com/liaprins */
c::set('home','liaprins');

<<<<<<< HEAD
c::set('routes', array(
  array(
    'pattern' => '(:any)',
    'action'  => function($uid) {
=======
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
>>>>>>> origin/master

      $page = page($uid);

      if(!$page) $page = page('liaprins/' . $uid);
      if(!$page) $page = site()->errorPage();

      return site()->visit($page);

    }
  ),
  array(
    'pattern' => 'liaprins/(:any)',
    'action'  => function($uid) {
      go($uid);
    }
  )
));




