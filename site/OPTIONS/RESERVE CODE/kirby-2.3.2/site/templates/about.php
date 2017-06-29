<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>


<?php echo $page->picture()->image()->toFile() ?>




<!-- CALLING CAPTION AUTOMATICALLY -->

<?php if($aboutimage = $page->picture()->image()->toFile()): ?>

	<li>
		<?php echo $aboutimage->caption()->value() ?>
	</li>

<?php endif ?>




<?php echo $page->pagedescription()->kirbytext() ?>



<?php snippet('footer') ?>