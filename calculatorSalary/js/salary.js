$(document).ready(function() {

    $("#salaryCalculator").on("submit", function(event) {
        event.preventDefault();
        console.log("form submitted!");

        var salary = parseInt($("input[name=salary]").val());
        console.log(salary);

        var raise = parseInt($("input[name=raise]").val());
        console.log(raise);

        var contribution = parseInt($("input[name=contribution]").val());
        console.log(contribution);

        var years = parseInt($("input[name=years]").val());
        console.log(years);

        var retirementAmt = 0;

        function commaIt(val) {
            // figure out how to put a comma in
            return val;
        }

        for (var i = 0; i < years; i++) {
            // salary *= 1.02;
            salary *= ((raise * 0.01) + 1);
            retirementAmt += (commaIt(salary) * ((contribution * 0.01)));
            console.log(salary);
            if (i === years - 1) {
                $(".results").empty();
                $(".results").append("<h2>Year: " + (i + 1) + "</h2>");
                $(".results").append("<h4>Future salary: $" + salary + "</h4>");
                $(".results").append("<h4>Retirement balance: $" + retirementAmt + "</h4>");
            }
        } // for loop

        //$(".results").append("<h2>Total price: $" + carTotalPrice + "</h2>");

    }); // on method end

}); // ready method end