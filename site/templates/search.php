<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>

    <main>

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


        <!-- establishing the results from the user's search -->
        <?php if($results != "" ): ?>

        <!-- return blog posts according to results.php snippet -->
        <?php foreach($results as $result): ?>

      	<?php snippet('result', array('result' => $result)) ?>

        <?php endforeach ?>	

        <?php else: ?>

        <!-- NOT SURE IF THIS WILL STAY AS <p> -->
        <p class="l-textface">
            So sorry, I could not find that word!
        </p>

        <?php endif ?>


    </main>

<?php snippet('footer') ?>
