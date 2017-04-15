<!-- USING <header> TO GROUP THESE, SO THEY CAN HAVE SAME WIDTH, ETC -->
<header>

	<h1 class="blackbg">	
		<!-- Curiosity-Colored Glasses -->
		<?php echo $page->title()->html() ?>
	</h1>

	<!-- Needs to be wrapped in <div> because calling the tagline from panel creates a <p> around it automatically 
	so its own closing </p> tag closes this wrap <p> and cancels it out; 
	basically no wrapping <p>s's styles will function when surrounding content called from panel -->
	<div id="tagline" class="l-textface bold">
		<!-- Looking at life's little mysteries through the same lens that killed the cat, and living to tell the tale. -->
		<?php echo $page->tagline()->kirbytext() ?>
	</div>

</header>