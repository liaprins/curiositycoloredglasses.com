<?php snippet('head-open-sitewide') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <?php snippet('menu') ?>

    <!-- calling the JS scripts used on everypage -->
    <?php snippet('scripts-sitewide') ?>


    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


    <main>

        <div class="desktopcontent">

            <!-- NOT SURE THAT THIS WILL STAY AS <h2> -->
            <h2 class="extracontentpagetitle">
                <?php echo $page->title()->html() ?>
            </h2>

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

        </div>

    </main>









<!-- TESTING MEDIA QUERIES IN SAFARI WITH TEXT -->

<!-- REMS -->
    <p id="text-rems-no-mq" class="text-all">
        NO mediaquery </br>
        10rems
    </p>
    <p id="text-rems-yes-mq" class="text-all bold">
        YES mediaquery </br>
        @442 -> 15rems </br>
        @650 -> 20rems </br>
        @1225 -> 25rems
    </p>

<!-- EMS -->
    <p id="text-ems-no-mq" class="text-all">
        NO mediaquery </br>
        10ems
    </p>
    <p id="text-ems-yes-mq" class="text-all bold">
        YES mediaquery </br>
        @442 -> 15ems </br>
        @650 -> 20ems </br>
        @1225 -> 25ems
    </p>

<!-- VW -->
    <p id="text-vw-no-mq" class="text-all">
        NO mediaquery </br>
        10vw
    </p>
    <p id="text-vw-yes-mq" class="text-all bold">
        YES mediaquery </br>
        @442 -> 4.5vw </br>
        @650 -> 6vw </br>
        @1225 -> 7.5vw </br>
    </p>

<!-- PX -->
    <p id="text-px-no-mq" class="text-all">
        NO mediaquery </br>
        10px
    </p>
    <p id="text-px-yes-mq" class="text-all bold">
        YES mediaquery </br>
        @442 -> 90px </br>
        @650 -> 120px </br>
        @1225 -> 150px </br>
    </p>



    <!-- TESTING MEDIA QUERIES IN SAFARI WITH BOXES -->
    
    <div id="rems" class="all">
        <div id="rems-no-mq" class="all">
            NO mediaquery </br>
            10rems
        </div>
        <div id="rems-yes-mq" class="all">
            <!--
            YES mediaquery </br>
            @442 -> 15rems </br>
            @650 -> 20rems </br>
            @1225 -> 25rems
            -->
        </div>
    </div>
    
    <div id="ems" class="all">
        <div id="ems-no-mq" class="all">
            NO mediaquery </br>
            10ems
        </div>
        <div id="ems-yes-mq" class="all">
            YES mediaquery </br>
            @442 -> 15ems </br>
            @650 -> 20ems </br>
            @1225 -> 25ems </br>
        </div>
    </div>

    <div id="vw" class="all">
        <div id="vw-no-mq" class="all">
            NO mediaquery </br>
            3vw 
        </div>
        <div id="vw-yes-mq" class="all">
            <!--
            YES mediaquery </br>
            @442 -> 4.5vw </br>
            @650 -> 6vw </br>
            @1225 -> 7.5vw </br>
            -->
        </div>
    </div>

    <div id="px" class="all">
        <div id="px-no-mq" class="all">
            NO mediaquery </br>
            60px
        </div>
        <div id="px-yes-mq" class="all">
            YES mediaquery </br>
            @442 -> 90px </br>
            @650 -> 120px </br>
            @1225 -> 150px </br>
        </div>
    </div>












    <?php snippet('footer') ?>
