<?php snippet('head-open') ?>


<?php snippet('head-title-all-but-home') ?>


<?php snippet('share-settings-common') ?>


<?php snippet('share-settings-hello') ?>

 	<!-- Calls the stylesheet that zeroes out the default browser renderings -->
 	<?php echo css('assets/css/reset.css') ?>

 	<!-- Calls the stylesheet that hold the designs -->
 	<!-- Will combine these into one style sheet by copying and pasting the contents together, once 100% finished, for performance reasons -->
 	<?php echo css('assets/css/fonts.css') ?>
 	<!-- WHEN globalnavfooter IS ON, NO PARALLAX; WHEN OFF, YES PARALLAX BUT GLASSES ICONS FALL APART -->
 	<!-- <?php echo css('assets/css/globalnavfooter.css') ?> -->
 	<?php echo css('assets/css/qqnavfooter.css') ?>

 	<?php echo css('assets/css/somepages.css') ?>
 	<?php echo css('assets/css/text.css') ?>
 	<?php echo css('assets/css/menu-hamburger.css') ?>

 	<!-- POSITIONS THE GLASSES ICONS FOR THE TIME BEING -->
 	<!-- <?php echo css('assets/css/postglasses.css') ?> -->

 	<!-- Media queries -->
 	<?php echo css('assets/css/mediaqueries.css') ?>


</head>

