// I DO NEED TO FIX THE "X" BUTTON IN LIBRARY ENTRY; IT NEEDS TO CLOSE USING JS, NOT LINKING TO LIBRARY PAGE...
// ... THIS MEANS LIBRARY HAS BEEN LINKED TO FROM A library# URL (NOT THE REQUIRED blog URL ANYMORE) WHICH WOULD REMOVE THE BACKARROW

var referredLink = document.referrer;
var currentURL = window.location;    // this var only for testing

function backArrowShow() {
    if ((((referredLink.includes('blog\/')) || 
    	(referredLink.includes('archive')) ||
    	(referredLink.includes('library#')) ||    // not picking up on the #hash
    	(referredLink.includes('search')) || 
    	(referredLink.includes('tag'))) &&
    	// replace "/blog/" with "/blog\//" once post pages can run scripts (right now home page ("/blog/") is a substition for testing)
    	(/blog/.test(window.location.href))) ||
    	((referredLink.includes('blog\/')) && 
    	(/library#/.test(window.location.href))) ||
    	(((referredLink.includes('blog\/')) ||
    	(referredLink.includes('search'))) &&
    	// replace "/archive/" with "/tag/" once tag page can run scripts (right now archive page is a substition for testing)
    	(/archive/.test(window.location.href)))) {
    	
    	// this line only for testing
        // document.getElementById("testholder").innerHTML = '</br> </br> YES ( I am at HOME [post substitute] && came from a POST || ARCHIVE || SEARCH || TAG ) </br> or ( I am at a LIBRARY#entry && came from a POST ) </br> or ( I am at ARCHIVE [tag substitute] && came from a POST || SEARCH ) </br> </br> FROM: </br>' + referredLink + '</br> </br> AT: </br>' + currentURL;
    	
    	// building the back arrow
    	var backArrow = document.createElement('img');
    	var backArrowContainer = document.getElementById('backarrowcontainer');
    	backArrowContainer.appendChild(backArrow);
    	// this will have to update when I get proper hosting and URL set up! or else construct its shape with CSS (research performance) vvv
    	backArrow.setAttribute("src", "http://localhost:8888/kirby-project/kirby-2.4.0/assets/images/backarrow.svg");
    	backArrow.setAttribute("id", "backarrow");
    	backArrow.setAttribute("class", "yellowhover");

    	//set the link
    	var backArrowContainer = document.getElementById('backarrowcontainer');
    	backArrowContainer.setAttribute("href", referredLink);

        // add classes to update styles of page titles, to acct for space needed for back arrow
        // NOT WORKING !!!!!
        // var tagpagename = document.getElementById('tagpagename');
        // tagpagename.setAttribute('class', 'xl-textface tagnobackarrow extrarightpadding');
        var librarypagename = document.getElementById('librarypagename');
        librarypagename.setAttribute('class', 'extracontentpagetitle extrarightpadding');
        // var postdate = document.getElementById('postdate');
        // postdate.setAttribute('class', 'date m-textface bold postdatewidth postdatewidthbackarrow');
    } else {
    	// this line only for testing
        // document.getElementById("testholder").innerHTML = '</br> </br> NO ( I am not at HOME [post substitute] && came from a POST || ARCHIVE || SEARCH || TAG ) </br> or ( I am not at a LIBRARY#entry && came from a POST ) </br> or ( I am not at ARCHIVE [tag substitute] && came from a POST || SEARCH ) </br> </br> FROM: </br>' + referredLink + '</br> </br> AT: </br>' + currentURL;
    }
}

window.addEventListener('DOMContentLoaded', backArrowShow, false);