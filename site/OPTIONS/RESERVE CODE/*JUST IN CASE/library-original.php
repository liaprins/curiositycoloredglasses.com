<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>

        
    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>
        

    <main>

        <!-- title of the page -->
        <!-- NOT SURE IF THIS WILL END UP STAYING AS <h2> -->
        <h2>
            <?php echo $page->title()->kirbytext() ?>
        </h2>


        <!-- intro text for the page -->
        <!-- NOT SURE IF THIS WILL STAY AS <p> -->
        <p class="l-textface">
            <?php echo $page->text()->kirbytext() ?>
        </p>


        <!-- option 3: images + info stored in library folder directly (not library/libraryimages) -->
        <!-- to get rid of nav images at bottom -->
        <!-- info here is from metadata, info on blog article pages is from blogarticle.txt fields + custom CSS -->
        <?php foreach ($page->images()->sortBy('modified', 'desc') as $libraryresult): ?>
        
        <?php $librarysubpage = $libraryresult->name(); ?>  
            
        <!-- THIS "SECTION" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
        SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
        <article id="<?php echo $librarysubpage ?>">
            
            <!-- image/icon of library entry, acting as link to its subpage (to be configured with JavaScript) -->
            <a href="<?php echo url('library#' . $librarysubpage) ?>">
                <img src="<?php echo $libraryresult->url() ?>" alt="">
            </a>

            <!-- name of library entry -->
            <!-- NOT SURE IF THIS WILL STAY AS <h4> -->
            <h4 class="s-display">
                <?php echo html($libraryresult->heading()) ?>
            </h4>

            <!-- text for library entry -->
            <p class="m-textface">
                <?php echo $libraryresult->about()->kirbytext() ?>
            </p>

        </article?>

        <?php endforeach ?>


    </main>

<?php snippet('footer') ?>


