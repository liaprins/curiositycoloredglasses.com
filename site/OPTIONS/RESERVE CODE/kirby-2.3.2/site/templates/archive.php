<?php snippet('internalheader') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>








<!-- ARCHIVE RESULTS: php wrapper start -->


<!-- ARCHIVE MENU -->
<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

  <?php if(!isset($year)): ?>
    <?php
      $date = getdate($result->date());
      if ($tmpDate['year'] != $date['year']): ?>  
          

          <!-- this is what shows up on screen-->
          <span>
            <a href="<?php echo url('archive#' . $date['year']) ?>">
              <?= $date['year'] ?> - 
            </a>
          </span>

    <?php endif ?>
  <?php endif ?>

  <!-- from blogprints' archive.php: this needs to stay; don't know why, it just does! -->
<?php if(!isset($year)) $tmpDate = $date;
endforeach ?>



<!-- __________________________________________________________________________________ -->      




<!-- BLOG ARTICLES: needs to go through the same loops as above -->
<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

  <?php if(!isset($year)): ?>
    <?php
      $date = getdate($result->date());
      if ($tmpDate['year'] != $date['year']): ?>  
          
          

          <section id="<?php echo $date ['year']?>">



          <!-- this is what shows up on screen-->
          <h2>
            <a href="<?php echo url('archive#' . $date['year']) ?>">
              <?= $date['year'] ?>
            </a>
          </h2>



        </section>



    <?php endif ?>
  <?php endif ?>








<!-- resulting article attributes to be defined in results snippet -->
<?php snippet('result', array('result' => $result)) ?>






<!-- ARCHIVE RESULTS: php wrapper end-->    



<!-- from blogprints' archive.php: this needs to stay; don't know why, it just does! -->
<?php if(!isset($year)) $tmpDate = $date;
endforeach ?>








<?php snippet('footer') ?>


