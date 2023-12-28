// write a function that accept a nested array and returns all the values in one array

function flatten(arr) {
// 1- declare end vriable
var flat= [];
    // 2- write helper function 
    function makeFlat(arraySegment){
        // 3- loop over each array segment
        arraySegment.forEach(element => {
            // 4- check if array is array
            if (Array.isArray(element)){
                // 5- recursion call
                makeFlat(element);
            } else {
                // 6- push the element
                flat.push(element);
            }
        })
    }
    // call helper function
    makeFlat(arr);
    return flat;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
