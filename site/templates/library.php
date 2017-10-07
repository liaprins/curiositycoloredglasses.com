<?php snippet('head-open') ?>

 
<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>

        
    <?php snippet('menu') ?>

    <!-- calling the JS scripts used on everypage -->
    <?php snippet('scripts-sitewide') ?>

    <!-- backarrow script -->
    <script src="assets/js/backarrow-library.js">
    </script>

    <!-- for backarrow script ^^^ -->
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
                <img src="<?php echo $libraryresult->url() ?>" alt="<?php echo $libraryresult->alt() ?>" title="<?php echo html($libraryresult->heading()) ?>" class="libraryicon" data-id="<?php echo $librarysubpage ?>" data-clickable="yes">

                <article style="display: none;" class="libraryentry">

                    <!-- Taking out the link to the main library page on the "x" button, because I am now just closing the entry with JS for performance reasons, instead of reloading the whole main library page all over again! -->
                    <!-- <a href="<?php echo url('library') ?>"> -->
                        <img src= "<?php echo url('assets/images/x.svg') ?>" alt="close" id="library-x" class="yellowhover close-x">
                    <!-- </a> -->

                    <p class="libraryentryname s-display">
                        <?php echo html($libraryresult->heading()) ?>
                    </p>

                    <div class="libraryentryabout s-textface">
                        <?php echo html($libraryresult->about()->kirbytext()) ?>
                    </div>

                </article>


        <?php endforeach ?>

    </div>


<script src="assets/js/library.js">
</script>
    

<?php snippet('footer') ?>


