<?php snippet('internalheader') ?>



<section class="content blogarticle">

  <article>


<!-- back arrow -->
    <?php snippet('blogarticle-1-backarrow') ?>



<!-- postglasses icon -->
    <?php snippet('blogarticle-2-postglasses') ?>




<!-- title of post -->
    <?php snippet('blogarticle-3-title') ?>




<!-- date of post -->
    <?php snippet('blogarticle-4-date') ?>



<!-- tags of post -->
    <?php snippet('blogarticle-5-tags') ?>



<!-- intro of post -->
    <?php snippet('blogarticle-6-intro') ?>



<!-- text of post -->
    <?php snippet('blogarticle-7-text') ?>



<!-- vocab within text of post -->
    <?php snippet('blogarticle-8-vocab') ?>

    

<!-- * * * * * KEEPING THANK YOU, PROCESS SECTIONS IN HERE IN CASE I WANT TO ADD THEM LATER; THEY WON'T SHOW IN THE BORWSER * * * * * -->

<!-- Thank You section of post -->
    <?php snippet('blogarticle-thankyou') ?>



<!-- Process section of post -->
    <?php snippet('blogarticle-process') ?>





<!-- Relevant Reading section of post -->
    <?php snippet('blogarticle-9-relevantreading') ?>





  </article>

</section>



<?php snippet('footer') ?>




<!-- SHARING! -->
<a href="http://www.facebook.com/sharer.php?u=<?php echo rawurlencode ($page->url()); ?>" target="blank" title="Share on Facebook">Share on Facebook</a>
<a href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode($page->title()); ?>%20<?php echo rawurlencode($page->url()); ?>%20<?php echo ('via @your_account')?>" target="blank" title="Tweet this">Tweet</a>

