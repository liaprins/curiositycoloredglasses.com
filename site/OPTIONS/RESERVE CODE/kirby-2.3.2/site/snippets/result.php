



  <!-- VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV -->      
 
  <!-- date of article, if sticking with manual input of date in panel/.txt file, only need: <?php echo $result->date('d F Y') ?> -->       
  <li>
    <a href="<?php echo $result->url() ?>">
      <time datetime="<?php echo $result->date('c') ?>" pubdate="pubdate"><?php echo $result->date('d F Y') ?></time>
    </a>
  </li>



    <a href="<?php echo $result->url() ?>">
      <?php echo $result->postglasses()->image()->toFile() ?> 
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

            
