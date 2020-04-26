<!-- adding <section> to hold together all of the comment zone -->
<section class="comments">


<?php $comments = new Comments($page) ?>

<?php $status = $comments->process() ?>

<?php if (!$comments->isEmpty()): ?>
  
    <!-- calling the count of total number of comments, as part of the "Comments" sub-head -->
    <h3>
        Comments: <?php echo $page->children()->find('comments')->children()->last()->cid() ?>
    </h3>


    <?php foreach ($comments as $comment): ?>

        <!-- !! This is more for testing while blog is in-progress; may be commented out (but not deleted in case needed later!) upon blog launch !! -->
        <!--
        <?php echo $comment->id() ?>
        -->

        <!-- THIS "ARTICLE" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
        SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
        <article id="comment-<?= $comment->id() ?>" class="onecomment comment<?php e($comment->isPreview(), ' preview"') ?>">
        
            <!-- holds commenter’s name -->
            <p>
                <span class="s-display">
                <?php e($comment->isLinkable(), "<a href='{$comment->website()}'>") ?>
                    <?= $comment->name() ?>
                <?php e($comment->isLinkable(), "</a>") ?>
                </span>

                <span class="s-textface bold">
                    <?= $comment->date('Y-m-d') ?>.
                </span>
            
            </p>
      

            <!-- THIS "ASIDE" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
            SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
            <aside class="comment-info">
        
                <?php if ($comment->isPreview()): ?>
          
                    <!-- NOT SURE THAT THIS WILL STAY AS <p> -->
                    <p>
                        This is a preview of your comment. If you’re happy with it, 
                        <a href="#submit">
                            submit
                        </a> 
                        it to the public.
                    </p>
        
                <?php else: ?>
                
                    <!-- NOT SURE THAT THIS WILL STAY AS <p> -->
                    <!-- !! This is more for testing while blog is in-progress; may be commented out (but not deleted in case needed later!) upon blog launch !! -->
                    <!-- 
                    <a href="#comment-<?= $comment->id() ?>">
                        # <?php echo $comment->id() ?>
                    </a> 
                    -->
          
                <?php endif ?>
            
            </aside>
            
            <!-- posted comments themselves -->
            <p class="m-textface">
                <?= $comment->message() ?>
            </p>
      
        </article>
  
    <?php endforeach ?>

<?php else: ?>

    <h3>
        Comments
    </h3>

<?php endif ?>




<?php if ($comments->userHasSubmitted()): ?>
  
    <!-- THIS "P" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
    SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
    <p class="thank-you">Thank you for your comment!</p>

    <?php else: ?>

        <!-- POST A COMMENT BUTTON WAS ORIGINALLY ABOVE THE FORM FIELDS, HERE (I COPIED IT TO LOWER DOWN); COMMENTING OUT HERE BUT LEAVIGN FOR NOW IN CASE I NEED IT BACK HERE -->
        <p class="xs-display button">
            Post a comment
        </p>
  

    <?php if ($status->isUserError()): ?>
    
        <!-- THIS "P" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
        SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
        <p id="comment-<?= $comments->nextCommentId() ?>" class="error">
        
            <?= $status->getMessage() ?>
    
        </p>

    <?php endif ?>

  
    <form action="#comment-<?= $comments->nextCommentId() ?>" method="post" accept-charset="utf-8">
    
        <h4>

            <!-- Name input field -->
            <label for="name">
                Name
                <!-- !! NOTE TO SELF: This use of <abbr> (abbreviation) tag doesn't match it's proposed usage according to W3Schools, but it was here in the default Kirby comments setup so I'm leaving it for now -->
                <abbr title="required">
                    *
                </abbr>
            </label>

        </h4>
        
        <input type="text" name="<?= $comments->nameName() ?>" value="<?= $comments->value($comments->nameName()) ?>" id="name" maxlength="<?= $comments->fieldMaxlength() ?>" required>
    


        <!-- Email input field -->
        <label for="email">
            Email Address
            <?php if ($comments->requiresEmailAddress()): ?>
                <abbr title="required">
                    *
                </abbr>
            <?php endif ?>
        </label>
        
        <input type="email" name="<?= $comments->emailName() ?>" value="<?= $comments->value($comments->emailName()) ?>" id="email" maxlength="<?= $comments->fieldMaxlength() ?>" <?php e($comments->requiresEmailAddress(), 'required') ?>>
    


        <!-- Website input field -->
        <label for="website">
            Website
        </label>
        
        <input type="url" name="<?= $comments->websiteName() ?>" value="<?= $comments->value($comments->websiteName()) ?>" id="website" maxlength="<?= $comments->fieldMaxlength() ?>">
    


        <?php if ($comments->isUsingHoneypot()): ?>
            <div style="display: none" hidden>
                <input type="text" name="<?= $comments->honeypotName() ?>" value="<?= $comments->value($comments->honeypotName()) ?>">
            </div>
        <?php endif ?>
    
        <!-- Comment message itself -->
        <label for="message">
            Message
            <abbr title="required">
                *
            </abbr>
        </label>
        
        <textarea name="<?= $comments->messageName() ?>" id="message" maxlength="<?= $comments->messageMaxlength() ?>" required class="m-textface"><?= $comments->value($comments->messageName()) ?></textarea>
    

        <input type="hidden" name="<?= $comments->sessionIdName() ?>" value="<?= $comments->sessionId() ?>">
    

        <input type="submit" name="<?= $comments->previewName() ?>" value="Preview">
        <?php if ($comments->validPreview()): ?>
            <input type="submit" name="<?= $comments->submitName() ?>" value="Submit" id="submit">
        <?php endif ?>

    </form>

    <!-- POST A COMMENT BUTTON -->
    <!--
    <p class="xs-display button">
        Post a comment
    </p>
    -->


<?php endif ?>


</section>
