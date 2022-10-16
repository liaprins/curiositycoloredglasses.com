              var myDataset = [
                [
                  { value: 7,   bucket: "GENERAL", label: "Disease nomenclature" },
                  { value: 231, bucket: "GENERAL", label: "Related diseases" }
                ],
                [
                  { value: 318, bucket: "CLINICAL", label: "Clinical characteristics" },
                  { value: 36,  bucket: "CLINICAL", label: "Quality of life" },
                  { value: 817, bucket: "CLINICAL", label: "Disease pathology" },
                  { value: 210, bucket: "CLINICAL", label: "Therapeutics in the clinic" },
                  { value: 58,  bucket: "CLINICAL", label: "Epidemiology" },
                  { value: 116, bucket: "CLINICAL", label: "Influence of geography, environment" }
                ],
                [
                  { value: 651, bucket: "BASIC", label: "Disease mechanisms" },
                  { value: 72,  bucket: "BASIC", label: "Normal biology" },
                  { value: 188, bucket: "BASIC", label: "Non-human model system" },
                  { value: 51,  bucket: "BASIC", label: "Basic research: human subjects" },
                  { value: 94,  bucket: "BASIC", label: "Computational biology, informatics" }
                ],
                [
                  { value: 36,  bucket: "TRANSLATIONAL", label: "Therapeutic hypothesis" },
                  { value: 7,   bucket: "TRANSLATIONAL", label: "Drug mechanism" },
                  { value: 14,  bucket: "TRANSLATIONAL", label: "Preclinical therapeutics" },
                  { value: 2,   bucket: "TRANSLATIONAL", label: "Patient-driven therapeutics" }
                ]
              ];

        			var w = 650;
        			var h = 480;
              var barLength = 320;
              var barHeight = 15;
              var barMargin = 10;
              var bucketMargin = 25;
              var hoverLength = 545;
              var bucketLabelMargin = 20;

              var yScale = d3.scaleBand()
                      .domain(d3.range(17))
                      .rangeRound([0, h]);

              var xScale = d3.scaleLinear()
                      .domain([0, 817])
                      .range([0, barLength]);

              var xAxis = d3.axisBottom()
                      .scale(xScale)
                      .ticks(5);

              // contain + create axis (not grey line ticks), disease label
              var axisContainer = d3.select("#example")
                                    .append("svg")
                                    .attr("width", w)
                                    // .attr("transform", "translate(50)")
                                    .attr("height", 140);

              axisContainer.selectAll("#disease")
                           .data([0])
                           .enter()
                           .append("text")
                  			   .text("Primary ciliary dyskinesia")
                           .attr("x", 0)
                           .attr("y", 45)
                           .attr("id", "disease");

              axisContainer.selectAll("#axislabel")
                           .data([0])
                           .enter()
                           .append("text")
                  			   .text("Papers published")
                           .attr("y", barMargin + 70)
                           .attr("x", w - (barLength / 2))
                           .attr("id", "axislabel");

              axisContainer.selectAll(".axisnumber")
                           .data([0, 1, 2, 3, 4, 5, 6, 7, 8])
                           .enter()
                           .append("text")
                  			   .text(function(d, i) {
                              return i * 100;
                           })
                           .attr("y", 40 + 70)
                  			   .attr("x", function(d, i) {
                              return (w - barLength - barMargin) + (i * (((barLength * 800) / 817) / 8));
                           })
                           .attr("class", "axisnumber");

              axisContainer.selectAll("#axisline")
                           .data([0])
                           .enter()
                           .append("line")
                           .attr("x1", w - barLength - barMargin)
                           .attr("y1", 45 + 70)
                           .attr("x2", w - 5)
                           .attr("y2", 45 + 70)
                           .attr("id", "axisline");

              // loop through once for each bucket
              for (j = 0; j < myDataset.length; j++) {

                var color = function (returnColor) {
                  if (j == 0) {
                    return "#02A77F";
                  } else if (j == 1) {
                    return "#0057FF";
                  } else if (j == 2) {
                    return "#7000FF";
                  } else {
                    return "#AF0085";
                  }
                }

                // create SVG element to hold bars per bucket
                var mySvg = d3.select("#example")
                              .append("svg")
                              .attr("width", w)
                              .attr("height", myDataset[j].length * (barHeight + barMargin) + bucketMargin - 10)
                              // .attr("transform", "translate(50)")
                              .attr("id", "mysvg-" + j);

                // bucket labels
                mySvg.selectAll(".bucket-" + myDataset[j][0].bucket)
                     .data([0])    // just wanted it to loop through this once, so gave it a made-up array with one thing in it (doesn't work if I replace with a letter, though)
                     .enter()
                     .append("text")
                     .text(myDataset[j][0].bucket)
                     .classed("bucket", true)
                     .attr("fill", color)
                     .attr("font-family", "Barlow, sans-serif")
                     .attr("font-weight", "bold")
                     .attr("font-size", "11px")
                     .attr("text-anchor", "end")
                     .attr("x", w - hoverLength - bucketLabelMargin)
                     .attr("y", ((myDataset[j].length * (barHeight + barMargin)) / 2) + 4)
                     .attr("class", "bucket-" + myDataset[j][0].bucket);

                // colored bucket lines
                mySvg.selectAll(".bucketline-" + myDataset[j][0].bucket)
                     .data([0])    // just wanted it to loop through this once, so gave it a made-up array with one thing in it (doesn't work if I replace with a letter, though)
                     .enter()
                     .append("line")
                     .attr("x1", w - hoverLength - barMargin)
                     .attr("y1", barMargin / 2)
                     .attr("x2", w - hoverLength - barMargin)
                     .attr("y2", myDataset[j].length * (barHeight + barMargin) - (barMargin / 2))
                     .attr("stroke", color)
                     .attr("stroke-width", 2)
                     .attr("class", "bucketline-" + myDataset[j][0].bucket);

                // create group to hold bar, label, and hover state
                mySvg.selectAll("g")
                     .data(myDataset[j])
                     .enter()
                     .append("g")
                     .attr("class", "group-" + myDataset[j][0].bucket)
                     .attr("stroke", color)
                     .on("mouseover", function() {
                       d3.select(this.lastElementChild)
                          .transition()
                          .duration(250)
                          .attr("opacity", "0.07");
                    })
                    .on("mouseout", function(d) {
                      d3.select(this.lastElementChild)
                         .transition()
                         .duration(250)
                         .attr("opacity", "0");
                    });

                  // create rects to hold data
                  mySvg.selectAll(".group-" + myDataset[j][0].bucket)
                       .append("rect")    // adding the rect's to the g's by tacking them on right after creating the g's; or could do it like I do for the text labels below
                       .attr("y", function(d, i) {
                          return i * (barHeight + barMargin) + (barMargin / 2);
                       })
                       .attr("x", barLength)
                       .attr("height", barHeight)
                       .attr("width", function(d) {
                          return xScale(d.value);
                       })
                       .attr("fill", color);

                  // black origin lines
                  mySvg.selectAll(".blackline-" + myDataset[j][0].bucket)
                       .data([0])    // just wanted it to loop through this once, so gave it a made-up array with one thing in it (doesn't work if I replace with a letter, though)
                       .enter()
                       .append("line")
                       .attr("x1", w - barLength - barMargin)
                       .attr("y1", barMargin / 2)
                       .attr("x2", w - barLength - barMargin)
                       .attr("y2", myDataset[j].length * (barHeight + barMargin) - (barMargin / 2))
                       .attr("stroke", "black")
                       .attr("stroke-width", 1)
                       .attr("class", "blackline-" + myDataset[j][0].bucket);

                  // grey tick lines
                  mySvg.selectAll(".greyline-" + myDataset[j][0].bucket)
                       .data([1, 2, 3, 4, 5, 6, 7, 8])    // just wanted it to loop through this once, so gave it a made-up array with one thing in it (doesn't work if I replace with a letter, though)
                       .enter()
                       .append("line")
                       .attr("x1", function(d, i) {
                          return (w - barLength - barMargin) + ((i + 1) * (((barLength * 800) / 817) / 8));
                       })
                       .attr("y1", barMargin / 2)
                       .attr("x2", function(d, i) {
                          return (w - barLength - barMargin) + ((i + 1) * (((barLength * 800) / 817) / 8));
                       })
                       .attr("y2", myDataset[j].length * (barHeight + barMargin) - (barMargin / 2))
                       .attr("stroke", "black")
                       .attr("opacity", "0.07")
                       .attr("stroke-width", 1)
                       .attr("class", "greyline-" + myDataset[j][0].bucket);

                  // create labels
            			mySvg.selectAll(".group-" + myDataset[j][0].bucket)
            			     .append("text")
            			     .text(function(d) {
            			   	     return d.label + " (" + d.value + ")";
            			     })
              			   .attr("text-anchor", "end")
                       .attr("y", function(d, i) {
                          return (i * (barHeight + barMargin) + barMargin + 6);
                       })
              			   .attr("x", barLength - 10)
              			   .attr("font-family", "Barlow, sans-serif")
                       .attr("fill", "black")
                       .attr("text-decoration", "underline")
                       .attr("stroke-width", 0)
              			   .attr("font-size", "11px");

                  // create invisible rect's for hovering
                  mySvg.selectAll(".group-" + myDataset[j][0].bucket)
                 			 .append("line")
                       .attr("x1", w - hoverLength + (bucketMargin / 2))
                       .attr("y1", function(d, i) {
                          return (i * (barHeight + barMargin) + barHeight - 3);
                        })
                       .attr("x2", w - (bucketMargin / 2))
                       .attr("y2", function(d, i) {
                          return (i * (barHeight + barMargin) + barHeight - 3);
                       })
                 			 .attr("stroke-width", barHeight + barMargin)
                       .attr("stroke-linecap", "round")
                       .attr("pointer-events", "all")
                 			 .attr("opacity", "0")
                       .attr("class", "hoverbar");

              }    // close for-loop
