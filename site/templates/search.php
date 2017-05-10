<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>

    <main class="desktopcontent">

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


    </main>


    <!-- establishing a separate div so I can make it wider in screens with more than one result wide to accommodate margins I need to put on both L + R sides of all results so they have proper spacing between each other, but don't look like they're extending past the page margins -->
    <div class="resultarea"> 

        <!-- establishing the results from the user's search -->
        <?php if($results != "" ): ?>

        <!-- return blog posts according to results.php snippet -->
        <?php foreach($results as $result): ?>

            <?php snippet('result', array('result' => $result)) ?>

        <?php endforeach ?>	




            <?php else: ?>

            <!-- NOT SURE IF THIS WILL STAY AS <p> -->
            <p class="l-textface" id="nosearchresults">
                So sorry, I could not find that word!
            </p>

            <?php endif ?>




    </div>    <!-- closing "resultarea" div -->

<?php snippet('footer') ?>
