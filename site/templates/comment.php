<!-- This template exists exclusively to prevent ppl from being able to navigate to 
curiositycoloredglasses.com/blog-post-name/comments/comment-1 (or whatever comment-#)
which they would otherwise be able to do, since the comments 
and their parent organizer page both exist as pages within the Kirby content structure -->

<?php if (!$site->user()) go('/') ?>