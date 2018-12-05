<!-- SAVE FOR README: ZOOM INTO CTR OF EACH LENS INDIVIDUALLY vvv -->

<a href="<?php echo page()->url() ?>">
	<div class="postglassescontainer">
		<div class="stem shortstem leftstem"></div><?php if($articlepostglassesleft = $page->postglassesleft()->toFile()): ?><div style="background-image: url(<?= $articlepostglassesleft->url() ?>)" class="circle leftcircle"></div><?php endif; ?><div class="stem centerstem"></div><?php if($articlepostglassesright = $page->postglassesright()->toFile()): ?><div style="background-image: url(<?= $articlepostglassesright->url() ?>)" class="circle rightcircle"></div><?php endif; ?><div class="stem shortstem rightstem"></div>  
	</div>
</a>

<!-- SAVE FOR README: ZOOM INTO CTR OF EACH LENS INDIVIDUALLY ^^^ -->