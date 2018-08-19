<?php snippet('head') ?>

    <body>

    <script src="assets/js/pop.js">
    </script>

    <!-- THIS IS THE CORRECT JS TO USE FOR THE REAL SITE! JUST SUBBING IN THE OTHER ONE THAT CONNECTS TO THE LOCALHOST SVGs (dots, Xs, etc) FOR TESTING -->
    <!--
    <script src="assets/js/lightboxslideshow.js">
    </script>
    -->

    <script src="assets/js/lightboxslideshow.js">
    </script>

    <div id="bodysub">


<!-- LEAVE ALONE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->


        <a href="<?= url() ?>">
        <!-- <a href="../liaprins"> -->
            <!-- <img src="../assets/images/back.svg" alt="Back to all projects" id="back"> -->
            <img src="assets/images/back.svg" alt="Back to all projects" id="back">
        </a>

        <h1>
            <?php echo $page->title()->kirbytext() ?>
        </h1> 



        <ul id="menu">

            <?php if($page->opportunities()->exists()): ?>
            <a href="#opportunities">
                <li class="menuitem">Opportunities</li>
            </a>
            <?php endif ?>

            <?php if($page->process()->exists()): ?>
            <a href="#process">
                <li class="menuitem">Process</li>
            </a>
            <?php endif ?>

            <?php if($page->outcomes()->exists()): ?>
            <a href="#outcomes">
                <li class="menuitem">Outcomes</li>
            </a>
            <?php endif ?>

            <?php if($page->livelearn()->exists()): ?>
            <a href="#livelearn">
                <li class="menuitem">Live + learn</li>
            </a>
            <?php endif ?>

        </ul>



        <div id="intro">
            <?php echo $page->intro()->kirbytext() ?>
        </div>


        <!-- TESTING PROJECT STATS SECTION -->
        <div id="stats">
            <?php echo $page->stats()->kirbytext() ?>
        </div>



        <?php if($page->opportunities()->exists()): ?>

        <details open id="opportunities" class="section">

            <summary class="sectionheader">
                <h3 id="opportunitiessection">Opportunities</h3>
                <div class="sectionplus">
                </div>
            </summary>

            <?php echo $page->opportunities()->kirbytext() ?>

        </details>

        <?php endif ?>



        <?php if($page->process()->exists()): ?>

        <details open id="process" class="section">

            <summary class="sectionheader">
                <h3 id="processsection">Process</h3>
                <div class="sectionplus">
                </div>
            </summary>

            <?php echo $page->process()->kirbytext() ?>

        </details>

        <?php endif ?>



        <?php if($page->outcomes()->exists()): ?>

        <details open id="outcomes" class="section">

            <summary class="sectionheader">
                <h3 id="outcomessection">Outcomes</h3>
                <div class="sectionplus">
                </div>
            </summary>

            <?php echo $page->outcomes()->kirbytext() ?>

        </details>

        <?php endif ?>



        <?php if($page->livelearn()->exists()): ?>

        <details open id="livelearn" class="section">

            <summary class="sectionheader">
                <h3 id="livelearnsection">Live + learn</h3>
                <div class="sectionplus">
                </div>
            </summary>

            <?php echo $page->livelearn()->kirbytext() ?>

        </details>

        <?php endif ?>



        <hr id="gridseparator">

        <div>

        <?php foreach ($page->parent()
                            ->children()
                            ->visible() as $project): ?>

            <?php snippet('project-list', array('project' => $project)) ?>

        <?php endforeach ?>

        </div>

        <div id="bottomspacer">
        </div>


<!-- LEAVE ALONE vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv --> 

    </div>    <!-- closing id="bodysub" -->
 

    </body>
</html>


























