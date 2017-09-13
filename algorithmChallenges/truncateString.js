
 var aString = "";


if (str.length <= num) {
    return str;
} else if (str.length >= num && num < 3) {
    aString = str.slice(0, num);
    return aString.concat("...");

} else if (str.length >= num && num > 3) {
    aString = str.slice(0, (num - 3));
    return aString.concat("...");

} else if (str.length <= 3) {
    aString = str.slice(0, num);
    return aString.concat("...");
}

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);




return str; //this string is long enough
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);