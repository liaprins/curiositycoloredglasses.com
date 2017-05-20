<!-- Adding <section> to hold together all of RR -->
<section id="relevantreading">

    <?php if(!$page->relevantreading1()->empty()): ?>
        
    <details id="rrdetails" open>

        <!-- MIGHT NEED TO ADD IN A HALF-SPACE VIA UTF-8 ENCODED CHARACTER OR SOMETHING, BETWEEN <summary> AND "Relevant" -->
        <summary class="sectionsummary postpagesectionsummary blackbg" id="rrsectionheader"><h3>Relevant Reading
            </h3>
        </summary>


        <div class="resultarea">


            <!-- The 1st of 3 allowed Relevant Reading articles -->
            <?php foreach($page->relevantreading1()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>


            <!-- The 2nd of 3 allowed Relevant Reading articles -->
            <?php foreach($page->relevantreading2()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>


            <!-- The 3rd of 3 allowed Relevant Reading articles -->
            <?php foreach($page->relevantreading3()->pages() as $result): ?>

                <?php snippet('result', array('result' => $result)) ?>

            <?php endforeach ?>


        </div>


    </details>


    <?php endif ?> 

</section>