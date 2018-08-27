<?php if(!$page->process()->empty()): ?>

    <details class="postsectiondetails" open>

    	<summary class="sectionsummary postpagesectionsummary blackbg"><h3>The Method to My Madness
    		</h3>
   		</summary>

	    <?php echo kirbytext($page->process()) ?>

	</details>

<?php endif ?>