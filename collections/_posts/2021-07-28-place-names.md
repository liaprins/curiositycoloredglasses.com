---
title: How do place names differ across America?
author: Lia Prins
tags:
excerpt: I used to travel to the East coast occasionally for work, and was always struck by how different the names of the towns there were compared to where I grew up in Washington state. Whereas the nomenclature of the Northwest seemed to be based on Native American languages (if not their Anglicized, Latin-character-converted equivalents), most monikers in the East sounded purely English to my ear. Now, living in the San Francisco Bay Area — the naming practices of which seem to have been heavily (though unwittingly) influenced by several Spanish saints — I often wonder about the various pockets of American place-name patterns&#58; How heterogeneous are the names of our nation’s locations, and on what dimensions? What stories are behind these names, and how do they speak to the places they represent?
comments: true
rightextension: .png
leftextension: .png
d3v: v6
d3:
  - graphs/place-names/us-map-symbol-color.js
  - graphs/place-names/cartogram.js
  - graphs/place-names/timeline.js
  - graphs/place-names/name-frequency.js
  - graphs/place-names/state-breakdowns.js
  - graphs/place-names/nswe.js
  - graphs/place-names/american-pies.js
css:
  - /assets/css/blogposts/place-names/place-names.css
hidden: true
---

Rather than rely on my own limited anecdotes to answer these questions, I went in search of data. Although state names would constitute too small a dataset to isolate interesting trends, the fact that there are approximately 3,000 counties in the US made them (and their parish, district, municipality, and borough counterparts) a much more promising starting point. I found a list of most counties on Wikipedia,  along with a brief  etymology  for each. From there I manually classified each county by both the category and subcategory its name fell into (within a set of my own devising), and its language, if available. If its language wasn’t mentioned and I couldn’t determine it myself from context, I conducted further research (Googling) to at least label it as Indigenous or non-Indigenous.

<div id="vis-1"></div>

<div id="filterscontainer-1">

  <!-- Filters for language -->
  <div id="filters-lang-1">
    <h2>Language family</h2>
    <div id="filter-language-euro" class="filter-1 filter-language" data-group="language" data-field="euro" data-existinggroup-language="" data-existinggroup-category="">
      <p>Non-Indigenous</p>
    </div>
    <div id="filter-language-natam" class="filter-1 filter-language" data-group="language" data-field="natam" data-existinggroup-language="" data-existinggroup-category="">
      <p>Indigenous</p>
    </div>
  </div>

  <!-- Filters for etymology -->
  <div id="filters-cat-1">
    <h2>Category</h2>
    <div id="filter-category-people" class="filter-1 filter-category" data-group="category" data-field="people" data-existinggroup-language="" data-existinggroup-category="">
      <p>People</p>
    </div>
    <div id="filter-category-place" class="filter-1 filter-category" data-group="category" data-field="place" data-existinggroup-language="" data-existinggroup-category="">
      <p>Place</p>
    </div>
    <div id="filter-category-nature" class="filter-1 filter-category" data-group="category" data-field="nature" data-existinggroup-language="" data-existinggroup-category="">
      <p>Nature</p>
    </div>
    <div id="filter-category-concept" class="filter-1 filter-category" data-group="category" data-field="concept" data-existinggroup-language="" data-existinggroup-category="">
      <p>Concept</p>
    </div>
    <div id="filter-category-unknown" class="filter-1 filter-category" data-group="category" data-field="unknown" data-existinggroup-language="" data-existinggroup-category="">
      <p>Unknown</p>
    </div>
  </div>

</div> <!-- close #filterscontainer-1 -->

Mapping both attributes of my newly minted dataset — category and language — allowed me to cross-reference them for correlations. This immediately exposed the fact that the vast majority of counties are named for people, specifically men of European heritage (or at least with European surnames). And although women-honoring toponyms account for only 1.2%, they are represented slightly higher in states that themselves possess feminine names: Maryland, Virginia, and Louisiana (although the latter was actually named for French King Louis XIV).

