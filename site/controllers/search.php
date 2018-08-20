<?php return function($site, $pages, $page) {

  $query   = get('q');

  	// commenting this original line out while I test a fix
    // $results = $site->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library')->search($query, 'title|text|intro|text|caption');

  	// testing "wHIch" fix
  	// $results = $site->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library')->search($query, array('words' => true), 'title');

    // testing search fix for multi-words to be "and" not "or" search
  	// $results = search($pages->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library'), $query, array('words' => true, 'fields' => ['title', 'text', 'intro', 'text', 'caption'] ));
  	$results = search($pages->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library'), $query, array('words' => true, 'fields' => ['title', 'text', 'intro', 'tags', 'text', 'caption'] ));

  return array(
    'query'   => $query,
    'results' => $results, 
    // 'words' => true
  );

};