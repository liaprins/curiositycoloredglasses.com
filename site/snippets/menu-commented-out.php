<!--

<nav role="navigation"> 

    <details id="navdetails" open>

        <summary id="navsummary">
        </summary>
-->

        <!-- Home glasses icon -->
<!--
        <a href="<?php echo url('blog') ?>" title="Curiosity-Colored Glasses">
            <img src="<?php echo url('assets/images/home.svg') ?>" alt="Curiosity-Colored Glasses" id="homeicon" class="yellowhover">   
        </a>

		<ul id="navlist">

    	    <?php foreach($pages->visible() as $p): ?>
-->

            <!-- The .active class can be used to style just the name of the page currently on
            (Doesn't apply to home, since I call it above with just an icon) -->
<!--
            <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>" class="menuwordlink">

                <li id="menuword" class="navnothome m-display yellowhover">
                
                    <span <?php e($p->isOpen(), ' class="active2"') ?> href="<?php echo $p->url() ?>" >

                    <?php echo $p->title()->html() ?></span></li>

            </a>

            <?php endforeach ?>
-->

    		<!-- I added the searchbar snippet here, inside a list item, so it will be part of the menu list -->
<!--
    		<li id="navsearch" class="navnothome">
-->              

                <!-- THIS NEEDS TO HAVE 'search' SNIPPET ADDED BELOW vvv , WHEN UN-COMMENTING EVERYTHING!!!!! -->
<!--       			
                
			</li>

		</ul>

    </details>

</nav>

-->