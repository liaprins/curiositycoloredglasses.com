function test(e) {
    var selectedHeader = e.target;
    
    if (selectedHeader.hasAttribute('data-clickable-header')) {
        
        selectedHeader.parentNode.nextElementSibling.classList.toggle('archivesectiontoggleoff');

        // FOR TESTING ONLY
        document.getElementById("archivetest").innerHTML = selectedHeader.parentNode.nextElementSibling.getAttribute('class');
    }
}

window.addEventListener('click', test, false);
