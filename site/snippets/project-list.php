       
        	<!--
            <?php if($thumbnail = $project->thumbnail()->toFile()): ?>
            <p>
                <?php echo $project->title()->html() ?>
            </p>
            	<a href="<?php echo $project->url() ?>">
                	<img src="<?= $thumbnail->url() ?>">
            	</a>
            <?php endif; ?>
        	-->

            <?php if($thumbnail = $project->thumbnail()->toFile()): ?>            	
                <div style="background-image: url(<?= $thumbnail->url() ?>)" class="projecttile">
                    <a href="<?php echo $project->url() ?>">
                        <img src="<?php echo url($site . 'assets/images/+white.svg')?>" alt="About" class="aboutproject">
                        <h6>
                			<?php echo $project->title()->kirbytext() ?>
            			</h6>
                        <!-- <img src="<?php echo url($site . 'assets/images/+white.svg')?>" alt="About" class="aboutproject"> -->
            	   </a>
                </div>
            <?php endif; ?>



























