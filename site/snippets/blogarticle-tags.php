<span id="posttaggroup" class="s-textface">

	<!-- Split the list in the tag field into individual tags -->
	<?php foreach($page->tags()->split(',') as $tag): ?> 

	<!-- Make them link to the tags page -->
	<a href="<?php echo url('tag/tag:' . $tag)?>" id="posttag" class="xs-textface tag yellowhover">
        
    	<!-- Or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
    	<!-- Adding the 2 x "no break spaces" (&nbsp) to act as L-padding (like for "Read more" button), because using actual padding-left measurements can separate the padding from the word if the word starts on a new line -->
        &nbsp&nbsp#<?php echo html($tag) ?>     
    
	</a>
        
	<?php endforeach ?>

</span>