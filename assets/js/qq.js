// Forces the entry to be open for an icon when the URL has its hash, e.g. can be used as a link and will stay if page is refreshed
function qqLink() {
    var glassesField = document.getElementById('qqparent');
    var qqContent = document.querySelectorAll('.qqcontents');
    var allGlasses = qqContent.length;
    var qqURL = window.location;
    if (window.location.hash) {
        var hash = location.hash;
        for (var i = 0; i < allGlasses; i++) {
            if (qqContent) {    // Checking for its existence first, to save resources
                var currentIcon = qqContent[i].previousElementSibling;            
            }    // closing checking if-statement
            if (currentIcon.hasAttribute('data-id')) {    // Checking for its existence first, to save resources
                var iconName = '#' + currentIcon.getAttribute('data-id');
            }    // closing checking if-statement
            // ...if the clicked icon's name matches the hash
            if (hash == iconName) {
                if (qqContent) {    // Checking for its existence first, to save resources
                    // ...show the content
                    qqContent[i].style.display = 'block';
                    var qqSelectedClasses = currentIcon.getAttribute('class');
                    // ... and assign the classes for a selected icon
                    currentIcon.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');
                }    // closing checking if-statement
            } // close if (hash...
        } // close for loop
    } // close if 1
} // close function
window.addEventListener('DOMContentLoaded', qqLink, false);


// Gets rid of the "#" that would otherwise remain at end of URL after closing an entry by re-clicking the icon
function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

// Opens the entry when the container of the glasses is clicked, and closes it if the same lens or its pair is re-clicked
function qqIconClick(e) {
	var selectedContainer = e.target;
    // verifying the area inside the "qqsection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedContainerVerify = selectedContainer.getAttribute('data-clickable');
    if (selectedContainerVerify == 'yes') {
        // checking if clicked icon was closed when it was clicked
        var contentOfInterest = selectedContainer.nextElementSibling;
        if (contentOfInterest.style.display === 'none') {
            var qqContent = document.querySelectorAll('.qqcontents');
            var allGlasses = qqContent.length;
	   	    // loop through other icons to check that they are not open, and close them if they are
            for (var i = 0; i < allGlasses; i++) {
			    if (qqContent) {    // Checking for its existence first, to save resources
                    // turning off each glasses' content
                    qqContent[i].style.display = 'none';
                    // removing the selected state from the glasses icon
                    qqContent[i].previousElementSibling.classList.remove('qqselected');
		        }    // closing checking if-statement
            }
            selectedContainer.nextElementSibling.style.display = 'block';
            var qqSelectedClasses = selectedContainer.getAttribute('class');
            selectedContainer.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');            
            var qqURLHash = selectedContainer.getAttribute('data-id');
            location.hash = qqURLHash; 
        } else {
            selectedContainer.nextElementSibling.style.display = 'none';
            selectedContainer.classList.remove('qqselected');
            removeHash();
        } // close inner if
        
    } // close outer if
    
} // close function

document.addEventListener('click', qqIconClick, false);







