<!-- trying three different ways to surface Thank You image + metadata -->
    <!-- option 2: via markdown in each blogarticle.txt  -->
    <!-- this works for image only, no metadata (field needs to be put back into markdown) -->
    <?php if(!$page->thankyou2()->empty()): ?>
        <h2>Thank You 2</h2>

        <!-- calling the ThankYou field from the blogarticle.txt  -->
        <?php echo kirbytext($page->thankyou()) ?>

    <?php endif ?>