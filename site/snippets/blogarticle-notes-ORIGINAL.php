<!-- Adding <section> for semantic reasons, and to hold together all the vocab definitions -->
<section id="notessection">

    <!-- Making the glossary heading only appear if there are vocab words -->

    <?php foreach($page->children() as $subpage): ?>

        <?php if($subpage->notesnumber()->exists()): ?>

            <details class="postsectiondetails" open>


                <!-- Keeping this heading in for now, so it can act like a section like RR, etc, for accessibility purposes -->
                <!-- <div class="postsectiondetails"> -->
                <summary class="sectionsummary postpagesectionsummary blackbg"><h3>Notes
                    </h3>
                </summary>

                    <?php foreach($page->children() as $subpage): ?>

                        <?php if($subpage->notes()->exists()): ?>

                            <?php $notes = $subpage; ?>                

                            <?php $notesurl = $subpage->uid(); ?>                 

                            <?php $thisurl = thisUrl(); ?> 


                            <!-- MAY NEED TO CHANGE data-definition-id BELOW TO BE NOTES-SPECIFIC -->
                            <div id="notesdivid" class="notesdivclass" data-definition-id="<?php echo $notesurl ?>">
                                    
                                    <span id="<?php echo $notesurl ?>" class="glossaryvocabword m-textface bold">
                                        <!-- This is the note number that appears alongside the note itself (on its own sub-page) -->
                                        <?php echo html($subpage->notenumber()) ?>
                                    </span>

                                    <!-- note itself (required) appended with up arrow, to take user back to word in context -->
                                    <?php if(!$subpage->notecontent()->empty()): ?>
                                        <!-- <p class="xs-textface definition"> -->
                                        <!-- MAY NEED TO CHANGE definition CLASS BELOW TO BE NOTES-SPECIFIC -->
                                        <p class="s-textface definition">
                                            <?php echo html($subpage->notecontent()) ?>

                                            <!-- Linking back to the word in context within the post content -->
                                            <a href="<?php echo url($thisurl . '#-' . $notesurl) ?>" title="View reference in context">
                                                <img src= "<?php echo url('assets/images/up.svg') ?>" alt="Up to note's location in context" id="uparrow" class="yellowhover">
                                            </a>
                                        </p>
                                    <?php endif ?>

                                    <!-- illustration (optional) -->
                                    <?php if($noteillustration = $subpage->illustration()->toFile()): ?>
                                        <!-- MAY NEED TO CHANGE vocabillustration CLASS BELOW TO BE NOTES-SPECIFIC -->
                                        <img src="<?= url($noteillustration->url()) ?>" alt="" class="vocabillustration">
                                    <?php endif; ?>

                            </div>           

                        <?php endif ?>

                    <?php endforeach ?> 

            </details>    <!-- class="postsectiondetails" -->

        <?php endif ?>

    <?php endforeach ?>

</section>












