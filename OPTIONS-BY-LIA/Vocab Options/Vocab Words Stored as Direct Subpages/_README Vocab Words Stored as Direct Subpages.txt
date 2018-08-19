
This folder contains files (adjacent to this readme file) that can change/control how vocab words are stored, referenced and accessed in the panel. It will will allow the data and content for each vocab word to live as a direct subpage of the blog article they are referenced in. 

To implement these changes, follow these instructions:



In the site/blueprints/blogarticle.yml file:
Find the subpage settings and REMOVE “vocabword” as a template to choose from. Also REMOVE the “build:” property and the settings that auto-build a “Vocab Words” subpage per new blog article page.

//subpage settings
pages: 
  template:
    - [other templates will possibly be listed; leave them]
    - vocabword   		// <<< REMOVE this line 
  build:			// <<< REMOVE this line
    - title: Vocab Words	// <<< REMOVE this line
      uid: definitions		// <<< REMOVE this line
      template: vocabwords	// <<< REMOVE this line
      num: 1			// <<< REMOVE this line

Now the subpages section will look like this:
//subpage settings
pages: 
  template:
    - [other templates will possibly be listed; leave them]


Copy, paste, and replace the blogarticle-8-vocab.php file that is in this folder with the one inside site/snippets. This will change where the system calls the vocab data from, for the foreach loop that generates the definitions (currently listed at the end of the text area of the page).


Remove vocabwords.yml from site/blueprints (or just deprecate by tagging with a gray dot). It is no longer needed for the panel to visualize a “Vocab Words” subpage as parent of the actual vocab words’ content.


There should already be a site/blueprints/vocabword.yml (“vocabword” singular!), but if not, then copy the one from this folder into site/blueprints. It would have been the blueprint for the vocab words already, and will continue to be.


Past blog articles’ vocab words may not be functional with this change. There will need to be a folder called “definitions” inside the blog article folder, adjacent to the blogarticle.txt file. Create one. Then for each blog article, move the vocab words’ content files manually into the “definitions” folder. They may currently be inside site/content/blog/[blog article goes here] folder, adjacent to the “definitions” folder. 











