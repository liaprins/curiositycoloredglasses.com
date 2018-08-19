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