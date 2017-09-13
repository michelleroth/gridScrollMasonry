function confirmEnding(str, target) {


    //target.length is negative so substr() 
    //will start the counting from the end of the string
    //substr() returns characters in str starting at specified location through specified location (neg starts at back)

    if (str.substr(-target.length) == target) {
        return true;
    } else {
        return false;
    }



    confirmEnding("Bastian", "n");