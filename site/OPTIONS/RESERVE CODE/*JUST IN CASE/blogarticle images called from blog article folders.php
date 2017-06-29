<?php snippet('internalheader') ?>



<section class="content blogarticle">

  <article>


<!-- back arrow -->
    <a href="<?php echo url('blog') ?>">
        <img src="navimages/backarrow.png" alt="BACK ARROW">
    </a>


<!-- two possibilities for pulling in the glasses icon for each post -->
<!-- postglasses option 1: -->
<!-- <?php echo kirbytext($page->postglasses()) ?> -->

<!-- postglasses option 2: -->
	<?php echo thumb($page->image('postglasses.jpg')) ?>



<!-- title of post -->
    <h1>
    	<?php echo $page->title()->html() ?>
    </h1>



<!-- date of post -->
    <time datetime="<?php echo $page->date('c') ?>" pubdate="pubdate"><?php echo $page->date('d F Y') ?></time>



<!-- tags of post -->
    <!-- split the list in the tag field into individual tags -->
    <?php foreach($page->tags()
                        ->split(',') as $tag): ?> 

    <!-- make them link to the tags page -->
    <a href="<?php echo url('tag/tag:' . $tag)?>">
        <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
        #<?php echo html($tag) ?>     
    </a>
        
  <?php endforeach ?>



<!-- intro of post -->
    <?php echo kirbytext($page->intro()) ?>



<!-- text of post -->
    <?php echo kirbytext($page->text()) ?>



<!-- Thank You section of post -->
    <h2>Thank You</h2>  
    <?php foreach($page->children('libraryimages') as $libraryimages): ?>
        <?php foreach ($libraryimages->images() as $libraryresult): ?>
            <!-- replace with link to library result's subpage -->
            
            <?php $thankyou = $libraryresult->shortname(); ?>

            <a href="<?php echo url('library#' . $thankyou) ?>">
                <img src="<?php echo $libraryresult->url() ?>" alt="">
            </a>

            <h5>
                <?php echo html($libraryresult->heading()) ?>
            </h5>

            <li>
                <?php echo html($libraryresult->about()) ?>
            </li>

        <?php endforeach ?>
    <?php endforeach ?>

<!-- Thank You 2: all images stored in library/libraryimages -->
    <?php if(!$page->thankyou()->empty()): ?>
        <h2>Thank You 2</h2>  
        <?php echo kirbytext($page->thankyou()) ?>
    <?php endif ?>



<!-- Process section of post -->
    <?php if(!$page->process()->empty()): ?>

        <h2>The Making of</h2>  
        <?php echo kirbytext($page->process()) ?>

    <?php endif ?>

  

<!-- Relevant Reading section of post -->
    <?php if(!$page->relevantreading()->empty()): ?>

        <h2>Relevant Reading</h2>

        <?php snippet('result') ?>

    <?php endif ?>




  </article>

</section>



<?php snippet('footer') ?>