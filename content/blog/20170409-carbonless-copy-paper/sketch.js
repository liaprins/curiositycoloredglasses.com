function setup() {
// establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw
  	if (windowWidth < 817) {
		var pe = (((windowWidth / 28) * 22) / 642);
  	} else {
  		var pe = 1;
  	}

  	var canvas = createCanvas((642 * pe), (100 * pe));
  	canvas.parent('sketch-holder');    // Move the canvas so it’s inside our <div id="sketch-holder">.
  	background(255, 0, 200);
}


/*
function windowResized() {
	if (windowWidth < 817) {
  		// var canvas = resizeCanvas(((windowWidth / 28) * 22), (windowWidth * 0.75));
  		// resizeCanvas(((windowWidth / 28) * 22), (windowWidth * 1.5));
  		canvas.resizeCanvas(((windowWidth / 28) * 22), (windowWidth * 1.5));
  	} else {
  		// var canvas = resizeCanvas(642, (windowWidth * 1.5));
  		// resizeCanvas(642, (windowWidth * 1.5));
  		canvas.resizeCanvas(642, (windowWidth * 1.5));
  	}
}
*/



function draw() {
// establishing pe (Pixel Equivalent) = equivalent for screensizes <817px whose canvas width should be in vw
  	if (windowWidth < 817) {
		var pe = (((windowWidth / 28) * 22) / 642);
  	} else {
  		var pe = 1;
  	}

// draw fun stuff now!
	if(mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, (80 * pe), (80 * pe));
}