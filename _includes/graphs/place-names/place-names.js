var windowW = window.innerWidth; // capture screen width to create "mediaqueries" within JS
var ixmapW;

if (windowW < 817) { // set var for width of vis, depending on screen width
  ixmapW = (78.6 * windowW) / 100;
} else if (windowW < 1225) {
  ixmapW = (85.714 * windowW) / 100;
} else {
  var ixmapW = 1108;
}

var ixmapH = ixmapW * 0.65;
var ixmapScale = ixmapW * 1.29;

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
      catLabel: 'Thing',
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

// Zoom
var ixmapZooming = function(event, d) {

  var offset = [event.transform.x, event.transform.y]; // get the current (pre-zooming) translation offset of mouse position
  var newScale = event.transform.k * ixmapScale; // calculate new scale as zoom level x original scale size

  ixmapProjection.translate(offset) // update projection with new offset
    .scale(newScale);

  ixmapSvg.selectAll("path") // update all paths to fit with new offset
    .attr("d", ixmapCountyPath);

  if (event.transform.k == 1) { // setting whether zoom out button is disabled or enabled (disabled at maximum zoom-out level)
    d3.select('#ixmap-zoom-out')
      .classed('ixmap-zoom-out-disabled', true)
      .classed('ixmap-zoom-out-enabled', false);
  } else {
    d3.select('#ixmap-zoom-out')
    .classed('ixmap-zoom-out-enabled', true)
    .classed('ixmap-zoom-out-disabled', false);
  }

  if (event.transform.k >= 7) { // setting whether zoom in button is disabled or enabled (disabled at maximum zoom-in level)
    d3.select('#ixmap-zoom-in')
      .classed('ixmap-zoom-in-disabled', true)
      .classed('ixmap-zoom-in-enabled', false);
  } else {
    d3.select('#ixmap-zoom-in')
    .classed('ixmap-zoom-in-enabled', true)
    .classed('ixmap-zoom-in-disabled', false);
  }

} // close ixmapZooming

// Define zoom behavior
var ixmapZoom = d3.zoom()
  .scaleExtent([ 1, 7.0 ]) // constrain zoom-out and zoom-in, respectively
  .translateExtent([[ -(ixmapW/2), -(ixmapH/2) ], [ ixmapW/2, ixmapH/2 ]]) // constrain pan to keep map from disappearing
  .on("zoom", ixmapZooming);

// Create group to hold all zoomable elements (county paths + state paths)
var ixmapZoomableGroup = ixmapSvg.append('g')
  .call(ixmapZoom) // bind the zooming behavior
  .call(ixmapZoom.transform, d3.zoomIdentity // then apply the initial transform
    .translate(ixmapW/2, ixmapH/2)
    .scale(1)); // can change this if needed

// Create invisible BG rect to catch zooming events
ixmapZoomableGroup.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", ixmapW)
  .attr("height", ixmapH)
  .attr("opacity", 0);