<!-- Adding opening body tag here, since all templates call this head-close.php snippet -->
<body>
    <!-- reveal content script -->
    <script src="assets/js/qq.js">
    </script>

    <!-- positions glasses -->
    <script src="assets/js/qq-position.js">
    </script>

    <!-- parallax scroll -->
    <script src="assets/js/qq-parallax.js">
    </script>


	<!-- holds the loading animation; all pages get it except default.php template, 
	because it holds the 404 page, and when a non-existant page is requested (and 404 page shows), 
	it cannot load by definition, and the animation never stops! -->
	<div id="loadbg" style="width:100%; height:100%; position:fixed; z-index:9999; background:url("../images/loader.gif") no-repeat center center rgba(226,228,58,0.75)    }"></div>


	<!-- This encompasses everything within <body> except for <nav>
    This is so that there is an element that can be clicked on that will be anything except <nav>,
    that will be recognized in JS menu.js script, that can have an event listener applied when it is clicked on, that will close the <nav> -->
    <!-- <div id="everythingexceptnav"> -->

		<!-- <main id="qqmain"> -->

			<!-- <div class="desktopcontent"> -->

				<!-- title of the page -->
				<h2 class="extracontentpagetitle">
					<?php echo $page->title()->kirbytext() ?>
				</h2>

			<!-- </div> -->

			<!-- <div id="aboutdesktopcontent"> -->

				<!-- intro text for QQ page -->
				<!-- FOR SOME REASON <p> ISN'T APPLYING THE CLASS, BUT <span> DOES -->
				<span id="abouttext" class="l-textface">
					<?php echo $page->text()->kirbytext() ?>
				</span>


				<span id="qqtesting">hello, there</span>

			<!-- </div> -->

	        <!-- images + info stored in qq folder directly -->
    	    <!-- info here is from metadata -->
        	<div id="qqparent" data-test="yoohoo">

	        	<?php foreach ($page->images()->sortBy('sort', 'asc') as $qqfile): ?>
	    	    
		        <?php $qqsubpage = $qqfile->name(); ?>

    	    	<span class="qqpiece">

    	    		<!-- ORIGINAL GLASSES SHAPES BUILT WITH CSS -->
    	    		<!--
	                <div data-id="<?php echo $qqfile->name() ?>" id="<?php echo $qqfile->name() ?>" class="qqglassescontainer <?php if ($qqfile->category() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->category() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>">
						<div class="stem shortstem leftstem"></div><div class="circle leftcircle" style="background-image: url(<?php echo $qqfile->url() ?>)" data-clickable="yes"></div><div class="stem centerstem"></div><div class="circle rightcircle" style="background-image: url(<?php echo $qqfile->url() ?>)" data-clickable="yes"></div><div class="stem shortstem rightstem"></div>		
					</div>
					-->

					<!-- MASK METHOD -->
					<!-- <img src="assets/images/binoculars.svg" data-id="<?php echo $qqfile->name() ?>" id="<?php echo $qqfile->name() ?>" class="qqglassescontainer <?php if ($qqfile->category() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->category() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>" style="background-image: url(<?php echo $qqfile->url() ?>)" data-clickable="yes"> -->


					<!-- SHOWN BINOCULARS + BACKGROUNDS -->
					<!-- <div data-clickable="yes" data-id="<?php echo $qqfile->name() ?>" id="<?php echo $qqfile->name() ?>" class="qqglassescontainer <?php if ($qqfile->category() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->category() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>"> -->
					<div data-clickable="yes" data-id="<?php echo $qqfile->name() ?>" class="qqglassescontainer <?php if ($qqfile->category() == 'large'): ?>largeqqglasses<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>mediumqqglasses<?php endif ?><?php if ($qqfile->category() == 'small'): ?>smallqqglasses<?php endif ?>" title="<?php echo $qqfile->question() ?>" alt="<?php echo $qqfile->question() ?>">
    			    	<div data-innards-clickable="yes" class="lens l-lens" style="background-image: url(<?php echo $qqfile->url() ?>)"></div>
    			    	<div data-innards-clickable="yes" class="knob"></div>
	    		    	<div data-innards-clickable="yes" class="<?php if ($qqfile->category() == 'large'): ?>trapezoid-large<?php endif ?><?php if ($qqfile->category() == 'medium'): ?>trapezoid-medium<?php endif ?><?php if ($qqfile->category() == 'small'): ?>trapezoid-small<?php endif ?>"></div>
    		    		<div data-innards-clickable="yes" class="lens r-lens" style="background-image: url(<?php echo $qqfile->url() ?>)"></div>
    		    	</div>

					<!-- HIDDEN CONTENT -->
					<div class="qqcontents" style="display: none;">
						<img src= "<?php echo url('assets/images/x.svg') ?>" alt="close" id="qq-x" class="yellowhover close-x">
						<div class="qqquestion"><?php echo $qqfile->question() ?></div>
						<div class="qqdescription"><?php echo $qqfile->explanation() ?></div>
					</div>

				</span>

    		    <?php endforeach ?>

    		</div>    <!-- close .qqparent -->

		<!-- </main> -->

	<!-- <?php snippet('f o o t e r-sitewide') ?> -->


		<!-- *************************************** vvvvv footer.php snippet vvvvv LEAVE ALONE vvvvv *************************************** -->


	<footer id="footer" role="contentinfo">

		<div id="footercontent">

			
			<!-- Subscribe, via MailChimp -->
			<form action="//curiositycoloredglasses.us14.list-manage.com/subscribe/post?u=05f8f85154975a52907f2ce4d&amp;id=086ebe8644" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>


				<!-- For some reason, this needs to stay for the validation and ability to submit email -->
				<span class="mc-field-group">
	
					<input type="email" value="" name="EMAIL" class="boxinput s-textface" id="mce-EMAIL" placeholder="Email address">

				</span>

	
				<!-- NOT SURE WHY THIS IS NEEDED, BUT PROBABLY KEEP EVERYTHING INSIDE THIS TAG SO IT FUNCTIONS PROPERLY! -->		
			    <span style="position: absolute; left: -5000px;" aria-hidden="true">
			    	<input type="text" name="b_05f8f85154975a52907f2ce4d_086ebe8644" tabindex="-1" value="">
			    </span>


				<!-- "Subscribe" button -->
			    <input type="submit" value="Subscribe" name="subscribe" class="xs-display boxbutton subscribebutton" id="mc-embedded-subscribe">
	

			</form>


			<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
			<!-- HONEYPOT VALIDATION? ^^^ PROBABLY KEEP EVERYTHING INSIDE THIS TAG SO IT FUNCTIONS PROPERLY! -->
			<!-- 
			<span id="mce-responses" class="clear">

				<span class="response" id="mce-error-response" style="display:none">
				</span>
		
				<span class="response" id="mce-success-response" style="display:none">
				Thank you!
				</span>
	
			</span> -->   <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
   

			<p class="xs-textface" id="subscribemessage">
				I’ll only ever email to let you know about new posts!
				<!--
				<a href="http://us14.campaign-archive2.com/home/?u=05f8f85154975a52907f2ce4d&id=086ebe8644" title="View previous campaigns" target="_blank">
					See an example email first.
				</a>
				-->
			</p>


			<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
			</script>

			<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
			</script>

			<!--End mc_embed_signup-->


			<!-- Link to my instagram profile + Twitter + portfolio -->
			<span id="follow">

				<!-- Link to my instagram page -->
				<a href="https://www.instagram.com/curiositycoloredglasses/" title="Follow on Instagram" target="_blank"> 
					<img src= "icons/Instagram.svg" alt="Follow me on Instagram" class="followicon socialicon">
				</a>


				<!-- Link to @CuriosityColor twitter page -->
				<a href="https://twitter.com/CuriosityColor" title="Follow on Twitter" target="_blank"> 
					<img src= "icons/Twitter.svg" alt="Follow me on Twitter" class="followicon socialicon">
				</a>


				<!-- Link to my portfolio website -->
				<a href="http://liaprins.com/" target="_blank" id="portfolio" class="m-textface bold"> 
					liaprins.com
				</a>

			</span>

		</div>  <!-- closing #footercontent -->

	</footer>

	<!-- loading animation script -->
	<!-- may need to move to right before footer is called -->
	<!--
	<script src="js/loader.js">
	</script>
	-->

<!-- </div> -->    <!-- closing #everythingexceptnav-->





</body>

</html>






























