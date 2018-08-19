
Adjacent to this _README are various versions of the Kirby comment’s snippet file. They need to live in the site/plugins/comments/snippets folder, and renamed to just comments.php, in order to be called and appear in the browser on CCG.

A demo of the comments by Kirby people:
https://kirby-comments.addpixel.net/demos/spotlight

To download the whole comments plugin from Github:
https://github.com/Addpixel/KirbyComments


TROUBLESHOOTING:
If the comments aren’t posting on a page:
Try another page(s); it might be a discrepancy between the number of comments in its content/blog/[blog article]/comments folder and the number of posted comments on screen (use Inspector to find number). If so, delete the extra comment from the folder.
If all else fails, find previous versions of the comments snippet (site/plugins/comments/snippets/comments-[insert descriptive part of name].php) and duplicate them and name them comments.php (first rename the current comments.php that is not working “comments-broken.php” or similar). Once a version works, compare it and the original (now “comments-broken.php”) to find the diff.
