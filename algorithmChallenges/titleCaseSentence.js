function titleCase(str) {

    //split string into array	
    var arr = str.split(' ');

    //loop through array  
    for (var i = 0; i < arr.length; i++) {

        //placeholder for iteration in array 	
        var a = arr[i];

        //uppercase first character at index 0  
        var b = a.charAt(0).toUpperCase();

        //slice off first letter and lowercase remaining word from second position to the length of the word
        var c = a.slice(1, a.length).toLowerCase();

        //combine variables to recreate array
        arr[i] = b.concat(c);

    }
    //join array to transform back to string
    str = arr.join(" ");

    //return the string in proper syntax
    return str;


}
titleCase("I'm a little tea pot");