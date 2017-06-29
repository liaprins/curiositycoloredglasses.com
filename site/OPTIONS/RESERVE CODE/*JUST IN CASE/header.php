<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="utf-8" />

  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <!-- this is what shows when you bookmark this page, and what's in the browser tab (I think) -->
  <title>
    <?php echo $page->title()->html() ?> | <?php echo $site->title()->html() ?>
  </title>

  <meta name="description" content="<?php echo $site->description()->html() ?>">

  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

<!-- OPEN GRAPH SETTINGS FOR CONTROLLING METADATA, PLACEHOLDER SHARING TEXT, ETC, ASSOCIATED TO SHARED LINKS -->
  <?php snippet('opengraph-settings') ?>

  <?php echo css('assets/css/main.css') ?>

</head>



<body>

  <?php snippet('facebook-sdk') ?>


  <header class="header cf" role="banner">

    <?php snippet('menu') ?>

  </header>