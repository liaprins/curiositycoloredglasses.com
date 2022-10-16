var w = 1000;
      var h = 600;

      var nsweUSsvg = d3.select('#nswe-percent-lang')
        .append('svg')
          .attr('width', w)
          .attr('height', h)
          // .style('background', '#f5f5f5');

      var nswePercentCatContainer = nsweUSsvg.append('g') // group to hold state + county outlines
        .attr('id', 'path-container-percent-lang');

      var nswePercentCatCentroidContainer = nsweUSsvg.append('g') // group to hold centroid symbols
        .attr('id', 'centroid-container-percent-lang');

      var nsweProjection = d3.geoMercator()
        // .translate([w/2, h/2])
        .translate([1530, 865])
        .scale([675]);

      var nswePercentCatPath = d3.geoPath()
        .projection(nsweProjection);

      // load CSV of county etymology data
      d3.csv('assets/data/blogposts/sample-post/data_ix-map.csv')
        .then(function(data) {

        // load JSON of state outlines
        d3.json('assets/data/blogposts/sample-post/data_states.json')
          .then(function(json) {

          // percent state outlines
          nswePercentCatContainer.selectAll('.state-outline-percent-lang')
            .data(json.features.filter(function(d) {
              return (d.properties.STATE != '02') && (d.properties.STATE != '15'); // leave out any without hex coordinates
            }))
            .enter()
            .append('path')
              .attr('d', nswePercentCatPath)
              .attr('class', 'state-outline state-outline-percent-lang');
        }); // close JSON function for state outlines

        // load JSON of county outlines
        d3.json('assets/data/blogposts/sample-post/data_counties.json')
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

          // dpercent county outlines
          nswePercentCatContainer.selectAll('.county-outline-percent-lang')
            .data(json.features.filter(function(d) {
              return (d.properties.STATE != '02') && (d.properties.STATE != '15'); // leave out any without hex coordinates
            }))
            .enter()
            .append('path')
              .attr('d', nswePercentCatPath)
              .attr('class', 'county-outline county-outline-percent-lang');

          var color = d3.scaleOrdinal(d3.schemePaired);

          var nonHiakData = json.features.filter(function(d) {
            return (d.properties.csvstate != 'Alaska') && (d.properties.csvstate != 'Hawaii'); // leave out any without hex coordinates
          });

          // establish county centroids
          nswePercentCatCentroidContainer.selectAll('.nswe-layer-percent-lang')
            .data(nonHiakData)
            .enter()
            .append('circle')
              // .attr('class', 'county-centroid')
              .attr('class', function(d) {
                if (d.properties.category == 'people') {
                  // return 'people-percent-lang nswe-layer-percent-lang nswe-centroid';
                  return 'people-percent-lang nswe-layer-percent-lang';
                } else if (d.properties.category == 'place') {
                  // return 'place-percent-lang nswe-layer-percent-lang nswe-centroid';
                  return 'place-percent-lang nswe-layer-percent-lang';
                } else if (d.properties.category == 'nature') {
                  // return 'nature-percent-lang nswe-layer-percent-lang nswe-centroid';
                  return 'nature-percent-lang nswe-layer-percent-lang';
                } else if (d.properties.category == 'concept') {
                  // return 'concept-percent-lang nswe-layer-percent-lang nswe-centroid';
                  return 'concept-percent-lang nswe-layer-percent-lang';
                } else if (d.properties.category == 'unknown') {
                  // return 'unknown-percent-lang nswe-layer-percent-lang nswe-centroid';
                  return 'unknown-percent-lang nswe-layer-percent-lang';
                }
              })
              .attr('cx', function(d) {
                return nswePercentCatPath.centroid(d)[0];
              })
              .attr('cy', function(d) {
                return nswePercentCatPath.centroid(d)[1];
              })
              .attr('r', 2.25)
              .attr('fill', function(d) {
                if (d.properties.category == 'people') {
                  // return 'rgb(201, 85, 116)';
                  return '#D9C775';
                } else if (d.properties.category == 'place') {
                  // return 'rgb(116, 127, 202)';
                  return '#5B6988';
                } else if (d.properties.category == 'nature') {
                  // return 'rgb(78, 172, 124)';
                  return '#77B7B4';
                } else if (d.properties.category == 'concept') {
                  // return 'rgb(179, 148, 63)';
                  return '#BC80A5';
                } else if (d.properties.category == 'unknown') {
                  // return 'rgb(150, 150, 150)';
                  return '#B2AEA9';
                }
              });
              // .attr('fill', 'gray');

          // WEST-EAST ===========================================================

          // binning the dataset rows, WE
          var WEdataBin = d3.bin()
            .domain([
  						  d3.min(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[0]; }),
  						  d3.max(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[0]; })
  						])
            .value(function(d) {
              return nswePercentCatPath.centroid(d)[0];
            })
            .thresholds(25);

          var binnedDataX = WEdataBin(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[0]; });

          // WE: prepare the data to be able to be stack-ified (like the dataset in O'Reilly Ch 13 stack-layout.html)
          var stackedBarWE = [];
          for (var l = 0; l < binnedDataX.length; l++) { // loop through length of W-E bins
            stackedBarWE[l] = {
              'people':   binnedDataX[l].filter(function(d) { return d.properties.category == 'people' }).length,
              'place':  binnedDataX[l].filter(function(d) { return d.properties.category == 'place' }).length,
              'nature':  binnedDataX[l].filter(function(d) { return d.properties.category == 'nature' }).length,
              'concept':  binnedDataX[l].filter(function(d) { return d.properties.category == 'concept' }).length,
              'unknown':  binnedDataX[l].filter(function(d) { return d.properties.category == 'unknown' }).length,
            };
          } // l

          stackedBarPercentWE = [];

          for (var m = 0; m < stackedBarWE.length; m++) { // loop through length of W-E stacked bar dataset
            if (stackedBarWE[m].people + stackedBarWE[m].place + stackedBarWE[m].nature + stackedBarWE[m].concept + stackedBarWE[m].unknown != 0) {
              rowTotal = stackedBarWE[m].people + stackedBarWE[m].place + stackedBarWE[m].nature + stackedBarWE[m].concept + stackedBarWE[m].unknown;
            } else {
              rowTotal = 1; // preventing dividing by 0 in next section, in case there are bins without any counties (the second bin in for W-E currently is, due to Alaska)
            }
            stackedBarPercentWE[m] = {
              'people':   stackedBarWE[m].people / rowTotal,
              'place':    stackedBarWE[m].place / rowTotal,
              'nature':   stackedBarWE[m].nature / rowTotal,
              'concept':  stackedBarWE[m].concept / rowTotal,
              'unknown':  stackedBarWE[m].unknown / rowTotal,
            };
          } // m

          var weStack = d3.stack()
            .keys([ 'people', 'place', 'nature', 'concept', 'unknown' ])
            .order(d3.stackOrderAscending);

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
              .range([0, 685]);
          var yScaleWE = d3.scaleLinear()
              .domain([0, 1])
              .range([115, 0]);

          // try wrapping this + build section below in a for-loop for number of langs / categories...
          // PEOPLE

          // define area generator
          var wePeopleArea = d3.area()
            .x(function(d, i) { return xScaleWE(parseFloat(i)); })
            .y0(function(d) { return yScaleWE(parseFloat(d.people + d.place + d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleWE(parseFloat(d.place + d.nature + d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'people-percent-lang nswe-layer-percent-lang')
              .attr("d", wePeopleArea(stackedBarPercentWE))
              .attr('transform', 'translate(' + 65 + ',' + 50 + ')')
              .style("fill", function(d, i) {
                // return 'rgb(201, 85, 116)';
                return '#D9C775';
              })
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // PLACE

          // define area generator
          var wePlaceArea = d3.area()
            .x(function(d, i) { return xScaleWE(parseFloat(i)); })
            .y0(function(d) { return yScaleWE(parseFloat(d.place + d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleWE(parseFloat(d.nature + d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'place-percent-lang nswe-layer-percent-lang')
              .attr("d", wePlaceArea(stackedBarPercentWE))
              .attr('transform', 'translate(' + 65 + ',' + 50 + ')')
              .style("fill", function(d, i) {
                // return 'rgb(116, 127, 202)';
                return '#5B6988';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // NATURE

          // define area generator
          var weNatureArea = d3.area()
            .x(function(d, i) { return xScaleWE(parseFloat(i)); })
            .y0(function(d) { return yScaleWE(parseFloat(d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleWE(parseFloat(d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'nature-percent-lang nswe-layer-percent-lang')
              .attr("d", weNatureArea(stackedBarPercentWE))
              .attr('transform', 'translate(' + 65 + ',' + 50 + ')')
              .style("fill", function(d, i) {
                // return 'rgb(78, 172, 124)';
                return '#77B7B4';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // CONCEPT

          // define area generator
          var weConceptArea = d3.area()
            .x(function(d, i) { return xScaleWE(parseFloat(i)); })
            .y0(function(d) { return yScaleWE(parseFloat(d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleWE(parseFloat(d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'concept-percent-lang nswe-layer-percent-lang')
              .attr("d", weConceptArea(stackedBarPercentWE))
              .attr('transform', 'translate(' + 65 + ',' + 50 + ')')
              .style("fill", function(d, i) {
                // return 'rgb(179, 148, 63)';
                return '#BC80A5';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // UNKNOWN

          // define area generator
          var weUnknownArea = d3.area()
            .x(function(d, i) { return xScaleWE(parseFloat(i)); })
            .y0(function(d) { return yScaleWE(parseFloat(d.unknown)); }) // NEEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(115)
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'unknown-percent-lang nswe-layer-percent-lang')
              .attr("d", weUnknownArea(stackedBarPercentWE))
              .attr('transform', 'translate(' + 65 + ',' + 50 + ')')
              .style("fill", function(d, i) {
                // return 'rgb(150, 150, 150)';
                return '#B2AEA9';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });


          // NORTH-SOUTH ===========================================================

          // binning the dataset rows, NS
          var NSdataBin = d3.bin()
            .domain([
                d3.min(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[1]; }),
                d3.max(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[1]; })
              ])
            .value(function(d) {
              return nswePercentCatPath.centroid(d)[1];
            })
            .thresholds(15);

          var binnedDataY = NSdataBin(nonHiakData, function(d) { return nswePercentCatPath.centroid(d)[1]; });

          // NS: prepare the data to be able to be stack-ified (like the dataset in O'Reilly Ch 13 stack-layout.html)
          var stackedBarNS = [];
          for (var l = 0; l < binnedDataY.length; l++) { // loop through length of W-E bins
            stackedBarNS[l] = {
              'people':   binnedDataY[l].filter(function(d) { return d.properties.category == 'people' }).length,
              'place':  binnedDataY[l].filter(function(d) { return d.properties.category == 'place' }).length,
              'nature':  binnedDataY[l].filter(function(d) { return d.properties.category == 'nature' }).length,
              'concept':  binnedDataY[l].filter(function(d) { return d.properties.category == 'concept' }).length,
              'unknown':  binnedDataY[l].filter(function(d) { return d.properties.category == 'unknown' }).length,
            };
          } // l

          stackedBarPercentNS = [];

          for (var m = 0; m < stackedBarNS.length; m++) { // loop through length of W-E stacked bar dataset
            if (stackedBarNS[m].people + stackedBarNS[m].place + stackedBarNS[m].nature + stackedBarNS[m].concept + stackedBarNS[m].unknown != 0) {
              rowTotal = stackedBarNS[m].people + stackedBarNS[m].place + stackedBarNS[m].nature + stackedBarNS[m].concept + stackedBarNS[m].unknown;
            } else {
              rowTotal = 1; // preventing dividing by 0 in next section, in case there are bins without any counties (the second bin in for W-E currently is, due to Alaska)
            }
            stackedBarPercentNS[m] = {
              'people':   stackedBarNS[m].people / rowTotal,
              'place':    stackedBarNS[m].place / rowTotal,
              'nature':   stackedBarNS[m].nature / rowTotal,
              'concept':  stackedBarNS[m].concept / rowTotal,
              'unknown':  stackedBarNS[m].unknown / rowTotal,
            };
          } // m

          var nsStack = d3.stack()
            .keys([ 'people', 'place', 'nature', 'concept', 'unknown' ])
            .order(d3.stackOrderAscending);

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
              .range([0, 365]);
          var yScaleNS = d3.scaleLinear()
              .domain([0, 1])
              .range([150, 0]);

          // try wrapping this + build section below in a for-loop for number of langs / categories...
          // PEOPLE

          // define area generator
          var nsPeopleArea = d3.area()
            .x(function(d, i) { return xScaleNS(parseFloat(i)); })
            .y0(function(d) { return yScaleNS(parseFloat(d.people + d.place + d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleNS(parseFloat(d.place + d.nature + d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'people-percent-lang nswe-layer-percent-lang')
              .attr("d", nsPeopleArea(stackedBarPercentNS))
              .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')
              .style("fill", function(d, i) {
                // return 'rgb(201, 85, 116)';
                return '#D9C775';
              })
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // PLACE

          // define area generator
          var nsPlaceArea = d3.area()
            .x(function(d, i) { return xScaleNS(parseFloat(i)); })
            .y0(function(d) { return yScaleNS(parseFloat(d.place + d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleNS(parseFloat(d.nature + d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'place-percent-lang nswe-layer-percent-lang')
              .attr("d", nsPlaceArea(stackedBarPercentNS))
              .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')
              .style("fill", function(d, i) {
                // return 'rgb(116, 127, 202)';
                return '#5B6988';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // NATURE

          // define area generator
          var nsNatureArea = d3.area()
            .x(function(d, i) { return xScaleNS(parseFloat(i)); })
            .y0(function(d) { return yScaleNS(parseFloat(d.nature + d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleNS(parseFloat(d.concept + d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'nature-percent-lang nswe-layer-percent-lang')
              .attr("d", nsNatureArea(stackedBarPercentNS))
              .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')
              .style("fill", function(d, i) {
                // return 'rgb(78, 172, 124)';
                return '#77B7B4';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // CONCEPT

          // define area generator
          var nsConceptArea = d3.area()
            .x(function(d, i) { return xScaleNS(parseFloat(i)); })
            .y0(function(d) { return yScaleNS(parseFloat(d.concept + d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(function(d) { return yScaleNS(parseFloat(d.unknown)); })
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'concept-percent-lang nswe-layer-percent-lang')
              .attr("d", nsConceptArea(stackedBarPercentNS))
              .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')
              .style("fill", function(d, i) {
                // return 'rgb(179, 148, 63)';
                return '#BC80A5';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          // UNKNOWN

          // define area generator
          var nsUnknownArea = d3.area()
            .x(function(d, i) { return xScaleNS(parseFloat(i)); })
            .y0(function(d) { return yScaleNS(parseFloat(d.unknown)); }) // NEDED TO DO THIS TO GET IT TO FILL TO THE TOP... SHOULD I BE DOING THIS FOR NON-FULL_HEIGH DESIGN, TOO?!?!
            .y1(150)
            .curve(d3.curveBasis);

          nsweUSsvg.append("path")
              .attr('class', 'unknown-percent-lang nswe-layer-percent-lang')
              .attr("d", nsUnknownArea(stackedBarPercentNS))
              .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')
              .style("fill", function(d, i) {
                // return 'rgb(150, 150, 150)';
                return '#B2AEA9';
              })
              .attr('opacity', 0.9)
              .on('mouseover', function(d) {
                var hoverChunk = d3.select(this).attr('class');
                nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                  .each(function(d) {
                    if (d3.select(this).attr('class') == hoverChunk) {
                      d3.select(this)
                        //.style('stroke', 'black');
                    } else {
                      d3.select(this)
                        .style('opacity', '0.2');
                    }
                  })
                })
                .on('mouseout', function(d) {
                  var hoverChunk = d3.select(this).attr('class');
                  nsweUSsvg.selectAll('.nswe-layer-percent-lang')
                    .each(function(d) {
                      d3.select(this)
                        .style('stroke', '#f5f5f5');
                      d3.select(this)
                        .style('opacity', '1');
                    })
                  });

          var yAxisWE = d3.axisLeft()
                  .scale(yScaleWE)
                  .ticks(2)
                  .tickSizeOuter(0); // remove last end tick without a number
          nsweUSsvg.append("g")
            .call(yAxisWE)
            .attr("class", "axis")
            .attr("transform", "translate(" + (65) + ",50)");

          // var yAxisNS = d3.axisRight()
          var yAxisNS = d3.axisLeft()
                 .scale(yScaleNS)
                 .ticks(3)
                 .tickSizeOuter(0);
          nsweUSsvg.append("g")
            .call(yAxisNS)
            .attr("class", "axis")
            .attr('id', 'nsaxis')
            // .attr('transform', 'translate(' + 925 + ',' + (180 + 365) + ') rotate(90)')
            .attr('transform', 'translate(' + 925 + ',' + 200 + ') rotate(90)')

        }); // close JSON function for county outlines

      }); // close CSV function
