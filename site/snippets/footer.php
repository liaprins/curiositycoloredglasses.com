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

	</body>

</html>