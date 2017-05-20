<!-- USING <header> TO GROUP THESE, SO THEY CAN HAVE SAME WIDTH, ETC -->
<header>

	<h1 class="blackbg">	
		<!-- Curiosity-Colored Glasses -->
		<?php echo $page->title()->html() ?>
	</h1>


	<p id="tagline" class="l-textface bold">
		<!-- Making sure tagline breaks where I want it to (combining with mediaqueries.css so it breaks WHEN I want it to) -->
		<span class="taglinehalf">Looking at life's little mysteries through the same lens that killed the cat, </span>
		<span class="taglinehalf">and living to tell the tale.</span>
		<!-- <?php echo $page->tagline()->kirbytext() ?> -->
	</p>

</header>