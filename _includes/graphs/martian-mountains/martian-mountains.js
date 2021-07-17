// set up background img with red Mars
var figContainer = document.getElementById('areoid-vis');
var marsImg = document.createElement('img');
marsImg.setAttribute('id', 'mars-bg-img');
marsImg.setAttribute('src', '/assets/images/blogposts/martian-mountains/areoid-height.jpg');
figContainer.appendChild(marsImg);

// set up circle as areoid
var marsImgWidth = document.getElementById('areoid-vis').offsetWidth;
var marsImgHeight = document.getElementById('areoid-vis').offsetWidth * 1.214;    // 1.214 = ratio between h and w of mars bg img

var areoidCtrX = Math.round(marsImgWidth * .5);    // .5 is equivalent of offsetting 50%
var areoidCtrY = Math.round(marsImgHeight * .409);

var maxRadius = marsImgWidth * 0.4;    // 0.4 is 40% of parent container width

var areoidDefaultRatio = 0.213;    // change this if need to align better with Mars BG img

var rScale = d3.scaleLinear()
  .domain([1, maxRadius])
  .range([1, maxRadius])
  .clamp(true);

var textScale = d3.scaleLinear()
  .domain([0, maxRadius])
  .rangeRound([0, 7000])
  .clamp(true);

var numberFormat = d3.format(",");

var svgContainer = d3.select('#areoid-vis').append('svg')
  .attr('id','svg-container')
  // .attr('transform', 'translate(' + -marsImgWidth + ',' + 0 + ')')
  .attr('width', marsImgWidth)
  .attr('height', marsImgHeight);


svgContainer.append('circle')
  .attr('id', 'invisible-target')
  .attr('cx', areoidCtrX)
  .attr('cy', areoidCtrY)
  .attr('r', maxRadius);

var areoid = svgContainer.append('circle')
  .attr('class', 'circle')
  .attr('cx', areoidCtrX)
  .attr('cy', areoidCtrY)
  .attr('r', marsImgWidth * areoidDefaultRatio)

svgContainer.append('circle')
  .attr('class', 'circle')
  .attr('cx', areoidCtrX)
  .attr('cy', areoidCtrY)
  .attr('r', 1);

var radiusLine = svgContainer.append('line')
  .attr('id', 'radius-line')
  .attr('x1', areoidCtrX)
  .attr('y1', areoidCtrY)
  .attr('x2', areoidCtrX + (marsImgWidth * areoidDefaultRatio))
  .attr('y2', areoidCtrY);

svgContainer.append('text')
  .attr('id', 'areoid-text')
  .attr('x', marsImgWidth * 0.1)    // 0.1 is 10% of parent container width
  .attr('y', marsImgHeight * 0.85)    // Baseline should be 88% down the height of the background container
  .text('Distance from Mars’ center:');

var areoidNumber = svgContainer.append('text')
  .attr('id', 'areoid-number')
  .attr('x', marsImgWidth * 0.1)    // 0.1 is 10% of parent container width
  .attr('y', marsImgHeight * 0.91)    // Baseline should be 88% down the height of the background container
  .text('3,389 kilometers (2,106 miles)');

// set up dragging
var dragging = function(event, d) {

  var dragX = Math.round(event.x);
  var dragY = Math.round(event.y);
  // var pythagoreanX = Math.abs(areoidCtrX - dragX);    // commenting out because don't need to get absolute value because...
  // var pythagoreanY = Math.abs(areoidCtrY - dragY);    // ... squaring a negative number makes a positive number anyway!
  var pythagoreanX = areoidCtrX - dragX;
  var pythagoreanY = areoidCtrY - dragY;
  var pythagoreanXSquared = Math.pow(pythagoreanX, 2);
  var pythagoreanYSquared = Math.pow(pythagoreanY, 2);
  var areoidRadius = Math.sqrt(pythagoreanXSquared + pythagoreanYSquared);

  areoid.attr('r', rScale(areoidRadius));

  if (areoidRadius <= maxRadius) {
  radiusLine.attr('x2', dragX)
    .attr('y2', dragY)
  }

  areoidNumber.text(numberFormat(textScale(areoidRadius)) + ' kilometers (' + numberFormat(Math.round((textScale(areoidRadius)) / 1.609)) + ' miles)');
}

var myDrag = d3.drag()
  .on("drag", dragging);

svgContainer.call(myDrag);    // bind the dragging behavior

// caption
var marsCaption = document.createElement('figcaption');
marsCaption.setAttribute('class', 'xs-textface');
marsCaption.innerHTML = '<hr class="toprule">Mars’ areoid was chosen as the “onion ring” — that is, the invisible surface with equal gravitational pull — with the same average radius as the planet’s equator. However, a different “onion ring” could have been chosen instead, with a different average radius.<p class="figcaptionspacer"></p>Drag the black-bordered circle to see the range of would-be areoids — above, below, and overlapping with parts of Mars’ surface.<p class="figcaptionspacer"></p>(Mars’ volcanic bumps are overly exaggerated here, and its areoid is also overly smoothed (the latter due to technical reasons on my behalf as well!), to illustrate that areoids (and Earth’s own geoid) are not directly based on the surfaces of their planets.)';
figContainer.appendChild(marsCaption);

// redraw on screen width / orientation change
// USING THIS CAUSES THE DEVICE TO CONSTANTLY JUMP TO TOP OF PAGE WHILE SCROLLING ON TOUCHSCREENS, SO AM DISABLING IT
/*
function marsVisResize() {
  location.reload();
}
window.addEventListener('orientationchange', marsVisResize, false);
window.addEventListener('resize', marsVisResize, false);
*/
