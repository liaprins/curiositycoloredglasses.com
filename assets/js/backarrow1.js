var referredLink = document.referrer;
var currentURL = window.location;

function myFunction() {
    if ((referredLink.includes('blog\/')) || 
    	(referredLink.includes('archive')) ||
    	(referredLink.includes('search')) || 
    	(referredLink.includes('tag'))) {
        document.getElementById("testholder").innerHTML = referredLink + ' *** YES blog\/ OR archive OR search OR tag *** ' + currentURL;
    } else {
        document.getElementById("testholder").innerHTML = referredLink + ' *** NO blog\/ OR archive OR search OR tag *** ' + currentURL;
    }
}

window.addEventListener('DOMContentLoaded', myFunction, false);




