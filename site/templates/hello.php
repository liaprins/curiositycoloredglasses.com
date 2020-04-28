<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-hello') ?>


<?php snippet('head-close') ?>


	<!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


		<main>

			<div class="desktopcontent">

				<!-- title of the page -->
				<!-- NOT SURE IF THIS WILL STAY AS <h2> -->
				<h2 class="extracontentpagetitle">
					<?php echo $page->title()->kirbytext() ?>
				</h2>

			</div>


			<div id="aboutdesktopcontent">

				<!-- text for About page -->
				<!-- FOR SOME REASON <p> ISN'T APPLYING THE CLASS, BUT <span> DOES -->
				<span id="aboutintro" class="l-textface">
					<?php echo $page->intro()->kirbytext() ?>
				</span>

				<span id="abouttext" class="m-textface">
					<?php echo $page->text()->kirbytext() ?>
				</span>

			</div>

		</main>


	<?php snippet('footer-sitewide') ?>
