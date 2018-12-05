<!-- foreach loop pulling in the articles -->
<!-- for each blog post, contains postglasses, title, date, tags, and intro -->
<?php foreach ($page->children()
                    ->visible() 
                    ->flip() as $article): ?>
      
    <article id="homepagepost">

        <!-- This sets a link across all post-related elements (except its tags)
        that links to the post, and activates zoom on its postglasses  -->
        <!--
        <a href="<?php echo $article->url() ?>" id="postlink">
        -->
            <!-- I'm arranging the pieces by the V-mobile design; CSS can re-arrange them with "position:" property for desktop layout; 
            this is according to responsive design principles -->

        
            <!-- Date for each article -->
            <p id="homedate" class="date m-textface bold">
                <time datetime="<?php echo $article->date('c') ?>" pubdate="pubdate">
                    <?php echo $article->date('d F Y') ?>
                </time>
            </p>


            <!-- If I decide I don't like intro being a link, comment out holistic link above ^^^ (and it's closing tag towards bottom),
            then un-comment this link below and its closing tag, just for postglasses, date, and title.
            If I want the zoom effect even when hover on title and date, keep the id="postglasses", otherwise remove it.
            Also un-comment the <a> tag surrounding "read more", below, and comment out its current <span> -->
            <!-- Grouping all but the intro paragraph into one link -->
            <a href="<?php echo $article->url() ?>" id="postlink">        

                <!-- Post glasses icon -->
                <div class="postglassescontainer">
                    <div class="stem shortstem leftstem"></div><?php if($homepostglassesleft = $article->postglassesleft()->toFile()): ?><div style="background-image: url(<?= $homepostglassesleft->url() ?>)" class="circle leftcircle"></div><?php endif; ?><div class="stem centerstem"></div><?php if($homepostglassesright = $article->postglassesright()->toFile()): ?><div style="background-image: url(<?= $homepostglassesright->url() ?>)" class="circle rightcircle"></div><?php endif; ?><div class="stem shortstem rightstem"></div>  
                </div>

                <!-- Name of post -->
                <h2 class="posttitle">
                    <?php echo $article->title()->html() ?>
                </h2>

            </a>


            <!-- If there is a guest writer -->
            <?php if(!$article->guestwriter()->empty()): ?>
                <span class="guestpostbanner xxs-display">Guest post</span>

                <!-- If there is a LINK for the guest writer -->
                <?php if(!$article->guestwriterlink()->empty()): ?>
                    <span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display"><a href="<?php echo html($article->guestwriterlink()) ?>" target="_blank" class="yellowhover">&nbsp<?php echo kirbytext($article->guestwriter()) ?>
                        </a>
                    </span>
                <?php endif ?>

                <!-- If there is NOT a LINK for the guest writer -->
                <?php if($article->guestwriterlink()->empty()): ?>
                    <span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display">&nbsp<?php echo kirbytext($article->guestwriter()) ?>
                    </span>
                <?php endif ?>

            <?php endif ?>

            <!-- "Lia Prins" to show up as default author unless a guest writer is applied in panel -->
            <?php if($article->guestwriter()->empty()): ?>
                <span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display"><a href="https://liaprins.com" target="_blank" class="yellowhover">&nbspLia Prins
                    </a>
                </span>
            <?php endif ?>


            <!-- Intro for each article -->

            <!-- I used a plug-in to elimnate the <p> tags Kirby automatically generates with Kirbytext markdown for each section in content files. 
            I just changed what had been "kirbytext" below to "kirbytextraw". 
            Here's the link to the plug-in: https://github.com/jbeyerstedt/kirby-plugin-kirbytextRaw-->
            <p id="homeintro" class="m-textface hyphenate">
            
                <?php echo kirbytextraw ($article->intro())?>            
                <!-- "Read more" --> 
                <!-- I put "&nbsp" between "Read" and "more" so they would never split onto separate lines -->   
                <!-- Adding a script inline so that hovering on "Read only" makes postglasses zoom -->
                <a href="<?php echo $article->url() ?>" id="readmore" class="s-display yellowhover">

                    &nbspRead&nbspmore

                </a>

            </p>
        <!--
        </a>
        -->


        <div id="hometaggroup" class="s-textface">

        <!-- foreach loop pulling in the tags for each article -->
        <?php foreach($article->tags()
                              ->split(',') as $tag): ?> 

        <!-- Tags -->   
        <!-- Using "$tag:" instead of "html($tag)" because the "\" from markdown text file will return as its own tag-->                   
            <a href="<?php echo url('tag/tag:' . $tag)?>" id="hometag" class="xs-textface tag yellowhover">
                <!-- Adding the 2 x "no break spaces" (&nbsp) to act as L-padding (like for "Read more" button), because using actual padding-left measurements can separate the padding from the word if the word starts on a new line -->
                &nbsp&nbsp#<?php echo html($tag) ?>
            </a>
        
        <?php endforeach ?>

        </div>


    <!-- Close everything up -->
    </article>


  <?php endforeach ?>











