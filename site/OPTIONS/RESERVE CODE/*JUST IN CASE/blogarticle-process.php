<?php if(!$page->process()->empty()): ?>

    <!-- NOT SURE IF THIS WILL STAY AS <h2> -->
    <details open>

    	<summary class="sectionsummary blackbg"><h3>The Method to My Madness
    		</h3>
   		</summary>

        
	    <?php echo kirbytext($page->process()) ?>

	</details>

<?php endif ?>