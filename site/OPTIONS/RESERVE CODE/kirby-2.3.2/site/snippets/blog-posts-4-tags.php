  <?php foreach($article->tags()
                        ->split(',') as $tag): ?> 

    <a href="<?php echo url('tag/tag:' . $tag)?>">
        
      <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
      #<?php echo html($tag) ?>
          
    </a>
        
  <?php endforeach ?>