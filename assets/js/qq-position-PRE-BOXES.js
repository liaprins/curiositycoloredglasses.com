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
        allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[i * largeColumnCount].parentNode.style.top = ((360 * i) + 50) + 'px';
        // 2nd column
        allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 87.5px)';
        allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((360 * i) + 50) + 'px';
        // 3rd column
        allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 612.5px - 157px - 50px)';
        allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((360 * i) + 50) + 'px';
    }

    if (largeRemainder == 1) {
        // last pair; 1st column
        allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[largePairCount - 1].parentNode.style.top = ((360 * i) + 50) + 'px';
    }

    if (largeRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 612.5px + 50px)';
        allLargePairs[largePairCount - 2].parentNode.style.top = ((360 * i) + 50) + 'px';
        // last pair; 2nd column
        allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 87.5px)';
        allLargePairs[largePairCount - 1].parentNode.style.top = ((360 * i) + 50) + 'px';
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
        allMediumPairs[j * mediumColumnCount].parentNode.style.left = 'calc(50vw - 550px - 87.5px)';
        allMediumPairs[j * mediumColumnCount].parentNode.style.top = ((280 * j) + 250) + 'px';
        // 2nd column
        allMediumPairs[(j * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw - 200px - 87.5px)';
        allMediumPairs[(j * mediumColumnCount) + 1].parentNode.style.top = ((280 * j) + 250) + 'px';
        // 3rd column
        allMediumPairs[(j * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 200px - 87.5px)';
        allMediumPairs[(j * mediumColumnCount) + 2].parentNode.style.top = ((280 * j) + 250) + 'px';
        // 4th column
        allMediumPairs[(j * mediumColumnCount) + 3].parentNode.style.left = 'calc(50vw + 550px - 87.5px)';
        allMediumPairs[(j * mediumColumnCount) + 3].parentNode.style.top = ((280 * j) + 250) + 'px';
    }

    if (mediumRemainder == 1) {
        // last pair; 1st column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 550px - 87.5px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((280 * j) + 250) + 'px';
    }

    if (mediumRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 550px - 87.5px)';
        allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((280 * j) + 250) + 'px';
        // last pair; 2nd column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 200px - 87.5px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((280 * j) + 250) + 'px';
    }

    if (mediumRemainder == 3) {
        // 3rd-to-last pair; 1st column
        allMediumPairs[mediumPairCount - 3].parentNode.style.left = 'calc(50vw - 550px - 87.5px)';
        allMediumPairs[mediumPairCount - 3].parentNode.style.top = ((280 * j) + 250) + 'px';
        // 2nd-to-last pair; 2nd column
        allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 200px - 87.5px)';
        allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((280 * j) + 250) + 'px';
        // last pair; 3rd column
        allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw + 200px - 87.5px)';
        allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((280 * j) + 250) + 'px';
    }

    // TEST!!!
    // var qqTest = document.getElementById('qqtest');
    // qqTest.innerHTML = allMediumPairs[mediumPairCount - 1].getAttribute('data-id') + " || mediumPairRowCountInt: " + mediumPairRowCountInt + " | mediumPairRowCountInt: " + mediumPairRowCountInt;


// SMALL -------------------------------------------------------------
    var smallColumnCount = 4;
    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCountInt = parseInt(smallPairCount / smallColumnCount);
    var smallPerfectGrid = (smallPairRowCountInt * smallColumnCount);
    var smallRemainder = (smallPairCount - smallPerfectGrid);

    for (var k = 0; k < smallPairRowCountInt; k++) {
        // 1st column
        allSmallPairs[k * smallColumnCount].parentNode.style.left = 'calc(50vw - 450px)';
        allSmallPairs[k * smallColumnCount].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 2nd column
        allSmallPairs[(k * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[(k * smallColumnCount) + 1].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 3rd column
        allSmallPairs[(k * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 250px)';
        allSmallPairs[(k * smallColumnCount) + 2].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 4th column
        allSmallPairs[(k * smallColumnCount) + 3].parentNode.style.left = 'calc(50vw + 550px)';
        allSmallPairs[(k * smallColumnCount) + 3].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 5th column
        // allSmallPairs[(k * 5) + 4].parentNode.style.left = 'calc(50vw + 400px)';
        // allSmallPairs[(k * 5) + 4].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 6th column
        // allSmallPairs[(k * 5) + 5].parentNode.style.left = 'calc(50vw + 650px)';
        // allSmallPairs[(k * 5) + 5].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    if (smallRemainder == 1) {
        // last pair; 1st column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 650px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    if (smallRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 650px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((265 * k) + 150) + 'px';
        // last pair; 2nd column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 400px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    if (smallRemainder == 3) {
        // 3rd-to-last pair; 1st column
        allSmallPairs[smallPairCount - 3].parentNode.style.left = 'calc(50vw - 650px)';
        allSmallPairs[smallPairCount - 3].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 2nd-to-last pair; 2nd column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 400px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((265 * k) + 150) + 'px';
        // last pair; 3rd column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    /*
    if (smallRemainder == 4) {
        // 4th-to-last pair; 1st column
        allSmallPairs[smallPairCount - 4].parentNode.style.left = 'calc(50vw - 650px)';
        allSmallPairs[smallPairCount - 4].parentNode.style.top = ((180 * k) + 150) + 'px';
        // 3rd-to-last pair; 2nd column
        allSmallPairs[smallPairCount - 3].parentNode.style.left = 'calc(50vw - 400px)';
        allSmallPairs[smallPairCount - 3].parentNode.style.top = ((180 * k) + 150) + 'px';
        // 2nd-to-last pair; 3rd column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((180 * k) + 150) + 'px';
        // last pair; 4th column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 150px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((180 * k) + 150) + 'px';
    }

    if (smallRemainder == 5) {
        // 5th-to-last pair; 1st column
        allSmallPairs[smallPairCount - 5].parentNode.style.left = 'calc(50vw - 650px)';
        allSmallPairs[smallPairCount - 5].parentNode.style.top = ((180 * k) + 150) + 'px';
        // 4th-to-last pair; 2nd column
        allSmallPairs[smallPairCount - 4].parentNode.style.left = 'calc(50vw - 400px)';
        allSmallPairs[smallPairCount - 4].parentNode.style.top = ((180 * k) + 150) + 'px';
        // 3rd-to-last pair; 3rd column
        allSmallPairs[smallPairCount - 3].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[smallPairCount - 3].parentNode.style.top = ((180 * k) + 150) + 'px';
        // 2nd-to-last pair; 4th column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw + 150px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((180 * k) + 150) + 'px';
        // last pair; 5th column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 400px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((180 * k) + 150) + 'px';
    }
    */

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
