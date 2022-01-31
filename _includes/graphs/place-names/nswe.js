var w = 1400;
var h = 1050;

var nsweUSsvg = d3.select('#nswe-vis')
  .append('svg')
    .attr('width', w)
    .attr('height', h)
    .style('background', '#eeeeee');

var nswePathContainer = nsweUSsvg.append('g') // group to hold state + county outlines
  .attr('id', 'path-container');

var nsweCentroidContainer = nsweUSsvg.append('g') // group to hold centroid symbols
  .attr('id', 'centroid-container');

var nsweProjection = d3.geoAlbersUsa()
  // .translate([w/2, h/2])
  .translate([500, h * 0.7])
  .scale([1200]);

var nswePath = d3.geoPath()
  .projection(nsweProjection);

// load CSV of county etymology data
d3.csv('assets/data/blogposts/county-etymologies/data_county-etymologies.csv')
  .then(function(data) {

  // load JSON of state outlines
  d3.json('assets/data/blogposts/county-etymologies/data_states-20m.json')
    .then(function(json) {
    // draw state outlines
    nswePathContainer.selectAll('.state-outline')
      .data(json.features)
      .enter()
      .append('path')
        .attr('d', nswePath)
        .attr('class', 'state-outline');
  }); // close JSON function for state outlines

  // load JSON of county outlines
  d3.json('assets/data/blogposts/county-etymologies/data_counties-20m.json')
    .then(function(json) {

    // join the CSV data to the JSON data
    for (var i = 0; i < data.length; i++) {

      var csvCountyId = data[i].id; // get county id from etymology CSV
      var csvCountyLanguage = data[i].language; // get language per county
      var csvCountyCategory = data[i].category; // get language per county
      var csvCountyEtymology = data[i].etymology; // get etymology per county
      var csvCountyState = data[i].state; // get state name per county

      for (var j = 0; j < json.features.length; j++) { // find the corresponding county id within the GeoJSON

        var pathCountyId = json.features[j].properties.STATE + json.features[j].properties.COUNTY;

        if (csvCountyId == pathCountyId) {
          json.features[j].properties.language = csvCountyLanguage; // copy the language into the JSON per county
          json.features[j].properties.category = csvCountyCategory; // copy the category into the JSON per county
          json.features[j].properties.etymology = csvCountyEtymology; // copy the etymology into the JSON per county
          json.features[j].properties.csvstate = csvCountyState; // copy the state name into the JSON per county
          break; // stop looking through the JSON
        } // close if
      } // close j for-loop
    } // close i for-loop

    // draw county outlines
    nswePathContainer.selectAll('.county-outline')
      .data(json.features)
      .enter()
      .append('path')
        .attr('d', nswePath)
        .attr('class', 'county-outline');

    var color = d3.scaleOrdinal(d3.schemePaired);

    // establish county centroids
    nsweCentroidContainer.selectAll('circle')
      .data(json.features)
      .enter()
      .append('circle')
        // .attr('class', 'county-centroid')
        .attr('class', function(d) {
          if (d.properties.language == 'euro') {
            return 'euro nswe-layer';
          } else {
            return 'natam nswe-layer';
          }
        })
        .attr('cx', function(d) {
          return nswePath.centroid(d)[0];
        })
        .attr('cy', function(d) {
          return nswePath.centroid(d)[1];
        })
        .attr('r', 2)
        .attr('fill', function(d) {
          if (d.properties.language == 'euro') {
            // return color(1);
            return 'rgb(175, 175, 0)'; // olive
          } else {
            // return color(2);
            return 'rgb(0, 175, 175)'; // turquoise
          }
        });
        // .attr('fill', 'gray');

    // WEST-EAST ===========================================================

    // binning the dataset rows, WE
    var WEdataBin = d3.bin()
      .domain([
          d3.min(json.features, function(d) { return nswePath.centroid(d)[0]; }),
          d3.max(json.features, function(d) { return nswePath.centroid(d)[0]; })
        ])
      .value(function(d) {
        return nswePath.centroid(d)[0];
      })
      .thresholds(50);

    var binnedDataX = WEdataBin(json.features, function(d) { return nswePath.centroid(d)[0]; });

    // WE: prepare the data to be able to be stack-ified (like the dataset in O'Reilly Ch 13 stack-layout.html)
    var stackedBarWE = [];
    for (var l = 0; l < binnedDataX.length; l++) { // loop through length of W-E bins
      stackedBarWE[l] = {
        'euro':   binnedDataX[l].filter(function(d) { return d.properties.language == 'euro' }).length,
        'natam':  binnedDataX[l].filter(function(d) { return d.properties.language == 'natam' }).length,
      };
    } // l

    stackedBarPercentWE = [];

    for (var m = 0; m < stackedBarWE.length; m++) { // loop through length of W-E stacked bar dataset
      // var rowTotal = stackedBarWE[m].euro + stackedBarWE[m].natam;
      if (stackedBarWE[m].euro + stackedBarWE[m].natam != 0) {
        rowTotal = stackedBarWE[m].euro + stackedBarWE[m].natam;
      } else {
        rowTotal = 1; // preventing dividing by 0 in next section, in case there are bins without any counties (the second bin in for W-E currently is, due to Alaska)
      }
      stackedBarPercentWE[m] = {
        'euro':   stackedBarWE[m].euro / rowTotal,
        'natam':  stackedBarWE[m].natam / rowTotal,
      };
    } // m

    var weStack = d3.stack()
      // .keys([ 'euro', 'natam' ])
      .keys([ 'euro', 'natam' ])
      .order(d3.stackOrderAscending);

    // var weSeries = weStack(stackedBarPercentWE);
    var weSeries = weStack(stackedBarWE);

    // define area generator
    weArea = d3.area()
      .x(function(d, i) { return weScaleX(parseInt(i)); })
      .y0(function(d) { return weScaleY(parseInt(d[0])); })
      .y1(function(d) { return weScaleY(parseInt(d[1])); });

    console.log('json.features, post-join');
    console.log(json.features);
    console.log('binnedDataX');
    console.log(binnedDataX);
    console.log('stackedBarWE');
    console.log(stackedBarWE);
    console.log('stackedBarPercentWE');
    console.log(stackedBarPercentWE);
    console.log('weSeries');
    console.log(weSeries);

    var xScaleWE = d3.scaleLinear()
        .domain([0, stackedBarPercentWE.length])
        .range([0, 850]);
    var yScaleWE = d3.scaleLinear()
        /* .domain([0, d3.max(stackedBarWE, function(d) {
          return d.euro;
        })]) */
        .domain([0, 1])
        .range([400, 0]);

    // try wrapping this + build section below in a for-loop for number of langs / categories...
    // EURO

    // define area generator
    var weEuroArea = d3.area()
      .x(function(d, i) { return xScaleWE(parseFloat(i)); })
      .y0(function(d) { return yScaleWE(parseFloat(d.euro + d.natam)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
      .y1(function(d) { return yScaleWE(parseFloat(d.natam)); })
      .curve(d3.curveBasis);

    nsweUSsvg.append("path")
        .attr('class', 'euro nswe-layer')
        .attr("d", weEuroArea(stackedBarPercentWE))
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')')
        .style("fill", function(d, i) {
          // return color(1);
          return 'rgb(175, 175, 0)'; // olive
        })
        .on('mouseover', function(d) {
          var hoverChunk = d3.select(this).attr('class');
          nsweUSsvg.selectAll('.nswe-layer')
            .each(function(d) {
              if (d3.select(this).attr('class') == hoverChunk) {
                d3.select(this)
                  .style('stroke', 'black');
              } else {
                d3.select(this)
                  .style('opacity', '0.2');
              }
            })
          })
          .on('mouseout', function(d) {
            var hoverChunk = d3.select(this).attr('class');
            nsweUSsvg.selectAll('.nswe-layer')
              .each(function(d) {
                d3.select(this)
                  .style('stroke', 'none');
                d3.select(this)
                  .style('opacity', '1');
              })
            });

    // NATAM

    // define area generator
    var weNatamArea = d3.area()
      .x(function(d, i) { return xScaleWE(parseFloat(i)); })
      .y0(function(d) { return yScaleWE(parseFloat(d.natam)); })
      // .y1(0) // this fills up to the top!
      .y1(400) // match height of chart
      .curve(d3.curveBasis);

    nsweUSsvg.append("path")
        .attr('class', 'natam nswe-layer')
        .attr("d", weNatamArea(stackedBarPercentWE))
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')')
        .style("fill", function(d, i) {
          // return color(2);
          return 'rgb(0, 175, 175)'; // turquoise
        })
        .on('mouseover', function(d) {
          var hoverChunk = d3.select(this).attr('class');
          nsweUSsvg.selectAll('.nswe-layer')
            .each(function(d) {
              if (d3.select(this).attr('class') == hoverChunk) {
                d3.select(this)
                  .style('stroke', 'black');
              } else {
                d3.select(this)
                  .style('opacity', '0.2');
              }
            })
          })
          .on('mouseout', function(d) {
            var hoverChunk = d3.select(this).attr('class');
            nsweUSsvg.selectAll('.nswe-layer')
              .each(function(d) {
                d3.select(this)
                  .style('stroke', 'none');
                d3.select(this)
                  .style('opacity', '1');
              })
            });

    // NORTH-SOUTH ===========================================================

    // binning the dataset rows, NS
    var NSdataBin = d3.bin()
      .domain([
          d3.min(json.features, function(d) { return nswePath.centroid(d)[1]; }),
          d3.max(json.features, function(d) { return nswePath.centroid(d)[1]; })
        ])
      .value(function(d) {
        return nswePath.centroid(d)[1];
      })
      .thresholds(25); // Verify what this should be, in order to be proportional to NS's width

    var binnedDataY = NSdataBin(json.features, function(d) { return nswePath.centroid(d)[1]; });

    // NS: prepare the data to be able to be stack-ified (like the dataset in O'Reilly Ch 13 stack-layout.html)
    var stackedBarNS = [];
    for (var l = 0; l < binnedDataY.length; l++) { // loop through length of W-E bins
      stackedBarNS[l] = {
        'euro':   binnedDataY[l].filter(function(d) { return d.properties.language == 'euro' }).length,
        'natam':  binnedDataY[l].filter(function(d) { return d.properties.language == 'natam' }).length,
      };
    } // l

    stackedBarPercentNS = [];

    for (var m = 0; m < stackedBarNS.length; m++) { // loop through length of W-E stacked bar dataset
      // var rowTotal = stackedBarNS[m].euro + stackedBarNS[m].natam;
      if (stackedBarNS[m].euro + stackedBarNS[m].natam != 0) {
        rowTotal = stackedBarNS[m].euro + stackedBarNS[m].natam;
      } else {
        rowTotal = 1; // preventing dividing by 0 in next section, in case there are bins without any counties (the second bin in for W-E currently is, due to Alaska)
      }
      stackedBarPercentNS[m] = {
        'euro':   stackedBarNS[m].euro / rowTotal,
        'natam':  stackedBarNS[m].natam / rowTotal,
      };
    } // m

    var nsStack = d3.stack()
      .keys([ 'euro', 'natam' ])
      .order(d3.stackOrderAscending);

    // var nsSeries = nsStack(stackedBarPercentNS);
    var nsSeries = nsStack(stackedBarNS);

    // define area generator
    nsArea = d3.area()
      .x(function(d, i) { return nsScaleX(parseInt(i)); })
      .y0(function(d) { return nsScaleY(parseInt(d[0])); })
      .y1(function(d) { return nsScaleY(parseInt(d[1])); });

    console.log('json.features, post-join');
    console.log(json.features);
    console.log('binnedDataY');
    console.log(binnedDataY);
    console.log('stackedBarNS');
    console.log(stackedBarNS);
    console.log('stackedBarPercentNS');
    console.log(stackedBarPercentNS);
    console.log('nsSeries');
    console.log(nsSeries);

    var xScaleNS = d3.scaleLinear()
        .domain([0, stackedBarPercentNS.length])
        .range([0, 500]);
    var yScaleNS = d3.scaleLinear()
        /* .domain([0, d3.max(stackedBarNS, function(d) {
          return d.euro;
        })]) */
        .domain([0, 1])
        .range([400, 0]);

    // try wrapping this + build section below in a for-loop for number of langs / categories...
    // EURO

    // define area generator
    var nsEuroArea = d3.area()
      .x(function(d, i) { return xScaleNS(parseFloat(i)); })
      .y0(function(d) { return yScaleNS(parseFloat(d.euro + d.natam)); }) // NEEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
      .y1(function(d) { return yScaleNS(parseFloat(d.natam)); })
      .curve(d3.curveBasis);

    nsweUSsvg.append("path")
        .attr('class', 'euro nswe-layer')
        .attr("d", nsEuroArea(stackedBarPercentNS))
        .attr('transform', 'translate(' + 1350 + ',' + 500 + ') rotate(90)')
        .style("fill", function(d, i) {
          // return color(1);
          return 'rgb(175, 175, 0)'; // olive
        })
        .on('mouseover', function(d) {
          var hoverChunk = d3.select(this).attr('class');
          nsweUSsvg.selectAll('.nswe-layer')
            .each(function(d) {
              if (d3.select(this).attr('class') == hoverChunk) {
                d3.select(this)
                  .style('stroke', 'black');
              } else {
                d3.select(this)
                  .style('opacity', '0.2');
              }
            })
          })
          .on('mouseout', function(d) {
            var hoverChunk = d3.select(this).attr('class');
            nsweUSsvg.selectAll('.nswe-layer')
              .each(function(d) {
                d3.select(this)
                  .style('stroke', 'none');
                d3.select(this)
                  .style('opacity', '1');
              })
            });

    // NATAM

    // define area generator
    var nsNatamArea = d3.area()
      .x(function(d, i) { return xScaleNS(parseFloat(i)); })
      .y0(function(d) { return yScaleNS(parseFloat(d.natam)); })
      // .y1(0) // this fills up to the top!
      .y1(400) // match height of chart
      .curve(d3.curveBasis);

    nsweUSsvg.append("path")
        .attr('class', 'natam nswe-layer')
        .attr("d", nsNatamArea(stackedBarPercentNS))
        .attr('transform', 'translate(' + 1350 + ',' + 500 + ') rotate(90)')
        .style("fill", function(d, i) {
          // return color(2);
          return 'rgb(0, 175, 175)'; // turquoise
        })
        .on('mouseover', function(d) {
          var hoverChunk = d3.select(this).attr('class');
          nsweUSsvg.selectAll('.nswe-layer')
            .each(function(d) {
              if (d3.select(this).attr('class') == hoverChunk) {
                d3.select(this)
                  .style('stroke', 'black');
              } else {
                d3.select(this)
                  .style('opacity', '0.2');
              }
            })
          })
          .on('mouseout', function(d) {
            var hoverChunk = d3.select(this).attr('class');
            nsweUSsvg.selectAll('.nswe-layer')
              .each(function(d) {
                d3.select(this)
                  .style('stroke', 'none');
                d3.select(this)
                  .style('opacity', '1');
              })
            });


  }); // close JSON function for county outlines

}); // close CSV function
