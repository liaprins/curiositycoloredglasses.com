<!-- !!!!!!!!!! 06 FEB 2017 THIS vvv IS ONLY HERE TO EXPERIMENT WITH ANIMATING THE SEARCH BAR !!!!!!!!!! -->


<!-- INTEGRATE HTML CODE HERE, FROM SCREENSHOT OF W3SCHOOLS TRYIT EDITOR (IN G-DRIVE TO DO LIST) -->

<form action="<?= $site->find('search')->url() ?>" id="navsearchform">

  	<input type="text" placeholder="search" name="q" size="25" class="xs-textface" id="navsearchinput">

  	<button type="submit" value="search" id="navsearchbutton" class="searchbutton yellowhover">
	        <!-- TEMPORARILY COMMENTING OUT FOR EXPERIMENT -->
	        
	        <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" id="navsearchicon">
  			
  	</button>

</form>