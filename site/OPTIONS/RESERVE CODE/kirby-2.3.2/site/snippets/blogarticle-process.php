<!-- Process section of post -->
    <?php if(!$page->process()->empty()): ?>

        <h2>The Making of</h2>  
        <?php echo kirbytext($page->process()) ?>

    <?php endif ?>