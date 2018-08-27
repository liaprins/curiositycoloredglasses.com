
<!-- This file has contents for all pages except blog posts: Home (Blog), About, Archive, Library, search, tag results, error -->
<!-- The content is dynamically pulled, to be specific to page. -->

<!-- ********************************************* -->

<!-- (I think) these tags are how search engines like Google know what to put with the provided link, and how to find it when people search. -->

<!-- The kirby starter kit directs the description to come from here (content/site.txt) -->
<!-- <meta name="description" content="<?php echo $site->description()->html() ?>"> -->

<!-- For now using the site tagline from the blog page's field in panel, same as for og:description, below -->
<!-- Or could pull each page's bit of text (more for About) to be specific to page, with "<?php echo ($page->text()); ?>" -->
<!-- Should test that this is directing properly -->
<!-- If want more characters (limit is 155; search engine won't parse or display more), could build a field into panel to hold description -->
<!-- <meta name="description"        	   content="<?php echo $site->find('blog')->text()->html() ?>" /> -->
<meta name="description" 				content="<?php echo $site->description()->html() ?>">


<!-- The kirby starter kit directs the keywords to come from here (content/site.txt) -->
<meta name="keywords" 				   content="<?php echo $site->keywords()->html() ?>">

<!-- comma,separated,without,commas -->
<!-- <meta name="keywords" 				   content="learning,curiosity,critical thinking,questions,education,investigation,facts,science,nature,illustration" /> -->

<!-- ********************************************* -->

<!-- For now using the site tagline from the blog page's field in panel, same as for meta name description, above -->
<!-- Or could pull each page's bit of text (more for About) to be specific to page, with "<?php echo ($page->text()); ?>" -->
<!-- Should test that this is directing properly -->
<meta property="og:description"        content="<?php echo $site->find('blog')->text()->html() ?>" />

<!-- For now using a single image stored in assets/images to represent all pages -->
<meta property="og:image"              content="<?php echo ($page->url()); ?>/<?php echo ($page->aboutimage()); ?>" />
<!--
<meta property="og:image:width"        content="<?php echo ($page->facebookshareimage()->width()); ?>" />
<meta property="og:image:height"       content="<?php echo ($page->facebookshareimage()->height()); ?>" />
-->

<meta property="og:type"               content="website" />

<meta property="fb:app_id"             content="1816213758596939" />