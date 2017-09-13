$(document).ready(function() {

    $("a").colorify({
        color: "red"
    });

    $("nav ul li a").click(function(event) {
        event.preventDefault();

        $("nav ul li a").removeClass("active");
        $(this).addClass("active");

        var slideTarget = $(this).attr("href");
        console.log(slideTarget);
        $("html,body").animate({
            "scrollTop": $(slideTarget).offset().top + "px"
        }); //animate end
    }); //click method end

    //products: 0-800px
    //services: 800-1600px

    var sectionRange = [];
    // var totalFloors = $(".floor__item").length;

    var startVal = 0;

    $(".floor__item").each(function(i) {
        // console.log(i);
        var sectionHeight = $(this).outerHeight();

        var sectionEnd;

        if (i === 0) {
            sectionEnd = startVal + (sectionHeight / 2);
        } else {
            sectionEnd = startVal + sectionHeight;
        }

        sectionRange.push({
            "start": startVal,
            "end": sectionEnd
        }); //push end

        if (i === 0) {
            startVal += (sectionHeight / 2);
        } else {
            startVal += sectionHeight;
        }

    }); //each method
    console.log(sectionRange);

    function loopSectionRanges(val) {
        $("nav ul li a").removeClass("active");
        for (var i = 0; i < sectionRange.length; i++) {
            console.log(i);
            if (val >= sectionRange[i].start && val <= sectionRange[i].end) {
                $("nav ul li:eq(" + i + ") a").addClass("active");
                break;
            }
        } //loop
    } //loopSectionsRanges

    $(window).scroll(function() {
        var scrollValue = $(this).scrollTop();
        console.log(scrollValue);

        loopSectionRanges(scrollValue);

    }); //scroll

}); // ready method end