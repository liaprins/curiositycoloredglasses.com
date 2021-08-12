var w = 1000;
var h = 700;

// load CSV of county etymology data
d3.csv('assets/data/blogposts/county-etymologies/data_etymological-trails.csv')
  .then(function(data) {

        console.log('data');
        console.log(data);

        var babyPiesDataset = [];
        for (var i = 0; i < data.length; i++) {

          var etyTrailLength = data[i].ety1.length + data[i].ety2.length + data[i].ety3.length + data[i].ety4.length + data[i].ety5.length;

          if (etyTrailLength == 5) {
            // babyPiesDataset[i].etytrail = data[i].ety1.length, data[i].ety2.length, data[i].ety3.length, data[i].ety4.length, data[i].ety5.length

            babyPiesDataset[i] = {
              etytrail: [ data[i].ety1.length, data[i].ety2.length, data[i].ety3.length, data[i].ety4.length, data[i].ety5.length ],
              category: [ data[i].category, data[i].cat2, data[i].cat3, data[i].cat4, data[i].cat5 ]
            } // close object
          } else if (etyTrailLength == 4) {
            // babyPiesDataset[i].etytrail = data[i].ety1.length, data[i].ety2.length, data[i].ety3.length, data[i].ety4.length
            babyPiesDataset[i] = {
              etytrail: [ data[i].ety1.length, data[i].ety2.length, data[i].ety3.length, data[i].ety4.length ],
              category: [ data[i].category, data[i].cat2, data[i].cat3, data[i].cat4, data[i].cat5 ]
            }
          } else if (etyTrailLength == 3) {
            // babyPiesDataset[i].etytrail = data[i].ety1.length, data[i].ety2.length, data[i].ety3.length
            babyPiesDataset[i] = {
              etytrail: [ data[i].ety1.length, data[i].ety2.length, data[i].ety3.length ],
              category: [ data[i].category, data[i].cat2, data[i].cat3, data[i].cat4, data[i].cat5 ]
            }
          } else if (etyTrailLength == 2) {
            // babyPiesDataset[i].etytrail = data[i].ety1.length, data[i].ety2.length
            babyPiesDataset[i] = {
              etytrail: [ data[i].ety1.length, data[i].ety2.length ],
              category: [ data[i].category, data[i].cat2, data[i].cat3, data[i].cat4, data[i].cat5 ]
            }
          } else {
            // babyPiesDataset[i].etytrail = data[i].ety1.length
            babyPiesDataset[i] = {
              etytrail: [ data[i].ety1.length ],
              category: [ data[i].category, data[i].cat2, data[i].cat3, data[i].cat4, data[i].cat5 ]
            }
          }

        };

        console.log('babyPiesDataset');
        console.log(babyPiesDataset);

        var pieColor = d3.scaleOrdinal(d3.schemeDark2);

        var myOuterRadius = 5.6;
        var myInnerRadius = 0;
        var myArc = d3.arc()
          .innerRadius(myInnerRadius)
          .outerRadius(myOuterRadius);

        var myPie = d3.pie();

        // create SVG container
        var pieSvg = d3.select("#pies-vis")
                      .append("svg")
                      .attr("width", w)
                      .attr("height", h);

        for (var i = 0; i < babyPiesDataset.length; i++) {

          // set up groups ... CURRENTLY MAKING A GROUP PER SLICE, NOT PER PIE...WILL NEED TO FIX THIS FOR TOOLTIP
          var myArcs = pieSvg.selectAll(".arc-" + [i])
            .data(myPie(babyPiesDataset[i].etytrail))
            .enter()
            .append("g")
            .attr("class", "arc-" + [i])
            .attr("transform", "translate(" + myOuterRadius + "," + myOuterRadius + ")");

          // draw arc paths
          myArcs.append("path")
            .attr("fill", function(d, j) {
              // return myColor(j);
              var pieCat = babyPiesDataset[i].category[j];
              if (pieCat == 'man') {
                return pieColor(1);
              } else if (pieCat == 'place') {
                return pieColor(2);
              } else if (pieCat == 'geology') {
                return pieColor(3);
              } else {
                return pieColor(4); // just doing some for proof of concept
              }
            })
            .attr("d", myArc)
            .attr('opacity', function(d) {
              var pieDepth = babyPiesDataset[i].etytrail.length;
              if (pieDepth == 5) {
                return 1;
              } else if (pieDepth == 4) {
                return 0.8;
              } else if (pieDepth == 3) {
                return 0.6;
              } else if (pieDepth == 2) {
                return 0.4; // just doing some for proof of concept
              } else {
                return 0.2;
              }
            })
            .attr('stroke', 'white')
            .attr('stroke-width', 0.5)
            .attr('transform', 'translate(' + (data[i].x * 11) + ',' + (data[i].y * 9.5) + ')')
            .style('mix-blend-mode', 'multiply');
          };


}); // close CSV function
