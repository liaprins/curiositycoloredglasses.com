function setup() {
// establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw
    
    var sketchHolder = document.getElementById('sketch-holder');

    if (windowWidth < 817) {
        if (sketchHolder.classList.contains('sketch-lightbox')) {
            var pe = (((windowWidth / 28) * 22) / 321);
        } else {
            var pe = (((windowWidth / 28) * 22) / 642);
        }
    } else {
        if (sketchHolder.classList.contains('sketch-lightbox')) {
            var pe = 2;
        } else {
            var pe = 1;
        }
    }

    var canvas = createCanvas((642 * pe), (100 * pe));
    canvas.parent('sketch-holder');    // Move the canvas so it’s inside our <div id="sketch-holder">.
    background(255, 0, 200);
}



function draw() {

    // establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw

    var sketchHolder = document.getElementById('sketch-holder');

    if (windowWidth < 817) {
        if (sketchHolder.classList.contains('sketch-lightbox')) {
            var pe = (((windowWidth / 28) * 22) / 321);
        } else {
            var pe = (((windowWidth / 28) * 22) / 642);
        }
    } else {
        if (sketchHolder.classList.contains('sketch-lightbox')) {
            var pe = 2;
        } else {
            var pe = 1;
        }
    }

    // draw fun stuff now!
    if(mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, (80 * pe), (80 * pe));
}


















