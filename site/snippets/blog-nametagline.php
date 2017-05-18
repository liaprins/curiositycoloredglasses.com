<!-- USING <header> TO GROUP THESE, SO THEY CAN HAVE SAME WIDTH, ETC -->
<header>

	<h1 class="blackbg">	
		<!-- Curiosity-Colored Glasses -->
		<?php echo $page->title()->html() ?>
	</h1>

	<!-- Needs to be wrapped in <div> because calling the tagline from panel creates a <p> around it automatically 
	so its own closing </p> tag closes this wrap <p> and cancels it out; 
	basically no wrapping <p>s's styles will function when surrounding content called from panel -->
	<p id="tagline" class="l-textface bold">
		<span class="taglinehalf">Looking at life's little mysteries through <!-- </span> -->
		<!-- <span class="taglinehalf"> --> the same lens that killed the cat, </span>
		<span class="taglinehalf">and living to tell the tale.</span>
		<!-- <?php echo $page->tagline()->kirbytext() ?> -->
	</p>

</header>