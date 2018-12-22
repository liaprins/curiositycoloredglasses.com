<div id="searchdecoy" title="Search" class="yellowhover" style="display: none;">
	<img src="<?php echo url('assets/images/search.svg') ?>" alt="search" class="navsearchicon">
</div>

<!-- <form action="<?= $site->find('search')->url() ?>" id="navsearchform" style="display: none;"> -->
<!-- ORIGINAL! THIS ONE WORKS! vvv -->
<form action="<?= $site->find('search')->url() ?>" id="navsearchform">

<!-- vvv TRY TO GET THIS TO WORK USING FORUM ANSWER vvv -->
<!-- <form action="<?= search($pages->index(), '$query', 'title|text') ?>" id="navsearchform"> -->

  	<input type="text" placeholder="search" name="q" id="navsearchinput" class="s-textface underlineinput">

  	<button type="submit" value="search" title="Search" id="navsearchbutton" class="searchbutton yellowhover">
	    <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" class="navsearchicon">
  	</button>

</form>