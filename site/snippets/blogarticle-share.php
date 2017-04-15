<!-- IF SIZES OF ICONS RELATIVE TO EACH OTHER NEED ADJUSTED, DO THIS TO THE .SVG FILE ITSELF
OPEN .SVG IN ILLUSTRATOR OF ICON THAT NEEDS TO BE SMALLER AND RESIZE IT TO BE SMALLER ON ITS ARTBOARD
KEEP ARTBOARD THE SAME SIZE, THOUGH! -->

<span id="share">

<!-- TWITTER -->
<!-- To shorten the url, I use "tinyurl()" instead of "url()" -->

<!-- TWITTER METHOD #1.0 -->
<!-- From a tutorial website: onlinejournalismblog.com -->
<!-- Right now pulling the tags from the tags field of the panel. May need it's own tag field to pull from instead, if I want less or shorter or none. -->
<!-- <a href="https://twitter.com/intent/tweet?text=<?php echo rawurlencode ($page->share()); ?>&url=<?php echo rawurlencode($page->tinyurl()); ?>&hashtags=<?php foreach($page->tags()->split(', ') as $tag): ?>%20<?php echo ($tag); ?><?php endforeach ?>&via=CuriosityColoredGlasses" target="_blank">
    <img src= "<?php echo url('assets/images/Twitter.svg') ?>" height="25" alt="Twitter logo">
</a> -->
<!-- This script needs to stay or there won't be a popup; it will open a new tab instead -->
<!-- <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->


<!-- TWITTER METHOD #1.1 -->
<!-- From a tutorial website: onlinejournalismblog.com... -->
<!-- ... but adding ability to dynamically include a visualized image... -->
<!-- ... a call for a field in panel that references the properly-formatted URL for an image to be included in Tweet -->
<!-- Right now pulling the tags from the tags field of the panel. May need it's own tag field to pull from instead, if I want less or shorter or none. -->
<a href="https://twitter.com/intent/tweet?text=<?php echo rawurlencode ($page->share()); ?>%20<?php echo rawurlencode ($page->twitterimageurl()); ?>&url=<?php echo rawurlencode($page->tinyurl()); ?>&hashtags=<?php foreach($page->tags()->split(', ') as $tag): ?>%20<?php echo ($tag); ?><?php endforeach ?>&via=CuriosityColoredGlasses" target="_blank">
    <img src= "<?php echo url('assets/images/Twitter.svg') ?>" alt="Share on Twitter" class="socialicon shareicon yellowhover">
</a>
<!-- This script needs to stay or there won't be a popup; it will open a new tab instead -->
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


<!-- **************************************************************************** -->


<!-- FACEBOOK -->

<!-- This method is from Facebook Developers, after modifications... -->
<!-- It only works in conjunction with the script in the header.php file ... -->
<!-- ... and my registered CCG Facebook app ID (1816213758596939) -->
<span id="shareBtn">
    <img src= "<?php echo url('assets/images/Facebook.svg') ?>" alt="Share on Facebook" class="socialicon shareicon yellowhover">
</span>

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
<a data-pin-do="buttonBookmark" data-pin-custom="true" data-pin-save="false" href="https://www.pinterest.com/pin/create/button/">
   <img src="<?php echo url('assets/images/Pinterest.svg') ?>" alt="Save to Pinterest" class="socialicon shareicon yellowhover">
</a>



</span>


