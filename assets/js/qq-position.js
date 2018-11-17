// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqBoxPosition() {

    var qqScreenWidth = window.innerWidth;

// LARGE -------------------------------------------------------------
    var largeColumnCount = 3;
    var allLargePairs = document.querySelectorAll('.largeqqglasses');
    var largePairCount = allLargePairs.length;
    var largePairRowCountInt = parseInt(largePairCount / largeColumnCount);
    var largePerfectGrid = (largePairRowCountInt * largeColumnCount);
    var largeRemainder = (largePairCount - largePerfectGrid);

    for (var i = 0; i < largePairRowCountInt; i++) {

        if (([i] % 2) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 58.16vw)';
                allLargePairs[i * largeColumnCount].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // 2nd column
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 19.667vw)';
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // 3rd column
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 19.013vw)';
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
            } else {
                // 1st column
                allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 712.5px)';
                allLargePairs[i * largeColumnCount].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
                // 2nd column
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 241px)';
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
                // 3rd column
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 233px)';
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            } // close qqScreenWidth
        } else {
            if (qqScreenWidth < 1225) {
                // 1st column
                allLargePairs[i * largeColumnCount].parentNode.style.left = 'calc(50vw - 40.31vw)';
                allLargePairs[i * largeColumnCount].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // 2nd column
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.left = 'calc(50vw - 1.877vw)';
                allLargePairs[(i * largeColumnCount) + 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // 3rd column
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.left = 'calc(50vw + 36.557vw)';
                allLargePairs[(i * largeColumnCount) + 2].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
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
            } // close qqScreenWidth
        } // close if-even-else
    } // close for-loop

    if (([i] % 2) === 0) {
        if (largeRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 58.16vw)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
            } else {
                // last pair; 1st column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 712.5px)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';                
            } // close qqScreenWidth
        } // close remainder 1
        if (largeRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 58.16vw)';
                allLargePairs[largePairCount - 2].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // last pair; 2nd column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 19.667vw)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 712.5px)';
                allLargePairs[largePairCount - 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
                // last pair; 2nd column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 241px)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } else {
        if (largeRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 40.31vw)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
            } else {
                // last pair; 1st column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 494px)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (largeRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 40.31vw)';
                allLargePairs[largePairCount - 2].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
                // last pair; 2nd column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 1.877vw)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) - 2.448) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allLargePairs[largePairCount - 2].parentNode.style.left = 'calc(50vw - 494px)';
                allLargePairs[largePairCount - 2].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
                // last pair; 2nd column
                allLargePairs[largePairCount - 1].parentNode.style.left = 'calc(50vw - 23px)';
                allLargePairs[largePairCount - 1].parentNode.style.top = ((650 * (i / 2)) - 30) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } // close if-even-else


