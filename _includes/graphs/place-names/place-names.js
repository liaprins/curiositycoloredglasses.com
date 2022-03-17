var ixmapW = 1000;
var ixmapH = 700;

var ixmapScale = 1250;

var ixmapProjection = d3.geoAlbersUsa()
  .translate([ixmapW/2, ixmapH/2])
  .scale([ixmapScale]);

var ixmapSvg = d3.select('#ixmap-container')
  .append('svg')
    .attr('width', ixmapW)
    .attr('height', ixmapH);

var ixmapToggle = d3.select('#ixmap-toggle');

var ixmapStatePath = d3.geoPath()
  .projection(ixmapProjection);

var ixmapCountyPath = d3.geoPath()
  .projection(ixmapProjection);

// colors (global vars for this post, could be called in other JS vis files for this post, if there were other or new vises using same color)
var placenameColorCat = function(v) {
  if (v == 'people') {
    return {
      catLabel: 'People',
      catColor: '#D9C775',
    };
  } else if (v == 'place') {
    return {
      catLabel: 'Place',
      catColor: '#5B6988',
    };
  } else if (v == 'nature') {
    return {
      catLabel: 'Nature',
      catColor: '#77B7B4',
    };
  } else if (v == 'concept') {
    return {
      catLabel: 'Concept',
      catColor: '#BC80A5',
    };
  } else if (v == 'unknown') {
    return {
      catLabel: 'Unknown',
      catColor: '#B2AEA9',
    };
  } // close if
}; // close fx

var placenameColorLang = function(v) {
  if (v == 'euro') {
    return {
      langLabel: 'Non-Indigenous',
      langColor: '#A0C1D7'
    };
  } else if (v == 'natam') {
    return {
      langLabel: 'Indigenous',
      langColor: '#8F3D64'
    };
  }
};

// ZOOM
var ixmapZooming = function(event, d) {

  var offset = [event.transform.x, event.transform.y]; // get the current (pre-zooming) translation offset of mouse position
  var newScale = event.transform.k * ixmapScale; // calculate new scale

  ixmapProjection.translate(offset) // update projection with new offset
    .scale(newScale);

  ixmapSvg.selectAll("path") // update all paths
    .attr("d", ixmapCountyPath);

  if (event.transform.k == 1) {
    d3.select('#ixmap-zoom-out')
      .classed('ixmap-zoom-out-disabled', true)
      .classed('ixmap-zoom-out-enabled', false);
  } else {
    d3.select('#ixmap-zoom-out')
    .classed('ixmap-zoom-out-enabled', true)
    .classed('ixmap-zoom-out-disabled', false);
  }

  console.log('k = ' + event.transform.k);

} // close ixmapZooming

// define zoom behavior
var ixmapZoom = d3.zoom()
  .scaleExtent([ 1, 7.0 ]) // constrain zoom-out and zoom-in, respectively
  .translateExtent([[ -(ixmapW/2), -(ixmapH/2) ], [ ixmapW/2, ixmapH/2 ]]) // constrain pan to keep map from disappearing
  .on("zoom", ixmapZooming);

// create group to hold all zoomable elements (county paths + state paths)
var ixmapZoomableGroup = ixmapSvg.append('g')
  .call(ixmapZoom) // bind the zooming behavior
  .call(ixmapZoom.transform, d3.zoomIdentity // then apply the initial transform
    .translate(ixmapW/2, ixmapH/2)
    .scale(1)); // can change this if needed

// create invisible BG rect to catch zooming events
ixmapZoomableGroup.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", ixmapW)
  .attr("height", ixmapH)
  .attr("opacity", 0);

