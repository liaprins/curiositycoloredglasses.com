// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

    var allLargePairs = document.querySelectorAll('.largeqqglasses');
    var largePairCount = allLargePairs.length;
    var largePairRowCount = (largePairCount / 3);

    for (var i = 0; i < largePairRowCount; i++) {
        allLargePairs[i * 3].parentNode.style.left = 'calc(50vw - 612.5px)';
        allLargePairs[(i * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allLargePairs[(i * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allLargePairs[i * 3].parentNode.style.top = (300 * i) + 'px';
        allLargePairs[(i * 3) + 1].parentNode.style.top = (300 * i) + 'px';
        allLargePairs[(i * 3) + 2].parentNode.style.top = (300 * i) + 'px';
    }

    var allMediumPairs = document.querySelectorAll('.mediumqqglasses');
    var mediumPairCount = allMediumPairs.length;
    var mediumPairRowCount = (mediumPairCount / 3);

    for (var i = 0; i < mediumPairRowCount; i++) {
        allMediumPairs[i * 3].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[(i * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px + 75px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allMediumPairs[(i * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 75px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allMediumPairs[i * 3].parentNode.style.top = ((300 * i) + 75) + 'px';
        allMediumPairs[(i * 3) + 1].parentNode.style.top = ((300 * i) + 75) + 'px';
        allMediumPairs[(i * 3) + 2].parentNode.style.top = ((300 * i) + 75) + 'px';
    }

    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCount = (smallPairCount / 3);

    for (var i = 0; i < smallPairRowCount; i++) {
        allSmallPairs[i * 3].parentNode.style.left = 'calc(50vw - 612.5px + 150px)';
        allSmallPairs[(i * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px + 150px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allSmallPairs[(i * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 150px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allSmallPairs[i * 3].parentNode.style.top = ((300 * i) + 150) + 'px';
        allSmallPairs[(i * 3) + 1].parentNode.style.top = ((300 * i) + 150) + 'px';
        allSmallPairs[(i * 3) + 2].parentNode.style.top = ((300 * i) + 150) + 'px';
    }

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
