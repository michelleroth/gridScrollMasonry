$(document).ready(function() {

    var characters = [{
            firstName: "Jon",
            lastName: "Snow",
            slug: "jon-snow",
            actorName: "Kit Harrington"
        },
        {
            firstName: "Cersei",
            lastName: "Lannister",
            slug: "cersei-lannister",
            actorName: "Lena Headey"
        },
        {
            firstName: "Tyrion",
            lastName: "Lannister",
            slug: "tyrion-lannister",
            actorName: "Peter Dinklage"
        },
        {
            firstName: "Daenerys",
            lastName: "Targaryen",
            slug: "daenerys-targaryen",
            actorName: "Emilia Clarke"
        },
        {
            firstName: "Jon",
            lastName: "Snow",
            slug: "jon-snow",
            actorName: "Kit Harrington"
        },
        {
            firstName: "Cersei",
            lastName: "Lannister",
            slug: "cersei-lannister",
            actorName: "Lena Headey"
        },
        {
            firstName: "Tyrion",
            lastName: "Lannister",
            slug: "tyrion-lannister",
            actorName: "Peter Dinklage"
        },
        {
            firstName: "Daenerys",
            lastName: "Targaryen",
            slug: "daenerys-targaryen",
            actorName: "Emilia Clarke"
        },
        {
            firstName: "Jon",
            lastName: "Snow",
            slug: "jon-snow",
            actorName: "Kit Harrington"
        },
        {
            firstName: "Cersei",
            lastName: "Lannister",
            slug: "cersei-lannister",
            actorName: "Lena Headey"
        },
        {
            firstName: "Tyrion",
            lastName: "Lannister",
            slug: "tyrion-lannister",
            actorName: "Peter Dinklage"
        },
        {
            firstName: "Daenerys",
            lastName: "Targaryen",
            slug: "daenerys-targaryen",
            actorName: "Emilia Clarke"
        },
        {
            firstName: "Jon",
            lastName: "Snow",
            slug: "jon-snow",
            actorName: "Kit Harrington"
        },
        {
            firstName: "Cersei",
            lastName: "Lannister",
            slug: "cersei-lannister",
            actorName: "Lena Headey"
        },
        {
            firstName: "Tyrion",
            lastName: "Lannister",
            slug: "tyrion-lannister",
            actorName: "Peter Dinklage"
        },
        {
            firstName: "Daenerys",
            lastName: "Targaryen",
            slug: "daenerys-targaryen",
            actorName: "Emilia Clarke"
        },
        {
            firstName: "Jon",
            lastName: "Snow",
            slug: "jon-snow",
            actorName: "Kit Harrington"
        },
        {
            firstName: "Cersei",
            lastName: "Lannister",
            slug: "cersei-lannister",
            actorName: "Lena Headey"
        },
        {
            firstName: "Tyrion",
            lastName: "Lannister",
            slug: "tyrion-lannister",
            actorName: "Peter Dinklage"
        },
        {
            firstName: "Daenerys",
            lastName: "Targaryen",
            slug: "daenerys-targaryen",
            actorName: "Emilia Clarke"
        },
    ]; //characters array end


    /*THIS APPENDS THE NAMES and IMAGES INTO THE BODY */
    var Character = function(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.slug = data.slug;
        this.fullName = this.firstName + " " + this.lastName;
        this.buildImage = function() {
            var img = $("<img />");
            $(img).attr({
                "src": "images/" + this.slug + "-512x512.jpg",
                "alt": "Image of " + this.fullName
            }); //attr method end
            $(img).addClass("characters__img");
            return img;
        }; //build image method end
        this.buildName = function() {
            var headline = $("<h2 />");
            $(headline)
                .addClass("characters__name")
                .text(this.fullName);
            return headline;
        }; //buildname end
        this.appendCharacter = function() {
            var article = $("<article />");
            $(article)
                .addClass("col-xs-6 col-sm-3 characters__item")
                .append(this.buildImage())
                .append(this.buildName())
                .appendTo(".characters__grid");
        }; //append Character
    } //Character constructor function end

    for (var i = 0; i < characters.length; i++) {
        //        console.log(characters[i].firstName);
        var char = new Character(characters[i]);
        char.appendCharacter();
    } //for loop end

    /*   <article class="col-xs-6 col-sm-3 characters__item">
                           <img src="images/jon-snow-512x512.jpg" alt="Image of Jon Snow" class="characters__img"/>
                           <h2 class="characters__name">Jon Snow</h2>
                       </article>
       */

    var args = {
        reset: true,
        origin: 'bottom',
        duration: 750,
        delay: 100,
        viewFactor: 0.5,
        //        scale: 0.5,
        //        opacity: 1.0,
        //        distance: '0px'
    }
    window.sr = ScrollReveal();
    sr.reveal('.characters__item', args);

    var currentSlide = 0;
    var totalSlides = $(".characters__item").length;
    var overlayActive = false;

    function checkArrows(num) {
        if (num <= 0) {
            currentSlide = 0;
            $("#prevBtn").hide();
        } else if (num > 0 && num < totalSlides - 1) {
            $("#prevBtn").show();
            $("#nextBtn").show();
        } else if (num >= totalSlides - 1) {
            $("#nextBtn").hide();
        } //end if
    } //checkArrows

    //could use "num" as the variable we're calling upon, or we could use the global variable "currentSlide". With just one carousel using the global would make sense, but if for example we had three separate carousels on the same page we'd want to use the same function for all 3, and would need to call a different variable for each.

    function changeSlide(slide) {
        $(".overlay__anchor h2")
            .text(characters[slide].firstName + " " + characters[slide].lastName)
            .css({
                //reset
                "top": "-50px",
                "opacity": 0
            })
            .delay(400)
            .animate({
                "top": "0px",
                "opacity": 1
            });
        $(".overlay__anchor h3").text("Played by " + characters[slide].actorName);
        $(".overlay__anchor")
            .css({
                "opacity": 0,
                "bottom": "-50px"
            }) //reset
            .delay(200)
            .animate({
                "opacity": 1,
                "bottom": "0px"
            }); //animate method
        var imagePath = "images/"
        var imageName = characters[slide].slug + "-1280.jpg";
        $(".overlay__content").css({
            "backgroundImage": "url('" + imagePath + imageName + "')"
        }); //css method end
        checkArrows(slide);
    } //changeSlide

    $("#closeBtn").click(function(event) {
        event.preventDefault();
        $(".overlay").fadeOut();
        overlayActive = false;
    }); //click method end

    $("#nextBtn").click(function(event) {
        event.preventDefault();
        currentSlide++;
        changeSlide(currentSlide);
    }); //click method end

    $("#prevBtn").click(function(event) {
        event.preventDefault();
        currentSlide--;
        changeSlide(currentSlide);
    }); //click method end

    $(".characters__item").click(function(event) {
        event.preventDefault();
        var indexNum = $(this).index();
        currentSlide = indexNum;
        changeSlide(indexNum);
        $(".overlay").fadeIn();
        overlayActive = true;
    }); //click method end

    $(document).keydown(function(event) {
        if (overlayActive === true) {
            console.log(event.keyCode);
            if (event.keyCode === 37) {
                // left arrow
                if (currentSlide === 0) {
                    currentSlide = 0;
                } else {
                    currentSlide--;
                }
                changeSlide(currentSlide);
            } else if (event.keyCode === 39) {
                //right arrow
                if (currentSlide === totalSlides - 1) {
                    currentslide = totalSlides - 1;
                } else {
                    currentSlide++;
                }
                changeSlide(currentSlide);
            } //end keyCode  
        } //overlayActive end if
    }) //keydown

    $(document).click(function() {
        console.log(event.target);
        if ($(event.target).hasClass('overlay')) {
            $(".overlay").fadeOut();
        }
    }); //click method end

}); // ready method end