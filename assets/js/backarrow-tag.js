// I DO NEED TO FIX THE "X" BUTTON IN LIBRARY ENTRY; IT NEEDS TO CLOSE USING JS, NOT LINKING TO LIBRARY PAGE...
// ... THIS MEANS LIBRARY HAS BEEN LINKED TO FROM A library# URL (NOT THE REQUIRED blog URL ANYMORE) WHICH WOULD REMOVE THE BACKARROW

var referredLink = document.referrer;
var currentURL = window.location;    // this var only for testing
 
function backArrowShow() {
    if (
        (((referredLink.includes('blog\/')) ||
        (referredLink.includes('archive')) ||
    	(referredLink.includes('search'))) &&
        (/tag\//.test(window.location.href)))
        ) {
    	
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
    	backArrowContainer.setAttribute("href", referredLink);

        // add classes to update styles of page titles, to acct for space needed for back arrow        
        var tagpagename = document.getElementById('tagpagename');
        if (tagpagename) {    // Checking for its existence first, to save resources
            tagpagename.classList.toggle('extrarightpadding');
        }    // closing checking if-statement
    }    // closing original if-statement 
}    // closing function

window.addEventListener('DOMContentLoaded', backArrowShow, false);
