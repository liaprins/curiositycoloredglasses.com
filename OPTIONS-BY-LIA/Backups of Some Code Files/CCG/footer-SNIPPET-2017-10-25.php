		<footer role="contentinfo">

			<div id="footercontent">

    			<?php snippet('subscribe') ?>

				<!-- Link to my instagram profile + Twitter + portfolio -->
				<?php snippet('follow') ?>

			</div>

		</footer>

			
			<!-- CONFLICT!!! Does this go here, "right before closing </body> tag"
			OR "directly after the opening <body> tag on each page you want to load it" (blogarticle.php template)? 
			Currently it is in both places. --> 
			<?php snippet('facebook-sdk') ?>
			

		<!-- This is the pinterest script, instructed to place right before closing </body> tag -->
		<script async defer src="//assets.pinterest.com/js/pinit.js">
		</script>




	<!-- !!!!! TESTING MENU CLOSE WITHOUT ITS "X" BUTTON !!!!! -->
    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    </div>



<!-- !!!!!! TESTING 'menu' SNIPPET WITHIN FOOTER HERE !!!!!! -->
<?php snippet('menu') ?>


<!-- !!!!!! TESTING 'scripts-sitewide' SNIPPET WITHIN FOOTER HERE !!!!!! -->
<?php snippet('scripts-sitewide') ?>




	</body>

</html>