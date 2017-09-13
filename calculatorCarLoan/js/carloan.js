$(document).ready(function() {

    $("#carLoan").on("submit", function(event) {
        event.preventDefault();
        console.log("form submitted!");

        var carPrice = parseInt($("input[name=carPrice]").val());
        console.log(carPrice);

        var carTax = parseInt($("input[name=carTax]").val());
        console.log(carTax);

        var carTotalPrice = carPrice * ((carTax * 0.01) + 1);
        console.log(carTotalPrice);
        $(".results").append("<h2>Total price: $" + carTotalPrice + "</h2>");

        var carDownPayment = parseInt($("input[name=carDownPayment]").val());
        console.log(carDownPayment);

        var carTradeInValue = parseInt($("input[name=carTradeInValue]").val());
        console.log(carTradeInValue);

        var carInterestRate = parseInt($("input[name=carInterestRate]").val());
        console.log(carInterestRate);

        var carLoanLength = parseInt($("input[name=carLoanLength]:checked").val())
        console.log(carLoanLength);

        var carTotalWithInterest = (carTotalPrice - (carDownPayment + carTradeInValue)) * ((carInterestRate * 0.01) + 1);
        console.log(carTotalWithInterest);
        $(".results").append("<h2>You owe the bank: $" + carTotalWithInterest + "</h2>");

        var carMonthlyPayment = carTotalWithInterest / carLoanLength;
        console.log(carMonthlyPayment);
        $(".results").append("<h2>Monthly payment: $" + carMonthlyPayment + "</h2>");
    }); // on method end

}); // ready method end