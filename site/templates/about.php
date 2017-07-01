<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


	<?php snippet('menu') ?>

	<!-- calling the JS scripts used on everypage -->
	<?php snippet('scripts-sitewide') ?>

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

					<figcaption class="s-textface">
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


<?php snippet('footer') ?>
