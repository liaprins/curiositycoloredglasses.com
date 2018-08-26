<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>

 
<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-other') ?>


<?php snippet('head-close') ?>


    <!-- holds the loading animation; all pages get it except default.php template, 
    because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
    it cannot load by definition, and the animation never stops! -->
    <div id="loadbg"></div>


    <!-- archive year section header script -->
    <script src="assets/js/archive.js">
    </script>


    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


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

        <div id="removemeaftertesting">

            <?php function pageYear($p) {
                return $p->date('Y');    }    // year, e.g. "2016"
                $posts = page('blog')->children(); ?>
    
            <?php foreach ($posts->flip()->group('pageYear') as $year => $yearList): ?>
    
                <!-- year heading -->
                <div id="archiveheadingarea">
                    <h3 class="sectionsummary archivesectionsummary blackbg" id="<?php echo $year?>" data-clickable-header="">
                        <!-- <img src= "<?php echo url('assets/images/up-arrowhead-white.svg') ?>" alt="" id="archiveyeartoggle"> -->
                        <?php echo $year ?>
                    </h3>
                </div>
                

                <!-- area where results are per year -->
                <div class="resultarea archiveresultarea">
                    <?php foreach ($yearList as $result): ?>
                        <?php snippet('result', array('result' => $result)) ?>
                    <?php endforeach; ?>
                </div>


            <?php endforeach; ?>

        </div>    <!-- id="removemeaftertesting" -->


    <?php snippet('footer-sitewide') ?>


