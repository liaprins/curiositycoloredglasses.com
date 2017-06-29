<?php snippet('internalheader') ?>



<section class="content blogarticle">

  <article>


<!-- back arrow -->
    <a href="<?php echo url('blog') ?>">
        <img src= "<?php echo url('assets/images/backarrow.png') ?>" alt="BACK ARROW :)">
    </a>


<!-- postglasses icon -->
<?php echo $page->postglasses()->image()->toFile() ?>




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



<!-- * * * * * DEFINITIONS (VOCAB) * * * * * -->


  <?php foreach($page->children('vocabwords')->children() as $vocabword): ?>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->
<!-- THIS PART IS THE ACTUAL VOCAB WORD APPEARING WITHIN THE TEXT, ACTING AS A LINK -->
<!-- I THINK IT WILL NEED TO BE IN THE KIRBYTAG CODE...  -->

    <?php $vocabwordurl = $vocabword->urlappendix(); ?>                 

    <section id="<?php echo $vocabwordurl ?>">

    <?php $thisurl = thisUrl(); ?> 

      <a href="<?php echo url($thisurl . '#' . $vocabwordurl) ?>">
        <h4>
          <?php echo html($vocabword->vocabword()) ?>
        </h4>
      </a>

    </section?>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->


<!-- ************************************************************************* -->
<!-- vvv THIS PART ALL NEEDS TO BE HIDDEN EXCEPT WHEN JAVASCRIPT CALLS IT FOR WHEN THE VOCAB WORD IS SELECTED vvv -->
<!-- vvv IT MAY NEED TO BE IN THE KIRBYTAG CODE INSTEAD OF HERE, BUT NOT SURE... vvv -->

      <?php echo $vocabword->audiopronunciation()->audio()->toFile() ?>

      <h5>
        <?php echo html($vocabword->pronunciation()) ?>
      </h5>

      <p>
        <?php echo html($vocabword->definition()) ?>
      </p>

      <?php echo $vocabword->illustration()->image()->toFile() ?>

<!-- ************************************************************************* -->



  <?php endforeach ?>


<!-- TRYING TO PULL THE "URL APPENDIX" OR FOLDER NAME THAT HOLDS THIS PARTICULAR vocabdefinition.txt -->




    

<!-- * * * * * KEEPING THANK YOU, PROCESS SECTIONS IN HERE IN CASE I WANT TO ADD THEM LATER; THEY WON'T SHOW IN THE BORWSER * * * * * -->

<!-- trying three different ways to surface Thank You image + metadata -->
    <!-- option 2: via markdown in each blogarticle.txt  -->
    <!-- this works for image only, no metadata (field needs to be put back into markdown) -->
    <?php if(!$page->thankyou2()->empty()): ?>
        <h2>Thank You 2</h2>

        <!-- calling the ThankYou field from the blogarticle.txt  -->
        <?php echo kirbytext($page->thankyou()) ?>

    <?php endif ?>


<!-- Process section of post -->
    <?php if(!$page->process()->empty()): ?>

        <h2>The Making of</h2>  
        <?php echo kirbytext($page->process()) ?>

    <?php endif ?>

<!-- * * * * * END OF THANK YOU, PROCESS SECTIONS * * * * * -->




<!-- Relevant Reading section of post -->
    <?php if(!$page->relevantreading1()->empty()): ?>

        <h2>Relevant Reading</h2>


<!-- THE 1ST OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading1()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>

<!-- THE 2ND OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading2()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>

<!-- THE 3RD OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading3()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>


    <?php endif ?> 




  </article>

</section>



<?php snippet('footer') ?>




<!-- SHARING! -->
<a href="http://www.facebook.com/sharer.php?u=<?php echo rawurlencode ($page->url()); ?>" target="blank" title="Share on Facebook">Share on Facebook</a>
<a href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode($page->title()); ?>%20<?php echo rawurlencode($page->url()); ?>%20<?php echo ('via @your_account')?>" target="blank" title="Tweet this">Tweet</a>

