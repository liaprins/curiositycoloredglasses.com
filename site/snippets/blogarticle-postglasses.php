<?php if($articlepostglasses = $page->postglasses()->toFile()): ?>
    <img src="<?= url('assets/images/mask.svg') ?>" style="background-image: url(<?= $articlepostglasses->url() ?>)" alt="" class="postglasses">
<?php endif; ?>