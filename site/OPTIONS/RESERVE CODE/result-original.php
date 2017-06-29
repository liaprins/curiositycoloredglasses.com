<!-- adding <article> for semantic reasons and to hold together each result -->
<article>

    
    <!-- adding link outside date, blog post name, and postglasses image; tags link to their own tag result page -->
    <a href="<?php echo $result->url() ?>">

        <!-- date of article, if sticking with manual input of date in panel/.txt file, only need: <?php echo $result->date('d F Y') ?> -->       
        <!-- NOT SURE IF THIS WILL END UP STAYING AS <p> -->
        <p class="date s-textface bold">
            <time datetime="<?php echo $result->date('c') ?>" pubdate="pubdate">
                <?php echo $result->date('d F Y') ?>
            </time>
        </p>


        <!-- postglasses image -->
        <!-- Original method for calling image; not as good because can't hold an alt tag or id/class, etc -->
        <?php echo $result->postglasses()->image()->toFile() ?>


        <!-- title of article -->       
        <!-- NOT SURE IF THIS WILL END UP STAYING AS <p> -->
        <p class="s-display">
            <?php echo $result->title()->html() ?>
        </p>

    </a>

                
    <!-- tags of article -->
    <!-- split the list in the tag field into individual tags -->
    <?php foreach($result->tags()->split(',') as $tag): ?> 
    
    <!-- make them link to the tags page -->
    <a href="<?php echo url('tag/tag:' . $tag)?>" class="s-textface tag yellowhover">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
        #<?php echo html($tag) ?>     
    </a>    

    <?php endforeach ?>



<article>




            
