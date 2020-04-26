function parallaxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    

    // SMALL GLASSES
    var bgdiv = document.getElementById('parallax-small');
    // bgdiv.style.top = -(scrollTop * 0.078) + 'px';
    bgdiv.style.top = -(scrollTop * 0.8) + 'px';



    // MEDIUM GLASSES
    var medBGImg = document.getElementById('parallax-medium');
    medBGImg.style.top = -(scrollTop * 0.888) + 'px';

    var test = document.getElementById('test');    // TEST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    var mediumPostglasses = document.getElementsByClassName("medium-postglasses");

    if (window.pageYOffset != 0) {

        for (var i = 0; i < mediumPostglasses.length; i++) {

            // var mediumPostglassesScrollDistance = window.pageYOffset * -0.1;
            // mediumPostglasses[4].style.top = mediumPostglassesScrollDistance + 305 + "px";

            mediumPostglasses[1].style.top = -(mediumPostglasses[1].scrollTop * 0.888) + 'px';

            test.innerHTML = "window.pageYOffset: " + window.pageYOffset + "</br> mediumPostglassesScrollDistance: " + mediumPostglassesScrollDistance;

        }  // closing for loop

    } // closing if
    


    // BIG GLASSES
    
    var bigBGImg = document.getElementById('parallax-big');
    bigBGImg.style.top = -(scrollTop * 0.968) + 'px';

    // var bigPostglasses = document.getElementsByClassName("big-postglasses");
    // bigPostglasses.style.top = -(scrollTop * 0.968) + 'px';
}

window.onscroll = (function(e) {
    parallaxScroll();
});