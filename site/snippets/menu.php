<nav role="navigation"> 

    <details id="navdetails" open>

        <summary id="navsummary">
        </summary>

        <!-- home glasses icon -->
        <a href="<?php echo url('blog') ?>">
            <img src="<?php echo url('assets/images/home.svg') ?>" alt="Curiosity-Colored Glasses" id="homeicon" class="yellowhover">   
        </a>

		<ul id="navlist">

	    <?php foreach($pages->visible() as $p): ?>

        <!-- The php string and class="active" is a holdover from Kirby blogprints.
        .active class can be used to style just the name of the page currently on
        (Doesn't apply to home, since I call it above with just an icon) -->
        <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>" >

        	<li id="menuword" class="navnothome sectionsummary yellowhover">

                <?php echo $p->title()->html() ?>

        	</li>

        </a>


    	<?php endforeach ?>

    		<!-- I added the searchbar snippet here, inside a list item, so it will be part of the menu list -->
    		<li id="navsearch" class="navnothome">
       			<?php snippet('searchbar') ?>
			</li>

		</ul>


    </details>

</nav>