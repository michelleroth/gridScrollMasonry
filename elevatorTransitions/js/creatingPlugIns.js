$(function($) {

    $.fn.colorify = function(options) {

        var settings = $.extend({
            color: "limegreen",
            backgroundColor: "grey"
        }, options);

        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    } //colorify

}(jQuery)); // ready method end