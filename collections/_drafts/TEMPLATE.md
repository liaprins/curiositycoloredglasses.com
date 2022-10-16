---
hidden: true
title: 
author: Lia Prins
authorlink: REMOVE UNLESS GUEST AUTHOR
excerpt: REPLACE COLONS WITH "&#58;"
tags: 
leftextension: REMOVE IF .jpg; OTHERWISE ALL LOWERCASE WITH PRECEDING PERIOD, I.E. .png
rightextension: REMOVE IF .jpg; OTHERWISE ALL LOWERCASE WITH PRECEDING PERIOD, I.E. .png
share: SOCIAL CARD TEXT SANS LINK, TAGS, "via @iggledee", ETC
sharelink: https://curiositycoloredglasses.com/POSTSLUG
shareimage: SLUG.jpg
d3v: v6
d3: 
p5: 
css: 
process: 
glossaryfolder: 
thankyoufolder: 
thankyoucontent: REMOVE IF NOT USING
relevantreading:
  - POSTSLUG
comments: true 
---

<!-- FRONT-MATTER TEMPLATE vvv !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<!-- 1.) FILL-IN THE ALL-CAPS FRONT-MATTER TEMPLATE TEXT BELOW FOR SLUG AND VISUALSHORTNAME; DELETE THE UNNEEDED FIELDS -->
<!-- 2.) CUT THE COMPLETED FRONT-MATTER FIELDS BELOW; PASTE OVER FRONT-MATTER FIELDS d3 THROUGH thankyoufolder ABOVE  -->
<!-- 3.) FILL-IN OR DELETE REMAINING FRONT-MATTER ABOVE -->
<!-- 4.) DELETE THIS FRONT-MATTER TEMPLATE SECTION -->
d3:
  - graphs/SLUG/VISUALSHORTNAME.js
p5:
  - graphs/SLUG/VISUALSHORTNAME.js
css:
  - /assets/css/blogposts/SLUG/SLUG.css
process: process/process-SLUG.html
glossaryfolder: vocab-SLUG
thankyoufolder: thankyou-SLUG

<!-- FRONT-MATTER TEMPLATE ^^^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->



<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->



<!-- TEXT TEMPLATE vvv !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<!-- 1.) COPY BLANK TEMPLATES BELOW WHERE NEEDED IN SEQUENCE, BELOW THIS WHOLE TEMPLATE SECTION -->
<!-- 2.) DELETE ALL TEMPLATES -->
<!-- 3.) FILL OUT COPIED TEMPLATES WITH CONTENT -->

<!-- HEADING ***************************************************************** -->
#### HEADING

<!-- ITALICS -->
*ITALICS* 

<!-- BOLD -->
**BOLD**

<!-- LINKS (USE WITHIN PARAGRAPHS) ******************************************** -->
[VISIBLELINKWORDS](HYPERLINK){: target="_blank"}
<!-- INTERNAL LINKS USE THE FOLLOWING FORMATS TO REPLACE "HYPERLINK" IN THE TEMPLATE ABOVE -->
{{ site.baseurl }}POSTSLUG
{{ site.baseurl }}POSTSLUG#ID
{{ site.baseurl }}assets/images/blogposts/POSTSLUG/VISUALSHORTNAME.jpg
{{ site.baseurl }}hello
{{ site.baseurl }}library#TOPICSLUG
{{ site.baseurl }}questionqueue#TOPICSLUG

<!-- PULL QUOTES (CAN SET shape="" TO circle INSTEAD OF square) ************** -->
{% include post-pullquote.html content="PULLQUOTE" shape="square" %}

<!-- SINGLE IMAGE (REMOVE caption="" PARAMETER ENTIRELY IF NO CAPTION) ******* -->
{% include post-image.html image="VISUALSHORTNAME.jpg" alt="ALT" caption="CAPTION" %}

<!-- GALLERY ***************************************************************** -->
{% assign galleryid = "VISUALSHORTNAME" %}
{% assign gallery = '
<img src="https://curiositycoloredglasses.com/assets/images/blogposts/POSTSLUG/VISUALSHORTNAME/VISUALSHORTNAME_1.jpg" alt="ALT" class="contentimage" id="galleryimage"> 🟡 
<img src="https://curiositycoloredglasses.com/assets/images/blogposts/POSTSLUG/VISUALSHORTNAME/VISUALSHORTNAME_2.jpg" alt="ALT" class="contentimage" id="galleryimage"> 🟡 
<img src="https://curiositycoloredglasses.com/assets/images/blogposts/POSTSLUG/VISUALSHORTNAME/VISUALSHORTNAME_3.jpg" alt="ALT" class="contentimage" id="galleryimage">
' | split: " 🟡 " %}
{% assign captions = '
CAPTIONFORIMAGE1PARTA
<p class="figcaptionspacer"></p>
CAPTIONFORMIMAGE1PARTB 🟡 
- 🟡 
CAPTIONFORIMAGE3
' | split: " 🟡 " %}
{% include post-gallery.html %}

<!-- VIDEO (CAN CHANGE ratio="" FROM 16-9 TO 4-3; REMOVE caption="" PARAMETER ENTIRELY IF NO CAPTION) -->
{% include post-vimeo.html vimeonumber="#########" ratio="16-9" caption="CAPTION" %}

<!-- GLOSSARY **************************************************************** -->
{% include post-glossary-inline.html inlineword="INLINETERM" id="TERMFILENAME" %}

<!-- FOOTNOTE **************************************************************** -->
{%-include post-thankyou-inline.html number="#"-%}

<!-- TEXT TEMPLATE ^^^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->



<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------- -->



