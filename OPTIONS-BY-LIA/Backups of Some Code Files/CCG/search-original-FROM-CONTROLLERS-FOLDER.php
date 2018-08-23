<?php return function($site, $pages, $page) {

  $query   = get('q');

    $results = page('blog')->search($query, 'title|tags|intro|text|caption');

  return array(
    'query'   => $query,
    'results' => $results, 
  );

};