// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}




// Automatically activates proper menu item when its section is scrolled to
function scrollActivateMenu() {

    removeHash();

    var sectionCount = document.getElementsByClassName('section');

    for (var i = 0; i < sectionCount.length; i++) {

        var menuItemList = document.getElementsByClassName('menuitem');

        // clear "current" status from all
        menuItemList[i].setAttribute('class', 'menuitem');


        // if ((sectionCount[i].getBoundingClientRect().top <= 0) &&
            // (sectionCount[i].getBoundingClientRect().bottom >= 0)) {
        if ((sectionCount[i].getBoundingClientRect().top <= 1) &&
            (sectionCount[i].getBoundingClientRect().bottom >= 1)) {

            var sectionId = sectionCount[i].getAttribute('id');

            if (('#' + sectionId) == menuItemList[i].parentNode.getAttribute('href')) {

                menuItemList[i].setAttribute('class', 'menuitem current');

            } else {

                menuItemList[i].setAttribute('class', 'menuitem');

            }
        }
    }
}

window.addEventListener('scroll', scrollActivateMenu, false);
// window.addEventListener('DOMContentLoaded', scrollActivateMenu, false);





// Forces the year section to be open when the URL has its hash, e.g. should pop open 
function popOpen(e) {

    var clickedThing = e.target;

    if (clickedThing.classList.contains('menuitem')) {
    
        // collect all <details> section elements
        var sectionList = document.getElementsByClassName('section');
        // get count of sections
        var sectionListLength = sectionList.length;

        // loop through this code as many times as their are sections...
        for (var i = 0; i < sectionListLength; i++) {

            // loop through all menu items and reset to unselected state
            // var menuItem = document.getElementsByClassName('menuitem');
            // menuItem[i].setAttribute('class', 'menuitem');

            // id of the <details> section whose count in the list array matches this loop count
            var sectionId = sectionList[i].getAttribute('id');
        
            if (clickedThing.parentNode.getAttribute('href') == ('#' + sectionId)) {
                // sectionList[i].parentNode.nextElementSibling.setAttribute('class', 'resultarea archiveresultarea');
                sectionList[i].setAttribute('open', 'open');  
            }

            // set only clicked menu item to selected state
            // clickedThing.setAttribute('class', 'menuitem current');            

        }
    }
}

window.addEventListener('click', popOpen, false);





