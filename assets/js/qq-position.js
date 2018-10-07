// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

// LARGE -------------------------------------------------------------
    /*
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
    */

    var largeColumnCount = 3;
    var allLargePairs = document.querySelectorAll('.largeqqglasses');
    var largePairCount = allLargePairs.length;
    var largePairRowCountInt = parseInt(largePairCount / largeColumnCount);
    var largePerfectGrid = (largePairRowCountInt * largeColumnCount);
    var largeRemainder = (largePairCount - largePerfectGrid);

    for (var i = 0; i < largePairRowCountInt; i++) {

        if (([i] % 2) === 0) {
            // 1st column
            allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 712.5px)';
            allLargePairs[i * largeColumnCount].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // 2nd column
            allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 241px)';
            allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // 3rd column
            allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 233px)';
            allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        } else {
            // 1st column
            allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 494px)';
            allLargePairs[i * largeColumnCount].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // 2nd column
            allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 23px)';
            allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // 3rd column
            allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 448px)';
            allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        }
    } // close if-even-else

    if (([i] % 2) === 0) {
        if (largeRemainder == 1) {
            // last pair; 1st column
            allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 712.5px)';
            allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        }
        if (largeRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 712.5px)';
            allLargePairs[largePairCount - 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // last pair; 2nd column
            allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 241px)';
            allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        }
    } else {
        if (largeRemainder == 1) {
            // last pair; 1st column
            allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 494px)';
            allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        }
        if (largeRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 494px)';
            allLargePairs[largePairCount - 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            // last pair; 2nd column
            allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 23px)';
            allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
        }
    } // close if-even-else

// MEDIUM -------------------------------------------------------------
    /*
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
    */

    var mediumColumnCount = 3;
    var allMediumPairs = document.querySelectorAll('.mediumqqglasses');
    var mediumPairCount = allMediumPairs.length;
    var mediumPairRowCountInt = parseInt(mediumPairCount / mediumColumnCount);
    var mediumPerfectGrid = (mediumPairRowCountInt * mediumColumnCount);
    var mediumRemainder = (mediumPairCount - mediumPerfectGrid);

    for (var i = 0; i < mediumPairRowCountInt; i++) {

        if (([i] % 2) === 0) {
            // 1st column
            allMediumPairs[i * mediumColumnCount].parentNode.style.left = 'calc(50vw - 548px)';
            allMediumPairs[i * mediumColumnCount].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // 2nd column
            allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw - 113px)';
            allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // 3rd column
            allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 320px)';
            allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        } else {
            // 1st column
            allMediumPairs[i * mediumColumnCount].parentNode.style.left = 'calc(50vw - 327.5px)';
            allMediumPairs[i * mediumColumnCount].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // 2nd column
            allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw + 105.5px)';
            allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // 3rd column
            allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 538.5px)';
            allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        } // close if-even-else
    } // close for-loop

    if (([i] % 2) === 0) {
        if (mediumRemainder == 1) {
            // last pair; 1st column
            allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 548px)';
            allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        }
        if (mediumRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 548px)';
            allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // last pair; 2nd column
            allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 113px)';
            allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        }
    } else {
        if (mediumRemainder == 1) {
            // last pair; 1st column
            allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 327.5px)';
            allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        }
        if (mediumRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 327.5px)';
            allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            // last pair; 2nd column
            allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw + 105.5px)';
            allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
        }
    } // close if-even-else

// SMALL -------------------------------------------------------------

    /*
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
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 450px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    if (smallRemainder == 2) {
        // 2nd-to-last pair; 1st column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 450px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((265 * k) + 150) + 'px';
        // last pair; 2nd column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }

    if (smallRemainder == 3) {
        // 3rd-to-last pair; 1st column
        allSmallPairs[smallPairCount - 3].parentNode.style.left = 'calc(50vw - 450px)';
        allSmallPairs[smallPairCount - 3].parentNode.style.top = ((265 * k) + 150) + 'px';
        // 2nd-to-last pair; 2nd column
        allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 150px)';
        allSmallPairs[smallPairCount - 2].parentNode.style.top = ((265 * k) + 150) + 'px';
        // last pair; 3rd column
        allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 250px)';
        allSmallPairs[smallPairCount - 1].parentNode.style.top = ((265 * k) + 150) + 'px';
    }
    */

    var smallColumnCount = 3;
    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCountInt = parseInt(smallPairCount / smallColumnCount);
    var smallPerfectGrid = (smallPairRowCountInt * smallColumnCount);
    var smallRemainder = (smallPairCount - smallPerfectGrid);

    for (var i = 0; i < smallPairRowCountInt; i++) {

        // TESTING DIVISIBLE BY 4
        if (([i] % 4) === 0) {
            // 1st column
            allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 425px)';
            allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 2nd column
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw + 48px)';
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 3rd column
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 522px)';
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        } 

        if ((([i] % 4) - 1) === 0) {
            // 1st column
            allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 737px)';
            allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 2nd column
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 304px)';
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 3rd column
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 130px)';
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        } // close if-even-else

        if ((([i] % 4) - 2) === 0) {
            // 1st column
            allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 677px)';
            allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 2nd column
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 206px)';
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 3rd column
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 265px)';
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        } // close if-even-else

        if ((([i] % 4) - 3) === 0) {
            // 1st column
            allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 516px)';
            allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 2nd column
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 86px)';
            allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // 3rd column
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 347px)';
            allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        } // close if-even-else
    } // close for-loop

    // remainders
    if (([i] % 4) === 0) {
        if (smallRemainder == 1) {
            // last pair; 1st column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 425px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
        if (smallRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 425px)';
            allSmallPairs[smallPairCount - 2].style.top = ((325 * (i / 2)) - 7) + 'px';
            // last pair; 2nd column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 48px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
    } 

    if ((([i] % 4) - 1) === 0) {
        if (smallRemainder == 1) {
            // last pair; 1st column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 737px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
        if (smallRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 737px)';
            allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // last pair; 2nd column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 130px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
    } 

    if ((([i] % 4) - 2) === 0) {
        if (smallRemainder == 1) {
            // last pair; 1st column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 677px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
        if (smallRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 677px)';
            allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // last pair; 2nd column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 206px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
    } 

    if ((([i] % 4) - 3) === 0) {
        if (smallRemainder == 1) {
            // last pair; 1st column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 516px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
        if (smallRemainder == 2) {
            // 2nd-to-last pair; 1st column
            allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 516px)';
            allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            // last pair; 2nd column
            allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 347px)';
            allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
        }
    } 

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
