function findLongestWord(str) {

    //split string into array longestStr & don't forget counter to keep track of longest word

    var longestWord = 0;
    var arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {

        //if var is greater than the index length, return it as longest string

        if (arr[i].length > longestWord) {

            longestWord = arr[i].length;


        }
    }
    return longestWord;
}


findLongestWord("The quick brown fox jumped over the lazy dog");