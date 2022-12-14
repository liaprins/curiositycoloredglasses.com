// load in the data
d3.json('assets/data/blogposts/dog-names/names.json')
  .then(function(json) {

  // constant vars
  var highestOccurrence = 1582; // manually adding occurrence of highest occurring name (Bella, for dogs) for use with scales
  var minBarSize = 1;

  // set screen-width-dependent vars
  var windowW = window.innerWidth; // capture screen width to create "mediaqueries" within JS
  var w;
  if (windowW < 817) { 
    w = (78.6 * windowW) / 100;
  } else if (windowW < 1225) {
    w = (85.714 * windowW) / 100;
  } else {
    var w = 1108;
  }
  
  // coverts rem-based sizes per screen width
  function remConverter(variable) {
    var remMediaqueryConverter = 1.5; // the relationship between screensizes < 442 and >= 442 is 1 : 1.5
    if (windowW < 442) {
      return variable;
    } else {
      return variable * remMediaqueryConverter;
    }
  }

  // declare rem-dependent vars, to be converted via function where they're called
  var vNameSpacing = remConverter(17);
  var h = vNameSpacing * (json.distinctNames.length);
  var countWidth4Digits = remConverter(30);
  var countMargin = remConverter(7); // space between furthest-out count (for Bella), also other count-related spacing
  var nameWidth = remConverter(45);
  var nameOffset = remConverter(6.5);
  var barWeight = remConverter(7);
  var barY = (vNameSpacing / 2) - (barWeight / 2);
  var vAxesOffset = remConverter(15);
  var axesBoxHeight = remConverter(18);
  var vTickLabelOffset = remConverter(-7);
 
  // scales
  var scale = d3.scaleLinear()
    .domain([0, highestOccurrence])
    .range([0, ((w / 2) - nameWidth - countWidth4Digits - countMargin)]);
  var scaleBackwards = d3.scaleLinear() // this only to be used by dog axis + selected state showing dog's counts (not even to be used for dog's bars!)
    .domain([0, highestOccurrence])
    .range([((w / 2) - nameWidth - countWidth4Digits - countMargin), 0]);

  // axes
  var humanAxis = d3.axisTop()
    .scale(scale)
    .ticks(3)
    .tickFormat(d3.format("~s"))
    .tickSize(0)
    .tickSizeOuter(0);
  var dogAxis = d3.axisTop()
    .scale(scaleBackwards)
    .ticks(3)
    .tickFormat(d3.format("~s"))
    .tickSize(0)
    .tickSizeOuter(0);

  // parent svg container
  var namesharesSvg = d3.select('#nameshares-vis > .inner')
    .append('svg')
      .attr('width', w)
      .attr('height', h);

  // tick lines inside vis
  var tickLinesGroup = namesharesSvg.selectAll('#nameshares-vis .tick-lines-group')
    .data([1]) // seem to need to call .data to get the group to be made, but only want one group, so manually specifying a single-data-point "dataset" as an array
    .enter()
    .append('g')
      .attr('class', 'tick-lines-group');
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', ((w / 2) + nameWidth) - 0.5)
    .attr('y1', 0)
    .attr('x2', ((w / 2) + nameWidth) - 0.5)
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', (w / 2) + nameWidth + scale(500))
    .attr('y1', 0)
    .attr('x2', (w / 2) + nameWidth + scale(500))
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', (w / 2) + nameWidth + scale(1000))
    .attr('y1', 0)
    .attr('x2', (w / 2) + nameWidth + scale(1000))
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', (w / 2) + nameWidth + scale(1500))
    .attr('y1', 0)
    .attr('x2', (w / 2) + nameWidth + scale(1500))
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', (countMargin + countWidth4Digits + scaleBackwards(0)) + 0.5)
    .attr('y1', 0)
    .attr('x2', (countMargin + countWidth4Digits + scaleBackwards(0)) + 0.5)
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', countMargin + countWidth4Digits + scaleBackwards(500))
    .attr('y1', 0)
    .attr('x2', countMargin + countWidth4Digits + scaleBackwards(500))
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', countMargin + countWidth4Digits + scaleBackwards(1000))
    .attr('y1', 0)
    .attr('x2', countMargin + countWidth4Digits + scaleBackwards(1000))
    .attr('y2', h);
  tickLinesGroup.append('line')
    .attr('class', 'tick-line')
    .attr('x1', countMargin + countWidth4Digits + scaleBackwards(1500))
    .attr('y1', 0)
    .attr('x2', countMargin + countWidth4Digits + scaleBackwards(1500))
    .attr('y2', h);

  // groups for bars + labels + selected state's rects and text
  var nameGroup = namesharesSvg.selectAll('#nameshares-vis .name-group')
    .data(json.distinctNames.slice().sort((a, b) => (d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence)) || d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence))))) // sort by dog occurrence, secondary-sort by reverse human occurrence (see file #3 for more sort options for the dataset, or for default (alphabetical), use `.data(json.distinctNames)`)
    .enter()
    .append('g')
      .attr('id', function(d) {
        return d.name;
      })
      .attr('class', 'name-group')
      .attr('transform', function(d, i) {
        return 'translate(0, ' + (i * vNameSpacing) + ')';
      });

  // dog counts
  nameGroup.append('text')
    .text(function(d) {
      if (d.info.dogOccurrence > 0) {
        return d3.format(",")(d3.format(".0f")(d.info.dogOccurrence));
      } 
    })
    .attr('class', function(d) {
      return 'count dog-count xs-textface count-' + d.name;
    })
    .attr('x', function(d) {
        return scaleBackwards(d.info.dogOccurrence);
    })
    .attr('y', barY + nameOffset - 1)
    .attr('opacity', '0');
  
  // loop through all dog counts to capture the SVG <text>'s width, to use for sliding <text> element (revealed upon hover) over the right amount
  var counts = document.querySelectorAll('#nameshares-vis .dog-count');
  var countWidthBenchmark = counts[0].getBBox().width;
  for (i = 0; i < counts.length; i++) {
    var countWidth = counts[i].getBBox().width;
    var countOffset = (countWidthBenchmark - countWidth) + countMargin;
    counts[i].setAttribute('transform', 'translate(' + (countOffset) + ', 0)');
  }

  // human counts
  nameGroup.append('text')
    .text(function(d) {
      if (d.info.humanOccurrence > 0) {
        return d3.format(",")(d3.format(".0f")(d.info.humanOccurrence));
      } 
    })
    .attr('class', function(d) {
      return 'count human-count xs-textface count-' + d.name;
    })
    .attr('x', function(d) {
      return scale(d.info.humanOccurrence) + (w / 2) + nameWidth + countMargin;
    })
    .attr('y', barY + nameOffset - 1)
    .attr('opacity', '0');

  // selected rect (made apparent on hover + search)
  nameGroup.append('rect')
      .attr('class', 'selected-box')
      .attr('width', w)
      .attr('height', vNameSpacing)
      .attr('x', 0)
      .attr('y', 0)
      .attr('opacity', 0)
      .on('mouseover', function(e, d) {
        namesharesSvg.selectAll('#nameshares-vis .selected-box')
          .attr('opacity', 0);
        namesharesSvg.selectAll('#nameshares-vis .count')
          .attr('opacity', 0);
        d3.select(this)
          .attr('opacity', 1);
        namesharesSvg.selectAll('#nameshares-vis .count-' + d.name)
          .attr('opacity', 1);
      })
      .on('mouseout', function () {
        d3.select(this)
          .attr('opacity', 0);
        namesharesSvg.selectAll('#nameshares-vis .count')
          .attr('opacity', 0);
      });

  // bars for dogs (red)
  nameGroup.append('rect') 
    .attr('class', 'bars-dog')
    .attr('width', function(d) {
      if (d.info.dogOccurrence == 0) { // clamping the smallest possible values so they're still visible, esp on small screens
        return 0;
      } else {
        return scale(d.info.dogOccurrence) + minBarSize;
      }
    })
    .attr('height', barWeight)
    .attr('x', ((w / 2) - nameWidth) * -1)
    .attr('y', barY);
  
  // bars for humans (red)
  nameGroup.append('rect')
    .attr('class', 'bars-human')
    .attr('width', function(d) { // clamping the smallest possible values so they're still visible, esp on small screens
      if (d.info.humanOccurrence == 0) {
        return 0;
      } else {
        return scale(d.info.humanOccurrence) + minBarSize;
      }
    })
    .attr('height', barWeight)
    .attr('x', (w / 2) + nameWidth)
    .attr('y', barY);

  // names
  nameGroup.append('text')
    .text(function(d) {
      return d.name;
    })
    .attr('class', 'name-label xs-textface bold')
    .attr('x', w / 2)
    .attr('y', barY + nameOffset);

  // call axes
  var namesharesAxes = d3.select('#nameshares-fixed')
  .append('svg')
    .attr('width', w)
    .attr('height', axesBoxHeight);

  namesharesAxes.append("g")
    .attr('class', 'axis xs-textface')
    .call(humanAxis)
    .attr('transform', 'translate(' + ((w / 2) + nameWidth) + ', ' + vAxesOffset + ')'); 

  namesharesAxes.append("g")
    .attr('class', 'axis xs-textface')
    .call(dogAxis)
    .attr('transform', 'translate(' + (countWidth4Digits + countMargin) + ', ' + vAxesOffset + ')');

  d3.selectAll('#nameshares-fixed .tick text') // repositioning tick labels
    .attr('y', vTickLabelOffset);

  namesharesAxes.append('line')
    .attr('id', 'h-axes-bg-line')
    .attr('x1', 0)
    .attr('y1', vAxesOffset)
    .attr('x2', w)
    .attr('y2', vAxesOffset);

  // sort function 
  var sortNames = function(sortMethod) {
    nameGroup.sort(function(a, b) {
      if (sortMethod == 'sort-occurrence-human') {
        return d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence)) || d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence));
      } else if (sortMethod == 'sort-dog-human-ratio') {
        return d3.descending(parseFloat(a.info.dogHumanRatioPer100), parseFloat(b.info.dogHumanRatioPer100)) || d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence)) || d3.ascending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence));
      } else if (sortMethod == 'sort-human-dog-ratio') {
        return d3.descending(parseFloat(a.info.humanDogRatioPer100), parseFloat(b.info.humanDogRatioPer100)) || d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence)) || d3.ascending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence));
      } else { // sort-occurrence-dog
        return d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence)) || d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence));
      } 
    })
    .attr('transform', function(d, i) {
      return 'translate(0, ' + (i * vNameSpacing) + ')';
    });
  } // close sortNames

  // connect sort dropdown to sort function
  var dropDown = document.getElementById("nameshares-sort-dropdown");
  function getDropDownValue() {
    var value = dropDown.value;
    sortNames(value);
    var namesharesInner = document.querySelector('#nameshares-vis .inner');
    namesharesInner.scrollTo(0,0);
  }
  dropDown.onchange = getDropDownValue;
  getDropDownValue();

  // search function
  function searchNames() {
    namesharesSvg.selectAll('#nameshares-vis .selected-box')
      .attr('opacity', 0);
    namesharesSvg.selectAll('#nameshares-vis .count')
      .attr('opacity', 0);
    var searchBox = document.querySelector('.nameshares-search-field'); 
    var input = searchBox.value.toUpperCase();
    if (document.getElementById(input)) {
      namesharesSvg.selectAll('#' + input)
        .select('#nameshares-vis .selected-box')
        .attr('opacity', 1);
      namesharesSvg.selectAll('#nameshares-vis .count-' + input)
        .attr('opacity', 1);
      var searchResult = document.getElementById(input);
      searchResult.scrollIntoView();
    } else {
      d3.select('#nameshares-error')
        .classed('visible', true);
    } // close if 
  }; // close searchNames

  // call search function when hit enter key
  d3.select("#nameshares-sort-search #nameshares-search-input")
    .on("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode == 13) {
        searchNames();
      }
    });
  
  // call search function when click search button
  d3.select("#nameshares-search-button")
    .on("click", searchNames);

  // clear "Name not found" message
  var searchBox = document.querySelector('.nameshares-search-field');
  function clearSearchError() {
    d3.select('#nameshares-error')
      .classed('visible', false);
  }
  searchBox.addEventListener('change', clearSearchError);
  searchBox.onchange = clearSearchError;
  clearSearchError();
  
}); // close JSON function