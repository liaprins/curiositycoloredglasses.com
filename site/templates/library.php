<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>

 
<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- holds the loading animation; all pages get it except default.php template, 
    because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
    it cannot load by definition, and the animation never stops! -->
    <div id="loadbg"></div>


    <!-- backarrow script -->
    <script src="assets/js/backarrow-library.js">
    </script>


    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


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
            <span id="libraryintro" class="l-textface">
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

                    <!-- <p class="libraryentryname s-display"> -->
                    <span class="libraryentryname s-display">
                        <!-- <?php echo html($libraryresult->heading()) ?> -->
                        <?php echo kirbytext($libraryresult->heading()) ?>
                    </span>
                    <!-- </p> -->

                    <div class="libraryentryabout s-textface">
                        <!-- <?php echo html($libraryresult->about()->kirbytext()) ?> -->
                        <?php echo kirbytext($libraryresult->about()->kirbytext()) ?>
                    </div>

                </article>


        <?php endforeach ?>

    </div>


<script src="assets/js/library.js">
</script>
    

<?php snippet('footer-sitewide') ?>


