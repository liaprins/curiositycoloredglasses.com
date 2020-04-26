<div id="searchdecoy" title="Search" class="yellowhover" style="display: none;">
	<img src="<?php echo url('assets/images/search.svg') ?>" alt="search" class="navsearchicon">
</div>

<!-- <form action="<?= $site->find('search')->url() ?>" id="navsearchform" style="display: none;"> -->
<!-- <form action="<?= $site->find('search')->url() ?>" id="navsearchform"> -->
<form action="<?= $site->index()->visible()->not('comment')->search('q'); ?>" id="navsearchform">

  	<input type="text" placeholder="search" name="q" id="navsearchinput" class="s-textface underlineinput">

  	<button type="submit" value="search" title="Search" id="navsearchbutton" class="searchbutton yellowhover">
	    <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" class="navsearchicon">
  	</button>

</form>