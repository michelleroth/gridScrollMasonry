function largestOfFour(arr) {
    // create empty array 
    var newArr = [];

    // loop through outter array
    for (var i = 0; i < arr.length; i++) {

        //set a var for value to be pushed to
        var biggest = 0;
        console.log(biggest);

        //loop through second array at outter array index length
        for (var j = 0; j < arr[i].length; j++) {


            //conditional statement must consider both arrays, then set largest equal to variable
            if (arr[i][j] > biggest)
                biggest = arr[i][j];
            console.log(biggest);

            //push to empty array using the biggest variable
        }
        newArr.push(biggest);
    }
    return newArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);