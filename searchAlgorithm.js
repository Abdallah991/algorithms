// ? Binary Search
// find a value with time complexity o(Log(n))
// input is array & number
// output, true ---> true & value ---> true & value & numbers of iteration
let counter = 0;
function binarySearch(arr, val) {
  // get the first and last element

  counter++;
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(end / 2);
  if (arr[middle] == val) {
    return [true, arr[middle], counter];
  }
  // return true once found
  // choose which have to look into depending on val
  // keep deviding the array length/2
  if (arr[middle] > val) {
    binarySearch(arr.slice(start, middle), val);
  }
  if (arr[middle] < val) {
    binarySearch(arr.slice(middle + 1), val);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
