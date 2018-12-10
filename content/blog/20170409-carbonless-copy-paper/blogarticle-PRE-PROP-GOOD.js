// establishing pE (Pixel Equivalent) = equivalent for screensizes <817px
// (or any screensize within lightbox mode)

// canvas dimensions in reg view, at 817+
var cW = 642;
var cH = 300;
// canvas' max allowed width within lightbox
var ltMaxW = 1108;
// aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
var ltWPad = 117;
var ltHPad = 96;



function setup() {

    // FOR NOW ONLY SIZNG CANVAS WHEN IT'S IN REG VIEW (NOT LIGHTBOX MODE)
    // blogarticle.js IS SIZING CANVAS WITHIN LIGHTBOX FOR NOW
    if (windowWidth < 817) {
        var pE = (((windowWidth / 28) * 22) / cW);
    } else {
        var pE = 1;
    }

    var canvas = createCanvas((cW * pE), (cH * pE));
    canvas.parent('sketch-holder');    // Move the canvas so it’s inside our <div id="sketch-holder">.
    background(255, 0, 200);
}



function draw() {

    var sketchHolder = document.getElementById('sketch-holder');

    textSize(32);

    // FOR NOW ESTABLISHING pE WITHIN draw() FUNCTION
    // "Are we in lightbox mode?"
    // yes, in lightbox mode
    if (sketchHolder.classList.contains('sketch-lightbox')) {
        if (windowWidth >= 1225) {
            // "Is ratio of [windowWidth / windowHeight] < [cw / cH]?"
            // portrait-ish
            if (((windowWidth - ltWPad) / (windowHeight - ltHPad)) > (cW / cH)) {
                var pE = ((windowHeight - ltHPad) / cH);
                text(pE * 642 + ' | lightbox + 1225 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = (ltMaxW / cW);
                text(pE * 642 + ' | lightbox + 1225 (canvas = 300px tall)', 10, 30);
            }
        } else if (windowWidth >= 817) {
            // portrait-ish
            if (((windowWidth - ltWPad) / (windowHeight - ltHPad)) > (cW / cH)) {
                var pE = ((windowHeight - ltHPad) / cH);
                text(pE * 642 + ' | lightbox + 817 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = ((windowWidth - ltWPad) / cW);
                text(pE * 642 + ' | lightbox + 817 (canvas = 300px tall)', 10, 30);
            }
        } else { // <817
            // portrait-ish
            if ((windowWidth / windowHeight) > (cW / cH)) {
                var pE = (windowHeight / cH);
                text(pE * 642 + ' | lightbox < 817 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = (windowWidth / cW);
                text(pE * 642 + ' | lightbox < 817 (canvas = 300px tall)', 10, 30);
            }
        }
    } else { // no, not in lightbox mode
        if (windowWidth >= 817) {
            var pE = 1;  // 1px @ big screen + reg view
        } else {
            var pE = (((windowWidth / 28) * 22) / cW);  // ? @ narrow screen + reg view
        }
    }

    // draw fun stuff now!
    if(mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, (10 * pE), (10 * pE));
}


















