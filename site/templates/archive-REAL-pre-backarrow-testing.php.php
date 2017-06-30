<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- I MOVED THE HOME GLASSES ICON INTO THE 'menu' SNIPPET SO CALLING IT NOW INSTEAD OF 'internal-menu' SNIPPET -->
    <?php snippet('menu') ?>

    <main>

        <div class="desktopcontent">

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

        </div>


<!-- __________________________________________________________________________________ -->      

<!-- ARCHIVE YEAR MENU -->

        <div id="archivemenudesktopcontent">

            <p id="archivemenu">

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

        </div>

    </main>

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


<!-- BLOG ARTICLES GROUPED BY YEAR -->


    <?php function pageYear($p) {
        return $p->date('Y');    }    // year, e.g. "2016"
        $posts = page('blog')->children(); ?>
    
        <?php foreach ($posts->flip()->group('pageYear') as $year => $yearList): ?>
    
            

            <div id="archiveheadingarea">

                <h3 class="sectionsummary archivesectionsummary blackbg" id="<?php echo $year?>"><?php echo $year ?>
                </h3>
            
            </div>
                

            <div class="resultarea">

                <?php foreach ($yearList as $result): ?>

                    <?php snippet('result', array('result' => $result)) ?>

                <?php endforeach; ?>

            </div>

        <?php endforeach; ?>


<!-- __________________________________________________________________________________ -->      


<?php snippet('footer') ?>


