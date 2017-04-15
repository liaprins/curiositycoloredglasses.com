

To use the same HTML for both desktop and hamburger menus, the <details> and <summary> elements need to be used; they need to be used for the hamburger, so they’ll have to be there for the desktop, too. HOWEVER, in order for the desktop menu to be visible, it’s <detail> tag has to have the open attribute applied within the HTML: <details open>. Since it’s in the HTML, though, and the desktop and hamburger are going to use the same HTML, this will affect the hamburger menu, and it will be open by default. There is no way around this with CSS. There may be with JS. 

In the meantime, I am proceeding with integrating the hamburger menu code into the regular code. I will keep the <details> WITHOUT the open attribute for now, so the hamburger will not default to open.



ABOUT THE FILES:


menu.php
This is a backup of the one that lives in site/snippets. It holds the HTML with ids and classes that work for both hamburger and desktop style. The CSS files that call the ids and classes in here are what determine the style.


“Hamburger (Tablets + Mobiles)” folder:

menu-hamburger.css
This holds the CSS isolated to just the ids and classes called in menu.php, to get the hamburger style.


“Desktop” folder:

menu-desktop.css
This is the good code to use for the desktop menu! Use it for a media query for desktop sizes. The hamburger will be the default style, and at the threshold width, this style will override/cascade over the hamburger style.

internal-menu.php
For posterity, I added the original internal-menu.php file in the Desktop folder, from the original method, which didn’t have the home icon show up on the home page. This meant the blog.php (home page) was the only one calling the menu.php which at that time didn’t have a link or icon to the home page (it does now, but can be commented out). All the other pages did have the home link/icon, so their templates called internal-menu.php snippet instead. It held the link/icon for the home page, and then called the old menu.php (which then didn’t have a link to home).

menu-desktop-d.css and menu-desktop-d.php
Kept for posterity. All the ids and classes in here are appended with “-d”. This way it could be used with menu-desktop-d.php (which also has all ids and classes appended with “-d”), while the hamburger menu could simultaneously be used without the “-d”s. Both .php snippets could be called by all the templates and both menus would appear at once. I used it for getting the base HTML/ .php snippet and its ids and classes right, in a way that would work for both menus. They both ended up with the identical HTML, ids, and classes in all the same places, except the -d’s just to have them be able to be styled differently while testing.

menu-desktop-replace.css
Kept in case I decided to “replace” the CSS for the hamburger menu, rather than “cascade” over its styles. This would mean a media query would be put on the hamburger menu, too. It would stop at a certain width. And there would also be a media query for desktop, which would pick up right where the hamburger one stopped. HOWEVER, I am preferring to do the cascading method, which is more foolproof against things that don’t take media queries at all.