Of those counties commemorating groups of people, nearly all bear Indigenous names. However, digging into their etymologies reveals that they’re not necessarily named in the language of the group they’re named for: to list a couple, the names of Wisconsin’s Outagamie and Ozaukee counties derive from Ojibwe words for their neighboring Meskwaki people (“dwellers on the other side of the stream”) and Sauk people, respectively. Even the few counties in this category christened with European names are likely to characterize Native American peoples -- but based on what white settlers called them, not what they called themselves. The names of Pend Oreille County, Washington; Nez Perce County, Idaho; and the two Huron Counties, in Michigan and Ohio; all originated from French terms used to describe the locals. Pend d’oreille means “hang from ear”, in reference to the Q'lispé people’s shell earrings, while nez percé alluded to the Niimíipuu people’s pierced noses. Huron was an attribution to the way the Wyandot people dressed their hair.

Clusters of counties named for English towns and regions blanket the Northeastern seaboard (as was my business-travel-induced hunch), particularly around Jamestown, Virginia, and Plymouth, Massachusetts — the two earliest British settlements on the continent. Likewise, Spanish names are common in the Southwest and areas that were founded after the Mexican-American War. French names are sprinkled throughout several states, with slightly higher concentrations in Louisiana and the Great Lakes region: the former served as the French headquarters for New France before it came under American control as part of the titular Louisiana Purchase; the latter was popular with fur trappers seeking to supply France’s fashion demands.

Due to the dramatic difference in county density from East to West, I initially found it difficult to pin down regional trends. But after isolating latitude and longitude as their own independent dimensions against which to compare category and language, some striking patterns emerged.

Male-inspired monikers sharply subside in Western states; conversely, the relative rate of nature-induced names climbs steeply. Remarkably, this toponym type roughly traces the topography of the Rockies and the Colorado Plateau over to the Pacific coast.

As I had hypothesized, the Northwest does exhibit the highest percent of counties with names in Native American languages. However, this rate is really not so high, and not nearly as pronounced as I’d predicted, relative to the rest of the country.

Aside from geographical region, how influential are individual states upon the names of counties within their borders?

[INSERT GENERAL INSIGHTS]

Although Arizona and New Mexico share a border of significant length, there seem to be stark differences between their county naming schemes: 80% of Arizona’s counties possess a Native American name, while only one of New Mexico’s does, accounting for just 3% of the state’s total. At first I thought this discrepancy could be explained away by timing: maybe New Mexico entered the Union via one of the Western land acquisitions substantially sooner than Arizona did, and perhaps toponym trends change with time. But it turns out they were both granted statehood in the exact same year -- 1912, and just over a month apart. Statistically it would seem that in this case, each state itself had a heavy hand in informing its counties’ names.

My (incorrect) hypothesis around state age as an explanation for the variation between Arizona’s and New Mexico’s names left me wondering how influential a factor date is in determining other counties’ names. Have toponym tendencies changed over time or not?

On the linguistic side of my analysis, it appears that there is a noticeable uptick in Indigenous names, especially since the second half of the 20th century, right after Alaska and Hawaii joined the Union. Alaska doesn’t have counties, but instead a system of mostly boroughs and municipalities, which have grown and divided as the state aged, and most of which bear names in native Alaskan languages. All of Hawaii’s five counties are in the Hawaiian language, so collectively our non-contiguous states seem to account for most of this change.

Curiously, the rates of place-based names rise like bookends on either end of the timeline. The earliest (would-be) counties were named well over a century before the Declaration of Independence was even drafted, and more often than not, their names honored the English homelands of their settlers. More recently, the upward trend in names for pre-existing places can in part be attributed again to Alaska and Hawaii, as this category accounts for more than half of both states’ counties; in their cases though, most names were derived from places within the counties’ own borders.

For the most part, nature-themed names don’t enter the scene until a bit before the Louisiana Purchase, but from there they continue to increase throughout the westward expansion of the 1800s and its aftermath when territories garnered statehood (and concomitantly, counties were founded).

