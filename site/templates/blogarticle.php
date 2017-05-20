<?php snippet('head-open') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-blogarticle') ?>


<?php snippet('head-close') ?>


    <!-- CONFLICT!!! Does this 'facebook-sdk' snippet go here, "directly after the opening <body> tag on each page you want to load it"
    OR "right before closing </body> tag" (in the footer.php snippet)? Currently it is in both places.-->


    <?php snippet('menu') ?>


        <article class="mockmain" id="pre-rr">    <!-- Opening <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->

            <div class="desktopcontent">

            <!-- I'm arranging the pieces of the intro part according to the V-mobile design; CSS can re-arrange them; this is according to responsive design principles -->

            <!-- Back arrow -->
            <!-- COMMENTING THIS OUT UNTIL I CAN FIGURE OUT HOW TO MAKE IT FUNCTION LIKE BROWSER BACK BUTTON 
            (CURRENTLY JUST LINKS TO HOME PAGE, WHICH IS REDUNDANT TO THE NAV ITEM) -->
            <!-- <?php snippet('blogarticle-backarrow') ?> -->
            
            </div>


            <div id="postdesktopcontent">

                <!-- Date of post -->
                <?php snippet('blogarticle-date') ?>


                <!-- Postglasses icon -->
                <?php snippet('blogarticle-postglasses') ?>



                <!-- Title of post -->
                <?php snippet('blogarticle-title') ?>



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



                <!-- Gloassary of all vocab words; listed after the main text -->
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
                <!-- <?php snippet('disqus') ?> -->


                <!-- Comments via Kirby plugin -->
                <!-- IMPORTANT! This snippet lives in site/plugins/comments/snippets; that is where the plugin calls for it to be -->
                <!-- I am keeping it there in case of future updates to comments I need to install -->
                <?php snippet('comments') ?>


            </article>    <!-- Closing second instance of <article> to make room for RR results that need to be wider than this width, to accommodate their all having margins on L + R -->


        </article>    <!-- Closing first instance of <article> -->


    <?php snippet('footer') ?>