// MEDIUM -------------------------------------------------------------

    var mediumColumnCount = 3;
    var allMediumPairs = document.querySelectorAll('.mediumqqglasses');
    var mediumPairCount = allMediumPairs.length;
    var mediumPairRowCountInt = parseInt(mediumPairCount / mediumColumnCount);
    var mediumPerfectGrid = (mediumPairRowCountInt * mediumColumnCount);
    var mediumRemainder = (mediumPairCount - mediumPerfectGrid);

    for (var i = 0; i < mediumPairRowCountInt; i++) {

        if (([i] % 2) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allMediumPairs[i * mediumColumnCount].parentNode.style.left = 'calc(50vw - 44.717vw)';
                allMediumPairs[i * mediumColumnCount].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // 2nd column
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw - 9.221vw)';
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // 3rd column
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 26.112vw)';
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
            } else {
                // 1st column
                allMediumPairs[i * mediumColumnCount].parentNode.style.left = 'calc(50vw - 548px)';
                allMediumPairs[i * mediumColumnCount].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
                // 2nd column
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw - 113px)';
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
                // 3rd column
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 320px)';
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            } // close qqScreenWidth
        } else {
            if (qqScreenWidth < 1225) {
                // 1st column
                allMediumPairs[i * mediumColumnCount].parentNode.style.left = 'calc(50vw - 26.72vw)';
                allMediumPairs[i * mediumColumnCount].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // 2nd column
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.left = 'calc(50vw + 8.61vw)';
                allMediumPairs[(i * mediumColumnCount) + 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // 3rd column
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.left = 'calc(50vw + 43.94vw)';
                allMediumPairs[(i * mediumColumnCount) + 2].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
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
            } // close qqScreenWidth
        } // close if-even-else
    } // close for-loop

    if (([i] % 2) === 0) {
        if (mediumRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 44.717vw)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
            } else {
                // last pair; 1st column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 548px)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (mediumRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 44.717vw)';
                allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // last pair; 2nd column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 9.221vw)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 548px)';
                allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
                // last pair; 2nd column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 113px)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } else {
        if (mediumRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 26.72vw)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
            } else {
                // last pair; 1st column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw - 327.5px)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (mediumRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 26.72vw)';
                allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
                // last pair; 2nd column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw + 8.61vw)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((53.04 * (i / 2)) + 11.75) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allMediumPairs[mediumPairCount - 2].parentNode.style.left = 'calc(50vw - 327.5px)';
                allMediumPairs[mediumPairCount - 2].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
                // last pair; 2nd column
                allMediumPairs[mediumPairCount - 1].parentNode.style.left = 'calc(50vw + 105.5px)';
                allMediumPairs[mediumPairCount - 1].parentNode.style.top = ((650 * (i / 2)) + 144) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } // close if-even-else


