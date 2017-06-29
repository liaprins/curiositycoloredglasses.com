<?php snippet('header') ?>

<section class="content blog">


<!-- website name + tagline, etc -->
  <h1>
  	<?php echo $page->title()->html() ?>
  </h1>
  <?php echo $page->tagline()->kirbytext() ?>


<!-- foreach loop pulling in the articles -->
  <?php foreach ($page->children()
                     ->visible() 
                     ->flip() as $article): ?>
       
  <article>

<!-- post glasses icon -->
    <a href="<?php echo $article->url() ?>">
      <?php echo $article->postglasses()->image()->toFile() ?> 
    </a>



<!-- title for each article -->
      <h1>
        <a href="<?php echo $article->url() ?>">
          <?php echo $article->title()->html() ?>
        </a>
      </h1>

    <time datetime="<?php echo $article->date('c') ?>" pubdate="pubdate"><?php echo $article->date('d F Y') ?></time>




<!-- tags for each article -->
  <?php foreach($article->tags()
                        ->split(',') as $tag): ?> 

    <a href="<?php echo url('tag/tag:' . $tag)?>">
        
      <!-- or replace "html($tag)" with "$tag:", but the "\" from markdown text file will return as its own tag-->  
      #<?php echo html($tag) ?>
          
    </a>
        
  <?php endforeach ?>



<!-- intro for each article -->
<!-- I used a plug-in to elimnate the <p> tags Kirby automatically generates with Kirbytext markdown for each section in content files. I just changed what had been "kirbytext" below to "kirbytextraw". Here's the link to the plug-in: https://github.com/jbeyerstedt/kirby-plugin-kirbytextRaw-->
<!-- I put "&nbsp" between "Read" and "more" so they would never split onto separate lines -->
  <p>
    <?php echo kirbytextraw ($article->intro())?> <a href="<?php echo $article->url() ?>">
        Read&nbspmore…
      </a>
    </p>
  


<!-- close everything up -->
  </article>


  <?php endforeach ?>

</section>


<?php snippet('footer') ?>


