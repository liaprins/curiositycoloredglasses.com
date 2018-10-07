<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


        <div id="pre-search">    <!-- Opening <div> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->


            <!-- <main class="desktopcontent"> -->
            <div id="searchdesktopcontent">

                <!-- establishing the input field for search -->
                <form id="searchpageform">

                    <!-- this input style needs to match the style of tag.php template's tag/page name (currently it is within <p>) -->
                    <input type="search" placeholder="search" name="q" value="<?php echo esc($query) ?>" id="searchpageinput" class="xl-textface underlineinput">

                    <button type="submit" value="Search" id="searchpagebutton" class="searchbutton yellowhover">

                        <img src= "<?php echo url('assets/images/search.svg') ?>" alt="Search" id="searchpageicon">

                    </button>

                </form>


                <!-- pulling any introductory text for the page, if there's any from the panel -->
                <p id="searchpageintrotext">
                    <span class="l-textface">
                        <?php echo $page->text()->kirbytext() ?>
                    </span>
                </p>


            </div>



            <!-- establishing the results from the user's search -->
            <?php if($results != "" ): ?>

                <!-- establishing a separate div so I can make it wider in screens with more than one result wide to accommodate margins I need to put on both L + R sides of all results so they have proper spacing between each other, but don't look like they're extending past the page margins -->
                <div class="resultarea"> 

                    <!-- return blog posts according to results.php snippet -->
                    <!-- no longer needed as long as controller/search.php has 'hello' instead of 'about' -->
                    <?php foreach($results as $result): ?>

                        <?php snippet('result', array('result' => $result)) ?>

                    <?php endforeach ?>

                </div>    <!-- closing "resultarea" div -->


            <?php else: ?>

                <p class="l-textface" id="nosearchresults">
                    So sorry, I could not find that word!
                </p>

            <?php endif ?>


        </div> <!-- closing #pre-search -->

    <?php snippet('footer-sitewide') ?>
