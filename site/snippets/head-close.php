
 	<!-- calls the stylesheet that zeroes out the default browser renderings -->
 	<?php echo css('assets/css/reset.css') ?>

 	<!-- calls the stylesheet that hold the designs -->
 	<!-- will combine these into one style sheet by copying and pasting the contents together, once 100% finished, for performance reasons -->
 	
 	<?php echo css('assets/css/fonts.css') ?>
 	<?php echo css('assets/css/globalnavfooter.css') ?> 
 	<?php echo css('assets/css/somepages.css') ?>
 	<?php echo css('assets/css/text.css') ?>


 	<!-- When I get to media queries, this should be the default -->
 	<?php echo css('assets/css/menu-hamburger.css') ?>

 	<!-- When I get to media queries, this should override menu-hamburger.css at the minimum width for desktop.
 	It should NOT replace; menu-hamburger.css should NOT be commented out when this is enabled!
 	and to make this show, the <details> tag in menu.php snippet needs the open attribute added (until I have JS solution):
 	<details open id="navdetails"> -->
 	<!-- <?php echo css('assets/css/menu-desktop-cascade.css') ?> -->


 	<!-- Testing icon sizes set with rems -->
 	<?php echo css('assets/css/icon-sizing.css') ?>


 	<!-- Media queries -->
 	<?php echo css('assets/css/mediaqueries.css') ?>
 	<?php echo css('assets/css/text-mediaqueries.css') ?>



 	<!-- Pulling in the desktop menu styles as a media query on the file so it's esier to edit on its own -->
 	<!--
 	<link rel="stylesheet" href="assets/css/menu-desktop-cascade.css" media="only screen and (min-width: 1175px)">
	-->
	<!-- <link rel="stylesheet" href="assets/css/menu-desktop.css" media="only screen and (min-width: 1175px)"> -->



</head>

<!-- adding opening body tag here, since all templates call this head-close.php snippet -->
<body>


