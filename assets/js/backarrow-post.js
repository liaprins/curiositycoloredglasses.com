// I DO NEED TO FIX THE "X" BUTTON IN LIBRARY ENTRY; IT NEEDS TO CLOSE USING JS, NOT LINKING TO LIBRARY PAGE...
// ... THIS MEANS LIBRARY HAS BEEN LINKED TO FROM A library# URL (NOT THE REQUIRED blog URL ANYMORE) WHICH WOULD REMOVE THE BACKARROW

var referredLinkPost = document.referrer;

function backArrowShow() {
    if (((referredLinkPost.includes('blog\/')) || 
    	(referredLinkPost.includes('archive')) ||
    	(referredLinkPost.includes('library#')) ||    // not picking up on the #hash
    	(referredLinkPost.includes('search')) || 
    	(referredLinkPost.includes('tag'))) &&
    	(/blog\//.test(window.location.href)) &&    // if I end up manipulating the URL to not have extra "tag/" in it, I may need to change this from "/tag\//" to "/tag/"
        (referredLinkPost != window.location)) {
    	
    	// building the back arrow
    	var backArrow = document.createElement('img');
    	var backArrowContainer = document.getElementById('backarrowcontainer');
    	backArrowContainer.appendChild(backArrow);
    	// this src attribute vvv will have to update when I get proper hosting and URL set up! 
        // or store the PHP version in an HTML element's attribute, then collect it in JS as a variable and call it here
        // or else construct its shape with CSS (research performance) vvv
    	backArrow.setAttribute("src", "http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/backarrow.svg");
    	backArrow.setAttribute("id", "backarrow");
    	backArrow.setAttribute("class", "yellowhover");

    	// set the link
    	var backArrowContainer = document.getElementById('backarrowcontainer');
    	backArrowContainer.setAttribute("href", referredLinkPost);

        // add class to update styles of page titles, to acct for space needed for back arrow
        var postdate = document.getElementById('postdate');
        if (postdate) {    // Checking for its existence first, to save resources
            postdate.classList.toggle('postdatewidthbackarrow');
        }    // closing checking if-statement
    }    // closing original if-statement
}    // closing function backArrowShow

window.addEventListener('DOMContentLoaded', backArrowShow, false);