During my dataset creation process, I noticed certain county names popping up repeatedly from state to state. Apparently, in addition to some topics being more popular than others, specific names themselves are, too (though the reasons behind an identical designation can vary significantly). Only 46% of counties possess a unique name, and over 8% bear a name belonging to at least 14 other counties.

Presidents were quite popular fodder for toponyms. But of the 24 “Lincoln” counties, only 16 honor Honest Abe. All “Jefferson” and “Madison” Counties, however, do ultimately memorialize their Presidential namesakes, even if indirectly: a few were actually named for pre-existing entities within their borders, but those had in turn been named for the Presidents. (Relatedly, there are three counties and one parish named after Jefferson Davis, former “President” of the Confederacy, who was himself named for Thomas Jefferson, his father’s hero.)

Ironically, “Union” counties have the most disparate set of etymologies of all the same-name county groups, including -- even more ironically -- an homage to a Georgian political party whose main agenda was to eradicate Native Americans from the area. Another came about as the result of a compromise between Jacksonian Democrats and Whigs wild for Henry Clay: both politicians for whom many more counties were named.

In other cases, although certain figures made for very popular naming subjects, their namesake counties didn’t always choose the same word by which to commemorate them. Gilbert du Motier, the French Marquis de la Fayette, and debatable savior of the American Revolution, inspired six “Fayette” counties, five “LaFayette” counties and one parish, Indiana’s Lagrange County (after his hometown in France), and Virginia’s Colonial Heights County (for a group of French troops known as the Coloniels that he led as allies for the American cause). Meanwhile, his opposition in the war, King George III, has no counties named for him, unsurprisingly. However, George’s wife boasts four (fully [12]% of all female-named counties), in the form of three “Charlotte”s and one “Mecklenberg” (the region in Britain she was from).

When I began to investigate the most common county names, it became apparent that although many were named for one thing on the surface, ultimately that thing was named for another thing -- sometimes several times over -- collectively forming a trail of interlinked etymologies. [PUT ILLUSTRATION HERE… ] At least [7]% of counties have an indirect name source, and surfacing the links in their etymological chains reveals richer histories and regional trends.

California seems to have a relatively high rate of counties that exhibit this pattern: several were initially named for missions or natural features, the names of which in turn paid homage to Spanish saints. The Northeast’s propensity for pre-existing place names ultimately just means more man-memorializing monikers if you go deep enough, because their surface-level European namesakes were themselves often named for men.

So, what’s in a (county) name? Quite a bit, it would seem.

And yet at the same time, not nearly enough. The name assigned to the Q'lispé people and the land they occupied, and ultimately the county that land would become -- Pend Oreille --  originated from outsiders observing a single salient attribute of their appearance. It sounds rather reductive when compared to their own name for themselves: Q'lispé literally means “the people”. Jefferson Davis could not have hoped to (and -- to put it excessively mildly for brevity -- actively went out of his way not to) represent all citizens of the counties bearing his name, let alone the more than 15,000 Black people at the times of the counties foundings, nor those at the time of this writing. The same can be said of over 50 other counties currently commemorating Confederates. In an earlier act of exclusion, New York County was christened by none other than the Duke of York, himself, for himself -- alone.

Conversely, consider Kay County, Oklahoma (originally K County), its name the relic of an arbitrary, alphabetical indexing system, and by all rights, the poster child for blameless neutrality. Though quaint and quirky as a one-off tale of temporary toponymy gone awry, the last link in its etymological chain is, by design, meaningless and forced. What if all counties shared its same story? With their idiosyncrasies diluted 3,000 times over, what a languishing landscape that would paint (literally, too -- my maps would all be one color!).

Names will always be imperfect embodiments of the places and people they stand for: even “Union” wasn’t always used to unite. The good news is that (after painstakingly encoding several thousand lines of unstructured data), it’s possible to bring to light patterns -- of inequity and of anthropological allure alike -- and even to discover that, statistically speaking, [16] out of [17] times “Union” was used to unite.
