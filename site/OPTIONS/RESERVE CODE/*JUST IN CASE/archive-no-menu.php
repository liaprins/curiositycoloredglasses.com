<?php snippet('internalheader') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('header-close') ?>



<!-- title of the page + any intro text -->
<h1>
	<?php echo $page->title()->kirbytext() ?>
</h1>

<?php echo $page->text()->kirbytext() ?>


<!-- __________________________________________________________________________________ -->      


<!-- THIS SECTION NEEDS TO BE HERE OR ELSE THE YEAR MENU WON'T SHOW UP -->

<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

    <?php $date = getdate($result->date());

  $tmpDate = $date; ?>

<?php endforeach ?>


<!-- __________________________________________________________________________________ -->      


<!-- ARCHIVE YEAR MENU -->

<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

    <?php $date = getdate($result->date());
$tmpDate = $date;      
      if ($tmpDate['year'] != $date['year']): ?> 

          <!-- this is what shows up on screen-->
            <a href="<?php echo url('archive#' . $date['year'])?>">
              <?= $date['year']  . ' | '?>
            </a>

    <?php endif ?>

<!-- this needs to stay or all menu years will be most recent year; don't know why, it just does! -->
<?php $tmpDate = $date; endforeach ?>


<!-- __________________________________________________________________________________ -->      


<!-- BLOG ARTICLES GROUPED BY YEAR: needs to go through the same loops as above -->

<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

    <?php $date = getdate($result->date());
      
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


<!-- resulting article attributes to be defined in results snippet -->
  <?php snippet('result', array('result' => $result)) ?>


<!-- this needs to stay or all year group headings will be most recent year; don't know why, it just does! -->
<?php $tmpDate = $date; endforeach ?>


<!-- __________________________________________________________________________________ -->      


<?php snippet('footer') ?>


