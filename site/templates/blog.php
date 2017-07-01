 <?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


<?php snippet('menu') ?>

<!-- calling the JS scripts used on everypage -->
<?php snippet('scripts-sitewide') ?>

<!-- for backarrow script (held in menu.php) -->
<!-- HOME PAGE DOES NOT NEED A BACKARROW, THIS IS ONLY HERE FOR TESTING! REMOVE ONCE POSTS AND TAG PAGE CAN RN THE BACKARROW SCRIPT! -->
<?php snippet('backarrow') ?>


<div id="blognametagline" class="mockmain">

	<!-- website name + tagline, etc -->
   	<?php snippet('blog-nametagline') ?>

</div>


<main>

	<!-- foreach loop pulling in the articles: contains postglasses, title, date, tags, and intro -->
    <?php snippet('blog-posts') ?>

</main>


<?php snippet('footer') ?>


