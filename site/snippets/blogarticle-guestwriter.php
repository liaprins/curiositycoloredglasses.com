<?php if(!$page->guestwriter()->empty()): ?>

	<span class="guestwriter s-display">
	
		<span class="guestwriterbanner xxs-display">guest writer</span>
	
		<?php echo kirbytext($page->guestwriter()) ?>

	</span>

	<!-- FOR TESTING ONLY -->
	<div id="testinsideguestwriter">
		YOHOHO AND A BOTTLE OF CRUMBS
	</div>


<?php endif ?>