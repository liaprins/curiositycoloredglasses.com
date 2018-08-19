
This folder contains files (adjacent to this readme file) that can change/control how gallery images are stored, referenced and accessed in the panel. It will require the images for each gallery to live inside a subpage of the blogarticle specific to the particular gallery they appear in. It also means that kirbytags calling galleries will now need to reference the name of the gallery subpage (including previously-crated galleries that call the “(gallery: )” kirbytag.

To implement these changes, follow these instructions:



In the site/blueprints/blogarticle.yml file:
Find the subpage settings and ADD “gallery” as a template to choose from. 
//subpage settings
pages: 
  template:
    - [other templates will possibly be listed; leave them]
    - gallery   		// <<< ADD this line 


Replace site/tags/gallery.php with the file of the same name in this folder, that is adjacent to this readme file.
This new gallery.php will change two things: It will change how the “(gallery: )” kirbytag works behind the scenes, so it knows to pull images from within the referenced subpage, and it also means that when using the gallery kirbytag in the panel text, it must call the gallery by its subpage name, e.g. (gallery: tree-rings).


Past blog articles’ galleries may not be functional with this change. To make them work:
1.) Each chunk of images (and their metadata) used as an individual gallery will need to be manually moved to reside together inside a folder adjacent to the blog article.txt folder. If one image was used in multiple galleries in the same blog post, it will need to be duplicated for each new gallery folder. The gallery folders need to be named WITHOUT spaces or special characters.
2.) The kirbytag for every single gallery in every single past blog post will need to be change to call the name of the subpage/folder that now holds its images.