// Load CSV of county etymology data
d3.csv('assets/data/blogposts/place-names/data_counties.csv')
  .then(function(data) {

  // Load JSON of county outlines
  d3.json('assets/data/blogposts/place-names/data_counties-20m.json')
    .then(function(json) {

    for (var i = 0; i < data.length; i++) {

      // Move data from CSV into JSON
      var csvCountyId = data[i].id; // get county id from etymology CSV
      var csvCountyName = data[i].name; // get name per county from etymology CSV
      var csvCountyFullname = data[i].fullname; // get full name per county from etymology CSV
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
          json.features[j].properties.fullname = csvCountyFullname; // copy the county name into the JSON per county
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

    // Draw county paths
    var countyGroup = ixmapZoomableGroup.append("g");

    countyGroup.selectAll('.ixmap-county')
      .data(json.features)
      .enter()
      .append('path')
        .attr('d', ixmapCountyPath)
        .attr('class', function(d) {
          return 'ixmap-county ixmap-county-' + d.properties.name;
        })
        .attr('fill', function(d) {
          return placenameColorCat(d.properties.category).catColor;
        })
        .on('click', function(q, d, r) {
          // Hamilton Easter eggs

          var ixmapClickedCounty = d3.select(this);
          var ixmapClickedCountyClass = ixmapClickedCounty.attr('class');
          console.log(ixmapClickedCountyClass);

          if (ixmapClickedCountyClass.includes('Washington')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/washington.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Jefferson')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/jefferson.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Hamilton')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/hamilton.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Lafayette') || ixmapClickedCountyClass.includes('Fayette')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/lafayette.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Madison')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/madison.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Schuyler')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/schuyler.m4a');
            audio.play();
          } else if (ixmapClickedCountyClass.includes('Augusta') || ixmapClickedCountyClass.includes('Charlotte') || ixmapClickedCountyClass.includes('Mecklenburg')) {
            var audio = new Audio('assets/images/blogposts/place-names/easter-eggs/king-george.m4a');
            audio.play();
          }



          }) // close .on click for Hamilton Easter eggs
        .on('mouseover', function(q, d, r) { // d (to access the dataset) is the second var in the .on() in newer versions of D3
          var currentCounty = d3.select(this);
          var centroid = ixmapCountyPath.centroid(currentCounty.datum());
          var centroidH = centroid[0];
          var centroidV = centroid[1];
          var tooltipW = 350;
          var map = document.getElementById('ixmap-container');
          var mapR = map.getBoundingClientRect().right;
          var mapW = map.getBoundingClientRect().width;
          var mapH = map.getBoundingClientRect().height;
          var marginL = (windowW - mapW) / 2;
          d3.select(this)
            .style('fill', function() {
              if (windowW >= 754) { // don't show hover state on screens too narrow to fit tooltip's corner at mouse location without going over edge of map
                return 'black';
              } else {
                return placenameColorCat(d.properties.category).catColor;
              }
            })
          d3.select("#ixmap-tooltip")
            .classed("hidden", function() { // don't show tooltip on screens too narrow to fit tooltip's corner at mouse location without going over edge of map
              if (windowW >= 754) {
                return false;
              } else {
                return true;
              }
            })
            .style('left', function() { // position tooltip depending how close it is to edge
              if ((centroidH + tooltipW + marginL) < mapR) {
                return centroidH + 'px';
              } else {
                return (centroidH - tooltipW) + 'px';
              } // close inner if
            })
            .style('top', centroidV + 'px')
            .style('width', tooltipW + 'px');
          d3.select("#ixmap-tooltip-name")
            .text(d.properties.fullname);
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
            });
          d3.select("#ixmap-tooltip-cat-child")
            .text(d.properties.tooltipsubcategory);
          d3.select("#ixmap-tooltip-dot-lang")
            .style('background-color', function() {
              return placenameColorLang(d.properties.language).langColor;
            });
          d3.select("#ixmap-tooltip-lang-value")
            .text(function() {
              return placenameColorLang(d.properties.language).langLabel;
            });
          d3.select("#ixmap-tooltip-lang-child")
            .text(d.properties.tooltipgranularlanguage);
          }) // close .on mouseover for tooltip
        .on('mouseout', function() {
          d3.select("#ixmap-tooltip")
            .classed("hidden", true);
          d3.select(this)
            .style('fill', function(d, i) {
              if (ixmapToggle.selectAll('.ixmap-toggle-pill-cat').classed('ixmap-toggle-pill-on')) {
                return placenameColorCat(d.properties.category).catColor;
              } else {
                return placenameColorLang(d.properties.language).langColor;
              } // close if
            }) // close .on mouseout for tooltip
        }); // finish drawing county paths

    // Load JSON of state outlines
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

// Legend
// Create list of cats and langs to use in tandem with color + label library at top
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

// Build default (category) legend entries pre-toggle as a function, to re-use within toggle functionality
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
      .attr('class', 'ixmap-legend-label s-textface')
      .text(function() {
        return placenameColorCat(ixmapLegendListCat[i]).catLabel;
      });
  } // close for
  var ixmapSidebar = document.getElementById('ixmap-sidebar');
  var ixmapCaptionTopMove = ixmapSidebar.offsetHeight;
  var ixmapCaption = document.getElementById('ixmap-caption');
  ixmapCaption.style.top = (ixmapCaptionTopMove + 25) + 'px';
} // close function

