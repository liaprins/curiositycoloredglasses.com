// load in the data
d3.csv("assets/data/blogposts/county-etymologies/data_county-etymologies.csv")
  .then(function(data) {

  // Step 1, counties: isolate names of counties into their own set
  var countyNames = [];
  for (var i = 0; i < data.length; i++) {
    countyNames[i] = data[i].county;
  }
  countyNames.sort(function(a, b) { return d3.ascending(a, b) });

  // Step 2, counties: throw out any repeated names, so each county name is only listed once (will be used to access d3.group's map, below)
  var uniqueCountyNames = [];
  uniqueCountyNames = countyNames.filter((d, i, array)=>{
    return countyNames.indexOf(d) === i;
  });

  // Step 3, counties: group the CSV rows together by unique name
  var countiesByName = d3.group(data.sort(function(a, b) { return d3.ascending(a.county, b.county) }), d => d.county);
  var countiesByNameZh = d3.hierarchy(countiesByName);

  // Step 4, counties: use list of uniqueCountyNames to access map keys per row to get length of each group
  var countyNameCounts = [];
  for (var i = 0; i < uniqueCountyNames.length; i++) { // loop through all unique county names
    countyNameCounts[i] = {
      name: uniqueCountyNames[i],
      amount: countiesByName.get(uniqueCountyNames[i]).length
    } // close object

    // etymology loop, part 1
    // Step 1, etys: isolate names of etymologies into their own set
    countyNameCounts[i].etyinfo = {};
    countyNameCounts[i].etyinfo.allEtys = [];
    for (var j = 0; j < countiesByName.get(uniqueCountyNames[i]).length; j++) { // loop through each unique name's counties
      countyNameCounts[i].etyinfo.allEtys[j] = countiesByNameZh.children[i].children[j].data.etymology; // store list of all etymologies for this unique county name
    } // j

    countyNameCounts[i].etyinfo.allEtys.sort(function(a, b) { return d3.ascending(a, b) });

  } // i

  // etymology loop, part 2
  for (var k = 0; k < uniqueCountyNames.length; k++) {

    // Step 2, etys: throw out any repeated etymologies, so each county name is only listed once (will be used to access d3.group's map, below)
    countyNameCounts[k].etyinfo.uniqueEtyList = {};
    countyNameCounts[k].etyinfo.uniqueEtyList = countyNameCounts[k].etyinfo.allEtys.filter((d, i, array)=>{
      return countyNameCounts[k].etyinfo.allEtys.indexOf(d) === i;
    });

    // Step 3, etys: group the CSV rows together by unique name + unique etymology
    var countiesByEty = d3.group(data.sort(function(a, b) { return d3.ascending(a.etymology, b.etymology) }), d => d.county, d => d.etymology);
    var countiesByEtyZh = d3.hierarchy(countiesByEty);

    // Step 4, etys: use list of unique etymologies (countyNameCounts[k].uniqueEtys) to access map keys to get length of each same-etymology group
    countyNameCounts[k].etyinfo.eachEtyInfo = [];
    var reset = 0;
    for (var l = 0; l < countyNameCounts[k].etyinfo.uniqueEtyList.sort(function(a, b) { return d3.ascending(a.etyname, b.etyname) }).length; l++) { // loop through list of unique etymologies per county

      var cross;
      cross = reset += countiesByEty.get(uniqueCountyNames[k]).get(countyNameCounts[k].etyinfo.uniqueEtyList[l]).length;

      countyNameCounts[k].etyinfo.eachEtyInfo[l] = {
        etyname: countyNameCounts[k].etyinfo.uniqueEtyList[l],
        etyamount: countiesByEty.get(uniqueCountyNames[k]).get(countyNameCounts[k].etyinfo.uniqueEtyList[l]).length,
        // rows: countiesByEty.get(uniqueCountyNames[k]).get(countyNameCounts[k].etyinfo.uniqueEtyList[l]).sort(function(a, b) { return d3.ascending(a.state, b.state) }),
        rows: countiesByEty.get(uniqueCountyNames[k]).get(countyNameCounts[k].etyinfo.uniqueEtyList[l]),
        etyoffset: cross
      } // close object
    } // l

    // countyNameCounts[k].etyinfo = [];

    // Step 5, etys: sort by most common etys within a county name
    // MAKES THE offset OUT OF ORDER
    // countyNameCounts[k].etyinfo.eachEtyInfo.sort(function(a, b) { return d3.descending(a.etyamount, b.etyamount) });

  } // k

  // Step 5, counties: sort by most counties with same name
  countyNameCounts.sort(function(a, b) { return d3.descending(a.amount, b.amount) });

  // countyNameCounts.filter(function(d){ return d.amount >= 10 });



  console.log('data');
  console.log(data);

  console.log('countyNames');
  console.log(countyNames);

  console.log('uniqueCountyNames');
  console.log(uniqueCountyNames);

  console.log('countiesByName');
  console.log(countiesByName);

  console.log('countiesByNameZh');
  console.log(countiesByNameZh);

  console.log('countyNameCounts');
  console.log(countyNameCounts.filter(function(d){ return d.amount >= 10 }));
  /*
  console.log('countiesByEty');
  console.log(countiesByEty);

  console.log('countiesByEtyZh');
  console.log(countiesByEtyZh);
  */
  var color = d3.scaleOrdinal(d3.schemePaired);

  var w = 1000;
  var h = 1850;

  var freqSvg = d3.select('#name-frequency-vis')
    .append('svg')
      .attr('width', w)
      .attr('height', h);

  // groups for bars + labels
  var countyHeader = freqSvg.selectAll('.unique-county-name')
    .data(countyNameCounts.filter(function(d){ return d.amount >= 10 }))
    .enter()
    .append('g')
      .attr('class', 'unique-county-name')
      .attr('transform', function(d, i) {
        return 'translate(50, ' + ((i * 50) + 50) + ')';
      });

  // labels
  countyHeader.append('text')
    .text(function(d) {
      return d.name + ": " + d.amount;
    })
      .attr('class', 'unique-county-name-label')
      .attr('x', 0)
      .attr('y', 10);

  // group per bar
  var freqBar = countyHeader.append('g')
    .attr('class', 'name-bars')
    .attr('transform', 'translate(250, 0)');

  var individualCountyWidth = 20;

  // group per same-ety
  var freqEty = freqBar.selectAll('.same-ety')
    .data(function(d) {
      return d.etyinfo.eachEtyInfo;
    })
    .enter()
    .append('g')
      .attr('transform', function(d, i) {
        return 'translate(' + parseFloat(((d.etyoffset - d.etyamount) * individualCountyWidth) + (i * 10)) + ', 0)';
      })
      .attr('fill', function(d, i) {
        return color(i);
      });

  // circle per individual county
  freqEty.selectAll('.freq-county-circle')
    .data(function(d) {
      return d.rows;
    })
    .enter()
    .append('circle')
      .attr('cx', function(d, i) {
        return i * individualCountyWidth;
      })
      .attr('cy', 0)
      .attr('r', individualCountyWidth / 2);

  // tooltip
  freqEty.append('title')
    .text(function(d) {
      return d.etyamount + ': ' + d.etyname
    });

}); // close CSV function
