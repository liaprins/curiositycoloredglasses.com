<?php foreach($page->children('vocabwords')->children() as $vocabword): ?>

    <?php $vocabwordurl = $vocabword->urlappendix(); ?>                 

    <!-- KEEP "SECTION ID"; IT IS FOR THE ANCHOR LINKS! -->
    <section id="<?php echo $vocabwordurl ?>">

    <?php $thisurl = thisUrl(); ?> 

        <!-- currently the vocab word that appears alongside the definition links to its own anchor link, but this is unnecessary
        (only the vocab word in text needs to do this, as specified in the kirbytag, here: site/tags/vocab.php) -->
        <a href="<?php echo url($thisurl . '#' . $vocabwordurl) ?>">
        
            <!-- this is the vocab word that appears alongside the definition -->
            <!-- NOT SURE THAT THIS WILL STAY AS <h4> -->
            <h4>
                <?php echo html($vocabword->vocabword()) ?>
            </h4>
    
        </a>

    </section?>


        <!-- audio pronunciation (optional) -->
        <?php echo $vocabword->audiopronunciation()->audio()->toFile() ?>

        <!-- text pronunciation (optional) -->
        <?php echo html($vocabword->pronunciation()) ?>

        <!-- definition (required) -->
        <?php echo html($vocabword->definition()) ?>

        <!-- illustration (optional) -->
        <?php echo $vocabword->illustration()->image()->toFile() ?>

<!-- ************************************************************************* -->



  <?php endforeach ?>