ixmapLegendCat(); // call function created above to create the default legend for categories

// Toggle functionality
ixmapToggle
  .on('click', function() {

    if (ixmapToggle.selectAll('.ixmap-toggle-pill-cat').classed('ixmap-toggle-pill-on')) { // if being set to language; therefore colored by category prior to click

      ixmapSvg.selectAll('.ixmap-county')
        .style('fill', function(d) { // color counties by language
          return placenameColorLang(d.properties.language).langColor;
        });

      // Update pill and text colors
      ixmapToggle.selectAll('.ixmap-toggle-pill-lang')
        .classed('ixmap-toggle-pill-on', true);
      ixmapToggle.selectAll('.ixmap-toggle-text-lang')
        .classed('ixmap-toggle-text-on', true);
      ixmapToggle.selectAll('.ixmap-toggle-pill-cat')
        .classed('ixmap-toggle-pill-on', false);
      ixmapToggle.selectAll('.ixmap-toggle-text-cat')
        .classed('ixmap-toggle-text-on', false);

      // Legend changes to show languages
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
            .attr('class', 'ixmap-legend-label s-textface')
            .text(function() {
              return placenameColorLang(ixmapLegendListLang[i]).langLabel;
            });
      } // close for

      // Caption
      var ixmapSidebar = document.getElementById('ixmap-sidebar');
      var ixmapCaptionTopMove = ixmapSidebar.offsetHeight;
      var ixmapCaption = document.getElementById('ixmap-caption');
      ixmapCaption.style.top = (ixmapCaptionTopMove + 25) + 'px';

    } else { // else, being set to category; therefore colored by language prior to click

      ixmapSvg.selectAll('.ixmap-county')
        .style('fill', function(d) {
          return placenameColorCat(d.properties.category).catColor;
        })

      // Update pill and text colors
      ixmapToggle.select('.ixmap-toggle-pill-lang')
        .classed('ixmap-toggle-pill-on', false);
      ixmapToggle.select('.ixmap-toggle-text-lang')
        .classed('ixmap-toggle-text-on', false);
      ixmapToggle.select('.ixmap-toggle-pill-cat')
        .classed('ixmap-toggle-pill-on', true);
      ixmapToggle.select('.ixmap-toggle-text-cat')
        .classed('ixmap-toggle-text-on', true);

      // Legend
      ixmapLegendContainer.selectAll('.ixmap-legend-entry').remove(); // remove content of language legend
      ixmapLegendCat(); // call category legend function, to build category legend

    } // close if

  }); // close .on for toggle

// Zoom buttons
var ixmapZoomContainer = document.getElementById('ixmap-zoom-container');
var ixmapZoomButtonH = 25;
ixmapZoomContainer.style.top = 'calc(' + (ixmapH - (ixmapZoomButtonH)) + 'px - 1rem)';

if (windowW < 650) { // make sure horizontal spacing from left edge is consistent at all screen sizes
  ixmapZoomContainer.style.left = 'calc(' + (ixmapW - (ixmapZoomButtonH * 2)) + 'px - 1.1rem)';
} else {
  ixmapZoomContainer.style.left = 'calc(' + (ixmapW - (ixmapZoomButtonH * 2) - 10) + 'px - 1rem)';
}

d3.selectAll(".ixmap-zoom-button") // apply functionality to zoom buttons
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

    // This triggers a zoom event, scaling by scaleFactor
    ixmapZoomableGroup.transition()
      .call(ixmapZoom.scaleBy, scaleFactor);
}); // close zooming interaction

// For some reason, container div was making itself 10px taller than the SVG container, so there was a gap between bottom of grey box and bottom edge of map; this fixes that
var ixmapContainer = document.getElementById('ixmap-container');
ixmapContainer.style.height = (ixmapContainer.offsetHeight - 10) + 'px';
