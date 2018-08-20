
<!-- This file has contents only for blog posts. The content is dynamically pulled, to be specific to each post. -->

<!-- ********************************************* -->

<!-- (I think) these tags are how search engines like Google know what to put with the provided link, and how to find it when people search. -->

<!-- The kirby starter kit directs the description to come from here (content/site.txt) -->
<!-- <meta name="description" content="<?php echo $site->description()->html() ?>"> -->

<!-- Currently using the same sharing field as for Twitter: limits characters to 144 including my Twitter handle + tags -->
<!-- But if want more characters (limit is 155; search engine won't parse or display more), could build a field into panel to hold description -->
<meta name="description"        	   content="<?php echo ($page->share()); ?>" />

<!-- The kirby starter kit directs the keywords to come from here (content/site.txt) -->
<!-- <meta name="keywords" 				   content="<?php echo $site->keywords()->html() ?>"> -->

<!-- Currently using the same tag field as for the article content itself -->
<!-- DO NOT build a field into panel specially for these keywords: "In practice, this no longer has any noticeable effect on how search engines index your site." - HTML & CSS book -->
<!-- Also trying to include the same keywords for the site as a whole (copied manually) but not sure about syntax -->
<meta name="keywords" 				   content="<?php foreach($page->tags()->split(',') as $tag): ?><?php echo ($tag . ','); ?><?php endforeach ?><?php echo ('learning,curiosity,critical thinking,questions,education'); ?>" />

<!-- ********************************************* -->

<!-- The opengraph tags are how Facebook and Pinterest know what to name the parts within its own little link-creator. -->
<!-- The actual Facebook and Pinterest share buttons themselves are inside the blogarticle-share.php file. -->

<!-- Currently using the same sharing field as for Twitter (limits characters) -->
<!-- But if want more characters, could build a field into panel to hold description -->
<meta property="og:description"        content="<?php echo ($page->share()); ?>" />

<!-- Pinterest does not support images for articles (user chooses the image to pin) -->
<meta property="og:image"              content="<?php echo ($page->url()); ?>/<?php echo ($page->facebookshareimage()); ?>" />
<meta property="og:image:width"        content="<?php echo ($page->facebookshareimage()->width()); ?>" />
<meta property="og:image:height"       content="<?php echo ($page->facebookshareimage()->height()); ?>" />

<meta property="og:type"               content="article" />

<meta property="fb:app_id"             content="1816213758596939" />

<meta property="article:publisher"     content="Curiosity-Colored Glasses" />

<meta property="article:author"        content="Lia Prins" />

<!-- This will need some testing/specializing, once I have a non-localhost solution to test with -->
<!-- May not need any # or "HASHTAG-PLACEHOLDER" -->
<!-- Not sure what this is for, so removing it for now -->
<!--
<meta property="article:tag" 		   content="<?php foreach($page->tags()->split(',') as $tag): ?>%20<?php echo ('HASHTAG-PLACEHOLDER' . $tag); ?><?php endforeach ?>" />
-->