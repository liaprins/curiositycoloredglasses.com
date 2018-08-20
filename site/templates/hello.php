<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-hello') ?>


<?php snippet('head-close') ?>


	<!-- holds the loading animation; all pages get it except default.php template, 
	because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
	it cannot load by definition, and the animation never stops! -->
	<div id="loadbg"></div>


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


				<!-- tentatively adding <figure> element to hold together image + caption for semantice purposes -->
				<figure>


					<!-- image for About page -->
					<img src="<?php echo $page->aboutimage()->image()->toFile()->url() ?>" alt="<?php echo $page->aboutimage()->toFile()->alt() ?>" class="contentimage" id="aboutimage">


					<!-- calling caption from metadata -->
					<?php if($aboutimage = $page->aboutimage()->image()->toFile()): ?>

						<figcaption class="xs-textface">
							<?php echo $aboutimage->caption()->value() ?>
						</figcaption>

					<?php endif ?>


				</figure>

			</div>


			<div id="aboutdesktopcontent">

				<!-- text for About page -->
				<!-- FOR SOME REASON <p> ISN'T APPLYING THE CLASS, BUT <span> DOES -->
				<span id="abouttext" class="l-textface">
					<?php echo $page->text()->kirbytext() ?>
				</span>

			</div>
	
		</main>


	<?php snippet('footer-sitewide') ?>
