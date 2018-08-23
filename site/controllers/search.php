<?php return function($site, $pages, $page) {

  $query   = get('q');

  	// commenting this original line out while I test a fix
    // $results = $site->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library')->search($query, 'title|text|intro|text|caption');

  	// testing "wHIch" fix
  	// $results = $site->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library')->search($query, array('words' => true), 'title');

    // testing search fix for multi-words to be "and" not "or" search
  	// $results = search($pages->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library'), $query, array('words' => true, 'fields' => ['title', 'text', 'intro', 'text', 'caption'] ));
  	
    // testing ability to search for tags with #
    $results = search($pages->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library'), $query, array('words' => true, 'fields' => ['title', 'text', 'intro', 'tags', 'text', 'caption'] ));
    
    // regular search, but doesn't look at tags vvv
    // $results = search($pages->index()->visible()->not('template', '!=', 'comment', 'comments', 'hello', 'archive', 'library'), $query, array('words' => true, 'fields' => ['title', 'text', 'intro', 'text', 'caption'] ));
    
    // only looks at tags and only looks at incoming searches with "#" at start
    // $resultsoftags = search($pages->index()->visible()->not('template', '!=', 'blog', 'comment', 'comments', 'hello', 'archive', 'library'), ltrim($query, '#'), array('words' => true, 'fields' => ['tags'] ));


  return array(
    'query'   => $query,
    'results' => $results, 
    // 'resultsoftags' => $resultsoftags,
    // 'words' => true
  );

};