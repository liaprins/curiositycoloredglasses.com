<!-- Adding <section> for semantic reasons, and to hold together all the vocab definitions -->
<section id="glossarysection">

    <!-- Making the glossary heading only appear if there are vocab words -->

    <?php foreach($page->children() as $subpage): ?>

        <?php if($subpage->vocabword()->exists()): ?>




            <details class="postsectiondetails" open>


                <!-- Keeping this heading in for now, so it can act like a section like RR, etc, for accessibility purposes -->
                <!-- <div class="postsectiondetails"> -->
                <summary class="sectionsummary postpagesectionsummary blackbg"><h3>Glossary
                    </h3>
                </summary>

                <!-- <details class="postsectiondetails"> -->

                    <!-- <dl> = "definition list"; using it for semantic purposes -->
                    <dl>

                    <?php foreach($page->children() as $subpage): ?>

                        <?php if($subpage->vocabword()->exists()): ?>

                            <?php $vocabword = $subpage; ?>                

                            <?php $vocabwordurl = $subpage->uid(); ?>                 

                            <?php $thisurl = thisUrl(); ?> 

                            <div id="vocabwordanddefinition" class="vocabwordanddefinitionclass" data-definition-id="<?php echo $vocabwordurl ?>">

                                <!-- <dt> = the name within the <dl> (parent) name-value pair  -->
                                <dt class="glossaryvocabwordandaudio">
                                    
                                    <span id="<?php echo $vocabwordurl ?>" class="glossaryvocabword s-display">
                                        <!-- This is the vocab word that appears alongside the definition -->
                                        <?php echo html($subpage->vocabword()) ?>
                                    </span>

                                    <!-- Written pronunciation -->
                                    <span id="pronunciation" class="xs-textface">
                                        <?php echo html($subpage->pronunciation()) ?>
                                    </span>

                                    <!-- Audio pronunciation (optional) -->
                                    <?php if(!$subpage->audiopronunciation()->empty()): ?>
                                        <a onclick="this.firstChild.play()" data-audiolink title="Hear audio pronunciation"><audio src="<?php echo $subpage->audiopronunciation()->audio()->toFile()->url() ?>" type="audio/mpeg"></audio><img src="<?php echo url('assets/images/audio.svg') ?>" alt="play audio pronunciation" class="audioicon yellowhover"></a>
                                    <?php endif ?>

                                </dt>


                                <!-- <dd> = the value (definition) within the <dl> (parent) name-value pair  -->
                                <dd>

                                    <!-- definition (required) appended with up arrow, to take user back to word in context -->
                                    <?php if(!$subpage->definition()->empty()): ?>
                                        <p class="s-textface definition">
                                            <?php echo html($subpage->definition()) ?>

                                            <!-- Linking back to the word in context within the post content -->
                                            <a href="<?php echo url($thisurl . '#-' . $vocabwordurl) ?>" title="View word in context">
                                                <img src= "<?php echo url('assets/images/up.svg') ?>" alt="Up to word in context" id="uparrow" class="yellowhover">
                                            </a>
                                        </p>
                                    <?php endif ?>

                                    <!-- illustration (optional) -->
                                    <?php if($vocabillustration = $subpage->illustration()->toFile()): ?>
                                        <img src="<?= url($vocabillustration->url()) ?>" alt="" class="vocabillustration">
                                    <?php endif; ?>

                                </dd>

                            </div>    <!-- id="vocabwordanddefinition" -->        

                        <?php endif ?>

                    <?php endforeach ?> 

                </dl>

            </details>    <!-- class="postsectiondetails" -->

        <?php endif ?>

    <?php endforeach ?>

</section>

