function parallaxScroll() {
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    var bgdiv = document.getElementById('parallax-small');
    // bgdiv.style.top = -(scrollTop * 0.078) + 'px';
    bgdiv.style.top = -(scrollTop * 0.8) + 'px';

    var bgdiv = document.getElementById('parallax-medium');
    // bgdiv.style.top = -(scrollTop * 0.1) + 'px';
    bgdiv.style.top = -(scrollTop * 0.888) + 'px';

    var bgdiv = document.getElementById('parallax-big');
    // bgdiv.style.top = -(scrollTop * 0.121) + 'px';
    bgdiv.style.top = -(scrollTop * 0.968) + 'px';

    // var bgdiv = document.getElementById('everythingexceptnav');
    // bgdiv.style.top = -(scrollTop * 0.121) + 'px';
    // bgdiv.style.top = -(scrollTop * 1) + 'px';
}

window.onscroll = (function(e) {
    parallaxScroll();
});