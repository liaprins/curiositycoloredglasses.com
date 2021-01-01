(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('results-container');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<article class="result"><a class="resultlink" href="' + item.url + '"><p id="resultdate" class="date s-textface bold"><time datetime="' + item.date + '" pubdate="pubdate">' + item.date + '</time></p><div class="resultglassescontainer"><div class="resultstem resultshortstem resultleftstem"></div><div style="background-image: url(' + item.bgimageleft + ')" class="resultcircle resultleftcircle"></div><div class="resultstem resultcenterstem"></div><div style="background-image: url(' + item.bgimageright + ')" class="resultcircle resultrightcircle"></div><div class="resultstem resultshortstem resultrightstem"></div></div><p id="resulttitle" class="s-display">' + item.title + '</p></a></article>';
      }
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<p class="l-textface" id="nosearchresults">Even after polishing my smudge-prone spectacle lenses, I could not find that one; sorry!</p>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-input').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('tags');
      this.field('excerpt');
      this.field('author');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'tags': window.store[key].tags,
        'excerpt': window.store[key].excerpt,
        'author': window.store[key].author
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
