<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>

        
    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>

    <!-- for backarrow script (held in menu.php) -->
    <?php snippet('backarrow') ?>


    <main>

        <div class="desktopcontent">

            <!-- title of the page -->
            <!-- NOT SURE IF THIS WILL END UP STAYING AS <h2> -->
            <h2 id="librarypagename" class="extracontentpagetitle">
                <?php echo $page->title()->kirbytext() ?>
            </h2>


            <!-- intro text for the page -->
            <!-- NOT SURE IF THIS WILL STAY AS <p> -->
            <span class="l-textface">
                <?php echo $page->text()->kirbytext() ?>
            </span>

        </div>
    
    </main>


    <div id="librarysection">

        <!-- images + info stored in library folder directly (not library/libraryimages) -->
        <!-- info here is from metadata, info on blog article pages is from blogarticle.txt fields + custom CSS -->
        <?php foreach ($page->images()->sortBy('modified', 'desc') as $libraryresult): ?>
        
        <?php $librarysubpage = $libraryresult->name(); ?>  

                <!--
                <img src="<?php echo $libraryresult->url() ?>" alt="<?php echo $libraryresult->alt() ?>" class="libraryicon" id="<?php echo $librarysubpage ?>">
                -->

                <!-- I used a made-up attribute (data-id) instead of the typical id attribute to hold this data, because by definition, if the "id" attribute matches the hash of a page, the page will "jump" to that element when the hash in the URL changes/appears -->
                <img src="<?php echo $libraryresult->url() ?>" alt="<?php echo $libraryresult->alt() ?>" class="libraryicon" data-id="<?php echo $librarysubpage ?>" data-clickable="yes">

                <article style="display: none;" class="libraryentry">

                    <a href="<?php echo url('library') ?>">
                        <img src= "<?php echo url('assets/images/x.svg') ?>" alt="close" id="library-x" class="yellowhover">
                    </a>

                    <p class="libraryentryname s-display">
                        <?php echo html($libraryresult->heading()) ?>
                    </p>

                    <p class="libraryentryabout s-textface">
                        <?php echo html($libraryresult->about()->kirbytextraw()) ?>
                    </p>

                </article>


        <?php endforeach ?>

    </div>


<script src="assets/js/library.js">
</script>
    

<?php snippet('footer') ?>


