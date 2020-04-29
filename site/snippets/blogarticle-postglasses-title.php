<a href="<?php echo page()->url() ?>" id="postlink">
	<div class="postglassescontainer">
		<div class="stem shortstem leftstem"></div><?php if($articlepostglassesleft = $page->postglassesleft()->toFile()): ?><div style="background-image: url(<?= $articlepostglassesleft->url() ?>)" class="circle leftcircle"></div><?php endif; ?><div class="stem centerstem"></div><?php if($articlepostglassesright = $page->postglassesright()->toFile()): ?><div style="background-image: url(<?= $articlepostglassesright->url() ?>)" class="circle rightcircle"></div><?php endif; ?><div class="stem shortstem rightstem"></div>
	</div>
	
	<h2 class="posttitle">
		<?php echo $page->name()->html() ?>
	</h2>
</a>
