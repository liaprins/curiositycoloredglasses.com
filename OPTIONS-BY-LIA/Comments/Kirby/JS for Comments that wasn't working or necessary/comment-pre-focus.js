var postTheComment = document.getElementById('submit');
// var postTheComment = document.getElementById('contentform').lastElementChild;

function removeHashAfterComment(e) { 

    var clickedThing = e.target;

    if (clickedThing.getAttribute('id') == 'submit') {

        history.pushState("", document.title, window.location.pathname + window.location.search);


        // TEST
        var testContainer = document.getElementById('slideshowtest');
        testContainer.innerHTML = clickedThing.getAttribute('id') + ' TEST 2';
        // testContainer.innerHTML = 1;
    

    }
}

window.addEventListener('click', removeHashAfterComment, false);