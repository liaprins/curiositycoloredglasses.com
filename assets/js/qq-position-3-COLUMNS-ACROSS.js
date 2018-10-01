// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

    var allPairs = document.querySelectorAll('.qqpiece');
    var pairCount = allPairs.length;
    var pairRowCount = (pairCount / 3);

    for (var i = 0; i < pairRowCount; i++) {
        allPairs[i * 3].style.left = 'calc(50vw - 612.5px)';
        allPairs[(i * 3) + 1].style.left = 'calc(50vw - 87.5px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allPairs[(i * 3) + 2].style.left = 'calc(50vw + 612.5px - 175px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allPairs[i * 3].style.top = (400 * i) + 'px';
        allPairs[(i * 3) + 1].style.top = (400 * i) + 'px';
        allPairs[(i * 3) + 2].style.top = (400 * i) + 'px';
    }

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
