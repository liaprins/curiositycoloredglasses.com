<!-- ARCHIVE RESULTS: php wrapper start -->


<!-- ARCHIVE MENU -->
<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->flip() as $result): ?>

<!-- MONTH: modifying blogprints' archive.php for month (+ year)... -->
<!-- If want only year, change all instances of ['month'] in this part to ['year'] -->
  <?php if(!isset($month)): ?>
    <?php
      $date = getdate($result->date());
      if ($tmpDate['month'] != $date['month']): ?>  
          <?php $archivemenu = $date['month']; ?>

          <!-- this is what shows up on screen; adding year-->
          <span>
            <a href="<?php echo url('archive#' . $archivemenu. $date['year']) ?>">
              <?php echo $archivemenu ?> <?= $date['year'] ?> | 
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

<!-- MONTH: modifying blogprints' archive.php for month (+ year)... -->
<!-- If want only year, change all instances of ['month'] in this part to ['year'] -->
  <?php if(!isset($month)): ?>
    <?php
      $date = getdate($result->date());
      if ($tmpDate['month'] != $date['month']): ?>  
          <?php $archivemenu = $date['month']; ?>
          

          <section id="<?php echo $archivemenu ?><?php echo $date ['year']?>">



          <!-- this is what shows up on screen; adding year-->
          <h2>
            <a href="<?php echo url('archive#' . $archivemenu. $date['year']) ?>">
              <?php echo $archivemenu ?> <?= $date['year'] ?>
            </a>
          </h2>



        </section>



    <?php endif ?>
  <?php endif ?>





<!-- ARCHIVE RESULTS: snippet in common with other sections -->

  
  <!-- VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV -->      


  <!-- date of article, if sticking with manual input of date in panel/.txt file, only need: <?php echo $result->date('d F Y') ?> -->       
  <li>
    <a href="<?php echo $result->url() ?>">
      <time datetime="<?php echo $result->date('c') ?>" pubdate="pubdate"><?php echo $result->date('d F Y') ?></time>
    </a>
  </li>



<!-- two possibilities for pulling in the glasses icon for each post -->
<!-- postglasses option 1: (+ link to result article) -->
    <!-- <a href="<?php echo $result->url() ?>"> -->
      <!-- <?php echo kirbytext($result->postglasses()) ?> -->
      <!-- </a> -->

<!-- postglasses option 2: (+ link to result article) -->
  <a href="<?php echo $result->url() ?>">
    <?php echo thumb($result->image('postglasses.jpg')) ?>
  </a>



  <!-- title of article -->       
  <p>
    <a href="<?php echo $result->url() ?>">
      <?php echo $result->title()->html() ?>
    </a>
  </p>

                

  <!-- tags of article -->
    <!-- split the list in the tag field into individual tags -->
  <?php foreach($result->tags()
                        ->split(',') as $tag): ?> 
    <!-- make them link to the tags page -->
    <a href="<?php echo url('tag/tag:' . $tag)?>">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
        #<?php echo html($tag) ?>     
    </a>    
  <?php endforeach ?>


  <!-- VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV -->      

            
<!-- ARCHIVE RESULTS: php wrapper end-->    



<!-- from blogprints' archive.php: this needs to stay; don't know why, it just does! -->
<?php if(!isset($year)) $tmpDate = $date;
endforeach ?>


