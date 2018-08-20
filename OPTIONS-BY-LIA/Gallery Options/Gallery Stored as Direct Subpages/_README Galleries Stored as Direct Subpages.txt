
This folder contains files (adjacent to this readme file) that can change/control how gallery images are stored, referenced and accessed in the panel. It will require the images for each gallery to live directly adjacent to the blogarticle.txt file, and appear as files in the side panel of the blog article. It also means that kirbytags calling galleries will now need to reference the name of each image (including suffix) in the order they should appear, separated by commas.

To implement these changes, follow these instructions:



In the site/blueprints/blogarticle.yml file:
Find the subpage settings and REMOVE “gallery” as a template to choose from. 
//subpage settings
pages: 
  template:
    - [other templates will possibly be listed; leave them]
    - gallery   		// <<< REMOVE this line 


Replace site/tags/gallery.php with the file of the same name in this folder, that is adjacent to this readme file.
This new gallery.php will change two things: It will change how the “(gallery: )” kirbytag works behind the scenes, so it knows to pull images from directly from the blog article’s files, and it also means that when using the gallery kirbytag in the panel text, it must call the images themselves in a list, e.g. (gallery: image1.png, image2.jpg, image3.gif).


Past blog articles’ galleries may not be functional with this change. To make them work:
1.) The contents of each folder holding a previous gallery will need to be manually moved to reside adjacent to that folder, and the blogarticle.txt file. The old gallery folders can be deleted or deprecated by adding a gray tag dot in Finder.
2.) The kirbytag for every single gallery in every single past blog post will need to be changed to call the individual images it was meant to reference.










