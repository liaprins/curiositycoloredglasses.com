function archiveSectionToggle(e) {
    var selectedHeader = e.target;
    if (selectedHeader.hasAttribute('data-clickable-header')) {
        // sets a toggle upon click that adds/deletes a class (that is styled to hide the content)
        selectedHeader.parentNode.nextElementSibling.classList.toggle('archivesectiontoggleoff');
    }
}

window.addEventListener('click', archiveSectionToggle, false);


// Forces the year section to be open when the URL has its hash, e.g. should pop open 
function archivePageLoad() {
    // collect all <h3> elements
    var headerList = document.getElementsByClassName('archivesectionsummary');
    // get count of years
    var headerListLength = headerList.length;

    // loop through this code as many times as their are year headings...
    for (var i = 0; i < headerListLength; i++) {

        // id of the <h3> whose count in the list array matches this loop count
        var headerYear = headerList[i].getAttribute('id');
        
        // ...if a match is found between the current URL#hash and an <h3>'s id...
        if (location.hash == ('#' + headerYear)) {
            headerList[i].parentNode.nextElementSibling.setAttribute('class', 'resultarea archiveresultarea');
        }
    }
}

window.addEventListener('hashchange', archivePageLoad, false);
// research (in book) and troubleshoot 'hashchange' ^^^ if not working


// Removes hash when page is refreshed
function hashReset() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

window.addEventListener('DOMContentLoaded', hashReset, false);