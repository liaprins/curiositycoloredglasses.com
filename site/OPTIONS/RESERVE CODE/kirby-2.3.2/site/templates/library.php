<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>




<!-- option 3: images + info stored in library folder directly (not library/libraryimages) -->
<!-- to get rid of nav images at bottom -->
<!-- info here is from metadata, info on blog article pages is from blogarticle.txt fields + custom CSS -->
  <?php foreach ($page->images()->sortBy('modified', 'desc') as $libraryresult): ?>
      <!-- replace with link to library result's subpage -->

      <?php $librarysubpage = $libraryresult->name(); ?>            
            
        <section id="<?php echo $librarysubpage ?>">
            
          <a href="<?php echo url('library#' . $librarysubpage) ?>">
            <img src="<?php echo $libraryresult->url() ?>" alt="">
          </a>

          <h5>
            <?php echo html($libraryresult->heading()) ?>
          </h5>

          <li>
            <?php echo $libraryresult->about()->kirbytext() ?>
          </li>

        </section?>

  <?php endforeach ?>






<?php snippet('footer') ?>


