// establishing pE (Pixel Equivalent) = equivalent for screensizes <817px
// (or any screensize within lightbox mode)

// canvas dimensions in reg view, at 817+
var cWProp = 100; // ALWAYS; DON'T CHANGE!
var cHProp = 50; // DO CHANGE THIS ACCORDING TO ASPECT RATIO I WANT FOR CANVAS (with 100 always being width)
var cW = 642; // ALWAYS; DON'T CHANGE!
var cH = ((cW * cHProp) / cWProp);
// canvas' max allowed width within lightbox
var ltMaxW = 1108;
// aggregate horizontal (W = width), vertical (H = height) padding within lightbox, above 817px
var ltWPad = 117;
var ltHPad = 96;
// maximum display px density to account for
var maxPxDensity = 2;



function setup() {

    // FOR NOW ONLY SIZNG CANVAS WHEN IT'S IN REG VIEW (NOT LIGHTBOX MODE)
    // blogarticle.js IS SIZING CANVAS WITHIN LIGHTBOX FOR NOW
    if (windowWidth < 817) {
        var pE = (((windowWidth / 28) * 22) / cW);
    } else {
        var pE = 1;
    }

    // "prop" for now (short for proportion); so I can size things relative to the canvas as a whole,
    // rather than thinking of px sizes for draw() elements that only apply to 817+ in reg view...
    var prop = ((cW * pE) / 100);

    // ALWAYS; DON'T CHANGE! SET CANVAS ASPECT RATIO ABOVE WITH cHProp VARIABLE (~ line 6)
    var canvas = createCanvas((cWProp * prop), (cHProp * prop));
    pixelDensity((ltMaxW * maxPxDensity) / cW);    // account for high res screens (maxPxDensity) + scaling from regular view's max width (cW) up to lightbox view's max width (ltMaxW)

    canvas.parent('sketch-holder');    // Move the canvas so it’s inside our <div id="sketch-holder">.

    background(240, 240, 240);
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
                // text(pE * 642 + ' | lightbox + 1225 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = (ltMaxW / cW);
                // text(pE * 642 + ' | lightbox + 1225 (canvas = 300px tall)', 10, 30);
            }
        } else if (windowWidth >= 817) {
            // portrait-ish
            if (((windowWidth - ltWPad) / (windowHeight - ltHPad)) > (cW / cH)) {
                var pE = ((windowHeight - ltHPad) / cH);
                // text(pE * 642 + ' | lightbox + 817 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = ((windowWidth - ltWPad) / cW);
                // text(pE * 642 + ' | lightbox + 817 (canvas = 300px tall)', 10, 30);
            }
        } else { // <817
            // portrait-ish
            if ((windowWidth / windowHeight) > (cW / cH)) {
                var pE = (windowHeight / cH);
                // text(pE * 642 + ' | lightbox < 817 (canvas = 1000px tall)', 10, 30);
            } else { // landscape-ish
                var pE = (windowWidth / cW);
                // text(pE * 642 + ' | lightbox < 817 (canvas = 300px tall)', 10, 30);
            }
        }
    } else { // no, not in lightbox mode
        if (windowWidth >= 817) {
            var pE = 1;  // 1px @ big screen + reg view
        } else {
            var pE = (((windowWidth / 28) * 22) / cW);  // ? @ narrow screen + reg view
        }
    }

    // "prop" for now (short for proportion); so I can size things relative to the canvas as a whole,
    // rather than thinking of px sizes for draw() elements that only apply to 817+ in reg view...
    var prop = ((cW * pE) / 100);

    // *************************************************
    // draw fun stuff now!

    // Mars
    var marsDiam = 20 * prop;
    var marsCircumf = marsDiam * PI;
    stroke(255, 0, 0);
    noFill();
    ellipse((50 * prop), (20 * prop), marsDiam, marsDiam);
    line((5 * prop), (40 * prop), (marsCircumf + (5 * prop)), (40 * prop));

    // areoid
    var areoidLineStart = 5 * prop;
    if (mouseIsPressed && (mouseX > areoidLineStart) && (mouseX < ((95 * prop) - areoidLineStart))) {
      var areoidCircumf = (mouseX);
    } else { }


    // var areoidCircumf = 90 * prop;
    var areoidDiam = areoidCircumf / PI;
    stroke(0, 0, 0);
    noFill();
    ellipse((50 * prop), (20 * prop), areoidDiam, areoidDiam);
    line(areoidLineStart, (45 * prop), (areoidCircumf + areoidLineStart), (45 * prop));

}



function mousePressed() {
    redraw();
    background(240, 240, 240);
}
