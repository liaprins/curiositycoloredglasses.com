<!-- adding <article> for semantic reasons and to hold together each result -->
<article class="result">

    
    <!-- adding link outside date, blog post name, and postglasses image; tags link to their own tag result page -->
    <a href="<?php echo $result->url() ?>">

        <!-- date of article, if sticking with manual input of date in panel/.txt file, only need: <?php echo $result->date('d F Y') ?> -->       
        <!-- NOT SURE IF THIS WILL END UP STAYING AS <p> -->
        <p id="resultdate" class="date s-textface bold">
            <time datetime="<?php echo $result->date('c') ?>" pubdate="pubdate">
                <?php echo $result->date('d F Y') ?>
            </time>
        </p>


        <!-- postglasses image -->
        <?php if($image = $result->postglasses()->toFile()): ?>
            <img src="<?= url('assets/images/mask.svg') ?>" style="background-image: url(<?= $image->url() ?>)" alt="" id="resultglasses">
        <?php endif; ?>


        <!-- title of article -->       
        <p id="resulttitle" class="s-display">
            <?php echo $result->title()->html() ?>
        </p>

    </a>

                
    <!-- tags of article -->
    <!-- split the list in the tag field into individual tags -->
    <?php foreach($result->tags()->split(',') as $tag): ?> 
    
    <!-- make them link to the tags page -->
    <a href="<?php echo url('tag/tag:' . $tag)?>" id="resulttag" class="xs-textface yellowhover">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
        #<?php echo html($tag) ?>     
    </a>    

    <?php endforeach ?>



</article>




            
