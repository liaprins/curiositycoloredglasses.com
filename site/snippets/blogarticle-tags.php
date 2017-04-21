<span id="posttaggroup">

<!-- split the list in the tag field into individual tags -->
<?php foreach($page->tags()->split(',') as $tag): ?> 

<!-- make them link to the tags page -->
<a href="<?php echo url('tag/tag:' . $tag)?>" id="posttag" class="s-textface tag yellowhover">
        
    <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
    #<?php echo html($tag) ?>     
    
</a>
        
<?php endforeach ?>

</span>