// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

    // LARGE
    var allLargePairs = document.querySelectorAll('.largeqqglasses');
    var largePairCount = allLargePairs.length;
    // var largePairRowCount = (largePairCount / 3);
    var largePairRowCount = parseInt(largePairCount / 3);

    for (var i = 0; i < largePairRowCount; i++) {
        allLargePairs[i * 3].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[(i * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allLargePairs[(i * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px - 50px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allLargePairs[i * 3].parentNode.style.top = (300 * i) + 'px';
        allLargePairs[(i * 3) + 1].parentNode.style.top = (300 * i) + 'px';
        allLargePairs[(i * 3) + 2].parentNode.style.top = (300 * i) + 'px';
    }

    // MEDIUM
    var allMediumPairs = document.querySelectorAll('.mediumqqglasses');
    var mediumPairCount = allMediumPairs.length;
    // var mediumPairRowCount = (mediumPairCount / 4);
    var mediumPairRowCount = parseInt(mediumPairCount / 4);

    var qqTest = document.getElementById('qqtest');
    qqTest.innerHTML = "mediumPairCount: " + mediumPairCount + " | mediumPairRowCount: " + mediumPairRowCount;

    /*
    // 3-ACROSS
    for (var j = 0; j < mediumPairRowCount; j++) {
        allMediumPairs[j * 3].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[(j * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px + 75px)';
        allMediumPairs[(j * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 75px)';
        allMediumPairs[j * 3].parentNode.style.top = ((300 * j) + 75) + 'px';
        allMediumPairs[(j * 3) + 1].parentNode.style.top = ((300 * j) + 75) + 'px';
        allMediumPairs[(j * 3) + 2].parentNode.style.top = ((300 * j) + 75) + 'px';
    }
    */

    // 4-ACROSS
    for (var j = 0; j < mediumPairRowCount; j++) {
        allMediumPairs[j * 4].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[(j * 4) + 1].parentNode.style.left = 'calc(50vw - 306.25px - 87.5px + 75px)';
        allMediumPairs[(j * 4) + 2].parentNode.style.left = 'calc(50vw + 306.25px - 157px + 75px)';
        allMediumPairs[(j * 4) + 3].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 75px)';
        allMediumPairs[j * 4].parentNode.style.top = ((300 * j) + 75) + 'px';
        allMediumPairs[(j * 4) + 1].parentNode.style.top = ((300 * j) + 75) + 'px';
        allMediumPairs[(j * 4) + 2].parentNode.style.top = ((300 * j) + 75) + 'px';
        allMediumPairs[(j * 4) + 3].parentNode.style.top = ((300 * j) + 75) + 'px';
    }

    // SMALL
    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCount = parseInt(smallPairCount / 3);

    for (var k = 0; k < smallPairRowCount; k++) {
        allSmallPairs[k * 3].parentNode.style.left = 'calc(50vw - 612.5px + 150px)';
        allSmallPairs[(k * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px + 150px)';    /* 87.5px = approx half of width of medium glasses, the average size; needed to subtract this width to keep them centered  */
        allSmallPairs[(k * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 150px)';    /* 157px = width of medium glasses, the average size; needed to subtract their width to keep them running over the 1225px mark as core  */
        allSmallPairs[k * 3].parentNode.style.top = ((300 * k) + 150) + 'px';
        allSmallPairs[(k * 3) + 1].parentNode.style.top = ((300 * k) + 150) + 'px';
        allSmallPairs[(k * 3) + 2].parentNode.style.top = ((300 * k) + 150) + 'px';
    }

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
