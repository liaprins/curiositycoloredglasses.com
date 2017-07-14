function slideshow() {

    var galleryList = document.getElementsByClassName('gallery');

    var container = document.getElementById('slideshowtest');

    // for each gallery
    for (i = 0; i < galleryList.length; i++) {

        // TEST
        // container.innerHTML = galleryList[1].children.length;
        container.innerHTML = i;
        var test = document.createElement('div');
        test.innerHTML = 'TEST!!!';

        galleryList[i].appendChild(test);


        // for each slide within each gallery
        for (j = 0; j < galleryList[i].children.length; j++) {

            var slideTest = document.createElement('div');
            slideTest.innerHTML = 'Slide' + (j + 1);

            var slideList = galleryList[i].children;

            slideList[j].appendChild(slideTest);

        }

    }

}

window.addEventListener('DOMContentLoaded', slideshow, false);