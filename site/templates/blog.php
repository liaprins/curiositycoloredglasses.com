<?php snippet('head-open') ?>


<?php snippet('head-title-home-only') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


<!-- This encompasses everything within <body> except for <nav>
This is so that there is an element that can be clicked on that will be anything except <nav>,
that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
<div id="everythingexceptnav">


	<div id="blognametagline" class="mockmain">

		<!-- website name + tagline, etc -->
	   	<?php snippet('blog-nametagline') ?>

	</div>


	<main>

		<!-- foreach loop pulling in the articles: contains postglasses, title, date, tags, and intro -->
    	<?php snippet('blog-posts') ?>

	</main>


	<?php snippet('footer-sitewide') ?>


