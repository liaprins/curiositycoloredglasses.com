<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-hello') ?>


<?php snippet('head-close') ?>

    <!-- reveal content script -->
    <script src="assets/js/qq.js">
    </script>


	<!-- holds the loading animation; all pages get it except default.php template, 
	because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
	it cannot load by definition, and the animation never stops! -->
	<div id="loadbg" style="width:100%; height:100%; position:fixed; z-index:9999; background:url("../images/loader.gif") no-repeat center center rgba(226,228,58,0.75)    }"></div>


	<!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <div id="everythingexceptnav">

		<main>

			<div class="desktopcontent">

				<!-- title of the page -->
				<h2 class="extracontentpagetitle">
					<?php echo $page->title()->kirbytext() ?>
				</h2>

			</div>


			<div id="aboutdesktopcontent">

				<!-- intro text for QQ page -->
				<!-- FOR SOME REASON <p> ISN'T APPLYING THE CLASS, BUT <span> DOES -->
				<span id="abouttext" class="l-textface">
					<?php echo $page->text()->kirbytext() ?>
				</span>

			</div>

	        <!-- images + info stored in library folder directly (not library/libraryimages) -->
    	    <!-- info here is from metadata, info on blog article pages is from blogarticle.txt fields + custom CSS -->
        	<div id="qqparent" data-test="yoohoo">

	        	<?php foreach ($page->images()->sortBy('sort', 'asc') as $qqfile): ?>
	    	    
		        <?php $qqsubpage = $qqfile->name(); ?>

    	    	<span class="qqpiece">

	                <div data-id="<?php echo $qqfile->name() ?>" class="qqglassescontainer <?php if ($qqfile->category() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->category() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>">
						<div class="stem shortstem leftstem"></div><div class="circle leftcircle" style="background-image: url(<?php echo $qqfile->url() ?>)" data-clickable="yes"></div><div class="stem centerstem"></div><div class="circle rightcircle" style="background-image: url(<?php echo $qqfile->url() ?>)" data-clickable="yes"></div><div class="stem shortstem rightstem"></div>		
					</div>

					<div class="qqcontents" style="display: none;">
						<img src= "<?php echo url('assets/images/x.svg') ?>" alt="close" id="qq-x" class="yellowhover close-x">
						<div class="qqquestion"><?php echo $qqfile->question() ?></div>
						<div class="qqdescription"><?php echo $qqfile->explanation() ?></div>
					</div>

				</span>

    		    <?php endforeach ?>

    		</div>    <!-- close .qqparent -->

		</main>

	<?php snippet('footer-sitewide') ?>





























