<!-- THIS "FORM" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
<form action="<?= $site->find('search')->url() ?>">

  	<!-- THIS "INPUT" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
	SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
  	<input type="text" placeholder="search" name="q" id="navsearchinput" class="s-textface underlineinput">

  	<!-- THIS "BUTTON" HTML ELEMENT WAS ALREADY HERE WITH THE DEFAULT KIRBY SETUP, 
	SO I'M LEAVING IT FOR NOW SO THE DEFAULT CSS WORKS -->
  	<button type="submit" value="search" id="navsearchbutton" class="searchbutton yellowhover">
	    <img src="<?php echo url('assets/images/search.svg') ?>" alt="search" id="navsearchicon">
  	</button>

</form>