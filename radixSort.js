// get digit at position 
function getDigit(num, position){
    return Math.floor(Math.abs(num)/Math.pow(10,position))%10;
}

// get number of digit in a number
function digitCount(num){
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

// get the most number of digits in an array
function mostDigits(arr){
    let maxDigit = 0;
    for (var i=0; i<arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]));
    }
    return maxDigit;
}

function radixSort(arr) {
    // get the most digits in arr
    let maxDigit = mostDigits(arr);
    // loop max digits times
    for (let k=0; k<maxDigit; k++) {
        // construct buckets max digit of times
        let buckets = Array.from({length:10}, ()=> []);
        // loop over each element of the array
        for(var i=0; i < arr.length; i++) {
            // get the key of the bucket to assign the array element
            let digit = getDigit([arr[i]],k);
            // push the arr elemnt to the bucket
            buckets[digit].push(arr[i]);
        }
        // concat the buckets to the array
        arr = [].concat(...buckets)

    }
    // return the arr
    return arr;
}
console.log(radixSort([123, 33,55555, 4444]));