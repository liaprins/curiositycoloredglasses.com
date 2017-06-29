<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>


<?php foreach ($site->page('blog')
                     ->children()
                     ->visible()
                     ->flip() as $blogarticle): ?>

  <?php foreach ($blogarticle->children('libraryimages') as $libraryimages): ?>

    <?php foreach ($libraryimages->images() as $libraryresult): ?>

    <!-- section id for use in blogarticle.php as part of link URL:  -->
    <!-- <a href="<?php echo url('library#' . $thankyou) ?>"></a> -->
    <!-- it must defined in that page as well! -->
    <?php $thankyou = $libraryresult->shortname(); ?>
      <section id="<?php echo $thankyou ?>">


        <!-- just leaving the URL slugs here; *might* be useful for storing info -->
        <!-- <?php echo $page->slug() ?>#<?php echo $thankyou->slug() ?> -->


        <!-- library image + link to it's anchor #sub-page -->
        <a href="<?php echo url('library#' . $thankyou) ?>">
          <img src="<?php echo $libraryresult->url() ?>" alt="">
        </a>


        <!-- "Heading" from library image's metadata file: name of library resource -->
        <h2>
          <?php echo html($libraryresult->heading()) ?>
        </h2>


        <!-- "About" from library image's metadata file + link to original blog article -->
        <a href="<?php echo $blogarticle->url() ?>">
          <li>
            <?php echo html($libraryresult->about()) ?>
          </li>
        </a>


        <!-- in case I want to pull the name of the blog article -->
        <a href="<?php echo $blogarticle->url() ?>">
          <?php echo 'Read more here: ' . $blogarticle->title(); ?> 
        </a>   

        <h1> </h1>

      </section>

    <?php endforeach ?>

  <?php endforeach ?>

<?php endforeach ?>



<?php snippet('footer') ?>