// load CSV of county etymology data
d3.csv('assets/data/blogposts/place-names/data_counties.csv')
  .then(function(data) {

  // load JSON of county outlines
  d3.json('assets/data/blogposts/place-names/data_counties-20m.json')
    .then(function(json) {

    for (var i = 0; i < data.length; i++) {

      // MOVE DATA FROM CSV INTO JSON
      var csvCountyId = data[i].id; // get county id from etymology CSV
      var csvCountyName = data[i].name; // get name per county from etymology CSV
      var csvCountyType = data[i].type; // get type per county from etymology CSV
      var csvCountyState = data[i].state; // get state per county from etymology CSV
      var csvCountyTooltipState = data[i].tooltipstate; // get state abbreviation per county from etymology CSV
      var csvCountyLanguage = data[i].language; // get high-level language per county from etymology CSV
      var csvCountyGranularlanguage = data[i].granularlanguage; // get granular language per county from etymology CSV
      var csvCountyTooltipGranularlanguage = data[i].tooltipgranularlanguage; // get granular language (in everyday phrasing) per county from etymology CSV
      var csvCountyCategory = data[i].category; // get high-level category per county from etymology CSV
      var csvCountySubcategory = data[i].subcategory; // get subcategory per county from etymology CSV
      var csvCountyTooltipSubcategory = data[i].tooltipsubcategory; // get subcategory (in everyday phrasing) per county from etymology CSV
      var csvCountyEtymology = data[i].etymology; // get etymology per county from etymology CSV

      for (var j = 0; j < json.features.length; j++) { // find the corresponding county id within the GeoJSON

        var pathCountyId = json.features[j].properties.STATE + json.features[j].properties.COUNTY;

        if (csvCountyId == pathCountyId) {
          json.features[j].properties.name = csvCountyName; // copy the county name into the JSON per county
          json.features[j].properties.type = csvCountyType; // copy the county type into the JSON per county
          json.features[j].properties.state = csvCountyState; // copy the state name into the JSON per county
          json.features[j].properties.tooltipstate = csvCountyTooltipState; // copy the state abbreviation into the JSON per county
          json.features[j].properties.language = csvCountyLanguage; // copy the high-level language into the JSON per county
          json.features[j].properties.granularlanguage = csvCountyGranularlanguage; // copy the granular language into the JSON per county
          json.features[j].properties.tooltipgranularlanguage = csvCountyTooltipGranularlanguage; // copy the granular language (in everyday phrasing) into the JSON per county
          json.features[j].properties.category = csvCountyCategory; // copy the high-level category into the JSON per county
          json.features[j].properties.subcategory = csvCountySubcategory; // copy the subcategory into the JSON per county
          json.features[j].properties.tooltipsubcategory = csvCountyTooltipSubcategory; // copy the subcategory (in everyday phrasing) into the JSON per county
          json.features[j].properties.etymology = csvCountyEtymology; // copy the etymology into the JSON per county
          break; // stop looking through the JSON
        } // close if
      } // close j for-loop
    } // close i for-loop

    // draw county paths
    var countyGroup = ixmapZoomableGroup.append("g");

    countyGroup.selectAll('.ixmap-county')
      .data(json.features)
      .enter()
      .append('path')
        .attr('d', ixmapCountyPath)
        .attr('class', function(d) {
          return 'ixmap-county';
        })
        .attr('fill', function(d) {
          return placenameColorCat(d.properties.category).catColor;
        })
        .on('mouseover', function(q, d, r) { // d (to access the dataset) is the second var in the .on() in newer versions of D3
          var currentCounty = d3.select(this);
          var centroid = ixmapCountyPath.centroid(currentCounty.datum());
          var centroidH = centroid[0];
          var centroidV = centroid[1];
          var windowW = window.innerWidth;
          var bodyTop = document.body.getBoundingClientRect().top;
          var map = document.getElementById('ixmap-container');
          var mapTop = map.getBoundingClientRect().top;
          var yDiff = mapTop - bodyTop;
          var tooltipW = 400;
          var tooltipPadding = 15;
          var tooltipH = document.getElementById('ixmap-tooltip').getBoundingClientRect().height;
          var mapH = map.getBoundingClientRect().height;
          d3.select(this)
            .style('fill', 'black');
          d3.select("#ixmap-tooltip")
            .classed("hidden", false)
            .style('left', function() { // position tooltip depending how close it is to edge
              if ((centroidH + ((windowW - ixmapW) / 2)) < (windowW - ((windowW - ixmapW) / 2) - (tooltipW + (tooltipPadding * 2)))) {
                return (centroidH + ((windowW - ixmapW) / 2)) + 'px';
              } else {
                return ((centroidH + ((windowW - ixmapW) / 2)) - tooltipW - (tooltipPadding * 2)) + 'px';
              }
            })
            .style('top', (centroidV + yDiff) + 'px')
            .attr('width', tooltipW + 'px')
            .attr('padding', tooltipPadding + 'px');
          d3.select("#ixmap-tooltip-name")
            .text(d.properties.name);
          d3.select("#ixmap-tooltip-type")
            .text(d.properties.type);
          d3.select("#ixmap-tooltip-state")
            .text(d.properties.tooltipstate);
          d3.select("#ixmap-tooltip-ety")
            .text(d.properties.etymology);
          d3.select("#ixmap-tooltip-dot-cat")
            .style('background-color', function() {
              return placenameColorCat(d.properties.category).catColor;
            });
          d3.select("#ixmap-tooltip-cat-value")
            .text(function() {
              return placenameColorCat(d.properties.category).catLabel;
            })
          d3.select("#ixmap-tooltip-cat-child")
            .text(d.properties.tooltipsubcategory);
          d3.select("#ixmap-tooltip-dot-lang")
            .style('background-color', function() {
              return placenameColorLang(d.properties.language).langColor;
            });
          d3.select("#ixmap-tooltip-lang-value")
            .text(function() {
              return placenameColorLang(d.properties.language).langLabel;
            })
          d3.select("#ixmap-tooltip-lang-child")
            .text(d.properties.tooltipgranularlanguage);
          })
        .on('mouseout', function() {
          d3.select("#ixmap-tooltip")
            .classed("hidden", true);
          d3.select(this)
            .style('fill', function(d, i) {
              if (ixmapToggle.selectAll('.ixmap-toggle-pill-cat').classed('ixmap-toggle-pill-on')) {
                return placenameColorCat(d.properties.category).catColor;
              } else {
                return placenameColorLang(d.properties.language).langColor;
              }
            }) // close .on for tooltip
          }); // finish drawing county paths

    // load JSON of state outlines
    d3.json('assets/data/blogposts/place-names/data_states-20m.json')
      .then(function(json) {

      var stateGroup = ixmapZoomableGroup.append("g");

      stateGroup.selectAll('.ixmap-state')
        .data(json.features)
        .enter()
        .append('path')
          .attr('d', ixmapStatePath)
          .attr('class', 'ixmap-state');
        }); // close JSON function for state outlines

      }); // close JSON function for county outlines

    }); // close CSV function

