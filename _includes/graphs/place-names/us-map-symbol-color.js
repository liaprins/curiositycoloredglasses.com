var w = 1000;
      var h = 580;

      var svg = d3.select('#vis-1')
        .append('svg')
          .attr('width', w)
          .attr('height', h)
          .style('background', '#f5f5f5');

      var pathContainer = svg.append('g') // group to hold state + county outlines
        .attr('id', 'path-container');

      var centroidContainer = svg.append('g') // group to hold centroid symbols
        .attr('id', 'centroid-container');

      var allFilters = d3.selectAll('.filter-1');

      var filterContainer = d3.select('#filterscontainer-1');

      var projection = d3.geoAlbersUsa()
        .translate([w/2, h/2])
        .scale([1200]);

      var path = d3.geoPath()
        .projection(projection);

      // using temporarily for nicer colors before determine final design
      var color = d3.scaleOrdinal(d3.schemePaired);

      // establish function to convert CSV categories to words and color in UI
      var categoryConverter = function(v) {
        if (v == 'people') {
          return {
            categoryLabel: 'People',
            // categoryColor: 'rgb(201, 85, 116)' };
            categoryColor: '#caa569' };
        } else if (v == 'place') {
          return {
            categoryLabel: 'Place',
            // categoryColor: 'rgb(116, 127, 202)' };
            categoryColor: '#77b2e0' };
        } else if (v == 'nature') {
          return {
            categoryLabel: 'Nature',
            // categoryColor: 'rgb(78, 172, 124)' };
            categoryColor: '#68bc8f' };
        } else if (v == 'concept') {
          return {
            categoryLabel: 'Concept',
            // categoryColor: 'rgb(179, 148, 63)' };
            categoryColor: '#db93c7' };
        } else if (v == 'unknown') {
          return {
            categoryLabel: 'Unknown',
            // categoryColor: 'rgb(150, 150, 150)' };
            categoryColor: '#aeaeae' };
        }
      };

      // convert language
      var lineHalfLength = 2;

      var languageConverter = function(w) {
        if (w.properties.language == 'euro') {
          return {
            languageLabel: 'Non-Indigenous',
            languageX1: Math.round(path.centroid(w)[0]) + lineHalfLength,
            languageY1: Math.round(path.centroid(w)[1]) + lineHalfLength,
            languageX2: Math.round(path.centroid(w)[0]) - lineHalfLength,
            languageY2: Math.round(path.centroid(w)[1]) - lineHalfLength };
        } else { // Native American
          return {
            languageLabel: 'Indigenous',
            languageX1: Math.round(path.centroid(w)[0]) - lineHalfLength,
            languageY1: Math.round(path.centroid(w)[1]) + lineHalfLength,
            languageX2: Math.round(path.centroid(w)[0]) + lineHalfLength,
            languageY2: Math.round(path.centroid(w)[1]) - lineHalfLength };
        }
      };

      // load CSV of county etymology data
      d3.csv('assets/data/blogposts/county-etymologies/data_counties.csv')
        .then(function(data) {

        // load JSON of state outlines
        d3.json('assets/data/blogposts/county-etymologies/data_states-20m.json')
          .then(function(json) {
          // draw state outlines
          pathContainer.selectAll('.statepath-1')
            .data(json.features)
            .enter()
            .append('path')
              .attr('d', path)
              .attr('class', 'statepath-1');
        }); // close JSON function for state outlines

        // load JSON of county outlines
        d3.json('assets/data/blogposts/county-etymologies/data_counties-20m.json')
          .then(function(json) {

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
          pathContainer.selectAll('.countypath-1')
            .data(json.features)
            .enter()
            .append('path')
              .attr('d', path)
              .attr('class', 'countypath-1')
            .append('title') // add <title> tooltip for now
              .text(function(d) {
                return d.properties.LSAD + ' name: ' + d.properties.NAME + // LSAD = 'County' or equivalent label
                ' // State: ' + d.properties.csvstate +
                ' // Named for: ' + d.properties.etymology +
                ' // Language family: ' + languageConverter(d).languageLabel +
                ' // Category: ' + categoryConverter(d.properties.category).categoryLabel; // use categoryConverter to translate CSV category to human-friendly words
              });

          // establish county centroids
          centroidContainer.selectAll('.centroid-1')
            .data(json.features)
            .enter()
            .append('line')
              .attr('class', function(d) {
                return 'centroid-1 language-' + d.properties.language + ' category-' + d.properties.category;
              })
              .attr('x1', function(d) {
                return languageConverter(d).languageX1;
              })
              .attr('y1', function(d) {
                return languageConverter(d).languageY1;
              })
              .attr('x2', function(d) {
                return languageConverter(d).languageX2;
              })
              .attr('y2', function(d) {
                return languageConverter(d).languageY2;
              })
              .style('stroke', function(d) {
                return categoryConverter(d.properties.category).categoryColor;
              });

          var filters = document.getElementsByClassName('filter-1');

          for (var i = 0; i < filters.length; i++) {
            var filterGroup = filters[i].getAttribute('data-group');
            var filterField = filters[i].getAttribute('data-field');
            var filterCountP = document.createElement('p');
            filterCountP.innerHTML = ('<em>(' + centroidContainer.selectAll('.centroid-1.' + filterGroup + '-' + filterField).size() + ')</em>');
            filters[i].appendChild(filterCountP);

            console.log(filters[i].getAttribute('data-group'));
          }

        }); // close JSON function for county outlines

      }); // close CSV function


      // filters
      allFilters
        .on('click', function() {

          var clickedButton = d3.select(this);
          var clickedButtonDataGroup = clickedButton.attr('data-group');
          var clickedButtonDataField = clickedButton.attr('data-field');
          var clickedButtonCentroidClass = clickedButtonDataGroup + '-' + clickedButtonDataField;

          // define filter group that clicked button is not part of, for use in some if-statements below
          if (clickedButtonDataGroup == 'language') {
            var opposingGroup = 'category';
          } else {
            var opposingGroup = 'language';
          }

          // if the filter is being turned ON; therefore OFF prior to click
          if (!clickedButton.classed('on-1')) {

            // if NO other filter buttons are on
            if ((clickedButton.attr('data-existinggroup-language') == '') && (clickedButton.attr('data-existinggroup-category') == '')) {

              // apply selected-style to centroids belonging to clicked filter
              svg.selectAll('.centroid-1.' + clickedButtonCentroidClass)
                .classed('centroid-on-1', true);

            // else if same group as clicked-filter already has a filter on
            } else if (clickedButton.attr('data-existinggroup-' + clickedButtonDataGroup) != '') {

              // if no cross-filtering happening prior to click; filter in same group as clicked button was the ONLY other filter on prior to current click
              if (clickedButton.attr('data-existinggroup-' + opposingGroup) == '') {

                // turn off all centroids of other filter from same group
                svg.selectAll('.centroid-1.' + clickedButtonDataGroup + '-' + clickedButton.attr('data-existinggroup-' + clickedButtonDataGroup))
                  .classed('centroid-on-1', false);

                // turn on all centroids belonging to clicked button
                svg.selectAll('.centroid-1.' + clickedButtonCentroidClass)
                  .classed('centroid-on-1', true);

                // turn off style of other filter button from same group
                filterContainer.select('#filter-' + clickedButtonDataGroup + '-' + clickedButton.attr('data-existinggroup-' + clickedButtonDataGroup))
                  .classed('on-1', false);

              } else { // else cross-filtering IS happening prior to click; filter in different group from clicked button AND filter in same group as clicked button BOTH on prior to click

                // turn off all centroids of other filter from same group
                svg.selectAll('.centroid-1.' + clickedButtonDataGroup + '-' + clickedButton.attr('data-existinggroup-' + clickedButtonDataGroup))
                  .classed('centroid-on-1', false);

                // turn on centroids only at the intersection of both clicked-on button and already-on filter from other group
                svg.selectAll('.centroid-1.' + clickedButtonCentroidClass + '.' + opposingGroup + '-' + clickedButton.attr('data-existinggroup-' + opposingGroup))
                  .classed('centroid-on-1', true);

                // turn off style of other filter button from same group
                filterContainer.select('#filter-' + clickedButtonDataGroup + '-' + clickedButton.attr('data-existinggroup-' + clickedButtonDataGroup))
                  .classed('on-1', false);

              } // close if-statement about cross-filtering happening prior to click

            } else { // other filter is in different group from clicked-on filter

              // turn off selected-style of centroids NOT in the intersection of both clicked-on filter && other selected filter
              svg.selectAll('.centroid-1.' + opposingGroup + '-' + clickedButton.attr('data-existinggroup-' + opposingGroup) + ':not(.centroid-1.' + clickedButtonCentroidClass + ')')
                .classed('centroid-on-1', false);

            } // close if-statement for whether another filter button is on

            // apply styling to clicked button
            clickedButton.classed('on-1', true);

            allFilters.each(function() { // set flag of currently selected button to all other buttons for their future awareness
              d3.select(this)
                .attr('data-existinggroup-' + clickedButtonDataGroup, clickedButtonDataField);
            });

          } else { // the filter is being turned OFF (therefore ON prior to click)

            // if another filter button is on (by definition must be from other filter group)
            if (clickedButton.attr('data-existinggroup-' + opposingGroup) != '') {

              // apply selected-style to centroids belonging to other filter
              svg.selectAll('.centroid-1.' + opposingGroup + '-' + clickedButton.attr('data-existinggroup-' + opposingGroup))
                .classed('centroid-on-1', true);

            } else { // another filter button is NOT on

              // turn off selected-style of centroids for clicked filter
              svg.selectAll('.centroid-1.' + clickedButtonCentroidClass)
                .classed('centroid-on-1', false);

            } // close if-statement for whether another filter button is on

            // remove styling from clicked button
            clickedButton.classed('on-1', false);

            allFilters.each(function() { // set flag of currently selected button to all other buttons for their future awareness
              d3.select(this)
                .attr('data-existinggroup-' + clickedButtonDataGroup, '');
            });

          } // close if-statement for whether filter is being turned ON or OFF

        });
