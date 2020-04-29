<!-- Adding <article> for semantic reasons and to hold together each result -->
<article class="result">


    <!-- Adding link outside date, blog post name, and postglasses image; tags link to their own tag result page -->
    <a class="resultlink"href="<?php echo $result->url() ?>">

        <!-- Date of article, if sticking with manual input of date in panel/.txt file, only need: <?php echo $result->date('d F Y') ?> -->
        <p id="resultdate" class="date s-textface bold">
            <time datetime="<?php echo $result->date('c') ?>" pubdate="pubdate">
                <?php echo $result->date('d F Y') ?>
            </time>
        </p>

        <!-- Postglasses image -->
        <div class="resultglassescontainer">
            <div class="resultstem resultshortstem resultleftstem"></div><?php if($imageleft = $result->postglassesleft()->toFile()): ?><div style="background-image: url(<?= $imageleft->url() ?>)" class="resultcircle resultleftcircle"></div><?php endif; ?><div class="resultstem resultcenterstem"></div><?php if($imageright = $result->postglassesright()->toFile()): ?><div style="background-image: url(<?= $imageright->url() ?>)" class="resultcircle resultrightcircle"></div><?php endif; ?><div class="resultstem resultshortstem resultrightstem"></div>
        </div>


        <!-- Title of article -->
        <p id="resulttitle" class="s-display">
            <?php echo $result->name()->html() ?>
        </p>

    </a>


</article>
