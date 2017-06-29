<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>





<!-- option 2: images + info stored in library/libraryimages, -->
<!-- info here is from metadata, info on blog article pages is from blogarticle.txt fields + custom CSS -->
<!-- DO NOT DELETE! trying get library/libraryimages to show up --> 
<!<?php foreach($page->children('libraryimages') as $libraryimages): ?>
  <?php foreach ($libraryimages->images()->sortBy('modified', 'desc') as $libraryresult): ?>
      <!-- replace with link to library result's subpage -->

      <?php $librarysubpage = $libraryresult->shortname(); ?>            
            
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

        </section?

  <?php endforeach ?>
<?php endforeach ?>


<?php snippet('footer') ?>


