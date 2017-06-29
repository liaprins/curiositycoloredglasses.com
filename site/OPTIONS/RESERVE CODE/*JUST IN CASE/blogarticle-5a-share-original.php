<!-- TWITTER -->
<!-- To shorten the url, I use "tinyurl()" instead of "url()" -->

<!-- TWITTER METHOD #1 -->
<!-- This method is from Kirby -->
<!-- This method relies on setting any hashtags manually within the Share field in the panel for the post -->
<!-- For the web intent method, may need to try to use JS to customize the part that is highlighted (or make it not highlight at all) -->
<a href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode ($page->share()); ?>%20<?php echo rawurlencode($page->tinyurl()); ?>%20<?php echo ('via @CuriosityColoredGlasses')?>"
   target="blank" 
   title="Tweet this">
   <img src= "<?php echo url('assets/images/Twitter-share.png') ?>" height="25" alt="Twitter logo">
</a>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


<!-- TWITTER METHOD #2 -->
<!-- This method is from Kirby, but I need it to parse the hashtag symbol properly (I think the "#" symbol is breaking it; may need to try it's UTF-8 encoding or something...?) -->
<!-- This method pulls the same tags I use for the blog post to preset as hashtags in the Twitter Share placeholder text -->
<!-- For the web intent method, may need to try to use JS to customize the part that is highlighted (or make it not highlight at all) -->
<!-- <a href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode ($page->share()); ?>%20<?php echo rawurlencode($page->tinyurl()); ?>%20<?php echo ('via @CuriosityColoredGlasses')?><?php foreach($page->tags()->split(',') as $tag): ?>%20<?php echo ('HASHTAG-PLACEHOLDER' . $tag); ?><?php endforeach ?>"
   target="blank" 
   title="Tweet this">
   <img src= "<?php echo url('assets/images/Twitter-share.png') ?>" height="25" alt="Twitter logo">
</a>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->


<!-- TWITTER METHOD #3 -->
<!-- This method is Twitter's code, but it won't show my custom image, unless I takeaway the "class=..." line -->
<!-- and/or the script (at end) which prevent the data from passing -->
<!--<a href="https://twitter.com/share" 
   class="twitter-share-button"
   data-text="<?php echo ($page->share()); ?>" 
   data-url="<?php echo ($page->tinyurl()); ?>"
   data-via="CuriosityColoredGlasses" 
   data-hashtags="<?php echo ($page->tags()); ?>" 
   data-lang="en" 
   data-show-count="false"
   target="blank">
   <img src= "<?php echo url('assets/images/Twitter-share.png') ?>" height="25" alt="Twitter logo">
</a>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->


<!-- **************************************************************************** -->


<!-- FACEBOOK -->

<!-- FACEBOOK METHOD #1 -->
<!-- This method is from Kirby -->
<!-- <a href="http://www.facebook.com/sharer.php?u=
   <?php echo rawurlencode ($page->url()); ?>" 
   target="blank" 
   title="Share on Facebook">
   <img src= "<?php echo url('assets/images/Facebook-share.png') ?>" height="25" alt="Facebook logo">
</a> -->


<!-- FACEBOOK METHOD #2 -->
<!-- This method is from Facebook Developers, after modifications... -->
<!-- It only works in conjunction with the script in the header.php file ... -->
<!-- ... and my registered CCG Facebook app ID (1816213758596939) -->
<!-- Need to figure out how to make the cursor change to hand on hover! + others -->
<div id="shareBtn">
   <img src= "<?php echo url('assets/images/Facebook-share.png') ?>" height="25" alt="Facebook logo">
</div>

<script>
document.getElementById('shareBtn').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: '<?php echo ($page->tinyurl()); ?>',
  }, function(response){});
}
</script>


<!-- **************************************************************************** -->

<!-- PINTEREST -->

<!-- From Pinterest widget builder (modified to get stored image-->
<!-- Need to figure out how to make the cursor change to hand on hover! -->
<a data-pin-do="buttonBookmark" data-pin-custom="true" data-pin-save="false" href="https://www.pinterest.com/pin/create/button/">
   <img src="<?php echo url('assets/images/Pinterest-share.png') ?>" height="25" alt="Pinterest logo"/>
</a>



