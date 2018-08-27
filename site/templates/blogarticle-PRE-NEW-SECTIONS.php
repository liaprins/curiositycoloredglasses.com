<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>

 
<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-blogarticle') ?>


<?php snippet('head-close') ?>


    <!-- holds the loading animation; all pages get it except default.php template, 
    because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
    it cannot load by definition, and the animation never stops! -->
    <div id="loadbg" style="width:100%; height:100%; position:fixed; z-index:9999; background:url("../images/loader.gif") no-repeat center center rgba(226,228,58,0.75)    }"></div>

    <!-- backarrow script -->
    <script src="../assets/js/backarrow-post.js">
    </script>

    <!-- definitions/vocab script -->
    <script src="../assets/js/definitions.js">
    </script>

    <!-- lightbox and slideshow all in one script -->
    <script src="../assets/js/lightboxslideshow.js">
    </script>

    <!-- comment refresh script -->
    
    <script src="../assets/js/comment.js">
    </script>
    

    <!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">


        <!-- for backarrow script ^^^ -->
        <?php snippet('backarrow') ?>


            <article class="mockmain" id="pre-rr">    <!-- Opening <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->

                <div class="desktopcontent">

                <!-- I'm arranging the pieces of the intro part according to the V-mobile design; CSS can re-arrange them; this is according to responsive design principles -->
            
                </div>


                <div id="postdesktopcontent">

                    <!-- Date of post -->
                    <?php snippet('blogarticle-date') ?>


                    <!-- Postglasses icon -->
                    <?php snippet('blogarticle-postglasses') ?>


                    <!-- Title of post -->
                    <?php snippet('blogarticle-title') ?>


                    <!-- OPTIONAL GUEST WRITER -->
                    <?php snippet('blogarticle-guestwriter') ?>


                    <!-- Intro of post -->
                    <?php snippet('blogarticle-intro') ?>


                    <div id="posttagshare">

                        <!-- Tags of post -->
                        <?php snippet('blogarticle-tags') ?>


                        <!-- Sharing for this post -->
                        <?php snippet('blogarticle-share') ?>

                    </div>    <!-- Closing id="posttagshare" -->



                    <!-- Text of post -->
                    <?php snippet('blogarticle-text') ?>



                    <!-- Glossary of all vocab words; listed after the main text -->
                    <?php snippet('blogarticle-glossary') ?>
    


                    <!-- * * * * * KEEPING THANK YOU, PROCESS SECTIONS IN HERE IN CASE I WANT TO ADD THEM LATER; THEY WON'T SHOW IN THE BROWSER * * * * * -->

                    <!-- Thank You section of post -->
                    <?php snippet('blogarticle-thankyou') ?>


                    <!-- Process section of post -->
                    <?php snippet('blogarticle-process') ?>

                    <!-- ^ ^ ^ ^ ^ KEEPING THANK YOU, PROCESS SECTIONS IN HERE IN CASE I WANT TO ADD THEM LATER; THEY WON'T SHOW IN THE BROWSER ^ ^ ^ ^ ^ -->



                </div>    <!-- Closing class="desktopcontent" -->

            </article>    <!-- Closing <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->



            <!-- Relevant Reading section of post -->
            <?php snippet('blogarticle-relevantreading') ?>



                <article class="mockmain" id="postdesktopcontent2">    <!-- Opening second instance of <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->

                    <!-- Comments via Disqus; trying out custom comments from Kirby instead for now, though -->
                    <?php snippet('d i s q u s') ?>


                    <!-- Comments via Kirby plugin -->
                    <!-- IMPORTANT! This snippet lives in site/plugins/comments/snippets; that is where the plugin calls for it to be -->
                    <!-- I am keeping it there in case of future updates to comments I need to install -->
                    
                    <!-- 1. TO RE-ACTIVATE ORIGINAL COMMENTS, MUST UN-COMMENT LINE BELOW && REMOVE THE SPACE [ ] BETWEEN "c" AND "omments" !!! -->
                    <!-- 2. THEN, IF LIVE ON REAL INTERNET, MUST COMMENT OUT THE RE-ROUTING IN site/config/config.php THAT RE-ROUTES HOME URL TO SKIP OVER "blog/" -->
                    <!-- 3. ONLY THEN WILL THESE CUSTOM COMMENTS WORK -->
                    <?php snippet('comments') ?>


                </article>    <!-- Closing second instance of <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->


            </article>    <!-- Closing first instance of <article> -->


            <!-- adding a div to hold (with a class to hide) a vertical image for Pinterest, to be populated via the panel -->
            <div class="hidepinnable"><?php echo $page->pinterestverticalimage()->toFile() ?></div>


        <!-- within the footer, the JS scripts used on everypage are called, 
        but they need to be called in a special format for blog article and tag page, 
        since they appear lower in the folder structure at least according to their URLs' "/"s...
        ...IF I MANIPULATE THE URLS TO GET RID OF "BLOG" AND EXTRA "TAG" THIS MAY CHANGE! MAY JUST NEED 'scripts-sitewide' THEN LIKE THE OTHER PAGES... -->
        <?php snippet('footer-sitewide-posts-tag') ?>

