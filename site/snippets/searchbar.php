<form action="<?= $site->find('search')->url() ?>">

  	<input type="text" placeholder="search" name="q" id="navsearchinput" class="s-textface underlineinput">

  	<button type="submit" value="search" id="navsearchbutton" class="searchbutton yellowhover">
	    <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" id="navsearchicon">
  	</button>

</form>