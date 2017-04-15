<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>

    <main>

        <!-- title of the page + any intro text -->
        <!-- NOT SURE IF THIS WILL STAY AS <h2> -->
        <h2 class="extracontentpagetitle">
            <?php echo $page->title()->kirbytext() ?>
        </h2>

        <!-- text for the page -->
        <!-- NOT SURE IF THIS WILL STAY AS <p> -->
        <span class="l-textface">
            <?php echo $page->text()->kirbytext() ?>
        </span>


<!-- __________________________________________________________________________________ -->      

<!-- ARCHIVE YEAR MENU -->

    <p id="archivemenu" >

        <?php $years = $page->years()
                            ->toStructure()
                            ->flip() ?>

        <?php foreach($years as $year): ?>

        <!-- This holds together all the years on one line -->
        <span>

            <!-- NOT SURE THAT THE YEAR MENU WILL STAY AS <h3> -->
            <a href="<?php echo url('archive#' . $year) ?>" id="archivemenuyear" class="sectionsummary yellowhover">
                <?php echo $year ?></a></span><?php endforeach ?>

    </p>

<!-- __________________________________________________________________________________ -->      


<!-- THIS SECTION NEEDS TO BE HERE OR ELSE THE YEAR MENU WON'T SHOW UP -->

        <?php foreach($site->page('blog')
                           ->children()
                           ->visible() 
                           ->flip() as $result): ?>

            <?php $date = getdate($result->date()); 
            $tmpDate = $date; ?>

        <?php endforeach ?>


<!-- __________________________________________________________________________________ -->      


<!-- BLOG ARTICLES GROUPED BY YEAR: needs to go through the same loops as above -->

        <?php foreach($site->page('blog')
                           ->children()
                           ->visible() 
                           ->flip() as $result): ?>


        <?php $date = getdate($result->date());
        if ($tmpDate['year'] != $date['year']): ?>   



        <!-- THIS "SECTION" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
        SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
        <section id="<?php echo $date ['year']?>">

            <!-- this is what shows up on screen-->
            
            <details open>
                <summary class="sectionsummary blackbg"><h3>
            
                    <!-- !!!!!!!!!! (currently the sub-heading for each group of results grouped by year is acting as an anchor link to itself; will remove this in future) -->
                    <!-- <a href="<?php echo url('archive#' . $date['year']) ?>"> -->

                        <!-- KEEP THIS! IT IS THE CONTENT FOR THE YEAR HEADINGS OF EACH GROUPING -->
                        <?= $date['year'] ?>

                    <!-- !!!!!!!!!! (currently the sub-heading for each group of results grouped by year is acting as an anchor link to itself; will remove this in future) -->
                    <!-- </a> -->
                    </h3>
                </summary>


            <?php endif ?>


            <!-- resulting article attributes to be defined in results snippet -->
            <?php snippet('result', array('result' => $result)) ?>



            <!-- this needs to stay or all year group headings will be most recent year; don't know why, it just does! -->
            <?php $tmpDate = $date; endforeach ?>



            </details>

        </section>


    </main>

<!-- __________________________________________________________________________________ -->      


<?php snippet('footer') ?>


