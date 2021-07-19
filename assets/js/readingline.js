function readingLine() {

  var screenW = window.innerWidth;
  var content = document.getElementById('posttext');

  var contentEnd;
  if (screenW < 1225) { // at >=1225 screenwidth, need to scroll an additional 136px for some reason to get to bottom of content...
    contentEnd = content.offsetTop + content.offsetHeight;
  } else {
    contentEnd = content.offsetTop + content.offsetHeight + 136;
  }

  var scrollY = window.scrollY;

  var readLine = document.getElementById('readingline');

  if (scrollY < contentEnd) {
    var readingLineLength = Math.round((scrollY * screenW) / contentEnd);
    readLine.style.width = readingLineLength + "px";    // set by scroll amt
  } else {
    readLine.style.width = 0;    // set to 0 if scrolled past main content (e.g. into Glossary, etc)
  }

}

window.onscroll = (function(e) {
    readingLine();
});
