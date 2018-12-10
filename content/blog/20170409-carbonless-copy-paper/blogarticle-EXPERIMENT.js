function setup() {

    // establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw
    // canvas dimensions in reg view
    var cW = 642;
    var cH = 321;
    // canvas' max allowed width within lightbox
    var ltMaxW = 1108;
    // aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
    var ltWPad = 117;
    var ltHPad = 96;
    // "Are we in lightbox mode?"
    if (sketchHolder.classList.contains('sketch-lightbox')) {
        if (windowWidth >= 1225) {
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = (ltMaxW / cW);
            } else {
                var pE = (((windowHeight - ltHPad) * cW) / cH);
            } // close ratio else for if-statement within >= 1225
        } else-if (windowWidth >= 817) {
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = ((windowWidth - ltWPad) / cW);
            } else {
                var pE = (((windowHeight - ltHPad) * cW) / cH);
            } // close ratio else for if-statement within >= 817
        } else { // < 817
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = (windowWidth / cW);
            } else {
                var pE = ((windowWidth * cW) / cH);
            } // close ratio else for if-statement within < 817
        }
    } else { // not in lightbox mode
        if (windowWidth >= 817) {
            var pE = 1;
        } else {
            var pE = (((windowWidth / 28) * 22) / cW);
        }
    } // close lightbox if-else

    var canvas = createCanvas((642 * pe), (100 * pe));
    var sketchHolder = document.getElementById('sketch-holder');
    canvas.parent('sketch-holder'); // Move the canvas so it’s inside our <div id="sketch-holder">.
    background(255, 0, 200);
}


function draw() {

    var sketchHolder = document.getElementById('sketch-holder');

    // establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw
    // canvas dimensions in reg view
    var cW = 642;
    var cH = 321;
    // canvas' max allowed width within lightbox
    var ltMaxW = 1108;
    // aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
    var ltWPad = 117;
    var ltHPad = 96;
    // "Are we in lightbox mode?"
    if (sketchHolder.classList.contains('sketch-lightbox')) {
        if (windowWidth >= 1225) {
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = (ltMaxW / cW);
            } else {
                var pE = (((windowHeight - ltHPad) * cW) / cH);
            } // close ratio else for if-statement within >= 1225
        } else-if (windowWidth >= 817) {
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = ((windowWidth - ltWPad) / cW);
            } else {
                var pE = (((windowHeight - ltHPad) * cW) / cH);
            } // close ratio else for if-statement within >= 817
        } else { // < 817
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            if ((windowWidth / windowHeight) < (cW / cH)) {
                var pE = (windowWidth / cW);
            } else {
                var pE = ((windowWidth * cW) / cH);
            } // close ratio else for if-statement within < 817
        }
    } else { // not in lightbox mode
        if (windowWidth >= 817) {
            var pE = 1;
        } else {
            var pE = (((windowWidth / 28) * 22) / cW);
        }
    } // close lightbox if-else

// draw fun stuff now!
    if(mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, (80 * pe), (80 * pe));
}


















