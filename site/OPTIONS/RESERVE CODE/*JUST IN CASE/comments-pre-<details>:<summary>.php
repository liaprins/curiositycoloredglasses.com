<!-- adding <section> to hold together all of the comment zone -->
<section class="comments">


<?php $comments = new Comments($page) ?>

<?php $status = $comments->process() ?>

<?php if (!$comments->isEmpty()): ?>
  

    <details open>

        <!-- calling the count of total number of comments, as part of the "Comments" sub-head -->
        <summary class="sectionsummary"><h3>Comments: <?php echo $page->children()->find('comments')->children()->last()->cid() ?>
            </h3>
        </summary>


        <?php foreach ($comments as $comment): ?>

            <!-- !! This is more for testing while blog is in-progress; may be commented out (but not deleted in case needed later!) upon blog launch !! -->
            <!--
            <?php echo $comment->id() ?>
            -->

            <!-- THIS "ARTICLE" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
            SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
            <article id="comment-<?= $comment->id() ?>" class="onecomment comment<?php e($comment->isPreview(), ' preview"') ?>">
        
                <!-- holds commenter’s name -->                
                <span class="s-display">
                <?php e($comment->isLinkable(), "<a href='{$comment->website()}'>") ?>
                    <?= $comment->name() ?>
                <?php e($comment->isLinkable(), "</a>") ?>
                </span>

                <!-- holds date of comment -->
                <span class="s-textface bold">
                    <?= $comment->date('d F Y') ?>
                </span>
        
                <!-- posted comments themselves -->
                <p class="m-textface">
                    <?= $comment->message() ?>
                </p>
      
            </article>
  
    <?php endforeach ?>


<?php else: ?>

            <details open> <!-- Another set of <details>/<summary> tags, technically nested within the first, to account for the second "Comments" heading, when there are 0 comments -->

                <summary class="sectionsummary"><h3>Comments
                    </h3>
                </summary>

<?php endif ?>



                <form action="#comment-<?= $comments->nextCommentId() ?>" method="post" accept-charset="utf-8">
    
                    <!-- Name input field -->
                    <label for="name" class="m-textface">
                        Name
                        <!-- !! NOTE TO SELF: This use of <abbr> (abbreviation) tag doesn't match it's proposed usage according to W3Schools, but it was here in the default Kirby comments setup so I'm leaving it for now -->
                        <abbr title="required">
                            <!-- COMMENTING THESE OUT, SINCE I'VE ALSO REMOVED THE NON-REQUIRED FIELDS (EMAIL AND WEBSITE) -->
                            <!-- * -->
                        </abbr>
                    </label>
        
                    <input type="text" name="<?= $comments->nameName() ?>" value="<?= $comments->value($comments->nameName()) ?>" id="name" maxlength="<?= $comments->fieldMaxlength() ?>" required class="boxinput m-textface">
    

                    <!-- Email -->
                    <!-- NOT SURE I WANT THIS FIELD -->
                    <div style="display: none" hidden>
                        <label for="email" class="m-textface">
                            Email Address
                            <?php if ($comments->requiresEmailAddress()): ?>
                                <abbr title="required">
                                    *
                                </abbr>
                            <?php endif ?>
                        </label>
        
                        <input type="email" name="<?= $comments->emailName() ?>" value="<?= $comments->value($comments->emailName()) ?>" id="email" class="boxinput" maxlength="<?= $comments->fieldMaxlength() ?>" <?php e($comments->requiresEmailAddress(), 'required') ?>>
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
    

                    <!-- Comment message itself -->
                    <label for="message" class="m-textface">
                        Comment
                        <abbr title="required">
                            <!-- COMMENTING THESE OUT, SINCE I'VE ALSO REMOVED THE NON-REQUIRED FIELDS (EMAIL AND WEBSITE) -->
                            <!-- * -->
                        </abbr>
                    </label>
        
                    <!-- I THINK THE CLOSING <textarea> TAG NEEDS TO STAY IN SAME LINE AS OPENING TAG, ELSE THE SPACEBARS WITHIN THE FIELD HAPPENS! -->
                    <textarea name="<?= $comments->messageName() ?>" id="message" maxlength="<?= $comments->messageMaxlength() ?>" required class="boxinput m-textface"><?= $comments->value($comments->messageName()) ?></textarea>
    

                    <!-- NOT SURE WHAT THIS GOES WITH??? BUT AFRAID TO DELETE IT YET -->
                    <input type="hidden" name="<?= $comments->sessionIdName() ?>" value="<?= $comments->sessionId() ?>">
    

                    <!-- THIS IS THE "Post a comment" BUTTON PART; AFTER MESSAGE IS WRITTEN -->
                    <input type="submit" name="<?= $comments->submitName() ?>" value="Post a comment" id="submit" class="xs-display button postacomment">
 

                </form>

            </details>    <!-- Closing second, nested <details> for header for when there are 0 comments -->

        </details>    <!-- Closing first, outer <details> for header when there are 1+ comments -->

</section>
