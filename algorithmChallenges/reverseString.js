function reverseString(str) {

    //argument split into array and reverse, and join back to string.  return arg

    str = str.split("").reverse().join("");

    return str;
}

reverseString("hello");