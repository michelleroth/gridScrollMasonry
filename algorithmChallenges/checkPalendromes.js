function palindrome(str) {
    //regex basic symbol grabber= /\W|_/g 
    var sym = /\W|_/g;
    //regex syntex use replace and pass in regex var, also lowercase all
    str = str.replace(sym, "").toLowerCase();
    //new var to produce the opposite, regex symbols, lowercase, split into array to reverse and join back into string
    var pal = str.replace(sym, "").toLowerCase();
    pal = pal.split("");
    pal = pal.reverse("");
    pal = pal.join("");
    console.log(pal);

    //my conditional to identify if they equal eachother from both directions
    if (str === pal) {
        return true;
    } else {
        return false;
    }

};

palindrome("eye");


