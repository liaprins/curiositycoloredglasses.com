// callback function: it will be called within 3 separate other functions later
function qqPositionContents(binoc) {
            // PREPARING TO POSITION CONTENT BOX AND ITS SHARKFIN
            // binoc-related elements
            // var binoc = selectedInnards.parentNode; // var binoc should be defined by the forthcoming functions that call this one
            var binocLeftLoc = binoc.getBoundingClientRect().left;
            var binocTopLoc = binoc.getBoundingClientRect().top + pageYOffset;
            var binocWidth = binoc.offsetWidth;
            var binocWidthHalf = (binocWidth / 2);
            var binocHeight = binoc.offsetHeight;
            var binocHeightHalf = (binocHeight / 2);
            var binocHCtr = binocLeftLoc + (binocWidth / 2);

            // content-related elements
            // var content = selectedInnards.parentNode.nextElementSibling;
            var content = binoc.nextElementSibling;
            var contentLeftLoc = content.getBoundingClientRect().left;
            var contentTopLoc = content.getBoundingClientRect().top + pageYOffset;
            var contentBottomLoc = content.getBoundingClientRect().bottom + pageYOffset;
            var contentWidth = content.offsetWidth;
            var contentWidthHalf = (contentWidth / 2);
            var contentHeight = content.offsetHeight;
            var contentHeightHalf = (contentHeight / 2);

            // other constants
            var footerTopLoc = document.getElementById('footercontent').parentNode.getBoundingClientRect().top + pageYOffset;
            var edgeMargin = content.getAttribute('data-edgemargin');
            var qqScreenWidth = window.innerWidth;
            var gridCol = (qqScreenWidth / 28);
            var sharkFin = content.firstElementChild;
            var borderCover = sharkFin.nextElementSibling;

            // for larger screens first
            if (qqScreenWidth >= 390) {

                // .center zone
                if (((binocHCtr - contentWidthHalf - edgeMargin) >= 0) && ((binocHCtr + contentWidthHalf + edgeMargin) <= qqScreenWidth)) {
                    content.classList.add('center');

                    // .top zone added to .center
                    if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                        content.classList.add('top');
                    
                    } else { // .bottom zone added to .center
                        content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                        content.classList.add('bottom');
                        sharkFin.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.1875rem)';
                        borderCover.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.375rem)';
                    } // close "else" for .bottom zone
                
                } else { // NOT .center zone

                    if (binocHCtr >= (3 * edgeMargin)) {
                        
                        // .left zone
                        if (binocHCtr < (qqScreenWidth / 2)) {
                            content.style.left = parseInt(-contentLeftLoc) + parseInt(edgeMargin) + 'px';
                            sharkFin.style.left = 'calc(' + (0 - edgeMargin + binocLeftLoc + binocWidthHalf - edgeMargin) + 'px - 0.125rem)';
                            borderCover.style.left = 'calc(' + (0 - edgeMargin + binocLeftLoc + binocWidthHalf - edgeMargin) + 'px - 0.125rem)';

                            // .top zone added to .left
                            if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                                content.classList.add('top');
                            
                            } else { // .bottom zone added to .left
                                content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                                sharkFin.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.1875rem)';
                                borderCover.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.375rem)';
                            } // close "else" for .bottom zone                       
                        
                        } else { // NOT .left

                            // .right zone
                            if (binocHCtr <= (qqScreenWidth - (3 * edgeMargin))) {
                                content.style.left = parseInt(qqScreenWidth) - parseInt(contentLeftLoc) - parseInt(contentWidth) - parseInt(edgeMargin) + "px";
                                sharkFin.style.left = 'calc(' + (0 + contentWidth - qqScreenWidth + binocLeftLoc + binocWidthHalf) + 'px - 0.125rem)';
                                borderCover.style.left = 'calc(' + (0 + contentWidth - qqScreenWidth + binocLeftLoc + binocWidthHalf) + 'px - 0.125rem)';

                                // .top zone added to .right
                                if ((contentBottomLoc + binocHeight + (2 * edgeMargin)) < footerTopLoc) {
                                    content.classList.add('top');
                                
                                } else { // .bottom zone added to .right
                                    content.style.marginTop = parseInt(-contentHeight) - (parseInt(edgeMargin) * 2) + "px";
                                    sharkFin.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.1875rem)';
                                    borderCover.style.top = 'calc(' + (contentHeight - edgeMargin) + 'px - 0.375rem)';
                                } // close "else" for .bottom zone  
                            
                            } else { // R-edgeling (mimic L-edgeling below)

                                if ((contentTopLoc - contentHeightHalf + binocHeightHalf - edgeMargin) > 0) {

                                    // .specialmiddleright zone
                                    if ((contentBottomLoc - contentHeightHalf + binocHeightHalf + edgeMargin) < footerTopLoc) {
                                        content.style.marginTop = parseInt(-contentHeightHalf) + parseInt(binocHeightHalf) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                        content.classList.add('specialmiddleright');
                                        sharkFin.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                        borderCover.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                
                                    } else {

                                        // .specialbottomright zone
                                        if ((contentBottomLoc - contentHeight + binocHeightHalf + (3 * edgeMargin)) < footerTopLoc) {
                                            content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            content.classList.add('specialbottomright');
                                            sharkFin.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                            borderCover.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                
                                        } else { // .extremebottomright zone  MAY NEED TO KEEP vertical STYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            content.classList.add('extremebottomright');
                                            content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                            sharkFin.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)'; 
                                            borderCover.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)';                                    
                                
                                        } // close "else" for .extremebottomright zone

                                    } // close "else" for .specialbottomright zone (and .extremebottomright zone)

                                } else { // above .specialmiddle zone

                                    // .specialtopright zone
                                    if ((binocTopLoc + binocHeightHalf - (3 * edgeMargin)) < 0) {
                                        content.classList.add('specialtopright');
                                        content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                        sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                        borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';

                                    } else { // .extremetopright zone
                                        content.classList.add('extremetopright');
                                        content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                        sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                        borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';

                                    } // close "else" for .extremetopright zone

                                } // close "else" for .specialtopright zone (and .extremetopright zone)

                            } // close R-edgeling's "else"

                        } // close "else" for .right zone

                    } else { // L-edgeling (blue path)

                        if ((contentTopLoc - contentHeightHalf + binocHeightHalf - edgeMargin) > 0) {

                            // .specialmiddleleft zone
                            if ((contentBottomLoc - contentHeightHalf + binocHeightHalf + edgeMargin) < footerTopLoc) {
                                content.classList.add('specialmiddleleft');
                                content.style.marginTop = parseInt(-contentHeightHalf) + parseInt(binocHeightHalf) + "px"; // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S HEIGHT BUT JS CAN
                                sharkFin.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                borderCover.style.top = 'calc(' + (0 + contentHeightHalf - edgeMargin) + 'px - 0.125rem)';
                                
                            } else {

                                // .specialbottomleft zone
                                if ((contentBottomLoc - contentHeight + binocHeightHalf + (3 * edgeMargin)) < footerTopLoc) {
                                    content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                    content.classList.add('specialbottomleft');
                                    sharkFin.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                    borderCover.style.top = 'calc(' + (0 - contentHeight - footerTopLoc + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                
                                } else { // .extremebottomleft zone
                                    content.classList.add('extremebottomleft');
                                    content.style.marginTop = parseInt(contentBottomLoc) - parseInt(footerTopLoc) - parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION OR FOOTER'S LOCATION BUT JS CAN
                                    sharkFin.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)'; 
                                    borderCover.style.top = 'calc(' + (0 - contentHeight - (3 * edgeMargin)) + 'px - 0.125rem)';                                    
                                
                                } // close "else" for .extremebottomleft zone

                            } // close "else" for .specialbottomleft zone (and .extremebottomleft zone)

                        } else { // above .specialmiddle zone

                            // .specialtopleft zone
                            if ((binocTopLoc + binocHeightHalf - (3 * edgeMargin)) < 0) {
                                content.style.marginTop = -contentTopLoc + parseInt(edgeMargin) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                content.classList.add('specialtopleft');
                                sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';

                            } else { // .extremetopleft zone
                                content.classList.add('extremetopleft');
                                content.style.marginTop = ((contentTopLoc * -1) + parseInt(edgeMargin)) + "px";  // MAY NEED TO KEEP SYLING FOR THIS ZONE WITHIN JS; CSS CANNOT KNOW CONTENT BOX'S LOCATION BUT JS CAN
                                sharkFin.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';
                                borderCover.style.top = 'calc(' + (0 - (edgeMargin * 2) + binocTopLoc + binocHeightHalf) + 'px - 0.125rem)';

                            } // close "else" for .extremetopleft zone

                        } // close "else" for .specialtopleft zone (and .extremetopleft zone)
                        
                    } // close L-edgeling's "else"
                    
                } // close else for non-.center zoners

            } else { // IF < 390px SCREENWIDTH

                // .center-n
                if ((binocHCtr > (gridCol * 5)) && (binocHCtr < gridCol * 23)) {
                    content.style.left = "calc(" + ((contentLeftLoc * -1) + (edgeMargin * 6)) + "px + 0.25rem)";
                    sharkFin.style.left = "calc(" + ((edgeMargin * -8) + binocLeftLoc + binocWidthHalf) + "px)";
                    borderCover.style.left = "calc(" + ((edgeMargin * -8) + binocLeftLoc + binocWidthHalf) + "px)";
                    
                    // .top-n + .center-n
                    if ((contentBottomLoc + binocHeight + (edgeMargin * 2)) < footerTopLoc) {
                        content.classList.add('top-n');
                    
                    } else { // .bottom-n + .center-n
                        content.style.marginTop = "calc(" + ((contentHeight * -1) - edgeMargin) + "px - 0.125rem)";
                        sharkFin.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.3125rem)";
                        borderCover.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.5rem)";
                    } // close .bottom + .center else 

                } else { // NOT .center-n 

                    // .left-n
                    if ((binocHCtr >= (gridCol * 3)) && (binocHCtr < (qqScreenWidth / 2))) {
                        content.classList.add('left-n');
                    
                        // .top-n + .left-n
                        if ((contentBottomLoc + binocHeight + (edgeMargin * 2)) < footerTopLoc) {
                            content.classList.add('top-n');
                    
                        } else { // .bottom-n + .left-n
                            content.style.marginTop = "calc(" + ((contentHeight * -1) - edgeMargin) + "px - 0.125rem)";
                            sharkFin.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.3125rem)";
                            borderCover.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.5rem)";                            
                        } // close .bottom + .left else 

                    } else { // NOT .left-n

                        // .right-n
                        if ((binocHCtr <= (gridCol * 25)) && (binocHCtr > (qqScreenWidth / 2))) {
                            content.classList.add('right-n');
                        
                            // .top-n + .right-n
                            if ((contentBottomLoc + binocHeight + (edgeMargin * 2)) < footerTopLoc) {
                                content.classList.add('top-n');
                    
                            } else { // .bottom-n + .right-n
                                content.style.marginTop = "calc(" + ((contentHeight * -1) - edgeMargin) + "px - 0.125rem)";
                                sharkFin.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.3125rem)";
                                borderCover.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.5rem)";
                            } // close .bottom + .right else 
                        
                        } else { // NOT .right-n

                            // .farleft-n
                            if (((binocLeftLoc + binocWidth) >= (gridCol * 3)) && (binocHCtr < (qqScreenWidth / 2))) {
                                content.classList.add('farleft-n');
                                content.style.left = "calc(" + ((contentLeftLoc * -1) + (edgeMargin * 2)) + "px - 0.125rem)";
                            
                                // .top-n + .farleft-n
                                if ((contentBottomLoc + binocHeight + (edgeMargin * 2)) < footerTopLoc) {
                                    content.classList.add('top-n');
                    
                                } else { // .bottom-n + .farleft-n
                                    content.style.marginTop = "calc(" + ((contentHeight * -1) - edgeMargin) + "px - 0.125rem)";
                                    sharkFin.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.3125rem)";
                                    borderCover.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.5rem)";
                                } // close .bottom + .farleft else 

                            } else { // NOT .farleft-n

                                // .farright-n
                                if ((binocLeftLoc <= (gridCol * 25)) && (binocHCtr > (qqScreenWidth / 2))) {
                                    content.classList.add('farright-n');
                                    content.style.left = "calc(" + ((-binocLeftLoc) + (edgeMargin * 12)) + "px - 0.125rem)";
                            
                                // .top-n + .farright-n
                                if ((contentBottomLoc + binocHeight + (edgeMargin * 2)) < footerTopLoc) {
                                    content.classList.add('top-n');
                    
                                } else { // .bottom-n + .farright-n
                                    content.style.marginTop = "calc(" + ((contentHeight * -1) - edgeMargin) + "px - 0.125rem)";
                                    sharkFin.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.3125rem)";
                                    borderCover.style.top = "calc(" + (0 + contentHeight - edgeMargin) + "px - 0.5rem)";
                                } // close .bottom + .farright else 

                                } else { // NOT .farright-n

                                    if ((contentTopLoc - contentHeightHalf + binocHeightHalf) > edgeMargin) {

                                        if ((contentBottomLoc - contentHeightHalf + binocHeightHalf) < (footerTopLoc - edgeMargin)) {

                                            // .specialmiddleleft-n
                                            if (binocHCtr < (qqScreenWidth / 2)) {
                                                content.classList.add('specialmiddleleft-n');
                                                content.style.marginTop = "calc(" + ((contentHeightHalf * -1) + binocHeightHalf) + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + (0 + contentHeightHalf - edgeMargin) + "px - 0.125rem)";
                                                borderCover.style.top = "calc(" + (0 + contentHeightHalf - edgeMargin) + "px - 0.125rem)";

                                            } else { // .specialmiddleright-n
                                                content.classList.add('specialmiddleright-n');
                                                content.style.marginTop = "calc(" + ((contentHeightHalf * -1) + binocHeightHalf) + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + (0 + contentHeightHalf - edgeMargin) + "px - 0.125rem)";
                                                borderCover.style.top = "calc(" + (0 + contentHeightHalf - edgeMargin) + "px - 0.125rem)";
                                            } // close else for .specialmiddleright-n

                                        } else { // orange "NO" IN NOTEBOOK

                                            if ((contentBottomLoc - contentHeight + binocHeight + (gridCol * 3)) < footerTopLoc) {

                                                // .specialbottomleft-n
                                                if (binocHCtr < (qqScreenWidth /2)) {
                                                    content.classList.add('specialbottomleft-n');
                                                    content.style.marginTop = "calc(" + ((contentTopLoc * -1) + footerTopLoc - contentHeight - edgeMargin) + "px - 0.125rem)";
                                                    sharkFin.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.125rem)";
                                                    borderCover.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.25rem)";

                                                } else { // .specialbottomright-n
                                                    content.classList.add('specialbottomright-n');
                                                    content.style.marginTop = "calc(" + ((contentTopLoc * -1) + footerTopLoc - contentHeight - edgeMargin) + "px - 0.125rem)";
                                                    sharkFin.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.125rem)";
                                                    borderCover.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.25rem)";
                                                } // close else for .specialbottomright-n

                                            } else { // yellow "NO" IN NOTEBOOK

                                                // .extremebottomleft-n
                                                if (binocHCtr < (qqScreenWidth / 2)) {
                                                    content.classList.add('extremebottomleft-n');
                                                    content.style.marginTop = "calc(" + ((contentTopLoc * -1) + footerTopLoc - contentHeight - edgeMargin) + "px - 0.125rem)";
                                                    sharkFin.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.125rem)";
                                                    borderCover.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.25rem)";

                                                // .extremebottomright-n
                                                } else {
                                                    content.classList.add('extremebottomright-n');
                                                    content.style.marginTop = "calc(" + ((contentTopLoc * -1) + footerTopLoc - contentHeight - edgeMargin) + "px - 0.125rem)";
                                                    sharkFin.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.125rem)";
                                                    borderCover.style.top = "calc(" + (contentTopLoc * -1) + binocTopLoc + binocHeightHalf - edgeMargin + "px - 0.25rem)";
                                                } // close else for .extremebottomright-n

                                            } // close else for yellow "NO" in notebook

                                        } // close else for orange "NO" in notebook

                                    } else { // red "NO" IN NOTEBOOK

                                        if ((contentTopLoc + (gridCol * 3)) >= 0) {

                                            // .specialtopleft-n
                                            if (binocHCtr < (qqScreenWidth / 2)) {
                                                content.classList.add('specialtopleft-n');
                                                content.style.marginTop = "calc(" + ((contentTopLoc * -1) + (edgeMargin * 2)) + "px - 0.125rem)";
                                                // sharkFin.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + binocTopLoc + "px - 0.125rem)";
                                                // borderCover.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.25rem)";
                                                borderCover.style.top = "calc(" + binocTopLoc + "px - 0.125rem)";
                                            
                                            } else { // .specialtopright-n
                                                content.classList.add('specialtopright-n');
                                                content.style.marginTop = "calc(" + ((contentTopLoc * -1) + (edgeMargin * 2)) + "px - 0.125rem)";
                                                // sharkFin.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + binocTopLoc + "px - 0.125rem)";
                                                // borderCover.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.25rem)";
                                                borderCover.style.top = "calc(" + binocTopLoc + "px - 0.125rem)";
                                            } // close else for .specialtopright-n

                                        } else { // green "NO" IN NOTEBOOK

                                            // .extremetopleft-n
                                            if (binocHCtr < (qqScreenWidth / 2)) {
                                                content.classList.add('extremetopleft-n');
                                                content.style.marginTop = "calc(" + ((contentTopLoc * -1) + edgeMargin) + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.125rem)";
                                                borderCover.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.25rem)";
                                            
                                            } else { // .extremetopright-n
                                                content.classList.add('extremetopright-n');
                                                content.style.marginTop = "calc(" + ((contentTopLoc * -1) + edgeMargin) + "px - 0.125rem)";
                                                sharkFin.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.125rem)";
                                                borderCover.style.top = "calc(" + (edgeMargin * -2) + binocTopLoc + binocHeightHalf + "px - 0.25rem)";
                                            } // close else for .extremetopright-n

                                        } // close else for green "NO" in notebook

                                    } // close else for red "NO" in notebook

                                } // close else for "NOT .farright-n"

                            } // close "NOT .farleft-n"

                        } // close else for "NOT .right-n"

                    } // close else for "NOT .left-n"

                } //close else for "NOT .center-n"

            } // close else for < 390px screenwidth

            // document.getElementById('qqtest').innerHTML = sharkFinHeight;  // GENERAL TESTING !!!!!
} // close qqPositionContents callback function



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

                    // calling callback function from above, after defining binoc from the perspectiv of this function's event handler
                    var binoc = qqContent[i].previousElementSibling;
                    qqPositionContents(binoc);

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

            // calling callback function from above, after defining binoc from the perspectiv of this function's event handler
            var binoc = selectedContainer;
            qqPositionContents(binoc);

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

            // calling callback function from above, after defining binoc from the perspectiv of this function's event handler
            var binoc = selectedInnards.parentNode;            
            qqPositionContents(binoc);

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
