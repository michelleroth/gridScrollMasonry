$(document).ready(function() {

    // var student1 = {
    // 	name: "Michelle",
    // 	lastName: "Roth",
    // 	age: 31,
    // };

    // var student2 = {
    // 	name: "Jeff",
    // 	lastName: "Passetti",
    // 	age: 35,
    // }

    // console.log(student2.name);

    var classList = [

        ["michelle", "Roth", 31],
        ["Annalena", "Davis", 30],
        ["Kuki", "Haines", 30],
        ["Kseniya", "Hogan", 30]

    ];
    
    function Student(data) {
        this.firstName = data[0];
        this.lastName = data[1];
        this.age = data[2];
        this.sayName = function() {
            return "Hi, my name is " + this.firstName;
        };
        this.buildCard = function() {
            var string = "<li>" +
                "<h3>Name: " + this.firstName + " " +
                this.lastName + "</h3>" +
                "<h4>Age: " + this.age + "</h4></li>";
            return string;
        };
        this.appendCard = function() {
            $("ul.class-roster").append(this.buildCard());
        };
    }
    // var michelle = new Student("michelle", "roth", 31);
    // console.log(michelle.sayName());
    for (i = 0; i < classList.length; i++) {
        var student1 = new Student(classList[i]);
        //console.log(student.sayName());
        console.log(student1);
        student1.appendCard();
    }




}); // ready method end