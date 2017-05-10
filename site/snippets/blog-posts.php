<!-- foreach loop pulling in the articles -->
<!-- for each blog post, contains postglasses, title, date, tags, and intro -->
<?php foreach ($page->children()
                    ->visible() 
                    ->flip() as $article): ?>
      
    <!-- KEEP "ARTICLE" FOR NOW FOR SEMANTIC PURPOSES -->
    <article class="desktopcontent" id="homepagepost">

        <!-- I'm arranging the pieces by the mobile V design; CSS can re-arrange them; this is according to responsive design principles -->

        <!-- GROUPING ALL BUT THE INTRO PARAGRAPH INTO ONE LINK -->
        <a href="<?php echo $article->url() ?>">
        
            <!-- date for each article -->
            <p id="homedate" class="date m-textface bold">
                <!-- NEED TO LOOK INTO THE ATTIBUTES + VALUES HERE THAT WERE DEFAULTLY INCLUDED BY KIRBY -->
                <time datetime="<?php echo $article->date('c') ?>" pubdate="pubdate">
                    <?php echo $article->date('d F Y') ?>
                </time>
            </p>


            <!-- post glasses icon -->
            <?php if($homepostglasses = $article->postglasses()->toFile()): ?>
                <img src="<?= url('assets/images/mask.svg') ?>" style="background-image: url(<?= $homepostglasses->url() ?>)" alt="" class="postglasses">
            <?php endif; ?>


            <!-- NOT SURE IF THIS WILL STAY AS <h2> -->
            <h2 class="posttitle">
                
                <!-- <span class="l-textface">Uu</span> -->

                <?php echo $article->title()->html() ?>
            </h2>
        
        </a>


        <!-- intro for each article -->
        <!-- I used a plug-in to elimnate the <p> tags Kirby automatically generates with Kirbytext markdown for each section in content files. I just changed what had been "kirbytext" below to "kirbytextraw". Here's the link to the plug-in: https://github.com/jbeyerstedt/kirby-plugin-kirbytextRaw-->
        <!-- I put "&nbsp" between "Read" and "more" so they would never split onto separate lines -->
        <p id="homeintro" class="m-textface hyphenate">
            
            <?php echo kirbytextraw ($article->intro())?>            
            <!-- "Read more" -->    
            <a href="<?php echo $article->url() ?>" id="readmore" class="s-display yellowhover">
                &nbspRead&nbspmore
            </a>
        </p>




        <div id="hometaggroup">

        <!-- foreach loop pulling in the tags for each article -->
        <?php foreach($article->tags()
                              ->split(',') as $tag): ?> 

        <!-- tags -->   
        <!-- using "$tag:" instead of "html($tag)" because the "\" from markdown text file will return as its own tag-->                   
            <a href="<?php echo url('tag/tag:' . $tag)?>" id="hometag" class="s-textface tag yellowhover">
                <!-- Adding the 2 x "no break spaces" (&nbsp) to act as L-padding (like for "Read more" button), because using actual padding-left measurements can separate the padding from the word if the word starts on a new line -->
                <!-- &nbsp&nbsp -->     #<?php echo html($tag) ?>
            </a>
        
        <?php endforeach ?>

        </div>




    <!-- close everything up -->
    </article>


  <?php endforeach ?>












