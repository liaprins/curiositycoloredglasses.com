<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>


<!-- resulting article attributes to be defined in results snippet -->
<?php snippet('archiveresult') ?>



<?php snippet('footer') ?>


