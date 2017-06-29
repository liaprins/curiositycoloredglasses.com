<!-- This snippet lives within the header.php snippet, inside the <head> tags. -->
<!-- This is how Facebook knows what to name the parts within its own little link-creator. -->
<!-- The actual Facebook share button itself is inside the blogarticle-5a-share.php file. -->

<!-- The url of the current page -->
<meta property="og:url"                content="<?php echo rawurlencode($page->url()); ?>" /> 

<!-- This one was found on Pinterest, may not be supported by Facebook -->
<meta property="og:site_name"          content="Curiosity-Colored Glasses" />

<!-- This is the blog post title: [ $page->title() ] or "About 'CCG', 'CCG Archive, etc -->
<!-- May need to reconfigure how/where this snippet (or others) goes; may need multiple -->
<!-- Or, could build fields into panel for About, Archive, Library, search, tag, etc to hold name -->
<meta property="og:title"              content="<?php echo ($page->title()); ?>" />

<!-- Could build fields into panel for blog posts, About, Archive, Library, search, tag, etc to hold description -->
<!-- Or could use the same sharing field as for Twitter -->
<meta property="og:description"        content="<?php echo ($page->share()); ?>" />

<!-- May need to reconfigure how/where this snippet (or others) goes; may need multiple -->
<!-- Could build fields into panel for blog posts, About, Archive, Library, search, tag, etc to hold description -->
<!-- This will need some specializing, once I have a non-localhost solution to test with -->
<!-- According to Pinterest, can add up to 6 "og:image" tags -->
<meta property="og:image"              content="<?php echo ($page->postglasses()); ?>" />

<!-- Ideally this is "article" for all pages except home page, which is "website" -->
<!-- May need to reconfigure how/where this snippet (or others) goes; may need multiple -->
<!-- For "article" setting may be able to set sub-settings, e.g. article:author: -->
<meta property="og:type"               content="article" />

<!-- This one was found on Pinterest, but also should be supported by Facebook -->
<meta property="article:author"        content="Lia Prins" />

<!-- This one was found on Pinterest, may not be supported by Facebook -->
<!-- This will need some specializing, once I have a non-localhost solution to test with -->
<!-- May not need any # or "HASHTAG-PLACEHOLDER" -->
<meta property="article:tag" 		   content="<?php foreach($page->tags()->split(',') as $tag): ?>%20<?php echo ('HASHTAG-PLACEHOLDER' . $tag); ?><?php endforeach ?>" />