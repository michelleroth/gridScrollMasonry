$(document).ready(function() {

    $("#homeLoan").on("submit", function(event) {
        event.preventDefault();
        console.log("form submitted!");

        var homePrice = parseInt($("input[name=homePrice]").val());
        console.log(homePrice);

        var homeInterestRate = parseInt($("input[name=homeInterestRate]").val());
        console.log(homeInterestRate);

        var homeTotalPrice = homePrice * ((homeInterestRate * 0.01) + 1);
        console.log(homeTotalPrice);
        $(".results").append("<h2>Total price: $" + homeTotalPrice + "</h2>");


        var homeDownPayment = parseInt($("input[name=homeDownPayment]").val());
        console.log(homeDownPayment);

        var homeMortgageTerm = parseInt($("input[name=homeMortgageTerm]:checked").val())
        console.log(homeMortgageTerm);

        var homeTotalWithInterest = (homeTotalPrice - homeDownPayment) * ((homeInterestRate * 0.01) + 1);
        console.log(homeTotalWithInterest);
        $(".results").append("<h2>You owe the bank: $" + homeTotalWithInterest + "</h2>");

        var homeMonthlyPayment = homeTotalWithInterest / homeMortgageTerm;
        console.log(homeMonthlyPayment);
        $(".results").append("<h2>Monthly payment: $" + homeMonthlyPayment + "</h2>");

    }); // on method end

}); // ready method end