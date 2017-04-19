<!-- trying three different ways to surface Thank You image + metadata -->
<!-- option 2: via markdown in each blogarticle.txt  -->
<!-- this works for image only, no metadata (field needs to be put back into markdown) -->
<?php if(!$page->thankyou2()->empty()): ?>
    
    <details class="postsectiondetails" open>

    	<summary class="sectionsummary blackbg"><h3>Thank You!
    		</h3>
   		</summary>


    <!-- calling the ThankYou field from the blogarticle.txt  -->
    <?php echo kirbytext($page->thankyou()) ?>

	</details>


<?php endif ?>