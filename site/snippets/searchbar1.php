<!-- <form id="navsearchform" action="<?= $site->find('search')->url() ?>"> -->

<form id="navsearchform">

  	<!-- <button type="submit" value="search" class="searchbutton yellowhover" id="navsearchbutton"> -->
  	<button type="button" value="search" class="navsearchbuttonclass searchbutton yellowhover">
	    <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" id="navsearchicon">
  	</button>

  	<!-- <input type="text" placeholder="search" name="q" class="navsearchinputclass s-textface underlineinput" id="navsearchinput"> -->
  	<input type="text" placeholder="search" name="q" class="navsearchinputclass s-textface underlineinput">

</form>