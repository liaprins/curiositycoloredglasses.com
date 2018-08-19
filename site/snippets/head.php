<!DOCTYPE html>
<html>
	<head>

		<!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124233327-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-124233327-1');
        </script>

		<meta charset="UTF-8">

		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		
		<!--
		<title>Lia Prins</title>
		-->

		
		<?php if($page->title()->exists()): ?>
            <title><?php echo $page->title() ?> | Lia Prins </title>
        <?php endif ?>
    	

		<?php echo css('assets/css/reset.css') ?>
		<?php echo css('assets/css/fonts.css') ?>
		<?php echo css('assets/css/text-w-mediaqueries.css') ?>
 		<?php echo css('assets/css/styles.css') ?> 
		<?php echo css('assets/css/mediaqueries.css') ?>

		<!-- Favicon, generated via realfavicongenerator.net -->
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
		

		<!-- The opengraph tags are how Facebook and Pinterest know what to name the parts within its own little link-creator. -->
		<!-- The actual Facebook and Pinterest share buttons themselves are inside the blogarticle-5a-share.php file. -->


		<!-- The url of the current page -->
		<meta property="og:url"                content="<?php echo rawurlencode($page->url()); ?>" /> 

		<!-- This one was found on Pinterest, may not be supported by Facebook -->
		<meta property="og:site_name"          content="Lia Prins" />

		<!-- This is the page's title/name -->
		<meta property="og:title"              content="<?php echo ($page->title()); ?>" />

		<!-- (I think) these tags are how search engines like Google know what to put with the provided link, and how to find it when people search. -->

		<!-- The kirby starter kit directs the description to come from here (content/site.txt) -->
		<!-- <meta name="description" content="<?php echo $site->description()->html() ?>"> -->

		<!-- Should test that this is directing properly -->
		<!-- If want more characters (limit is 155; search engine won't parse or display more), could build a field into panel to hold description -->
		<meta name="description"        	   content="<?php echo ($page->intro()); ?>" />

		<!-- The kirby starter kit directs the keywords to come from here (content/site.txt) -->
		<!-- <meta name="keywords" 				   content="<?php echo $site->keywords()->html() ?>"> -->

		<!-- comma,separated,without,commas -->
		<!-- now, these match the keywords for the home page; consider building in a field in the panel per project and redirecting this tag to pick them up from there -->
		<meta name="keywords"                  content="design,ux,visual,research,curiosity,curious,science,communication,write,create,thinking,investigate,data,visualization,biology,thinking,investigate,migratory,birds,lift,flight,lunar" />

		<!-- Should test that this is directing properly -->
		<meta property="og:description"        content="<?php echo ($page->intro()); ?>" />

		<!-- For now using a single image stored in assets/images to represent all pages -->
		<meta property="og:image"              content="<?php echo url('content/liaprins/lia.jpg') ?>" />

		<meta property="og:type"               content="website" />


	</head>


























