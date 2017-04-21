<!-- NOT SURE THAT THIS WILL STAY AS <p> -->
<div id="posttext" class="m-textface hyphenation">



	<!-- TESTING LINE LENGTH TO DETERMINE BREAKPOINTS FOR MEDIA QUERIES -->
	<?php snippet('linelengthtest') ?>
	


	<?php echo kirbytext($page->text()) ?>

    <!-- Adding an en-space to go between text and tiny glasses -->
    <!-- <span>&ensp;</span> -->

    <!-- Tiny article end glasses -->
    <img src="<?php echo url('assets/images/home.svg') ?>" alt="" id="articleendglasses">






    <details>

    	<summary>Vocabulario</summary>

    </details>







</div>