// LEGEND
// create list of cats and langs to use in tandem with color + label library at top
var ixmapLegendListCat = [
  'people',
  'nature',
  'place',
  'concept',
  'unknown'
];
var ixmapLegendListLang = [
  'euro',
  'natam'
];

var ixmapLegendContainer = d3.select('#ixmap-legend-container');

// build default (category) legend entries pre-toggle as a function, to re-use within toggle functionality
var ixmapLegendCat = function() {
  for (i = 0; i < ixmapLegendListCat.length; i++) {
  ixmapLegendContainer.append('div') // create sub-container <div> per entry to hold dot + label together
    .attr('class', 'ixmap-legend-entry')
    .attr('id', 'ixmap-legend-entry-' + i)
    .append('div') // add dot
      .attr('class', 'ixmap-dot')
    .style('background-color', placenameColorCat(ixmapLegendListCat[i]).catColor);
  ixmapLegendContainer.select('#ixmap-legend-entry-' + i)
    .append('p') // add label
      .attr('class', 'ixmap-legend-label')
      .text(function() {
        return placenameColorCat(ixmapLegendListCat[i]).catLabel;
      });
  } // for
}// fx

ixmapLegendCat();

// toggle functionality
ixmapToggle
  .on('click', function() {

    if (ixmapToggle.selectAll('.ixmap-toggle-pill-cat').classed('ixmap-toggle-pill-on')) { // if being set to language; therefore colored by category prior to click

      ixmapSvg.selectAll('.ixmap-county')
        .style('fill', function(d) { // color counties by language
          return placenameColorLang(d.properties.language).langColor;
        });

      // update pill and text colors
      ixmapToggle.selectAll('.ixmap-toggle-pill-lang')
        .classed('ixmap-toggle-pill-on', true);
      ixmapToggle.selectAll('.ixmap-toggle-text-lang')
        .classed('ixmap-toggle-text-on', true);
      ixmapToggle.selectAll('.ixmap-toggle-pill-cat')
        .classed('ixmap-toggle-pill-on', false);
      ixmapToggle.selectAll('.ixmap-toggle-text-cat')
        .classed('ixmap-toggle-text-on', false);

      // legend changes to show languages
      ixmapLegendContainer.selectAll('.ixmap-legend-entry').remove(); // remove content of category legend
      for (i = 0; i < ixmapLegendListLang.length; i++) {
        ixmapLegendContainer.append('div') // create sub-container <div> per entry to hold dot + label together
          .attr('class', 'ixmap-legend-entry')
          .attr('id', 'ixmap-legend-entry-' + i)
          .append('div') // add dot
            .attr('class', 'ixmap-dot')
          .style('background-color', placenameColorLang(ixmapLegendListLang[i]).langColor);
        ixmapLegendContainer.select('#ixmap-legend-entry-' + i)
          .append('p') // add label
            .attr('class', 'ixmap-legend-label')
            .text(function() {
              return placenameColorLang(ixmapLegendListLang[i]).langLabel;
            });
      }

    } else { // if being set to category; therefore colored by language prior to click

      ixmapSvg.selectAll('.ixmap-county')
        .style('fill', function(d) {
          // return placenameColorCat(d.properties.category);
          return placenameColorCat(d.properties.category).catColor;
        })

      // update pill and text colors
      ixmapToggle.select('.ixmap-toggle-pill-lang')
        .classed('ixmap-toggle-pill-on', false);
      ixmapToggle.select('.ixmap-toggle-text-lang')
        .classed('ixmap-toggle-text-on', false);
      ixmapToggle.select('.ixmap-toggle-pill-cat')
        .classed('ixmap-toggle-pill-on', true);
      ixmapToggle.select('.ixmap-toggle-text-cat')
        .classed('ixmap-toggle-text-on', true);

      // legend
      ixmapLegendContainer.selectAll('.ixmap-legend-entry').remove(); // remove content of language legend
      ixmapLegendCat(); // call category legend function, to build category legend

    } // close if

  }); // close .on for toggle

var ixmapZoomContainer = document.getElementById('ixmap-zoom-container');
var ixmapZoomButtonH = 25;
ixmapZoomContainer.style.top = (ixmapH - (ixmapZoomButtonH) - 35) + "px";
ixmapZoomContainer.style.left = (ixmapW - (ixmapZoomButtonH * 2) - 35 - 10) + "px";

// zooming interaction
d3.selectAll(".ixmap-zoom-button")
  .on("click", function() {

    var scaleFactor; // set how much to scale on each click

    var direction = d3.select(this).attr("id"); // which way are we headed?

    switch (direction) { // modify the k scale value, depending on the direction
      case "ixmap-zoom-in": // use button ids to identify which direction to zoom
        scaleFactor = 1.3333;
        break;
      case "ixmap-zoom-out": // use button ids to identify which direction to zoom
        scaleFactor = 0.75;
        break;
      default:
        break;
    }

    // this triggers a zoom event, scaling by scaleFactor
    ixmapZoomableGroup.transition()
      // .duration(500)
      .call(ixmapZoom.scaleBy, scaleFactor);
}); // close zooming interaction
