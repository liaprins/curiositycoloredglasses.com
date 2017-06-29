<!-- foreach loop pulling in the articles -->
<!-- for each blog post, contains postglasses, title, date, tags, and intro -->
<?php foreach ($page->children()
                    ->visible() 
                    ->flip() as $article): ?>
      
    <!-- KEEP "ARTICLE" FOR NOW FOR SEMANTIC PURPOSES -->
    <article>



        <!-- I'm arranging the pieces by the mobile V design; CSS can re-arrange them; this is according to responsive design principles -->
        <!-- Also considering making this content into a snippet, so it can be re-used by blogarticle.php
        but not sure how to accomodate it's social share icons, which aren't present here, and the "intro"s are different sizes in each place -->


        <!-- GROUPING ALL BUT THE INTRO PARAGRAPH INTO ONE LINK -->
        <a href="<?php echo $article->url() ?>">
        
            <!-- date for each article -->
            <p class="date m-textface bold">
                <!-- NEED TO LOOK INTO THE ATTIBUTES + VALUES HERE THAT WERE DEFAULTLY INCLUDED BY KIRBY -->
                <time datetime="<?php echo $article->date('c') ?>" pubdate="pubdate">
                    <?php echo $article->date('d F Y') ?>
                </time>
            </p>


            <!-- post glasses icon -->
            <!-- CAN'T GET THE .postglasses CLASS TO WORK TO CENTER THE IMAGE WHEN THE CLASS IS ON THE IMAGE
            (AND TRIED ADDING display: block;) SO USING A <div> TO HOLD THE .postglasses CLASS INSTEAD -->
            <div class="postglasses">
    
                <img src="<?php echo $article->postglasses()->image()->toFile()->url() ?>" alt="">
    
                <!-- Original method for calling image; not as good because can't hold an alt tag or id/class, etc -->
                <!-- <?php echo $article->postglasses()->image()->toFile() ?> -->

            </div>


            <!-- NOT SURE IF THIS WILL STAY AS <h2> -->
            <h2>
                <?php echo $article->title()->html() ?>
            </h2>
        
        </a>


        <!-- intro for each article -->
        <!-- I used a plug-in to elimnate the <p> tags Kirby automatically generates with Kirbytext markdown for each section in content files. I just changed what had been "kirbytext" below to "kirbytextraw". Here's the link to the plug-in: https://github.com/jbeyerstedt/kirby-plugin-kirbytextRaw-->
        <!-- I put "&nbsp" between "Read" and "more" so they would never split onto separate lines -->
        <!-- NOT SURE IF THIS WILL STAY AS <p> -->
        <p class="m-textface">
            <?php echo kirbytextraw ($article->intro())?>
            
            <!-- MAY NEED TO ADD A <span> ELEMENT TO "READ MORE" + CLASS/ID, OR JUST ADD CLASS/ID TO "A"... -->    
            <a href="<?php echo $article->url() ?>" class="s-display readmore yellowhover">
                Read&nbspmore
            </a>
        </p>
  


        <!-- tags for each article -->
        <?php foreach($article->tags()
                              ->split(',') as $tag): ?> 
    
        <!-- MAY NEED TO ADD A <span> ELEMENT TO THE TAGS + CLASS/ID, OR JUST ADD CLASS/ID TO "A"... -->    
        <a href="<?php echo url('tag/tag:' . $tag)?>" class="s-textface tag yellowhover">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->                  #<?php echo html($tag) ?>
        </a>
        
        <?php endforeach ?>



    <!-- close everything up -->
    </article>


  <?php endforeach ?>












