// load in the data
d3.csv("assets/data/blogposts/county-etymologies/data_county-etymologies.csv")
  .then(function(data) {

    var stateRollups = d3.rollups(data
        .sort((a, b) => d3.ascending(a.state, b.state) || d3.ascending(a.category, b.category) || d3.ascending(a.language, b.language))
        .filter(function(d) { return d.state != 'District of Columbia'}),
      v => v.length,
      d => d.state, d => d.category, d => d.language);

    var stateRollupsHierarchy = d3.hierarchy(stateRollups);

    var catRollups = d3.rollups(data
        .sort((a, b) => d3.ascending(a.state, b.state) || d3.ascending(a.category, b.category) || d3.ascending(a.language, b.language))
        .filter(function(d) { return d.state != 'District of Columbia'}),
      v => v.length,
      d => d.state, d => d.category);

    var catRollupsHierarchy = d3.hierarchy(catRollups);

    console.log('stateRollups: ');
    console.log(stateRollups);
    console.log('stateRollupsHierarchy: ');
    console.log(stateRollupsHierarchy);
    console.log('catRollups: ');
    console.log(catRollups);
    console.log('catRollupsHierarchy: ');
    console.log(catRollupsHierarchy);


    var w = 1000;
    var chartSlideOver = 200;
    var padding = 50;

    var catArray = ['battle', 'combination', 'concept', 'creation', 'flora', 'geology', 'group', 'man', 'object', 'place', 'resource', 'woman', 'unknown'];
    var numCats = catArray.length;

    var euroColor = d3.scaleOrdinal(d3.schemeDark2)
        .domain(catArray);

    var natamColor = d3.scaleOrdinal(d3.schemePastel2)
        .domain(catArray);

    var categoryStep = function(w) {
      for (var j = 0; j < numCats; j++){
        if (w == catArray[j]) {
          return (stateH / numCats) * j;
        } // if
      } // for
    } // fx

    var max = d3.max(catRollupsHierarchy.data, function(d) {
      return d3.max(d[1], function(f) {
        return f[1];
      }) // f
    }); // d

    // length scale
    var lScale = d3.scaleLinear()
      .domain([ 0, max ])
      .range([0, w - chartSlideOver - padding]);

    var barH = lScale(1) - 1;
    var gridPadding = 1;
    var stateH = (barH + gridPadding) * numCats;
    var h = stateH * 50;

    var gridLineAxis = d3.axisBottom()
      .scale(lScale)
      .ticks((max))
      // .ticks(5)
      .tickSize(-h);

    var statesSvg = d3.select('#state-breakdowns-vis')
      .append('svg')
        .attr('id', 'states-svg')
        .attr('width', w)
        .attr('height', h);

    var stateCharts = statesSvg.selectAll('.state-chart')
      .data(stateRollupsHierarchy.data)
      .enter()
      .append('g')
        .attr('id', d => d[0] + '-chart')
        .attr('class', 'state-chart')
        .attr('transform', function(d, i) {
          return 'translate(0,' + (stateH * i) + ')'
        });

    stateCharts.selectAll('.state-category-euro')
      .data(function(f) {
        return f[1].filter(function(d) { return d[1][0][0] == 'euro'})
      })
      .enter()
      .append('rect')
        .attr('id', d => d[0] + '-bar')
        .attr('class', 'state-category state-category-euro')
        .attr('x', chartSlideOver)
        .attr('y', function(d) {
          return categoryStep(d[0]);
        })
        .attr('width', function(d) {
          return lScale(d[1][0][1]);
        })
        .attr('height', barH)
        .attr('fill', function(d) {
          return euroColor(d[0]);
          // return 'red';
        });

    stateCharts.selectAll('.state-category-natam')
      .data(function(f) {
        return f[1].filter(function(d) {
          if (d[1][1]) {
            return d[1][1][0] == 'natam';
          } else {
            return d[1][0][0] == 'natam';
          }
        })
      })
      .enter()
      .append('rect')
        .attr('id', d => d[0] + '-bar')
        .attr('class', 'state-category state-category-natam')
        .attr('x', function(d, i) {
          if (d[1][1]) { // if it is the second language listed
            return chartSlideOver + lScale(d[1][0][1]);
          } else { // if it is the first language listed
            return chartSlideOver;
          }
        })
        .attr('y', function(d) {
          return categoryStep(d[0]);
        })
        .attr('width', function(d) {
          if (d[1][1]) { // if it is the second language listed
            return lScale(d[1][1][1]);
          } else { // if it is the first language listed
            return lScale(d[1][0][1]);
          }
        })
        .attr('height', barH)
        .attr('fill', function(d) {
          return natamColor(d[0]);
          // return 'aqua'
        });

    stateCharts.append('text')
        .attr('class', 'state-label')
        .text(d => d[0])
        .attr('x', 50)
        .attr('y', stateH / 2);

    statesSvg.append('g')
      .attr('class', 'state-grid')
      .attr('transform', 'translate(' + (chartSlideOver) + ',' + (h) + ')')
      .call(gridLineAxis);

  }); // close CSV function
