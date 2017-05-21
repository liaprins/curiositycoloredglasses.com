<!-- adding <section> to hold together all of the comment zone -->
<section class="comments">


<?php $comments = new Comments($page) ?>

<?php $status = $comments->process() ?>

<?php if (!$comments->isEmpty()): ?>
  

    <details class="commentsdetails" open>

        <!-- calling the count of total number of comments, as part of the "Comments" sub-head -->
        <summary class="sectionsummary postpagesectionsummary commentssummary blackbg"><h3>Comments: <?php echo $page->children()->find('comments')->children()->last()->cid() ?>
            </h3>
        </summary>


        <?php foreach ($comments as $comment): ?>

            <!-- !! This is more for testing while blog is in-progress; may be commented out (but not deleted in case needed later!) upon blog launch !! -->
            <!--
            <?php echo $comment->id() ?>
            -->


            <!-- THESE ARE THE ALREADY-THERE COMMENTS -->
            
            <!-- Comment content -->
            <article id="comment-<?= $comment->id() ?>" class="onecomment comment<?php e($comment->isPreview(), ' preview"') ?>">        


                <!-- Setting up the SVG mask randomizer for avatar background colors -->
                <?php $avatarmask = array('assets/images/avatar.svg'); ?>
                <?php $rand_mask = $avatarmask[array_rand($avatarmask)]; ?>


                <!-- Setting up the color randomizer for avatar background colors -->
                <?php $background_colors = array('#e2e43a', '#48D67A', '#28D4E0', '#D68FD6'); ?>
                <?php $rand_background = $background_colors[array_rand($background_colors)]; ?>

                <!-- Avatar mask -->
                <img src="<?= url($rand_mask) ?>" alt="" id="avatar" style="background-color: <?= $rand_background ?>">

                <!-- Original method for calling avatar, without random SVG masks nor random BG colors (just yellow) which is called in CSS, but overridden in the above method ^^^ -->
                <!-- <img src="<?= url('assets/images/avatar.svg') ?>" alt="" id="avatar"> -->

                <div id="namedatecomment">

                    <!-- holds commenter’s name -->                
                    <span class="s-display">
                    <?php e($comment->isLinkable(), "<a href='{$comment->website()}'>") ?>
                        <!-- Adding an en-space vvv to go between name and date -->
                        <?= $comment->name() . '&ensp;' ?>
                    <?php e($comment->isLinkable(), "</a>") ?>
                    </span>

                    <!-- holds date of comment -->
                    <span id="commentdate" class="s-textface bold">
                        <?= $comment->date('d F Y') ?>
                    </span>
        
                    <!-- posted comments themselves -->
                    <div id="postedcomment"class="s-textface">
                        <?= $comment->message() ?>
                    </div>

                </div>

      
            </article>
  
    <?php endforeach ?>


<?php else: ?>

            <details class="commentsdetails" open> <!-- Another set of <details>/<summary> tags, technically nested within the first, to account for the second "Comments" heading, when there are 0 comments -->

                <summary class="sectionsummary postpagesectionsummary commentssummary blackbg" id="nocommentsheader"><h3>Comments
                    </h3>
                </summary>

