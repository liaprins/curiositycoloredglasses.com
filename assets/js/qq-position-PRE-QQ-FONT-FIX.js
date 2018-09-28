// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqPosition() {

    var allPairs = document.querySelectorAll('.qqpiece');
    var pairCount = allPairs.length;
    var pairRowCount = (pairCount / 3);

    document.getElementById('qqtesting').innerHTML = pairRowCount;

    for (var i = 0; i < pairRowCount; i++) {
        allPairs[i * 3].style.left = '0px';
        allPairs[(i * 3) + 1].style.left = '700px';
        allPairs[(i * 3) + 2].style.left = '1200px';
        allPairs[i * 3].style.top = (400 * i) + 'px';
        allPairs[(i * 3) + 1].style.top = (400 * i) + 'px';
        allPairs[(i * 3) + 2].style.top = (400 * i) + 'px';
    }

    /*
    for (var i = 0; i < allPairs.length; i++) {
        allPairs[i].style.left = 'calc(25px * ' + i + ')';
        allPairs[i].style.top = 'calc(25px * ' + i + ')';
        allPairs[i * 3].style.top = 'calc(100px * ' + i + ')';
    } // end forloop
    */

} // close function
window.addEventListener('DOMContentLoaded', qqPosition, false);
