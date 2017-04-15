<!-- NEED TO LOOK INTO THE ATTIBUTES + VALUES HERE THAT WERE DEFAULTLY INCLUDED BY KIRBY -->
<p id="postdate" class="date m-textface bold">
	<time datetime="<?php echo $page->date('c') ?>" pubdate="pubdate">
		<?php echo $page->date('d F Y') ?>
	</time>
</p>