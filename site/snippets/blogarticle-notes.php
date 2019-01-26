<!-- Adding <section> for semantic reasons, and to hold together all the vocab definitions -->
<!-- NEW CSS TAG vvv -->
<section id="notessection">

    <!-- Making the glossary heading only appear if there are vocab words -->

    <?php foreach($page->children() as $subpage): ?>

        <?php if($subpage->notenumber()->exists()): ?>

            <details class="postsectiondetails" open>

                <summary class="sectionsummary postpagesectionsummary blackbg"><h3>Notes
                    </h3>
                </summary>

                <?php foreach($page->children() as $subpage): ?>

                    <?php if($subpage->notenumber()->exists()): ?>

                        <?php $notes = $subpage; ?>                

                        <?php $notesurl = $subpage->uid(); ?>                 

                        <?php $thisurl = thisUrl(); ?> 


                        <!-- CHANGED WHAT WAS ORIGINALLY data-definition-id BELOW TO BE NOTES-SPECIFIC -->
                        <div id="notesdivid" class="notesdivclass" data-notes-id="<?php echo $notesurl ?>">
                                    
                            <!-- CHANGED CLASS THAT WAS ORIGINALLY glossaryvocabword BELOW TO BE NOTES-SPECIFIC -->
                            <a href="<?php echo url($thisurl . '#-' . $notesurl) ?>" title="View reference in context" id="<?php echo $notesurl ?>" class="notessectionnumber m-textface bold yellowhover">
                                <!-- This is the note number that appears alongside the note itself (on its own sub-page) -->
                                    <?php echo html($subpage->notenumber()) ?>
                            </a>

                            <!-- note itself (required) appended with up arrow, to take user back to word in context -->
                            <?php if(!$subpage->notecontent()->empty()): ?>
                                <!-- CHANGED CLASS THAT WAS ORIGINALLY definition BELOW TO BE NOTES-SPECIFIC -->
                                <p class="s-textface notecontent">
                                    <?php echo html($subpage->notecontent()) ?>

                                    <!-- Linking back to the footnote in context within the post content -->
                                    <!--
                                    <a href="<?php echo url($thisurl . '#-' . $notesurl) ?>" title="View reference in context">
                                        <img src= "<?php echo url('assets/images/up.svg') ?>" alt="Up to note's location in context" id="uparrow" class="yellowhover">
                                    </a>
                                    -->
                                </p>
                            <?php endif ?>

                        </div>           

                    <?php endif ?>

                <?php endforeach ?> 

            </details>    <!-- class="postsectiondetails" -->

        <?php endif ?>

    <?php endforeach ?>

</section>












