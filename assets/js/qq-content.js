// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqContentBoxPosition() {

    var content = document.querySelectorAll('.qqcontents');

    for (i = 0; i < content.length; i++) {

        var contentWidth = content[i].offsetWidth;
    
        // TEST!!!!!
        document.getElementById('qqtest').innerHTML = content[1].offsetWidth;

    }

} // close function
window.addEventListener('DOMContentLoaded', qqContentBoxPosition, false);
