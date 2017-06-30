<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>
   
    <main class="desktopcontent">

        <!-- titling the page after the tag that brought us here -->
        <!-- NOT SURE IF THIS WILL STAY AS <p> -->
        <p id="tagpagename" class="xl-textface">
            #<?php echo param('tag') ?>
        </p>

        <!-- pulling any introductory text for the page, if there's any from the panel -->
        <span class="l-textface">
            <?php echo $page->text()->kirbytext() ?>
        </span>

    </main>


    <!-- establishing a separate div so I can make it wider in screens with more than one result wide to accommodate margins I need to put on both L + R sides of all results so they have proper spacing between each other, but don't look like they're extending past the page margins -->
    <div class="resultarea">

        <!-- resulting article attributes defined in results snippet -->
        <?php foreach($site->page('blog')
                           ->children()
                           ->visible() 
                           ->filterBy('tags', param('tag'), ',')
                           ->flip() as $result): ?>

            <?php snippet('result', array('result' => $result)) ?>
    
        <?php endforeach ?>

    </div>    <!-- closing .resultarea -->
    


    <?php snippet('footer') ?>




