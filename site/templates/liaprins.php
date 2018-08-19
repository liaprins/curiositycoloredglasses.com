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
        
        <title>Lia Prins</title>

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
        <meta property="og:title"              content="Lia Prins" />

        <!-- (I think) these tags are how search engines like Google know what to put with the provided link, and how to find it when people search. -->

        <!-- The kirby starter kit directs the description to come from here (content/site.txt) -->
        <!-- <meta name="description" content="<?php echo $site->description()->html() ?>"> -->

        <!-- Should test that this is directing properly -->
        <!-- If want more characters (limit is 155; search engine won't parse or display more), could build a field into panel to hold description -->
        <meta name="description"               content="I seek to inspire a curiosity and enable an understanding of the natural world. | I’m an information designer with an unflagging affection for science communication, learning, and, perhaps less predictably, antiquated office supplies. Hailing from the Pacific Northwest, I studied biology, art, and design at the University of Washington before moving to Austin a few years ago to collect on my sunlight debt." />

        <!-- The kirby starter kit directs the keywords to come from here (content/site.txt) -->
        <!-- <meta name="keywords"                 content="<?php echo $site->keywords()->html() ?>"> -->

        <!-- comma,separated,without,commas -->
        <meta name="keywords"                  content="design,ux,visual,research,curiosity,curious,science,communication,write,create,thinking,investigate,data,visualization,biology,thinking,investigate,migratory,birds,lift,flight,lunar" />

        <!-- Should test that this is directing properly -->
        <meta property="og:description"        content="I seek to inspire a curiosity and enable an understanding of the natural world. | I’m an information designer with an unflagging affection for science communication, learning, and, perhaps less predictably, antiquated office supplies. Hailing from the Pacific Northwest, I studied biology, art, and design at the University of Washington before moving to Austin a few years ago to collect on my sunlight debt." />

        <meta property="og:image"              content="<?php echo url('content/liaprins/lia.jpg') ?>" />

        <meta property="og:type"               content="website" />




    </head>

	<body>

    <div id="bodysub">
        

<!-- LEAVE ALONE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

		<details>

			<summary id="aboutsummary">

                <!-- <img src="assets/images/+x.svg" alt="About" id="abouttoggle"> -->
                <div id="abouttoggle">
                </div>

				<h1>
                    <?php echo $page->title()->html() ?>
                </h1>

                <h2>
                    <?php echo $page->tagline()->html() ?>
                </h2>

			</summary>

            <!-- 
            <?php if($mypic = $page->photo()->toFile()): ?>
                <img src="<?= $mypic->url() ?>" alt="The author and designer in Oia, Santorini, Greece" id="mobilepic">
            <?php endif; ?>
            -->

            <div id="photogroup">

                <div id="mobilepic">
                </div>
                
                <a href="mailto:&#108;&#105;&#097;&#106;&#112;&#114;&#105;&#110;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" id="email">
                    &#108;&#105;&#097;&#106;&#112;&#114;&#105;&#110;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                </a>

                <span class="contactpipe" id="firstcontactpipe">|</span>

                <a href="https://www.instagram.com/liaprins/" target="blank">
                    <img src="assets/images/Instagram.svg" alt="Instagram" id="instagram"><span id="instagram-text"></span>
                </a>

                <span class="contactpipe">|</span>

                <!-- <a href="assets/images/liaprins_resume.pdf" target="blank" id="resume"> -->
                <a href="content/liaprins/liaprins_resume.pdf" target="blank" id="resume">
                    R&eacutesum&eacute;
                </a>

            </div>

			<span id="abouttext">
                <span id="aboutoverview"><?php echo $page->aboutoverview()->kirbytext() ?></span>
        		<span id="aboutcurrent"><?php echo $page->aboutcurrent()->kirbytext() ?></span>
                <span id="aboutpassion"><?php echo $page->aboutpassion()->kirbytext() ?></span>
        	</span>
            
            <!--
            <hr id="gridseparator" class="biogridseparator">
            -->

		</details>
        
        <div>

		<?php foreach ($page->children()
        		            ->visible() as $project): ?>

            <?php snippet('project-list', array('project' => $project)) ?>

        <?php endforeach ?>

		</div>

        <div id="bottomspacer">
        </div>


<!-- LEAVE ALONE vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->	

    </div>    <!-- closing id="bodysub" -->


	</body>
</html>


























