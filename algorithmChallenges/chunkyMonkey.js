function chunkArrayInGroups(arr, size) {
    // Break it up.
    //new array stores new chunks of arrays
    var newArray = [];
    // i = i + size  (i+=size).. this increments i by the arg (size) each time through loop
    for (var i = 0; i <= arr.length; i += size) {
        // (arr.slice(i,i+size)) creates those "chunks" bc I am slicing the array
        // as index iterates through the loop - it increments by size
        // time to push each chunk to the newArray and return
        //   so basically here, we had to add a conditional just incase there is no         
        //   longer anything else to push.  ex would be if i reaches "4", because at that     
        //   point there would be nothing left to push and would be empty array
        if (i = arr.length) {
            return newArray;
        }

        newArray.push(arr.slice(i, i + size));
        console.log("working");
    }
    // return newArray;

}
chunkArrayInGroups(["a", "b", "c", "d"], 2);



