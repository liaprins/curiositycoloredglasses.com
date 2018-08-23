<?php return function($site, $pages, $page) {

  $query   = get('q');

    $results = $site->index()->visible()->not('template', '!=', 'comment', 'comments', 'about', 'archive', 'library')->search($query, 'title|text|intro|text|caption');

  return array(
    'query'   => $query,
    'results' => $results, 
  );

};