<!-- Relevant Reading section of post -->
    <?php if(!$page->relevantreading1()->empty()): ?>

        <h2>Relevant Reading</h2>


<!-- THE 1ST OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading1()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>

<!-- THE 2ND OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading2()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>

<!-- THE 3RD OF 3 ALLOWED RELEVANT READING ARTICLES -->
            <?php foreach($page->relevantreading3()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>


    <?php endif ?> 