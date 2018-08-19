
This folder contains files (adjacent to this readme file) that can be used to continue experimenting with the idea of using the <details> and <summary> tags for the vocab definition functionality.

The blogarticle-7-text-vocab-test.php file is the CONTENT. It contains all the current PHP and HTML to call the post’s text, etc, plus some text written inline to simulate clicking on a vocab word to see its definition. 

The vocab-sidebar.css and vocab-non-sidebar.css files contain the STYLES for the two types of definition rendering (for desktop/H iPad, and V iPad/mobiles, respectively).



To continue testing:

1. Copy and paste the blogarticle-7-text-vocab-test.php file into the site/snippets folder.

2. Call it in the blog article.php template, after the regular blogarticle-7-text.php file. (Can also comment out the calling of the regular blogarticle-7-text.php file while experimenting).

3. Copy and paste the vocab-sidebar.css and vocab-non-sidebar.css files into the assets/css folder.

4. Open the head-close.php snippet and after the other css files, call ONE OR THE OTHER (ONLY ONE AT A TIME, WHILE EXPERIMENTING WITH THAT STYLE!!!). Use a comment like this to explain:
<!-- !!!!!!!!!! 04 FEB 2017 THIS vvv IS ONLY HERE TO EXPERIMENT WITH A VOCAB IDEA; IT SHOULD BE REMOVED AFTERWARDS !!!!!!!!!! -->

5. Open content file and the ONE style file that was referenced in the head-close.php snippet, and go to a blog post page on CCG and scroll down to the end of the text area to start testing. See also the Javascript and Responsivity Google Doc I made, explaining the issues with using <details>/<summary> for vocab definitions. 