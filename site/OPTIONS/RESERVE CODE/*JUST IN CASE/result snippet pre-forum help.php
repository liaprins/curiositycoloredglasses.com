<!-- This snippet was made by Lia -->

<!-- NOTE: This snippet holds the information for articles shown as results: -->
<!-- e.g. (1) relevant reading suggestions (within blogarticle), (2) search results, and (3) tag results. -->
<!-- (ARCHIVE HAS IT'S OWN RESULTS SNIPPET CALLED archiveresult.php) -->
<!-- The php code must be included with each of these three snippets, (according to my tests), -->
<!-- so I am just including all three snippets together here, since the part inside their -->
<!-- main php wrappers is and NEEDS TO REMAIN IDENTICAL! -->

<!-- Everytime a change is made to any of the three sections in this document -->
<!-- (not counting the main php wrappers), IT MUST BE COPIED AND PASTED TO OVERRIDE -->
<!-- THE OTHER TWO SECTIONS! Take care not to override or delete any main php wrappers! -->




<!-- RELEVANT READING: php wrapper start-->

<?php foreach($page->relevantreading()->pages() as $result): ?>


<!-- RELEVANT READING: snippet in common with other sections -->


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

            
<!-- RELEVANT READING: php wrapper end-->

<?php endforeach ?>




<!-- __________________________________________________________________________________ -->      





<!-- SEARCH RESULTS: php wrapper start-->

<?php foreach($results as $result): ?>


<!-- SEARCH RESULTS: snippet in common with other sections -->

  
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

            
<!-- SEARCH RESULTS: php wrapper end-->        

<?php endforeach ?>




<!-- __________________________________________________________________________________ -->      





<!-- TAG RESULTS: php wrapper start-->

<?php foreach($site->page('blog')
                   ->children()
                   ->visible() 
                   ->filterBy('tags', param('tag'), ',')
                   ->flip() as $result): ?>


<!-- TAG RESULTS: snippet in common with other sections -->

  
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

            
<!-- TAG RESULTS: php wrapper end-->        

<?php endforeach ?>







