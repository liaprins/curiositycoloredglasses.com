---
title: How are places named across America?
author: Lia Prins
tags:
excerpt: Just getting the functionality going! No design has been done yet!
comments: true
rightextension: .png
d3v: v6
d3:
  - graphs/county-etymologies/us-map-symbol-color.js
  - graphs/county-etymologies/cartogram.js
  - graphs/county-etymologies/timeline.js
css:
  - /assets/css/blogposts/county-etymologies/county-etymologies.css
hidden: true
---

<div id="vis"></div>
<div id="filter-container">
  <!-- Filters for language -->
  <div id="language-filter-group">
    <h5>Language family</h5>
    <div id="filter-language-euro" class="filter filter-language" data-group="language" data-field="euro" data-existinggroup-language="" data-existinggroup-category="">
      <p>European</p>
    </div>
    <div id="filter-language-natam" class="filter filter-language" data-group="language" data-field="natam" data-existinggroup-language="" data-existinggroup-category="">
      <p>Native American</p>
    </div>
  </div>

  <!-- Filters for etymology -->
  <div id="category-filter-group">
    <h5>Category</h5>
    <div id="filter-category-man" class="filter filter-category" data-group="category" data-field="man" data-existinggroup-language="" data-existinggroup-category="">
      <p>Man</p>
    </div>
    <div id="filter-category-woman" class="filter filter-category" data-group="category" data-field="woman" data-existinggroup-language="" data-existinggroup-category="">
      <p>Woman</p>
    </div>
    <div id="filter-category-group" class="filter filter-category" data-group="category" data-field="group" data-existinggroup-language="" data-existinggroup-category="">
      <p>Group of people</p>
    </div>
    <div id="filter-category-flora" class="filter filter-category" data-group="category" data-field="flora" data-existinggroup-language="" data-existinggroup-category="">
      <p>Flora, fauna</p>
    </div>
    <div id="filter-category-geology" class="filter filter-category" data-group="category" data-field="geology" data-existinggroup-language="" data-existinggroup-category="">
      <p>Geologic feature</p>
    </div>
    <div id="filter-category-resource" class="filter filter-category" data-group="category" data-field="resource" data-existinggroup-language="" data-existinggroup-category="">
      <p>Natural resource, crop</p>
    </div>
    <div id="filter-category-place" class="filter filter-category" data-group="category" data-field="place" data-existinggroup-language="" data-existinggroup-category="">
      <p>Pre-existing place</p>
    </div>
    <div id="filter-category-battle" class="filter filter-category" data-group="category" data-field="battle" data-existinggroup-language="" data-existinggroup-category="">
      <p>Battle</p>
    </div>
    <div id="filter-category-object" class="filter filter-category" data-group="category" data-field="object" data-existinggroup-language="" data-existinggroup-category="">
      <p>Man-made object</p>
    </div>
    <div id="filter-category-concept" class="filter filter-category" data-group="category" data-field="concept" data-existinggroup-language="" data-existinggroup-category="">
      <p>Abstract concept</p>
    </div>
    <div id="filter-category-creation" class="filter filter-category" data-group="category" data-field="creation" data-existinggroup-language="" data-existinggroup-category="">
      <p>Aspect of county’s creation</p>
    </div>
    <div id="filter-category-combination" class="filter filter-category" data-group="category" data-field="combination" data-existinggroup-language="" data-existinggroup-category="">
      <p>Combination of reasons</p>
    </div>
    <div id="filter-category-unknown" class="filter filter-category" data-group="category" data-field="unknown" data-existinggroup-language="" data-existinggroup-category="">
      <p>Unknown reason</p>
    </div>
  </div>
</div> <!-- close #filter-container -->

<div id="hex-vis"></div>

<div id="timeline-vis"></div>
