---
title: How do place names differ across America?
author: Lia Prins
tags: geography toponyms names places maps
excerpt: I used to travel to the East coast occasionally for work, and was always struck by how different the names of the towns there were, compared to where I grew up in Washington state. Whereas the nomenclature of the Northwest seemed to be based on Native American languages (if not their Anglicized, Latin-character-converted equivalents), most monikers in the East sounded purely English to my ear. Now, after living in the San Francisco Bay Area — the naming practices of which seem to have been heavily (though unwittingly) influenced by several Spanish saints — I often wonder about the various pockets of American place-name patterns&#58; How heterogeneous are the names of our nation’s locations, and on what dimensions? What stories are behind these toponyms, and how do they speak to the places they represent?
process: process/process-place-names.html
glossaryfolder: vocab-place-names
thankyoufolder: thankyou-place-names
comments: true
rightextension: .png
css:
  - /assets/css/blogposts/place-names/place-names.css
d3v: v6
d3:
  - graphs/place-names/place-names.js
  - graphs/place-names/tableau-name-frequency.js
  - graphs/place-names/tableau-proportion-tree-category.js
  - graphs/place-names/tableau-proportion-tree-language.js
hidden: false
---

Rather than rely on my own limited anecdotes to answer these questions, I went in search of data. Although state names would constitute too small a dataset to isolate interesting trends, the fact that there are approximately 3,000 {% include post-glossary-inline.html inlineword="counties" id="county" %}  in the US made them (and their {% include post-glossary-inline.html inlineword="parish" id="parish" %}, {% include post-glossary-inline.html inlineword="borough" id="borough" %}, {% include post-glossary-inline.html inlineword="census area" id="census-area" %}, {% include post-glossary-inline.html inlineword="independent city" id="independent-city" %}, and {% include post-glossary-inline.html inlineword="district" id="district" %} counterparts) a much more promising starting point for my investigation into American {% include post-glossary-inline.html inlineword="toponyms" id="toponym" %}. I found a list of most counties on Wikipedia,{%-include post-thankyou-inline.html number="1"-%} along with a brief etymology for each. From there I manually classified each county by both the category and subcategory its name fell into (within a set of my own devising), and its language, if available. If language wasn’t mentioned and I couldn’t determine it myself from context, I conducted further research (Googling) to at least label it as Indigenous or non-Indigenous.

<!-- Map container -->
<div id="ixmap-container">

  <!-- Zoom buttons -->
  <div id="ixmap-zoom-container">
    <div id="ixmap-zoom-in" class="ixmap-zoom-button">
    </div>
    <div id="ixmap-zoom-out" class="ixmap-zoom-button">
    </div>
  </div>

  <!-- Tooltip -->
  <div id="ixmap-tooltip" class="hidden">
    <p id="ixmap-tooltip-topline" class="m-textface">
        <span id="ixmap-tooltip-name">[County Name]</span><span>, </span>
        <span id="ixmap-tooltip-state">[State]</span>
    </p>
    <p id="ixmap-tooltip-ety" class="s-textface">[Etymology]</p>
    <!-- Category section -->
    <div> <!-- needs a wrapper div to keep language section from jumping up to be on same line -->
      <div id="ixmap-tooltip-dot-cat" class="ixmap-dot">
      </div>
      <p id="ixmap-tooltip-cat-container">
        <span id="ixmap-tooltip-cat-label" class="s-textface">Category: </span>
        <span id="ixmap-tooltip-cat-value" class="s-textface">[Category]</span>
        <span id="ixmap-tooltip-cat-child" class="s-textface"></span>
      </p>
    </div>
    <!-- Language section -->
    <div id="ixmap-tooltip-dot-lang" class="ixmap-dot">
    </div>
    <p id="ixmap-tooltip-lang-container">
      <span id="ixmap-tooltip-lang-label" class="s-textface">Language: </span>
      <span id="ixmap-tooltip-lang-value" class="s-textface">[Language]</span>
      <span id="ixmap-tooltip-lang-child" class="s-textface"></span>
    </p>

  </div> <!-- close ixmap-tooltip -->

</div> <!-- close ixmap-container -->

<!-- Toggle + legend -->
<div id="ixmap-sidebar">
  <!-- Toggle -->
  <p id="ixmap-toggle-label" class="s-textface">Color counties by:</p>
  <div id="ixmap-toggle">
    <div class="ixmap-toggle-pill-cat ixmap-toggle-pill-on">
      <span class="ixmap-toggle-text-cat ixmap-toggle-text-on xs-textface bold">
        Category
      </span>
    </div>
    <div class="ixmap-toggle-pill-lang">
      <span class="ixmap-toggle-text-lang xs-textface bold">
        Language
      </span>
    </div>
  </div>
  <!-- Legend -->
  <div id="ixmap-legend-container">
  </div>
  <span> <!-- MUST BE WRAPPED IN A <span>, OTHERWISE IT IS A DIRECT CHILD OF <div>, AND lightboxsideshow.js CALLS THE LIGHTBOX CAPTIONS THROUGH div>figcaption (ANY <figcaption> THAT IS A DIRECT CHILD OF A <div>, SO IF THIS CAPTION IS ALSO A DIRECT CHILD OF A <div> IT MAJORLY MESSES UP THINGS FOR LIGHTBOX CAPTIONS) -->
    <figcaption id="ixmap-caption" class="xs-textface">
      <hr class="toprule">
      This map shows the distribution of counties across the US based on <em>what</em> they’re named for (category), or the <em>language</em> they’re named in (use the toggle to switch between the two).
    </figcaption>
  </span>
