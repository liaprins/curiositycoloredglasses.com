                <!-- SAVE FOR README: ZOOM INTO CTR OF GLASSES AS A WHOLE vvv -->

                <!-- Post glasses icon -->
                <?php if($homepostglasses = $article->postglasses()->toFile()): ?>
                    <img src="<?= url('assets/images/mask.svg') ?>" style="background-image: url(<?= $homepostglasses->url() ?>)" alt="" class="postglasses">
                <?php endif; ?>

                <!-- SAVE FOR README: ZOOM INTO CTR OF GLASSES AS A WHOLE ^^^ -->