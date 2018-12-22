<!-- SAVE FOR README: ZOOM INTO CTR OF GLASSES AS A WHOLE vvv -->

<?php if($articlepostglasses = $page->postglasses()->toFile()): ?>
    <a href="<?php echo page()->url() ?>">
	    <img src="<?= url('assets/images/mask.svg') ?>" style="background-image: url(<?= $articlepostglasses->url() ?>)" alt="" class="postglasses">
	</a>
<?php endif; ?>

<!-- SAVE FOR README: ZOOM INTO CTR OF GLASSES AS A WHOLE ^^^ -->