</div>

Geomapping both attributes of my newly minted dataset — category and language — exposed the fact that the vast majority of counties are named for people, specifically men, and of European heritage (or at least with European surnames).  

Although women-honoring toponyms account for only 1.1% of all counties, they are represented slightly higher in states that themselves possess feminine names: Maryland, Virginia, and Louisiana (although the latter was actually named for French King Louis XIV).

Of those counties commemorating groups of people, nearly all bear Indigenous names. However, digging into their etymologies reveals that they’re not necessarily named in the language of the group they’re named for: to list a couple, the names of Wisconsin’s {% include post-glossary-inline.html inlineword="Outagamie" id="outagamie" %} and {% include post-glossary-inline.html inlineword="Ozaukee" id="ozaukee" %} counties derive from {% include post-glossary-inline.html inlineword="Ojibwe" id="ojibwe" %} words for their neighboring {% include post-glossary-inline.html inlineword="Meskwaki" id="meskwaki" %} people (“dwellers on the other side of the stream”) and {% include post-glossary-inline.html inlineword="Sauk" id="sauk" %} people, respectively. Even the few counties in this category given European names are likely to characterize Native American peoples — but based on what white settlers called them, not what they called themselves. For example, the names of Pend Oreille County, Washington; Nez Perce County, Idaho; and the two Huron Counties, in Michigan and Ohio; all originated from French terms used to describe the locals. _Pend d’oreille_ means “hang from ear”, in reference to the Q'lispé people’s shell earrings, while _nez percé_ alluded to the Niimíipuu people’s pierced noses. _Huron_ was an attribution to the way the Wyandot people dressed their hair.

{% include post-image.html image="grid-category.jpg" alt="A series of US maps, each showing the counties named for men (2,086), groups of people (181), women (36), bodies of water (285), geologic features (100), plants or animals (46), natural resources (32), places within America (153), places outside of America (99), abstract concepts (61), objects (5), and unknown reasons (37), respectively." caption="These maps show a more detailed breakdown of what counties are named for; each dot represents one county." %}

Clusters of counties named for English towns and regions blanket the Northeastern seaboard (as was my business-travel-induced hunch), particularly around Jamestown, Virginia and Plymouth, Massachusetts — the two earliest British settlements on the continent. Likewise, Spanish names are common in the Southwest and areas that were founded after the Mexican-American War. French names are sprinkled throughout several states, but primarily within those whose land was acquired via the Louisiana purchase. In fact, French-named counties are more highly concentrated in Louisiana itself, as well as the Great Lakes region. The former served as the French headquarters for New France before it came under American control as part of the titular Louisiana Purchase; the latter was popular with fur trappers seeking to supply France’s fashion demands.

{% include post-image.html image="grid-language.jpg" alt="A series of US maps, showing the counties named in each of the following languages: English (186), Spanish (121), French (90), Ojibwe (21), Lenape (17), and Muscogee (15), respectively." caption="These maps show the six most common languages appearing in county names. Each dot represents one county; each map is colored according to whether or not that language is Indigenous." %}

{% include post-pullquote.html content="So, what’s in a (county) name? Quite a bit, it would seem. And yet at the same time, not nearly enough." shape="square" %}

The name assigned to the Q'lispé people and the land they occupied, and ultimately the county that land would become — Pend Oreille —  originated from outsiders observing a single salient attribute of their appearance. It sounds rather reductive when compared to their own name for themselves: Q'lispé literally means “the people”. Jefferson Davis could not have hoped to (and — to put it excessively mildly for brevity — actively went out of his way not to) represent all citizens of the four counties bearing his name, let alone the more than 15,000 Black people at the times of the counties’ foundings, nor those at the time of this writing. The same can be said of over 60 other counties{%-include post-thankyou-inline.html number="2"-%} currently commemorating Confederates.


Conversely, consider Kay County, Oklahoma (originally K County), its name the relic of an arbitrary, alphabetical indexing system, and by all rights, the poster child for blameless neutrality. Though quaint and quirky as a one-off tale of temporary toponymy gone awry, its original name was, by design, meaningless and forced. What if all counties shared its same story? We’d essentially have county barcodes in place of county names, and what a languishing landscape that would paint (literally, too — my maps would all be one color!).

Names will always be imperfect embodiments of the places and people they stand for. The good news is that (after painstakingly encoding several thousand lines of unstructured data), it’s possible to bring to light anecdotes of anthropological allure as well as patterns of inequity, which in turn often serve as evidence for change.
