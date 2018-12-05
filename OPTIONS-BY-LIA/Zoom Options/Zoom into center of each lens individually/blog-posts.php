                <!-- SAVE FOR README: ZOOM INTO CTR OF EACH LENS INDIVIDUALLY vvv -->

                <!-- Post glasses icon -->
                <div class="postglassescontainer">
                    <div class="stem shortstem leftstem"></div><?php if($homepostglassesleft = $article->postglassesleft()->toFile()): ?><div style="background-image: url(<?= $homepostglassesleft->url() ?>)" class="circle leftcircle"></div><?php endif; ?><div class="stem centerstem"></div><?php if($homepostglassesright = $article->postglassesright()->toFile()): ?><div style="background-image: url(<?= $homepostglassesright->url() ?>)" class="circle rightcircle"></div><?php endif; ?><div class="stem shortstem rightstem"></div>  
                </div>

                <!-- SAVE FOR README: ZOOM INTO CTR OF EACH LENS INDIVIDUALLY ^^^ -->