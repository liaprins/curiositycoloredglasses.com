var w = 1000;
var h = 630;

var hexSvg = d3.select('#hex-vis')
  .append('svg')
    .attr('width', w)
    .attr('height', h);
var hexContainer = hexSvg.append('g') // group to hold centroid symbols
  .attr('id', 'hex-container')
  .attr('transform', 'translate(25, 25)');

// load CSV of county etymology data
d3.csv('assets/data/blogposts/county-etymologies/data_counties-hex.csv')
  .then(function(data) {

    // establish county centroids
    hexContainer.selectAll('.hex')
      .data(data)
      .enter()
      .append('circle')
        .attr('id', function(d) {
          return d.fullname;
        })
        .attr('class', function(d) {
          return 'hex hex-' + d.granularlanguage;
        })
        .attr('cx', function(d) {
          return (d.x) * 11;
        })
        .attr('cy', function(d) {
          return (d.y) * 9.5;
        })
        .attr('r', 5.5) // beware, all ye people afeared of constellations of small holes
        .style('stroke-width', 4)
        .style('stroke', 'rgba(255, 255, 255, 0)')
        .style('fill', function(d, i) {

          if (d.parentlanguage == 'euro') {
            var j = d3.interpolateRgb("rgb(255, 255, 0)", "rgb(100, 100, 0)");

            if (d.granularlanguage == 'battle') {
              return j(0.3);
            } else if (d.granularlanguage == 'combination') {
              return j(0.4);
            } else if (d.granularlanguage == 'concept') {
              return j(0.5);
            } else if (d.granularlanguage == 'creation') {
              return j(0.6);
            } else if (d.granularlanguage == 'flora') {
              return j(0.7);
            } else if (d.granularlanguage == 'geology') {
              return j(0.8);
            } else if (d.granularlanguage == 'man') {
              return j(0.9);
            } else {
              return j(1.0);
            }
          } else { // parent language is Nat Am
            var k = d3.interpolateRgb("rgb(0, 255, 255)", "rgb(0, 100, 100)");

            if (d.granularlanguage == 'object') {
              return k(0.3);
            } else if (d.granularlanguage == 'place') {
              return k(0.4);
            } else if (d.granularlanguage == 'resource') {
              return k(0.5);
            } else if (d.granularlanguage == 'woman') {
              return k(0.6);
            } else if (d.granularlanguage == 'unknown') {
              return k(0.7);
            }
          }
        })
        .on('mouseover', function(d) {
          d3.select(this)
            .style('stroke', 'black');
          var currentHoverLang = d3.select(this).attr('class');
          hexContainer.selectAll('.hex')
            .each(function(d) {
              if (d3.select(this).attr('class') == currentHoverLang) {
                /* do nothing */
              } else {
                d3.select(this)
                  .style('opacity', 0.2);
              }
            })
        })
        .on('mouseout', function(d) {
          hexContainer.selectAll('.hex')
            .each(function(d) {
              d3.select(this)
                .style('stroke', 'rgba(255, 255, 255, 0)')
                .style('opacity', 1);
            });
        })
        .append('title')
        .text(function(d) {
          return d.fullname + ' // ' + d.granularlanguage;
        });

}); // close CSV function
