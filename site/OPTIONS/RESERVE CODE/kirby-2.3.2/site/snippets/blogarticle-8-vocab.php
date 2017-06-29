

<?php foreach($page->children() as $subpage): ?>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->
<!-- THIS PART IS THE ACTUAL VOCAB WORD APPEARING WITHIN THE TEXT, ACTING AS A LINK -->
<!-- I THINK IT WILL NEED TO BE IN THE KIRBYTAG CODE...  -->

<?php if($subpage->vocabword()->exists()): ?>

    <?php $vocabword = $subpage; ?>                

    <?php $vocabwordurl = $subpage->urlappendix(); ?>                 

    <section id="<?php echo $vocabwordurl ?>">

    <?php $thisurl = thisUrl(); ?> 

      <a href="<?php echo url($thisurl . '#' . $vocabwordurl) ?>">
        <h4>
          <?php echo html($subpage->vocabword()) ?>
        </h4>
      </a>

    </section?>           

  <?php endif ?>

  
<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->


<!-- ************************************************************************* -->
<!-- vvv THIS PART ALL NEEDS TO BE HIDDEN EXCEPT WHEN JAVASCRIPT CALLS IT FOR WHEN THE VOCAB WORD IS SELECTED vvv -->
<!-- vvv IT MAY NEED TO BE IN THE KIRBYTAG CODE INSTEAD OF HERE, BUT NOT SURE... vvv -->

      <?php echo $subpage->audiopronunciation()->audio()->toFile() ?>

      <h5>
        <?php echo html($subpage->pronunciation()) ?>
      </h5>

      <p>
        <?php echo html($subpage->definition()) ?>
      </p>

      <?php echo $subpage->illustration()->image()->toFile() ?>

<!-- ************************************************************************* -->


<?php endforeach ?> 


       


