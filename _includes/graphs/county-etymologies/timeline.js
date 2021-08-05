var boxheight = 5; // width + height each symbol is alotted, including padding
var symbolheight = boxheight - 2.5; // actual width + height each symbol is (sans padding)

// load in the data
d3.csv("assets/data/blogposts/county-etymologies/data_county-etymologies.csv")
  .then(function(data) {

  // bin the data by decade
  var bin = d3.bin()
    .domain([
        d3.min(data, function(d) { return parseFloat(d.year); }),
        d3.max(data, function(d) { return parseFloat(d.year); })
      ])
    .value(function(d) {
      return parseFloat(d.year);
    })
    .thresholds(152); // approximately one bin per two years

  var binnedCounties = bin(data);

  // group by category within each bin
  var binnedCats = [];

  for (var j = 0; j < binnedCounties.length; j++) { // loop through ~152 times
    binnedCats[j] = [];
    for (var k = 0; k < binnedCounties[j].length; k++) { // within each j-loop, loop through as many times as it is long
      if (binnedCats[j] == []) {
        binnedCats[j] = [];
      } else {
        binnedCats[j] = [d3.group(binnedCounties[j], function(d) {
          return d.category; })];
      } // close if
    } // k
  } // j

  // prepare the data to be able to be stack-ified (like the dataset in O'Reilly Ch 13 stack-layout.html)
  var stackedBarData = [];

  for (var l = 0; l < binnedCats.length; l++) { // loop through ~152 times
    stackedBarData[l] = {};
    for (var m = 0; m < binnedCats[l].length; m++) { // within each l-loop, loop through as many times as it is long

      // establish vars to be set within subsequent if-statements and for-loops
      var battleCount,
          combinationCount,
          conceptCount,
          creationCount,
          floraCount,
          geologyCount,
          groupCount,
          manCount,
          objectCount,
          placeCount,
          resourceCount,
          womanCount,
          unknownCount;

      var battleNatAmCount = 0;
      var combinationNatAmCount = 0;
      var conceptNatAmCount = 0;
      var creationNatAmCount = 0;
      var floraNatAmCount = 0;
      var geologyNatAmCount = 0;
      var groupNatAmCount = 0;
      var manNatAmCount = 0;
      var objectNatAmCount = 0;
      var placeNatAmCount = 0;
      var resourceNatAmCount = 0;
      var womanNatAmCount = 0;
      var unknownNatAmCount = 0;

      if (binnedCats[l][0].get('battle')) { // if this time-period's-worth of counties contains a group of counties (at least one county) named after a battle
        var battleNatAmCount = 0; // starting tally at 0 for each time period
        for (var q = 0; q < binnedCats[l][0].get('battle').length; q++) { // ... for each of the counties named after battles
          if (binnedCats[l][0].get('battle')[q].language == 'natam') { // ... if that county's name is in a Native American language
            battleNatAmCount += 1; // add it to the tally of counties in that decade named for a battle in a Native American language
          }
        }
        battleCount = binnedCats[l][0].get('battle').length; // if there was at least one county (within this time-period's-worth of counties) named for a battle, set count of counties named after battles in general
      } else {
        battleCount = 0; // if there were no counties (within this time-period's-worth of counties) named for a battle, set count to 0
      }; // close count if-statement

      if ((binnedCats[l][0].get('combination'))) {
        var combinationNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('combination').length; q++) {
          if (binnedCats[l][0].get('combination')[q].language == 'natam') {
            combinationNatAmCount += 1;
          }
        }
        combinationCount = binnedCats[l][0].get('combination').length;
      } else {
        combinationCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('concept'))) {
        var conceptNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('concept').length; q++) {
          if (binnedCats[l][0].get('concept')[q].language == 'natam') {
            conceptNatAmCount += 1;
          }
        }
        conceptCount = binnedCats[l][0].get('concept').length;
      } else {
        conceptCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('creation'))) {
        var creationNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('creation').length; q++) {
          if (binnedCats[l][0].get('creation')[q].language == 'natam') {
            creationNatAmCount += 1;
          }
        }
        creationCount = binnedCats[l][0].get('creation').length;
      } else {
        creationCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('flora'))) {
        var floraNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('flora').length; q++) {
          if (binnedCats[l][0].get('flora')[q].language == 'natam') {
            floraNatAmCount += 1;
          }
        }
        floraCount = binnedCats[l][0].get('flora').length;
      } else {
        floraCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('geology'))) {
        var geologyNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('geology').length; q++) {
          if (binnedCats[l][0].get('geology')[q].language == 'natam') {
            geologyNatAmCount += 1;
          }
        }
        geologyCount = binnedCats[l][0].get('geology').length;
      } else {
        geologyCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('group'))) {
        var groupNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('group').length; q++) {
          if (binnedCats[l][0].get('group')[q].language == 'natam') {
            groupNatAmCount += 1;
          }
        }
        groupCount = binnedCats[l][0].get('group').length;
      } else {
        groupCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('man'))) {
        var manNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('man').length; q++) {
          if (binnedCats[l][0].get('man')[q].language == 'natam') {
            manNatAmCount += 1;
          }
        }
        manCount = binnedCats[l][0].get('man').length;
      } else {
        manCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('object'))) {
        var objectNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('object').length; q++) {
          if (binnedCats[l][0].get('object')[q].language == 'natam') {
            objectNatAmCount += 1;
          }
        }
        objectCount = binnedCats[l][0].get('object').length;
      } else {
        objectCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('place'))) {
        var placeNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('place').length; q++) {
          if (binnedCats[l][0].get('place')[q].language == 'natam') {
            placeNatAmCount += 1;
          }
        }
        placeCount = binnedCats[l][0].get('place').length;
      } else {
        placeCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('resource'))) {
        var resourceNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('resource').length; q++) {
          if (binnedCats[l][0].get('resource')[q].language == 'natam') {
            resourceNatAmCount += 1;
          }
        }
        resourceCount = binnedCats[l][0].get('resource').length;
      } else {
        resourceCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('woman'))) {
        var womanNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('woman').length; q++) {
          if (binnedCats[l][0].get('woman')[q].language == 'natam') {
            womanNatAmCount += 1;
          }
        }
        womanCount = binnedCats[l][0].get('woman').length;
      } else {
        womanCount = 0;
      }; // close count if-statement

      if ((binnedCats[l][0].get('unknown'))) {
        var unknownNatAmCount = 0;
        for (var q = 0; q < binnedCats[l][0].get('unknown').length; q++) {
          if (binnedCats[l][0].get('unknown')[q].language == 'natam') {
            unknownNatAmCount += 1;
          }
        }
        unknownCount = binnedCats[l][0].get('unknown').length;
      } else {
        unknownCount = 0;
      }; // close count if-statement

    } // m

    // specify structure for ultimate dataset to be used for visualization
    stackedBarData[l] = {
      'battle':       ['battle',      parseFloat(battleCount),      parseFloat(battleNatAmCount)],
      'combination':  ['combination', parseFloat(combinationCount), parseFloat(combinationNatAmCount)],
      'concept':      ['concept',     parseFloat(conceptCount),     parseFloat(conceptNatAmCount)],
      'creation':     ['creation',    parseFloat(creationCount),    parseFloat(creationNatAmCount)],
      'flora':        ['flora',       parseFloat(floraCount),       parseFloat(floraNatAmCount)],
      'geology':      ['geology',     parseFloat(geologyCount),     parseFloat(geologyNatAmCount)],
      'group':        ['group',       parseFloat(groupCount),       parseFloat(groupNatAmCount)],
      'man':          ['man',         parseFloat(manCount),         parseFloat(manNatAmCount)],
      'object':       ['object',      parseFloat(objectCount),      parseFloat(objectNatAmCount)],
      'place':        ['place',       parseFloat(placeCount),       parseFloat(placeNatAmCount)],
      'resource':     ['resource',    parseFloat(resourceCount),    parseFloat(resourceNatAmCount)],
      'woman':        ['woman',       parseFloat(womanCount),       parseFloat(womanNatAmCount)],
      'unknown':      ['unknown',     parseFloat(unknownCount),     parseFloat(unknownNatAmCount)]
    };

  } // l

  // add a map object(?) to hold metadata per time period x category, to be used in positioning symbols
  stackedBarData.forEach(function(d){
    var y0 = 0;
    d.offsets = [d.battle, d.combination, d.concept, d.creation, d.flora, d.geology, d.group, d.man, d.object, d.place, d.resource, d.woman, d.unknown]
      .map(function(category){
      return {category: category[0], y0: y0, y1: y0 += +category[1], value : category[1], natam : category[2]}
    });
  });

  // view various phases of datasets in the console for troubleshooting
  console.log(data);
  console.log('data ^^^');
  console.log(binnedCounties);
  console.log('binnedCounties ^^^');
  console.log(binnedCats);
  console.log('binnedCats ^^^');
  console.log(stackedBarData);
  console.log('stackedBarData ^^^');

  // calculate the maximum number of counties for any time period
  var max = d3.max(stackedBarData, function(d) { return d.battle[1] + d.combination[1] + d.concept[1] + d.creation[1] + d.flora[1] + d.geology[1] + d.group[1] + d.man[1] + d.object[1] + d.place[1] + d.resource[1] + d.woman[1] + d.unknown[1] });

  // set dimensions
  var margin = {top: 20, right: 20, bottom: 80, left: 40},
      width = boxheight * stackedBarData.length, // width a symbol is alotted x number of time periods
      height = max * boxheight; // height a symbol is alotted x number of counties in time period with most counties

  // build a function to make translating easier (less finicky: removes the need for strings combined with non-strings)
  var translate = function(x,y){
    return "translate(" + x + "," + y + ")";
  }

  // scales
  var x = d3.scaleLinear()
      .domain([0, stackedBarData.length])
      .range([0, width]);

  var y = d3.scaleLinear()
      .domain([0, max])
      .rangeRound([height, 0]);

  // axes
  // var originalTickValues = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97, 107, 117, 127, 137, 147, 157, 167, 177, 187, 197]; // determine original ticks to be overtaken by new tick values
  var originalTickValues = [9, 34, 59, 84, 109, 134, 159, 184]; // determine original ticks to be overtaken by new tick values
  // var xAxisTicks = [1640, 1660, 1680, 1700, 1720, 1740, 1760, 1780, 1800, 1820, 1840, 1860, 1880, 1900, 1920, 1940, 1960, 1980, 2000]; // create array to pull from for x-axis ticks
  var xAxisTicks = [1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000]; // create array to pull from for x-axis ticks

  console.log(originalTickValues);
  console.log('originalTickValues ^^^');
  console.log(xAxisTicks);
  console.log('xAxisTicks ^^^');

  var xAxis = d3.axisBottom()
      .scale(x)
      // .ticks(18)
      .tickValues(originalTickValues)
      .tickFormat((d,i) => xAxisTicks[i]);

  var yAxis = d3.axisLeft()
      .scale(y);

  // assign color per category
  var color = d3.scaleOrdinal(d3.schemePaired)
      .domain(['battle', 'combination', 'concept', 'creation', 'flora', 'geology', 'group', 'man', 'object', 'place', 'resource', 'woman', 'unknown']);

  // build the vis! ----------------------------------------------------------

  // build parent container
  var timelineSvg = d3.select("#timeline-vis").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", translate(margin.left, margin.top + 0.5));

  // set vars to use and reuse when setting hover state
  var strokeWidthOff = 1.5;
  var strokeWidthOn = 2;
  var opacityStandard = 1;
  var opacityOff = 0.2;

  // group per time-period to establish columns
  var columns = timelineSvg.selectAll(".column")
      .data(stackedBarData)
        .enter().append("g")
          .attr("transform", function(d,i){
            return "translate(" + x(i) + ", 0)";
          })
          // .attr("class", "column")
          .attr("class", function(d, i) {
            return 'column column-' + i;
          })
          .attr('stroke-width', strokeWidthOff)
          .attr('stroke-linecap', 'round')
          .on('mouseover', function(d) {
            var columnIdentifier = d3.select(this).attr('class');
            timelineSvg.selectAll(".column")
              .each(function(d) {
                if (d3.select(this).attr('class') == columnIdentifier) {
                  d3.select(this)
                    .attr('stroke-width', strokeWidthOn);
                } else {
                  d3.select(this)
                    .style('opacity', opacityOff);
                }
              });
          })
          .on('mouseout', function(d) {
            timelineSvg.selectAll(".column")
              .each(function(d) {
                d3.select(this)
                  .style('opacity', opacityStandard)
                  .attr('stroke-width', strokeWidthOff);
              })
          });

  // within each column, create a group per category (time period x category)
  var categories = columns.selectAll(".category")
      .data(function(d){
        return d.offsets; // looking at `offsets` metadata section per time-period only
      })
      .enter().append("g")
        .attr("transform", function(d){
          // return translate(0,y(d.y1 - d.natam)); // USE THIS LINE + COMMENT OUT BELOW LINE + SWAP OUT ANOTHER LINE OF CODE LOWER DOWN (~405 & 406) IF WANT NAT AM SYMBOLS AT THE TOP OF EACH CATEGORY GROUP PER COLUMN!!! shift to accommodate Nat Am symbols
          return translate(0,y(d.y1));  // USE THIS LINE + COMMENT OUT ABOVE LINE + SWAP OUT ANOTHER LINE OF CODE LOWER DOWN (~405 & 406) IF WANT NAT AM SYMBOLS AT THE BOTTOM OF EACH CATEGORY GROUP PER COLUMN!!! shift to accommodate Nat Am symbols
        })
        .attr("class", function(d) {
          return 'category ' + d.category;
        })
        .attr('data-histosymbolvalue', function(d) { // set HTML `data-*` attribute to transfer d.value data to Nat Am symbols lower down, so they can be positioned properly
          return d.value;
        })
        .attr('stroke', function(d){ // color by category
          return color(d.category);
        });

  // for European-named counties only: within each column's category-group, create a group per symbol to hold the symbol, then append the symbol
  categories.selectAll(".euro-histo-symbol")
      .data(function(d){
        return d3.range(0, d.value - d.natam); // this equals the number of European-named counties per time period x category
      })
      .enter().append("g")
        .attr('class', 'euro-histo-symbol')
        .attr("transform", function(d) {
          return translate(boxheight, boxheight * d)
        })
      .append('line') // from bottom-left to top-right
        .attr('x1', -symbolheight) // backing out to the left edge of the box (but maintaining "padding" set by difference between `boxheight` and `symbolheight`)
        .attr('x2', 0)
        .attr('y1', symbolheight)
        .attr('y2', 0)
        // .attr('stroke-width', 1.5);

  // for Nat Am-named counties only: within each column's category-group, create a group per symbol to hold the symbol, but don't append the symbol yet!
  var natamHistoSymbol = categories.selectAll(".natam-histo-symbol")
      .data(function(d){
        return d3.range(0,d.natam);
      })
      .enter().append("g")
        .attr('class', 'natam-histo-symbol'); // set class so it can be found by subsequent for-loops

  // use JS to pull the data from parent group's `data-histosymbolvalue` (since this is stored in the data at a level above what we are using with d3 to build the symbols themselves)
  var columnCategoryList = document.getElementsByClassName('category'); // get all time period x category groups

  for (var r = 0; r < columnCategoryList.length; r++) { // loop through all time period x category groups

    var valueForDiff = parseFloat(columnCategoryList[r].getAttribute('data-histosymbolvalue')); // offset.value (number of counties within that time period x category group)
    var columnCategoryListChildren = columnCategoryList[r].children; // each symbol-holder

    for (var s = 0; s < columnCategoryListChildren.length; s++) { // loop through all symbol-holders

      if (columnCategoryListChildren[s].getAttribute('class') == 'natam-histo-symbol') { // (don't need an if-statment; could harmlessly apply to class 'euro-histo-symbol' as well, but not needed by them)

        // use d3 to position Nat Am symbol holder groups + append symbols
        d3.select(columnCategoryListChildren[s]) // select a symbol holder
          .attr('class', 'natam-histo-symbol')
          .attr("transform", function(d){
            // return translate(boxheight, (boxheight * (s - valueForDiff))); // USE THIS LINE + COMMENT OUT BELOW LINE + SWAP OUT ANOTHER LINE OF CODE FURTHER UP (~353 & 354) IF WANT NAT AM SYMBOLS AT THE TOP OF EACH CATEGORY GROUP PER COLUMN!!! offset by boxheight * (index - total of counties for this time-period x category, regardless of language)
            return translate(boxheight, (boxheight * s)); // USE THIS LINE + COMMENT OUT ABOVE LINE + SWAP OUT ANOTHER LINE OF CODE FURTHER UP (~353 & 354) IF WANT NAT AM SYMBOLS AT THE BOTTOM OF EACH CATEGORY GROUP PER COLUMN!!! offset by boxheight * (index - total of counties for this time-period x category, regardless of language)
          })
        .append('line') // from top-left to bottom-right
          .attr('x1', -symbolheight)
          .attr('x2', 0)
          .attr('y1', 0)
          .attr('y2', symbolheight)
          // .attr('stroke-width', 1.5);

      } // close if-statement
    } // s
  } // r

  // call axes
  timelineSvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  timelineSvg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

}); // close CSV function
