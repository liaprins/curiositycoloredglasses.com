<?php snippet('head-open') ?>


<?php snippet('head-title-home-only') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


	<!-- holds the loading animation; all pages get it except default.php template, 
	because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
	it cannot load by definition, and the animation never stops! -->
	<div id="loadbg"></div>




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


