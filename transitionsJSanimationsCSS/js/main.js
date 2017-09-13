$(document).ready(function() {
    // establish a frame rate, to be used in the setInterval() function
    var frameRate = 30;
    // grab the width of the user's window`
    var windowWidth = $(window).width();

    function animateClouds() {
        // 1. select the cloud
        var cloud1 = $(".example-jquery #cloud1");
        // 2. grab the current left position
        var cloud1left = parseInt($(cloud1).css("left"));
        // 3. grab the width of the cloud
        var cloud1width = parseInt($(cloud1).width());
        // 4. increment the left value by one
        cloud1left++;

        // 5. if the incremented value is beyond the width of the window...
        if (cloud1left > windowWidth) {
            $(cloud1).css({
                // ...bring it back to the left offscreen
                "left": (300) + "px"
            });
        } else {
            // ...apply the incremented value
            $(cloud1).css({
                "left": cloud1left + "px"
            });
        }
    }
    // for every 1000/30 milliseconds, invoke the animateClouds() function
    setInterval(animateClouds, 1000 / frameRate);
}); // ready method end