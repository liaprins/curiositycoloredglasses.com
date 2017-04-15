
<!-- This file has contents that is common, or dynamically called in a common way, for all pages. -->

<!-- The opengraph tags are how Facebook and Pinterest know what to name the parts within its own little link-creator. -->
<!-- The actual Facebook and Pinterest share buttons themselves are inside the blogarticle-5a-share.php file. -->


<!-- The url of the current page -->
<meta property="og:url"                content="<?php echo rawurlencode($page->url()); ?>" /> 

<!-- This one was found on Pinterest, may not be supported by Facebook -->
<meta property="og:site_name"          content="Curiosity-Colored Glasses" />

<!-- This is the page's title/name -->
<meta property="og:title"              content="<?php echo ($page->title()); ?>" />