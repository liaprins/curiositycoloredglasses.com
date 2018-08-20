
This folder contains files (adjacent to this readme file) that can change/control how vocab words are stored, referenced and accessed in the panel. It will require the data and content for each vocab word to live inside a “Vocab Word” page, which is a subpage of the blog article the vocab words are referenced in, making their content pages sub-subpages of the blog article page.

Each new blog article page will also auto-build a “Vocab Words” subpage.

To implement these changes, follow these instructions:



In the site/blueprints/blogarticle.yml file:
Find the subpage settings and ADD “vocabword” as a template to choose from. Also ADD the “build:” property and the settings to auto-build a “Vocab Words” subpage per new blog article page.
//subpage settings
pages: 
  template:
    - [other templates will possibly be listed; leave them]
    - vocabword   		// <<< ADD this line 
  build:			// <<< ADD this line
    - title: Vocab Words	// <<< ADD this line
      uid: definitions		// <<< ADD this line
      template: vocabwords	// <<< ADD this line
      num: 1			// <<< ADD this line


Copy, paste, and replace the blogarticle-8-vocab.php file that is in this folder with the one inside site/snippets. This will change where the system calls the vocal data from, for the foreach loop that generates the definitions (currently listed at the end of the text area of the page).


Copy vocabwords.yml from this folder into site/blueprints. It is needed for the panel to visualize the soon-to-be auto-created “Vocab Words” subpage.


There should already be a site/blueprints/vocabword.yml (“vocabword” singular!), but if not, then copy the one from this folder into site/blueprints. It would have been the blueprint for the vocab words already, and will continue to be.


Past blog articles’ vocab words may not be functional with this change. Their content files may need to be manually moved from site/content/blog/[blog article goes here]/definitions/[vocab word].txt to one level shallower, just adjacent to their “definitions” folder, directly within their [blog article goes here] folder.