<?php endif ?>

            
                <details id="postacommentdetails">

                    <summary id="postacommentsummary" class="xs-display postacommentbutton blackbg">Post a comment</summary>

                <!-- THESE ARE THE FORM FIELDS TO CREATE A COMMENT -->

                <form action="#comment-<?= $comments->nextCommentId() ?>" method="post" accept-charset="utf-8" id="commentform">
    
                    <!-- Name input field -->
                    <label for="name" id="namelabel">
                        <!-- Commenting out "Name" vvv to try placeholder text in place of label, to be more consistent with search and subscribe inputs -->
                        <!-- Name -->
                        <!-- !! NOTE TO SELF: This use of <abbr> (abbreviation) tag doesn't match it's proposed usage according to W3Schools, but it was here in the default Kirby comments setup so I'm leaving it for now -->
                        <abbr title="required">
                            <!-- COMMENTING THESE OUT, SINCE I'VE ALSO REMOVED THE NON-REQUIRED FIELDS (EMAIL AND WEBSITE) -->
                            <!-- * -->
                        </abbr>
                    </label>
        
                    <input type="text" name="<?= $comments->nameName() ?>" value="<?= $comments->value($comments->nameName()) ?>" placeholder="Name" id="name" maxlength="<?= $comments->fieldMaxlength() ?>" required class="boxinput s-textface">
    

                    <!-- Email -->
                    <!-- Hiding this field + label inside a hidden div -->
                    <div style="display: none" hidden>
                        <label for="email">
                            Email Address
                            <?php if ($comments->requiresEmailAddress()): ?>
                                <abbr title="required">
                                    *
                                </abbr>
                            <?php endif ?>
                        </label>
        
                        <input type="email" name="<?= $comments->emailName() ?>" value="<?= $comments->value($comments->emailName()) ?>" id="email" class="boxinput m-textface" maxlength="<?= $comments->fieldMaxlength() ?>" <?php e($comments->requiresEmailAddress(), 'required') ?>>
                    </div>


                    <!-- Website -->
                    <!-- Hiding this field + label inside a hidden div -->
                    <div style="display: none" hidden>
                        <label for="website">
                            Website
                        </label>
        
                        <input type="url" name="<?= $comments->websiteName() ?>" value="<?= $comments->value($comments->websiteName()) ?>" id="website" class="boxinput" maxlength="<?= $comments->fieldMaxlength() ?>">
                    </div>


                    <!-- HONEYPOT -->
                    <?php if ($comments->isUsingHoneypot()): ?>
                        <div style="display: none" hidden>
                            <input type="text" name="<?= $comments->honeypotName() ?>" value="<?= $comments->value($comments->honeypotName()) ?>">
                        </div>
                    <?php endif ?>
    

                    <!-- Input field for Comment message itself -->
                    <label for="message">
                        <!-- Commenting out "Name" vvv to try placeholder text in place of label, to be more consistent with search and subscribe inputs -->
                        <!-- Comment -->
                        <abbr title="required">
                            <!-- COMMENTING THESE OUT, SINCE I'VE ALSO REMOVED THE NON-REQUIRED FIELDS (EMAIL AND WEBSITE) -->
                            <!-- * -->
                        </abbr>
                    </label>
        
                    <!-- I THINK THE CLOSING <textarea> TAG NEEDS TO STAY IN SAME LINE AS OPENING TAG, ELSE THE SPACEBARS WITHIN THE FIELD HAPPENS! -->
                    <textarea name="<?= $comments->messageName() ?>" placeholder="Comment" id="message" maxlength="<?= $comments->messageMaxlength() ?>" required class="boxinput s-textface"><?= $comments->value($comments->messageName()) ?></textarea>
    

                    <!-- NOT SURE WHAT THIS GOES WITH??? BUT AFRAID TO DELETE IT YET -->
                    <!--                    
                    <input type="hidden" name="<?= $comments->sessionIdName() ?>" value="<?= $comments->sessionId() ?>">
                    -->
                    <input type="hidden" name="<?= $comments->sessionIdName() ?>" value="<?= $comments->sessionId() ?>">



                    <!-- THIS IS THE "Post a comment" BUTTON PART; AFTER MESSAGE IS WRITTEN -->
                    <input type="submit" name="<?= $comments->submitName() ?>" value="Post a comment" id="submit" class="xs-display boxbutton postacommentbutton blackbg">
 

                </form>


                </details>    <!-- Closing second, nested <details> for header for when there ARE any comments -->


            </details>    <!-- Closing other "second", nested <details> for header for when there are 0 comments -->

        </details>    <!-- Closing first, outer <details> for header when there are 1+ comments -->

</section>
