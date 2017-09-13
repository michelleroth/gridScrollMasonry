function slasher(arr, howMany) {


    var removed = arr.splice(0, howMany);

    //splice() changes the array by removing or adding elements
    //removed will hold the spliced off value, starting at 0
    //first arg starting point, second is how many to remove, 
    //third is what to add (optional)


    return arr;
}

slasher([1, 2, 3], 2);



//difference between slice and splice:  
//slice extract elements of array and returns the extracted elements in an new array
//splice add/remove the element to/from an array and returns the new array after added/removed