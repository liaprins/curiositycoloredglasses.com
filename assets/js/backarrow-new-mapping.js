// I DO NEED TO FIX THE "X" BUTTON IN LIBRARY ENTRY; IT NEEDS TO CLOSE USING JS, NOT LINKING TO LIBRARY PAGE...
// ... THIS MEANS LIBRARY HAS BEEN LINKED TO FROM A library# URL (NOT THE REQUIRED blog URL ANYMORE) WHICH WOULD REMOVE THE BACKARROW

var referredLink = document.referrer;
var currentURL = window.location;

/*
// contains specifications just for blog post page
function backArrowPost() {
    if (((referredLink.includes('blog\/')) || 
    	(referredLink.includes('archive')) ||
    	(referredLink.includes('library#')) ||
    	(referredLink.includes('search')) || 
    	(referredLink.includes('tag'))) &&
    	// replace "/blog/" with "/blog\//" once post pages can run scripts (right now home page ("/blog/") is a substition for testing)
    	(/blog/.test(window.location.href))) {
        document.getElementById("testholder").innerHTML = referredLink + ' *** YES I was directed here from ( blog\/ OR archive OR search OR tag, AND I am now at a post ) *** ' + currentURL;
    } else {
        document.getElementById("testholder").innerHTML = referredLink + ' *** NO I was NOT directed here from ( blog\/ OR archive OR search OR tag, AND I am now at a post ) *** ' + currentURL;
    }
}
*/

/*
// I DO NEED TO FIX THE "X" BUTTON IN LIBRARY ENTRY; IT NEEDS TO CLOSE USING JS, NOT LINKING TO LIBRARY PAGE...
// ... THIS MEANS LIBRARY HAS BEEN LINKED TO FROM A library# URL (NOT THE REQUIRED blog URL ANYMORE) WHICH WOULD REMOVE THE BACKARROW
// contains specifications just for Library page (will add tag adjacent to library later)
function backArrowLibrary() {
    if ((referredLink.includes('blog\/')) && 
    	(/library#/.test(window.location.href))) {
        document.getElementById("testholder").innerHTML = referredLink + ' *** YES I was directed here from ( blog\/ AND I am now at a library entry ) *** ' + currentURL;
    } else {
        document.getElementById("testholder").innerHTML = referredLink + ' *** NO I was NOT directed here from ( blog\/ AND I am now at a library entry ) *** ' + currentURL;
    }
}
*/

function backArrowTag() {
    if (((referredLink.includes('blog\/')) ||
    	(referredLink.includes('search'))) &&
    	// replace "/archive/" with "/tag/" once tag page can run scripts (right now archive page is a substition for testing)
    	(/archive/.test(window.location.href))) {
        document.getElementById("testholder").innerHTML = referredLink + ' *** YES I was directed here from ( blog \/ OR search AND I am now at Archive ) *** ' + currentURL;
    } else {
        document.getElementById("testholder").innerHTML = referredLink + ' *** NO I was NOT directed here from ( blog\/ OR search AND I am now at Archive ) *** ' + currentURL;
    }
}


window.addEventListener('DOMContentLoaded', backArrowTag, false);




