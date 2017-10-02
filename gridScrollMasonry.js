// var $animation_elements = $('.secondary__images');
// var $window = $(window);

// function check_if_in_view() {
//     var window_height = $window.height();
//     var window_top_position = $window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);
//     console.log(window_height);

//     $.each($animation_elements, function() {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_top_position = $element.offset().top;
//         var element_bottom_position = (element_top_position + element_height);
//         var delayValue = 0;

//         //check to see if this current container is within viewport
//         if ((element_bottom_position >= window_top_position) &&
//             (element_top_position <= window_bottom_position)) {
//             $(".secondary__item").each(function() {
//                 $(this).delay(delayValue).animate({
//                     "opacity": 1.0
//                 });
//                 delayValue += 300;
//             }); // each method
//         }
//     });
// }
// $window.on('scroll', check_if_in_view);
// // init Masonry
// var $grid = $('.secondary__images').masonry({
//     // options
//     itemSelector: '.card',
//     columnWidth: '.grid-sizer'
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress(function() {
//     $grid.masonry('layout');
// });