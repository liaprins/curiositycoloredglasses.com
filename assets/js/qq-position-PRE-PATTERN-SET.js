// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

// LARGE -------------------------------------------------------------
    var largeColumnCount = 3;
    var allLargePairs = document.querySelectorAll('.largeqqglasses');
    var largePairCount = allLargePairs.length;
    var largePairRowCountInt = parseInt(largePairCount / largeColumnCount);
    var largePerfectGrid = (largePairRowCountInt * largeColumnCount);
    var largeRemainder = (largePairCount - largePerfectGrid);

    for (var i = 0; i < largePairRowCountInt; i++) {
        // 1st column
        allLargePairs[i * 3].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[i * 3].parentNode.style.top = (300 * i) + 'px';
        // 2nd column
        allLargePairs[(i * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px)';
        allLargePairs[(i * 3) + 1].parentNode.style.top = (300 * i) + 'px';
        // 3rd column
        allLargePairs[(i * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px - 50px)';
        allLargePairs[(i * 3) + 2].parentNode.style.top = (300 * i) + 'px';
    }

    if (largeRemainder == 1) {
        // last pair; 1st column
        allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[largePairCount - 1].parentNode.style.top = (300 * i) + 'px';
    }

    if (largeRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[largePairCount - 2].parentNode.style.top = ((300 * j) + 75) + 'px';
        // last pair; 2nd column
        allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 87.5px)';
        allLargePairs[largePairCount - 1].parentNode.style.top = ((300 * j) + 75) + 'px';
    }

// MEDIUM -------------------------------------------------------------
    var mediumColumnCount = 4;
    var allMediumPairs = document.querySelectorAll('.mediumqqglasses');
    var mediumPairCount = allMediumPairs.length;
    var mediumPairRowCountInt = parseInt(mediumPairCount / mediumColumnCount);
    var mediumPerfectGrid = (mediumPairRowCountInt * mediumColumnCount);
    var mediumRemainder = (mediumPairCount - mediumPerfectGrid);

    for (var j = 0; j < mediumPairRowCountInt; j++) {
        // 1st column
        allMediumPairs[j * 4].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[j * 4].parentNode.style.top = ((300 * j) + 75) + 'px';
        // 2nd column
        allMediumPairs[(j * 4) + 1].parentNode.style.left = 'calc(50vw - 306.25px - 87.5px + 75px)';
        allMediumPairs[(j * 4) + 1].parentNode.style.top = ((300 * j) + 75) + 'px';
        // 3rd column
        allMediumPairs[(j * 4) + 2].parentNode.style.left = 'calc(50vw + 306.25px - 157px + 75px)';
        allMediumPairs[(j * 4) + 2].parentNode.style.top = ((300 * j) + 75) + 'px';
        // 4th column
        allMediumPairs[(j * 4) + 3].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 75px)';
        allMediumPairs[(j * 4) + 3].parentNode.style.top = ((300 * j) + 75) + 'px';
    }

    if (mediumRemainder == 1) {
        // last pair; 1st column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((300 * j) + 75) + 'px';
    }

    if (mediumRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((300 * j) + 75) + 'px';
        // last pair; 2nd column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 306.25px - 87.5px + 75px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((300 * j) + 75) + 'px';
    }

    if (mediumRemainder == 3) {
        // 3rd-to-last pair; 1st column
        allMediumPairs[mediumPairCount - 3].parentNode.style.left = 'calc(50vw - 612.5px + 75px)';
        allMediumPairs[mediumPairCount - 3].parentNode.style.top = ((300 * j) + 75) + 'px';
        // 2nd-to-last pair; 2nd column
        allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 306.25px - 87.5px + 75px)';
        allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((300 * j) + 75) + 'px';
        // last pair; 3rd column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw + 306.25px - 157px + 75px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((300 * j) + 75) + 'px';
    }



    // TEST!!!
    var qqTest = document.getElementById('qqtest');
    qqTest.innerHTML = allMediumPairs[mediumPairCount - 1].getAttribute('data-id') + " || mediumPairRowCountInt: " + mediumPairRowCountInt + " | mediumPairRowCountInt: " + mediumPairRowCountInt;


// SMALL -------------------------------------------------------------
    var smallColumnCount = 3;
    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCountInt = parseInt(smallPairCount / smallColumnCount);
    var smallPerfectGrid = (smallPairRowCountInt * smallColumnCount);
    var smallRemainder = (smallPairCount - smallPerfectGrid);

    for (var k = 0; k < smallPairRowCountInt; k++) {
        // 1st column
        allSmallPairs[k * 3].parentNode.style.left = 'calc(50vw - 612.5px + 150px)';
        allSmallPairs[k * 3].parentNode.style.top = ((300 * k) + 150) + 'px';
        // 2nd column
        allSmallPairs[(k * 3) + 1].parentNode.style.left = 'calc(50vw - 87.5px + 150px)';
        allSmallPairs[(k * 3) + 1].parentNode.style.top = ((300 * k) + 150) + 'px';
        // 3rd column
        allSmallPairs[(k * 3) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px + 150px)';
        allSmallPairs[(k * 3) + 2].parentNode.style.top = ((300 * k) + 150) + 'px';
    }

    if (smallRemainder == 1) {
        // last pair; 1st column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 612.5px + 150px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((300 * k) + 150) + 'px';
    }

    if (smallRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 612.5px + 150px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((300 * k) + 150) + 'px';
        // last pair; 2nd column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 87.5px + 150px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((300 * k) + 150) + 'px';
    }

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
