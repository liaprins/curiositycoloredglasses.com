<?php snippet('internalheader') ?>



  <main class="main" role="main">

    <div class="text">

      <h1><?php echo $page->title()->html() ?></h1>

      <time datetime="<?php echo $page->date('c') ?>" pubdate="pubdate"><?php echo $page->date('d F Y') ?></time>

      <?php echo kirbytext($page->intro()) ?>

      <?php echo $page->text()->kirbytext() ?>

    </div>

  </main>



<?php snippet('footer') ?>