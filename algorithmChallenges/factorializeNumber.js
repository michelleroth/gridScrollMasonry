function factorialize(num) {
    //set 0 as recursive base
    if (num == 0) { //set my base case
        return 1; // if 0 is returned, no recursive call. 
        //must return one because 1 wont alter the numbers when muliplying 
    } else { //recurive case that will occure if
        return num * (factorialize(num - 1)); //recursive call
    }
    //each call the num gets smaller by one
    //it takes n-1 calls until we reach the base case then stops at 0 in order to prevent infinite recursion
    return num;
}

factorialize(5);