// SMALL -------------------------------------------------------------
    var smallColumnCount = 3;
    var allSmallPairs = document.querySelectorAll('.smallqqglasses');
    var smallPairCount = allSmallPairs.length;
    var smallPairRowCountInt = parseInt(smallPairCount / smallColumnCount);
    var smallPerfectGrid = (smallPairRowCountInt * smallColumnCount);
    var smallRemainder = (smallPairCount - smallPerfectGrid);

    // GETTING FOOTER TO STICK TO BOTTOM AT 1225+
    if (qqScreenWidth < 1225) {
        var binocularsArea = (smallPairRowCountInt * ((26.52 / 2) - 0.57));    /* TESTING!!! ((325 / 2) - 7)) + 'px' is the distance from the top of one small binoculars to the top of one in the next row  */
        var background = document.getElementById('background');
        var qqPageTitleHeight = document.getElementById('qqpagetitle').offsetHeight;
        var qqPageTextHeight = document.getElementById('qqpagetext').firstElementChild.offsetHeight; 
        // background.style.height = 'calc(' + binocularsArea + 'vw - ' + (parseInt(qqPageTitleHeight) + parseInt(qqPageTextHeight)) + 'px + 2.5rem)';
        background.style.height = 'calc(' + (binocularsArea * 1.22) + 'vw - ' + (parseInt(qqPageTitleHeight) + parseInt(qqPageTextHeight)) + 'px + 2.5rem)';    // 1.22 comes from the scroll rate for small glasses in qq-parallax.js (the 1 comes from 100% scroll speed and the 0.22 comes from 22% slower than that...); 2.5rem comes from the maximum randomized margin set to each binoculars in questionqueue.php
        var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight; 
        var body = document.getElementsByTagName('body')[0];
        body.style.height = binocularsArea + footerHeight;
    } else {
        var binocularsArea = (smallPairRowCountInt * ((325 / 2) - 7));    /* ONLY FOR 1225+!!! ((325 / 2) - 7)) + 'px' is the distance from the top of one small binoculars to the top of one in the next row  */
        var background = document.getElementById('background');
        var qqPageTitleHeight = document.getElementById('qqpagetitle').offsetHeight;
        var qqPageTextHeight = document.getElementById('qqpagetext').firstElementChild.offsetHeight;
        // background.style.height = 'calc(' + (binocularsArea - (qqPageTitleHeight + qqPageTextHeight)) + 'px + 2.5rem)';
        background.style.height = 'calc(' + ((binocularsArea * 1.22) - (qqPageTitleHeight + qqPageTextHeight)) + 'px + 2.5rem)';    // 1.22 comes from the scroll rate for small glasses in qq-parallax.js (the 1 comes from 100% scroll speed and the 0.22 comes from 22% slower than that...); 2.5rem comes from the maximum randomized margin set to each binoculars in questionqueue.php
        var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight; 
        var body = document.getElementsByTagName('body')[0];
        body.style.height = binocularsArea + footerHeight;
    }

    for (var i = 0; i < smallPairRowCountInt; i++) {

        if (([i] % 4) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 34.68vw)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw + 3.917vw)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 42.595vw)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 425px)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw + 48px)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 522px)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close divisible by 4 (1st row down of 4 horizontal row pattern) 

        if ((([i] % 4) - 1) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 60.14vw)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 24.806vw)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 10.61vw)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 737px)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 304px)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 130px)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close divisible by 4 (2nd row down of 4 horizontal row pattern) 

        if ((([i] % 4) - 2) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 55.24vw)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 16.81vw)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 21.624vw)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 677px)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 206px)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 265px)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close divisible by 4 (3rd row down of 4 horizontal row pattern) 

        if ((([i] % 4) - 3) === 0) {
            if (qqScreenWidth < 1225) {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 42.106vw)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 7.018vw)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 28.315vw)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 1st column
                allSmallPairs[i * smallColumnCount].parentNode.style.left = 'calc(50vw - 516px)';
                allSmallPairs[i * smallColumnCount].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 2nd column
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.left = 'calc(50vw - 86px)';
                allSmallPairs[(i * smallColumnCount) + 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // 3rd column
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.left = 'calc(50vw + 347px)';
                allSmallPairs[(i * smallColumnCount) + 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close divisible by 4 (4th row down of 4 horizontal row pattern) 
    } // close for-loop

    // REMAINDERS
    if (([i] % 4) === 0) {
        if (smallRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 34.68vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 425px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (smallRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 34.68vw)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 3.917vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 425px)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw + 48px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
    } // close divisible by 4 (top row of 4 horizontal row pattern)

    if ((([i] % 4) - 1) === 0) {
        if (smallRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 60.14vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 737px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (smallRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 60.14vw)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 24.806vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 737px)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 304px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } // close divisible by 4 (2nd row down of 4 horizontal row pattern) 

    if ((([i] % 4) - 2) === 0) {
        if (smallRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 55.24vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 677px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (smallRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 55.24vw)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 16.81vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 677px)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 206px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } // close divisible by 4 (3rd row down of 4 horizontal row pattern) 

    if ((([i] % 4) - 3) === 0) {
        if (smallRemainder == 1) {
            if (qqScreenWidth < 1225) {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 42.106vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // last pair; 1st column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 516px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 1
        if (smallRemainder == 2) {
            if (qqScreenWidth < 1225) {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 42.106vw)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 7.018vw)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((26.52 * (i / 2)) - 0.57) + 'vw';
            } else {
                // 2nd-to-last pair; 1st column
                allSmallPairs[smallPairCount - 2].parentNode.style.left = 'calc(50vw - 516px)';
                allSmallPairs[smallPairCount - 2].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
                // last pair; 2nd column
                allSmallPairs[smallPairCount - 1].parentNode.style.left = 'calc(50vw - 86px)';
                allSmallPairs[smallPairCount - 1].parentNode.style.top = ((325 * (i / 2)) - 7) + 'px';
            } // close qqScreenWidth
        } // close remainder 2
    } // close divisible by 4 (4th row down of 4 horizontal row pattern) 

} // close function
window.addEventListener('DOMContentLoaded', qqBoxPosition, false);
