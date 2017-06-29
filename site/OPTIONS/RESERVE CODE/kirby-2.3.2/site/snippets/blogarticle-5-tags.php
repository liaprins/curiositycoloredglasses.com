    <!-- split the list in the tag field into individual tags -->
    <?php foreach($page->tags()
                        ->split(',') as $tag): ?> 

    <!-- make them link to the tags page -->
    <a href="<?php echo url('tag/tag:' . $tag)?>">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
        #<?php echo html($tag) ?>     
    </a>
        
  <?php endforeach ?>