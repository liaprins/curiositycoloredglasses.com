<<<<<<< HEAD
<?php snippet('head') ?>
=======
<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>
>>>>>>> origin/master

    <body>

    <div id="bodysub">

<!-- LEAVE ALONE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

<<<<<<< HEAD
        <a href="<?= url() ?>" id="error-backlink">
            <img src="assets/images/back.svg" alt="Back to all projects" id="error-backarrow">
            <!-- <img src="assets/images/back.svg" alt="Back to all projects" id="back"> -->
            <span class="menuitem" id="error-backtext">Back to all projects</span>
        </a>
        <div id="group404">
            <img src="assets/images/404.png" class="contentimage" id="img404">
            <h4 id="text404">The page could not be found!</h4>
=======
<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


    <main>

        <div class="desktopcontent">

            <!-- NOT SURE THAT THIS WILL STAY AS <h2> -->
            <h2 id="pagetitle" class="extracontentpagetitle"><?php echo $page->title()->html() ?></h2>


            <!-- text for the page -->
            <span class="l-textface">
                <?php echo $page->text()->kirbytext() ?>
            </span>
    

            <!-- Image of broken glasses -->

            <!-- <img src= "<?php echo url('assets/images/broken-glasses.gif') ?>" alt="Illustration of broken glasses" id="brokenglasses"> -->
            <img src= "<?php echo url('content/error/broken-glasses.jpg') ?>" alt="Illustration of broken glasses" id="brokenglasses">

            <!--
            <?php if(!$page->illustration()->empty()): ?>
                <?php echo kirbytext($page->illustration()) ?>
            <?php endif ?>
            -->

>>>>>>> origin/master
        </div>

<!-- LEAVE ALONE vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->  

    </div>    <!-- closing id="bodysub" -->


    </body>
</html>