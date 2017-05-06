		<!-- THIS "FOOTER" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
		SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
		<!-- KEEP "FOOTER" -->
		<footer role="contentinfo">

			<div id="footercontent">

				<!-- subscribe to go here -->
    			<?php snippet('subscribe') ?>

				<!-- link to my instagram profile + other ways to follow in future -->
				<?php snippet('follow') ?>

			</div>

		</footer>

			
			<!-- CONFLICT!!! Does this go here, "right before closing </body> tag"
			OR "directly after the opening <body> tag on each page you want to load it" (blogarticle.php template)? 
			Currently it is in both places. --> 
			<?php snippet('facebook-sdk') ?>
			
		<!-- this is the pinterest script, instructed to place right before closing </body> tag -->
		<script async defer src="//assets.pinterest.com/js/pinit.js">
		</script>

	</body>

</html>