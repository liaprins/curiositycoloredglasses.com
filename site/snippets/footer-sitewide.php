		<footer role="contentinfo">

			<div id="footercontent">

    			<?php snippet('subscribe') ?>

				<!-- Link to my instagram profile + Twitter + portfolio -->
				<?php snippet('follow') ?>

			</div>

		</footer>
			

		<!-- This is the pinterest script, instructed to place right before closing </body> tag -->
		<script async defer src="//assets.pinterest.com/js/pinit.js">
		</script>




	<!-- !!!!! TESTING MENU CLOSE WITHOUT ITS "X" BUTTON !!!!! -->
    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    </div>


    <!-- menu has to be called here, to account for a major Safari bug:
    Safar renders anything measured in rems at 1px, if it comes after a <details> tag...
    ... and my menu is within a <details> tag, so it was messing up everything with rems in Safari
    Moving menu to the very bottom means there is nothing in the html after it, so it is fine.
    The menu is styled in css to position it absolutely at the top -->
	<?php snippet('menu') ?>


    <!-- calling the JS scripts used on everypage; 
    they need to come after the menu is called, to else they will have no effect on the menu items they are intended for -->
    <?php snippet('scripts-sitewide') ?>




	</body>

</html>