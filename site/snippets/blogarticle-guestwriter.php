<?php if(!$page->guestwriter()->empty()): ?>

	<span class="guestwriter s-display">
	
		<span class="guestwriterbanner xxs-display">guest writer</span>
	
		<?php echo kirbytext($page->guestwriter()) ?>

	</span>

<?php endif ?>