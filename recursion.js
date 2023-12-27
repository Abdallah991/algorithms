function collectOddValues(arr) {
    // define the result array
    let result = []; 

    // define the helper function
    function helper(input) {
        // base case where recursion ends
        if (input.length === 0) {
            return;
        }

        // add result if its odd
        if (input[0]%2 != 0) {
            result.push(input[0]);
        }

        // recursive call with different input
        helper(input.slice(1))
    }

    // helper function call
    helper(arr);
    // return call
    return result
}

console.log(collectOddValues([1,2,3,4,5]));