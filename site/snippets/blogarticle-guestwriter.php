
<!-- If there is a guest writer -->
<?php if(!$page->guestwriter()->empty()): ?>
	<span class="guestpostbanner xxs-display">Guest post</span>

	<!-- If there is a LINK for the guest writer -->
	<?php if(!$page->guestwriterlink()->empty()): ?>
		<span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display"><a href="<?php echo html($page->guestwriterlink()) ?>" target="_blank" class="yellowhover">&nbsp<?php echo kirbytext($page->guestwriter()) ?>
			</a>
		</span>
	<?php endif ?>

	<!-- If there is NOT a LINK for the guest writer -->
	<?php if($page->guestwriterlink()->empty()): ?>
		<span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display">&nbsp<?php echo kirbytext($page->guestwriter()) ?>
		</span>
	<?php endif ?>
<?php endif ?>

<!-- "Lia Prins" to show up as default author unless a guest writer is applied in panel -->
<?php if($page->guestwriter()->empty()): ?>
	<span id="writtenby" class="xs-textface bold">by</span><span class="writer s-display"><a href="https://liaprins.com" target="_blank" class="yellowhover">&nbspLia Prins
		</a>
	</span>
<?php endif ?>