<!-- link to home page -->    
<a href="<?php echo url('blog') ?>" id="homebutton">
    
    <img src="<?php echo url('assets/images/home.svg') ?>" alt="Curiosity-Colored Glasses" id="homeicon" class="yellowhover">
    
    <!-- IN CSS, THIS NEEDS TO BE MADE INTO AN INLINE ELEMENT, SO IT APPEARS ON SAME LINE AS GLASSES -->
    <!-- COMMENTING THIS OUT BECAUSE I JUST WANT THE ICON AS LINK TO HOME -->
    <!-- 
    <?php echo $site->title()->html() ?>
	-->
    
</a>


 <?php snippet('menu') ?>