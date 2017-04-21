 <?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>




	<!-- !!!!!!!!!! TESTING COLUMNS 'test' !!!!!!!!!! -->





	<!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
	<?php snippet('menu') ?>


	<div id="blognametagline" class="mockmain">

		<!-- website name + tagline, etc -->
    	<?php snippet('blog-nametagline') ?>

    </div>


	<main>

		<!-- foreach loop pulling in the articles: contains postglasses, title, date, tags, and intro -->
    	<?php snippet('blog-posts') ?>

	</main>


<?php snippet('footer') ?>


