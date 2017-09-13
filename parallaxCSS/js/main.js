$(document).ready(function() {

    $('.parallax-window').parallax({
        imageSrc: 'images/soCal.jpg'
    });

    $(window).trigger('resize').trigger('scroll');


}); // ready method end