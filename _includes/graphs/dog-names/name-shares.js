var windowW = window.innerWidth; // capture screen width to create "mediaqueries" within JS
var w;

if (windowW < 817) { // set var for width of vis, depending on screen width
  w = (78.6 * windowW) / 100;
} else if (windowW < 1225) {
  w = (85.714 * windowW) / 100;
} else {
  var w = 1108;
}

var h = 172000;
  
// load in the data
d3.json('assets/data/blogposts/dog-names/names.json')
  .then(function(json) {

  var nameWidth = 80;
  var vNameSpacing = 35;
    
  // scales 
  var nameSharesScale = d3.scaleLinear()
    .domain([0, 1582]) // manually adding occurrence of highest occurring dog name (Bella)
    .range([0, (w / 2) - nameWidth - 50]); // WILL NEED TO ACCOUNT FOR MARGIN/PADDING WITHIN THE DV'S BOX (temporarily using "50px" in place of 2.048rem, since they are equivalent at widest screensize)

  var nameSharesScaleBackwards = d3.scaleLinear() // this only to be used by dog axis (not even dog data, though!)
    .domain([0, 1582]) // manually adding occurrence of highest occurring dog name (Bella)
    .range([(w / 2) - nameWidth - 50, 0]); // WILL NEED TO ACCOUNT FOR MARGIN/PADDING WITHIN THE DV'S BOX (temporarily using "50px" in place of 2.048rem, since they are equivalent at widest screensize)

  // axes
  var humanAxis = d3.axisTop()
    .scale(nameSharesScale)
    .ticks(3)
    .tickSizeOuter(0);

  var dogAxis = d3.axisTop()
    .scale(nameSharesScaleBackwards)
    .ticks(3)
    .tickSizeOuter(0);

    var nameSharesSvg = d3.select('#name-shares-vis')
      .append('svg')
        .attr('width', w)
        .attr('height', h);

    // groups for bars + labels
    var nameHeader = nameSharesSvg.selectAll('.distinct-name')
      // .data(json.distinctNames)
      .data(json.distinctNames.slice().sort((a, b) => d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence)))) // sort by dog : human ratio (see file #3 for more sort options for the dataset)
      .enter()
      .append('g')
        .attr('class', 'distinct-name')
        .attr('id', function(d) {
          return d.name;
        })
        .attr('transform', function(d, i) {
          return 'translate(0, ' + ((i * vNameSpacing) + vNameSpacing) + ')';
        });

    // bars for dogs (red)
    nameHeader.append('rect')
      .attr('class', 'name-bars-dog')
      .attr('width', function(d) {
        return nameSharesScale(d.info.dogOccurrence);
      })
      .attr('height', 10)
      .attr('x', ((w / 2) - nameWidth) * -1)
      .attr('y', 8)
      .attr('fill', '#FD7F6F');

    // bars for humans (blue)
    nameHeader.append('rect')
      .attr('class', 'name-bars-human')
      .attr('width', function(d) {
        return nameSharesScale(d.info.humanOccurrence);
      })
      .attr('height', 10)
      .attr('x', (w / 2) + nameWidth)
      .attr('y', 8)
      .attr('fill', '#56C6E2');

    // labels
    nameHeader.append('text')
        .text(function(d) {
          return d.name;
        })
        .attr('class', 'distinct-name-label s-textface bold')
        .attr('x', w / 2)
        .attr('y', 18)
        .append('title')
        .text(function(d) {
          return '🐶 Occurrence per 100,000 dogs: ' + d3.format(".0f")(d.info.dogOccurrence) + '                   👶 Occurrence per 100,000 babies: ' + d3.format(".0f")(d.info.humanOccurrence);
        })
        // .attr('title', function(d) {
        //   return '🐶 Occurrence per 100,000 dogs: ' + d3.format(".0f")(d.info.dogOccurrence) + ' // 👶 Occurrence per 100,000 babies: ' + d3.format(".0f")(d.info.humanOccurrence);
        // });

    // sort
    var selectedSortMethod;

    d3.select('#sort-alphabetical-name')
      .on('click', function() {
        selectedSortMethod = this.getAttribute('id');
        sortBars(selectedSortMethod);
      }); // close .on

    d3.select('#sort-occurrence-dog')
      .on('click', function() {
        selectedSortMethod = this.getAttribute('id');
        sortBars(selectedSortMethod);
      }); // close .on
        
    d3.select('#sort-occurrence-human')
      .on('click', function() {
        selectedSortMethod = this.getAttribute('id');
        sortBars(selectedSortMethod);
      }); // close .on

    d3.select('#sort-dog-human-ratio')
      .on('click', function() {
        selectedSortMethod = this.getAttribute('id');
        sortBars(selectedSortMethod);
      }); // close .on

    d3.select('#sort-human-dog-ratio')
      .on('click', function() {
        selectedSortMethod = this.getAttribute('id');
        sortBars(selectedSortMethod);
      }); // close .on

    var sortBars = function(selectedSortMethod) {
      nameHeader.sort(function(a, b) {
        if (selectedSortMethod == 'sort-occurrence-dog') {
          return d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence));
        } else if (selectedSortMethod == 'sort-occurrence-human') {
          return d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence));
        } else if (selectedSortMethod == 'sort-dog-human-ratio') {
          return d3.descending(parseFloat(a.info.dogHumanRatioPer100), parseFloat(b.info.dogHumanRatioPer100)) || d3.descending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence)) || d3.ascending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence));
        } else if (selectedSortMethod == 'sort-human-dog-ratio') {
          return d3.descending(parseFloat(a.info.humanDogRatioPer100), parseFloat(b.info.humanDogRatioPer100)) || d3.descending(parseFloat(a.info.humanOccurrence), parseFloat(b.info.humanOccurrence)) || d3.ascending(parseFloat(a.info.dogOccurrence), parseFloat(b.info.dogOccurrence));
        }
      })
      .attr('transform', function(d, i) {
        return 'translate(0, ' + ((i * vNameSpacing) + vNameSpacing) + ')';
      });
    } // close sortBars

    // search
    d3.select("#userInput").on("keyup", search);

    function search() {
      var input = this.value.toUpperCase(); 

      nameSharesSvg.selectAll('.search-result')
        .classed('search-result', false);
      nameSharesSvg.selectAll('#search-result-indicator').remove();

      var searchResult = nameSharesSvg.selectAll('#' + input)
        .classed('search-result', true)
        .append('text')
          .text('🤠')
          .attr('id', 'search-result-indicator')
          .attr('x', -30)
          .attr('y', 17);

      var searchResult;
      if (document.getElementById(input)) {
        searchResult = document.getElementById(input);
        searchResult.scrollIntoView();
      }
        
    }; // close search fx

    // call axes
    var nameSharesAxes = d3.select('#name-shares-axes')
      .append('svg')
      .attr('id', 'name-shares-axes-svg-container')
      .attr('width', w)
      .attr('height', 35);

    nameSharesAxes.append("g")
      .call(humanAxis)
      .attr("class", "axis")
      .attr("id", "human-axis")
      .attr('transform', 'translate(' + ((w / 2) + nameWidth) + ', 30)');
    
    nameSharesAxes.append("g")
      .call(dogAxis)
      .attr("class", "axis")
      .attr("id", "dog-axis")
      .attr('transform', 'translate(50, 30)'); // "50" is for margin, will need to be replaced / variablized
  
}); // close JSON function