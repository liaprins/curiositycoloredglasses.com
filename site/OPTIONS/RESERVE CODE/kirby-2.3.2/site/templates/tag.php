<?php snippet('internalheader') ?>



<!-- titling the page after the tag that brought us here -->
<h1>
  #<?php echo param('tag') ?>
</h1>

<?php echo $page->text()->kirbytext() ?>


<!-- resulting article attributes defined in results snippet -->

<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->filterBy('tags', param('tag'), ',')
                   ->flip() as $result): ?>

	<?php snippet('result', array('result' => $result)) ?>
	
<?php endforeach ?>




<?php snippet('footer') ?>