// Opens the entry when a lens circle, knob, or trapezoid is clicked, and closes it if it or any of its counterparts is re-clicked
function qqIconInnardsClick(e) {
    var selectedInnards = e.target;
    // verifying the area inside the "qqsection" <div> that was clicked was an icon, not an in-between space, which caused problems
    var selectedInnardsVerify = selectedInnards.getAttribute('data-innards-clickable');
    if (selectedInnardsVerify == 'yes') {
        // checking if clicked icon was closed when it was clicked
        var contentOfInterest = selectedInnards.parentNode.nextElementSibling;
        if (contentOfInterest.style.display === 'none') {
            var qqContent = document.querySelectorAll('.qqcontents');
            var allGlasses = qqContent.length;
            // loop through other icons to check that they are not open, and close them if they are
            for (var i = 0; i < allGlasses; i++) {
                if (qqContent) {    // Checking for its existence first, to save resources
                    // turning off each glasses' content
                    qqContent[i].style.display = 'none';
                    // removing the selected state from the glasses icon
                    qqContent[i].previousElementSibling.classList.remove('qqselected');
                }    // closing checking if-statement
            }
            selectedInnards.parentNode.nextElementSibling.style.display = 'block';
            var qqSelectedClasses = selectedInnards.parentNode.getAttribute('class');
            selectedInnards.parentNode.setAttribute('class', qqSelectedClasses + ' ' + 'qqselected');            
            var qqURLHash = selectedInnards.parentNode.getAttribute('data-id');
            location.hash = qqURLHash; 




            // binoc-related elements
            var binoc = selectedInnards.parentNode;
            var binocLeftLoc = binoc.getBoundingClientRect().left;
            var binocTopLoc = binoc.getBoundingClientRect().top + pageYOffset;
            var binocWidth = binoc.offsetWidth;
            var binocWidthHalf = (binocWidth / 2); // MAY NEED TO WRAP WITH parseInt()...
            var binocHeight = binoc.offsetHeight;
            var binocHeightHalf = (binocHeight / 2); // MAY NEED TO WRAP WITH parseInt()...
            var binocHCtr = binocLeftLoc + (binocWidth / 2); // MAY NEED TO WRAP WITH parseInt()...

            // content-related elements
            var content = selectedInnards.parentNode.nextElementSibling;
            var contentLeftLoc = content.getBoundingClientRect().left;
            var contentTopLoc = content.getBoundingClientRect().top + pageYOffset;
            var contentBottomLoc = content.getBoundingClientRect().bottom + pageYOffset;
            var contentWidth = content.offsetWidth;
            var contentWidthHalf = (contentWidth / 2); // MAY NEED TO WRAP WITH parseInt()...
            var contentHeight = content.offsetHeight;
            var contentHeightHalf = (contentHeight / 2); // MAY NEED TO WRAP WITH parseInt()...

            // other constants
            var footerTopLoc = document.getElementById('footercontent').parentNode.getBoundingClientRect().top + pageYOffset;
            var edgeMargin = content.getAttribute('data-edgemargin');    // set within a script at bottom of qq-position.js
            var qqScreenWidth = window.innerWidth;
            var sharkFin = content.firstElementChild.nextElementSibling;
            var sharkFinHeight = 12;
            var borderCover = sharkFin.nextElementSibling;
            var contentPadding = 58;

            // document.getElementById('qqtest').innerHTML = sharkFinHeight;  // GENERAL TESTING !!!!!

            // for larger screens first
            if (qqScreenWidth >= 390) {

                // .center zone
                if (((binocHCtr - contentWidthHalf - edgeMargin) >= 0) && ((binocHCtr + contentWidthHalf + edgeMargin) <= qqScreenWidth)) {
                    content.classList.add('center');
                    // content.appendChild(sharkFin);
                    // sharkFin.style.left = 'calc(' + (0 + parseInt(contentWidthHalf) - parseInt(sharkFinHeight / 2)) + "px - 0.2rem)";
                    // content.appendChild(borderCover);
                    // borderCover.style.left = 'calc(' + (0 + parseInt(contentWidthHalf) - parseInt(sharkFinHeight / 2)) + "px - 0.2rem)";
                    document.getElementById('qqtest').innerHTML = 'center!';  // .center TEST !!!!!

                    // .top zone added to .center
                    if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                        content.classList.add('top');
                        // TESTING COMMENTING THIS OUT! // content.style.top = parseInt(edgeMargin) + parseInt(binocHeight) + "px";
                        // content.style.marginTop = parseInt(edgeMargin) + parseInt(binocHeight) + "px";
                        // sharkFin.style.top = 0 - parseInt(sharkFinHeight) + "px";
                        // borderCover.style.top = 'calc(' + (0 - parseInt(sharkFinHeight)) + "px + 0.18rem)";
                        document.getElementById('qqtest').innerHTML = 'center + top!';  // .center + .top TEST !!!!!
                    
                    } else { // .bottom zone added to .center MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                        content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                        content.classList.add('bottom');
                        sharkFin.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.1875rem)';
                        borderCover.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.375rem)';
                        document.getElementById('qqtest').innerHTML = 'center + bottom!';  // .center + .bottom TEST !!!!!                        
                    } // close "else" for .bottom zone
                
                } else { // NOT .center zone

                    if (binocHCtr >= (3 * edgeMargin)) {
                        
                        // .left zone MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                        if (binocHCtr < (qqScreenWidth / 2)) {
                            content.style.left = parseInt(-contentLeftLoc) + parseInt(edgeMargin) + 'px';
                            // content.classList.add('left');
                            sharkFin.style.left = 'calc(' + (0 - edgeMargin + binocLeftLoc + binocWidthHalf - edgeMargin) + 'px - 0.125rem)';
                            borderCover.style.left = 'calc(' + (0 - edgeMargin + binocLeftLoc + binocWidthHalf - edgeMargin) + 'px - 0.125rem)';
                            document.getElementById('qqtest').innerHTML = 'left!';  // .left TEST !!!!! 

                            // .top zone added to .left
                            if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                                // content.style.marginTop = parseInt(edgeMargin) + parseInt(binocHeight) + "px";
                                content.classList.add('top');
                                document.getElementById('qqtest').innerHTML = 'left + top!';  // .left + .top TEST !!!!!
                            
                            } else { // .bottom zone added to .left MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                                content.classList.add('bottom');
                                sharkFin.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.1875rem)';
                                borderCover.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.375rem)';
                                document.getElementById('qqtest').innerHTML = 'left + bottom!';  // .left + .bottom TEST !!!!!                        
                            } // close "else" for .bottom zone                       
                        
                        } else { // NOT .left

                            // .right zone MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION NOR EXACT SCREENWIDTH BUT JS CAN
                            if (binocHCtr <= (qqScreenWidth - (3 * edgeMargin))) {
                                content.style.left = parseInt(qqScreenWidth) - parseInt(contentLeftLoc) - parseInt(contentWidth) - parseInt(edgeMargin) + "px";
                                sharkFin.style.left = 'calc(' + (0 + contentWidth - qqScreenWidth + binocLeftLoc + binocWidthHalf) + 'px - 0.125rem)';
                                borderCover.style.left = 'calc(' + (0 + contentWidth - qqScreenWidth + binocLeftLoc + binocWidthHalf) + 'px - 0.125rem)';
                                document.getElementById('qqtest').innerHTML = 'right!';  // .right TEST !!!!! 

                                // .top zone added to .right
                                if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                                    // content.style.marginTop = parseInt(edgeMargin) + parseInt(binocHeight) + "px";
                                    content.classList.add('top');
                                    document.getElementById('qqtest').innerHTML = 'right + top!';  // .right + .top TEST !!!!!
                                
                                } else { // .bottom zone added to .right MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                    content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                                    // content.classList.add('bottom');
                                    document.getElementById('qqtest').innerHTML = 'right + bottom!';  // .right + .bottom TEST !!!!!                        
                                } // close "else" for .bottom zone  
                            
                            } else { // R-edgeling (mimic L-edgeling below)

                                if ((contentTopLoc - contentHeightHalf + binocHeightHalf - edgeMargin) > 0) {

                                    // .specialmiddleright zone   MAY NEED TO KEEP vertical SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                    if ((contentBottomLoc - contentHeightHalf + binocHeightHalf + edgeMargin) < footerTopLoc) {
                                        // content.style.left = parseInt(-contentWidth) - (parseInt(edgeMargin) * 3) + "px"; 
                                        content.style.marginTop = parseInt(-contentHeightHalf) + parseInt(binocHeightHalf) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                        content.classList.add('specialmiddleright');
                                        sharkFin.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                        borderCover.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                        document.getElementById('qqtest').innerHTML = 'specialmiddleright!';  // .specialmiddleright TEST !!!!!                        
                                
                                    } else {

                                        // .specialbottomright zone   MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                        if ((contentBottomLoc - contentHeight + binocHeightHalf + (3 * edgeMargin)) < footerTopLoc) {
                                            content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            // content.style.left = parseInt(-contentWidth) - (parseInt(edgeMargin) * 3) + "px";
                                            content.classList.add('specialbottomright');
                                            sharkFin.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                            borderCover.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                            document.getElementById('qqtest').innerHTML = 'specialbottomright!';  // .specialbottomright TEST !!!!!                        
                                
                                        } else { // .extremebottomright zone  MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            // content.style.left = parseInt(-contentWidth) - (parseInt(edgeMargin) * 3) + "px";
                                            content.classList.add('extremebottomright');
                                            content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            sharkFin.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)'; 
                                            borderCover.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)';                                    
                                            document.getElementById('qqtest').innerHTML = 'extremebottomright!';  // .extremebottomright TEST !!!!!                        
                                
                                        } // close "else" for .extremebottomright zone

                                    } // close "else" for .specialbottomright zone (and .extremebottomright zone)

                                } else { // above .specialmiddle zone

                                    // .specialtopright zone MAY NEED TO KEEP VERTICAL STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                    if ((binocTopLoc + binocHeightHalf - (3 * edgeMargin)) < 0) {
                                        // content.style.left = parseInt(-contentWidth) - (parseInt(edgeMargin) * 3) + "px";
                                        content.classList.add('specialtopright');
                                        content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                        sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                        borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                        document.getElementById('qqtest').innerHTML = 'specialtopright!';  // .specialtopright TEST !!!!!                        

                                    } else { // .extremetopright zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                        // content.style.left = parseInt(-contentWidth) - (parseInt(edgeMargin) * 3) + "px";
                                        content.classList.add('extremetopright');
                                        content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                        document.getElementById('qqtest').innerHTML = 'extremetopright!';  // .extremetopright TEST !!!!!                            

                                    } // close "else" for .extremetopright zone

                                } // close "else" for .specialtopright zone (and .extremetopright zone)

                            } // close R-edgeling's "else"

                        } // close "else" for .right zone

                    } else { // L-edgeling (blue path)

                        if ((contentTopLoc - contentHeightHalf + binocHeightHalf - edgeMargin) > 0) {

                            // .specialmiddleleft zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                            if ((contentBottomLoc - contentHeightHalf + binocHeightHalf + edgeMargin) < footerTopLoc) {
                                // content.style.left = parseInt(binocWidth) + (parseInt(edgeMargin) * 3) + "px";
                                content.classList.add('specialmiddleleft');
                                content.style.marginTop = parseInt(-contentHeightHalf) + parseInt(binocHeightHalf) + "px"; // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                sharkFin.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                borderCover.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                document.getElementById('qqtest').innerHTML = 'specialmiddleleft!';  // .specialmiddleleft TEST !!!!!                        
                                
                            } else {

                                // .specialbottomleft zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                if ((contentBottomLoc - contentHeight + binocHeightHalf + (3 * edgeMargin)) < footerTopLoc) {
                                    content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                    // content.style.left = parseInt(binocWidth) + (parseInt(edgeMargin) * 3) + "px";
                                    content.classList.add('specialbottomleft');
                                    sharkFin.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                    borderCover.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                    document.getElementById('qqtest').innerHTML = 'specialbottomleft!';  // .specialbottomleft TEST !!!!!                        
                                
                                } else { // .extremebottomleft zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                    // content.style.left = parseInt(binocWidth) + (parseInt(edgeMargin) * 3) + "px";
                                    content.classList.add('extremebottomleft');
                                    content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                    sharkFin.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)'; 
                                    borderCover.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)';                                    
                                    document.getElementById('qqtest').innerHTML = 'extremebottomleft!';  // .extremebottomleft TEST !!!!!                        
                                
                                } // close "else" for .extremebottomleft zone

                            } // close "else" for .specialbottomleft zone (and .extremebottomleft zone)

                        } else { // above .specialmiddle zone

                            // .specialtopleft zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                            if ((binocTopLoc + binocHeightHalf - (3 * edgeMargin)) < 0) {
                                content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                // content.style.left = parseInt(binocWidth) + (parseInt(edgeMargin) * 3) + "px";
                                content.classList.add('specialtopleft');
                                sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                document.getElementById('qqtest').innerHTML = 'specialtopleft!';  // .specialtopleft TEST !!!!!                        

                            } else { // .extremetopleft zone MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                // content.style.left = parseInt(binocWidth) + (parseInt(edgeMargin) * 3) + "px";
                                content.classList.add('extremetopleft');
                                content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                document.getElementById('qqtest').innerHTML = 'extremetopleft!';  // .extremetopleft TEST !!!!!                            

                            } // close "else" for .extremetopleft zone

                        } // close "else" for .specialtopleft zone (and .extremetopleft zone)
                        
                    } // close L-edgeling's "else"
                    
                } // close else for non-.center zoners

            } // I WILL ADD "else" here for narrow screens' if-statements !!!!!!!!!!!!!!!!!!!!

            // document.getElementById('qqtest').innerHTML = sharkFinHeight;  // GENERAL TESTING !!!!!









        } else {
            selectedInnards.parentNode.nextElementSibling.style.display = 'none';
            selectedInnards.parentNode.classList.remove('qqselected');
            removeHash();
        } // close inner if
        
    } // close outer if
    
} // close function

document.addEventListener('click', qqIconInnardsClick, false);






// Closes the entry via the "X" button
var qqCloseX = document.getElementById('qq-x');

function qqXOut(e) {

    var clickedThing = e.target;

    if (clickedThing.getAttribute('id') == 'qq-x') {
        clickedThing.parentNode.style.display = 'none';
        var selectedContainer = clickedThing.parentNode.previousElementSibling;
        var qqSelectedClasses = selectedContainer.classList.remove('qqselected');
        removeHash();
    }
}

window.addEventListener('click', qqXOut, false);




