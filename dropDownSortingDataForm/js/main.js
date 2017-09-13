$(document).ready(function() {

    //console.log(dataRoster);

    // constructor function
    var Student = function(data) {
        //console.log("new student!!!");
        this.fname = data.firstName;
        this.lname = data.lastName;
        this.city = data.city;
        this.state = data.state;
        this.company = data.company;
        this.age = data.age;
        this.printName = function() {
            return this.fname + " " + this.lname;
        };
        this.printCity = function() {
            return this.city + ", " + this.state;
        };
        this.buildCard = function() {
            var card = $("<div />");
            $(card).addClass("col-xs-12 col-sm-4 card");
            $(card).attr("data-age", this.age);
            $(card).attr("data-state", this.state);

            var cardContent = "<h2>" + this.printName() + "</h2>" +
                "<h3>" + this.printCity() + "</h3>" +
                "<h4>" + this.company + "</h4>" +
                "<h5>" + this.age + "</h5>";

            //cardContent += "<h3>" + this.printCity() + "</h3>";
            $(card).html(cardContent);
            return card;
        };
    }; // constructor function end

    // counter, condition, incrementer
    for (var i = 0; i < dataRoster.length; i++) {
        //console.log(dataRoster[i].firstName);
        var attendee = new Student(dataRoster[i]);
        //console.log(attendee.printName());
        $(".attendees").append(attendee.buildCard());
    } // for loop end


    $('.attendees').masonry({
        // options
        itemSelector: '.card',
        columnWidth: '.card-sizer'
    });

    var dgArr = [
        [1, 100],
        [12, 17],
        [18, 24],
        [25, 34],
        [35, 44],
        [45, 54],
        [55, 64],
        [65, 100]
    ]; // dgArr end

    $("#dataFilters").on("change", function() {
        console.log("changed my form");
        var targetDemographic = $("#dataDemographics").val();
        console.log(targetDemographic);
        $(".card").hide().each(function() {
            var cardAge = $(this).attr("data-age");
            //console.log(cardAge);
            if (cardAge >= dgArr[targetDemographic][0] && cardAge <= dgArr[targetDemographic][1]) {
                $(this).show();
            } // end if
        }); // each method end
    }); // on method end

    $('.attendees').masonry({
        // options
        itemSelector: '.card',
        columnWidth: '.card-sizer'
    });

    $("#dataFilters").on("change", function() {
        console.log("state");
        var targetDemographic = $("#dataDemographics").val();

        var targetState = $("#dataState").val();
        console.log(targetState);
        console.log(targetDemographic);
        $(".card").hide().each(function() {
            var cardState = $(this).attr("data-state");
            var cardAge = $(this).attr("data-age");
            // var stateValue = $("#dataState").val();
            console.log(cardState);


            if (cardState === targetState) {
                if (cardAge >= dgArr[targetDemographic][0] && cardAge <= dgArr[targetDemographic][1]) {
                    $(this).show();
                }

            } // end if
        }); // each method end

        $('.attendees').masonry({
            // options
            itemSelector: '.card',
            columnWidth: '.card-sizer'
        });


    }); // on method end

}); // ready method end
