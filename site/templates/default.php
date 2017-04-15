<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <?php snippet('menu') ?>        

    <main>

        <!-- NOT SURE THAT THIS WILL STAY AS <h2> -->
        <h2 class="extracontentpagetitle">
            <?php echo $page->title()->html() ?>
        </h2>

        <!-- text for the page -->
        <span class="l-textface">
            <?php echo $page->text()->kirbytext() ?>
        </span>

    </main>


    <?php snippet('footer') ?>
