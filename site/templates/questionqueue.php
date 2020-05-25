<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-hello') ?>

 	<!-- Calls the stylesheet that zeroes out the default browser renderings -->
 	<?php echo css('assets/css/reset.css') ?>

 	<!-- Calls the stylesheet that hold the designs -->
 	<!-- Will combine these into one style sheet by copying and pasting the contents together, once 100% finished, for performance reasons -->
 	<?php echo css('assets/css/fonts.css') ?>
 	<?php echo css('assets/css/qqnavfooter.css') ?>

 	<?php echo css('assets/css/somepages.css') ?>
 	<?php echo css('assets/css/qq.css') ?>
 	<?php echo css('assets/css/text.css') ?>
 	<?php echo css('assets/css/menu-hamburger.css') ?>

 	<!-- Media queries -->
 	<?php echo css('assets/css/mediaqueries.css') ?>
 	<?php echo css('assets/css/qqmediaqueries-override.css') ?>
 	<?php echo css('assets/css/qq-position-override.css') ?>


</head>

<!-- Adding opening body tag here, since all templates call this head-close.php snippet -->
<body>

    <!-- positions glasses -->
    <script src="assets/js/qq-position.js">
    </script>

    <!-- parallax scroll -->
    <script src="assets/js/qq-parallax.js">
    </script>

    <!-- reveals question + content upon click -->
    <script src="assets/js/qq.js">
    </script>


<!-- *************************************** ^^^^^ LEAVE ALONE ^^^^^ *************************************** -->

			<!-- title of the page -->
			<h2 id="qqpagetitle">
				<?php echo $page->name()->kirbytext() ?>
			</h2>

			<span id="qqpagetext" class="l-textface">
				<?php echo $page->text()->kirbytext() ?>
			</span>

        	<div id="qqparent">

	        	<?php foreach ($page->children()->visible()->sortBy('sort', 'asc') as $qqfile): ?>

		        <?php $qqsubpage = $qqfile->name(); ?>

		        <!-- Setting up the margin-width randomizer for binoculars' relative positions -->
                <?php $margins = array('0rem', '0.5rem', '1rem', '1.5rem', '2rem', '2.5rem'); ?>
                <?php $rand_margin = $margins[array_rand($margins)]; ?>
    	    	<span class="qqpiece" style="margin-left: <?= $rand_margin ?>; margin-top: <?= $rand_margin ?>">

					<div data-clickable="yes" data-id="<?php echo $qqfile->title() ?>" class="qqglassescontainer <?php if ($qqfile->binocsize() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->binocsize() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->binocsize() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>">
    			    	<?php if($leftbinoclens = $qqfile->binocimageleft()->toFile()): ?>
                            <div data-innards-clickable="yes" class="lens l-lens" style="background-image: url(<?php echo $leftbinoclens->url() ?>)"></div>
                        <?php endif; ?>
    			    	<div data-innards-clickable="yes" class="knob"></div>
	    		    	<div data-innards-clickable="yes" class="<?php if ($qqfile->binocsize() == 'large'): ?>trapezoid-large<?php endif ?><?php if ($qqfile->binocsize() == 'medium'): ?>trapezoid-medium<?php endif ?><?php if ($qqfile->binocsize() == 'small'): ?>trapezoid-small<?php endif ?>"></div>
    		    		<?php if($rightbinoclens = $qqfile->binocimageright()->toFile()): ?>
                            <div data-innards-clickable="yes" class="lens r-lens" style="background-image: url(<?php echo $rightbinoclens->url() ?>)"></div>
                        <?php endif; ?>
    		    	</div>

					<div class="qqcontents <?php if ($qqfile->binocsize() == 'large'): ?>qqcontents-large<?php endif ?><?php if ($qqfile->binocsize() == 'medium'): ?>qqcontents-medium<?php endif ?><?php if ($qqfile->binocsize() == 'small'): ?>qqcontents-small<?php endif ?>" style="display: none;" data-edgemargin="">
						<div class="sharkfin"></div>
						<div class="bordercover"></div>
						<img src= "<?php echo url('assets/images/x.svg') ?>" alt="close" id="qq-x" class="yellowhover close-x">
						<div class="qqquestion s-display"><?php echo $qqfile->question()->kirbytext() ?></div>
						<div class="qqdescription s-textface"><?php echo $qqfile->explanation()->kirbytext() ?></div>
					</div>

				</span>

    		    <?php endforeach ?>

    		</div>    <!-- close .qqparent -->

    <div id="background"></div>

	<?php snippet('footer-sitewide') ?>


<!-- *************************************** vvvvv footer.php snippet vvvvv LEAVE ALONE vvvvv *************************************** -->


</body>

</html>
