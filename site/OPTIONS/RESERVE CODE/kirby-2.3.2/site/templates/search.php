<?php snippet('internalheader') ?>




<form >

  <input type="search" placeholder="search" name="q" value="<?php echo esc($query) ?>">

  <button type="submit" value="Search">

    <img src= "<?php echo url('assets/images/magnifier.png') ?>" alt="SEARCH PAGE MAGNIFIER (in same location as menu magnifier: assets/images/magnifier.png) :)">

  </button>

</form>




<?php if($results != "" ): ?>


	<!-- TESTING; REMOVE THIS LINE IF BREAKS -->
	<?php foreach($results as $result): ?>

  		<?php snippet('result', array('result' => $result)) ?>


	<!-- TESTING; REMOVE THIS LINE IF BREAKS -->
  	<?php endforeach ?>	

<?php else: ?>

  <p>
    So sorry, I could not find that word!
  </p>

<?php endif ?>




<?php snippet('footer') ?>