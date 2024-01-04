function mergeSort(arr) {
  // start with base case
  if (arr.length <= 1) return arr;
  //   define mid point
  let mid = Math.floor(arr.length / 2);
  //   devide the array into two parts
  //   make sure that each part of the array contains one element or less by recursion
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  //   merge two sorted arrays
  return merge(left, right);
}
console.log(mergeSort([7, 2, 1, -5, 100, 15]));

// ? merging two sorted arrays
function merge(arr1, arr2) {
  // define indexes and counters
  let i = 0;
  let j = 0;
  let results = [];

  //   while loop by adding elements to array by comparing them
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  //   add the remaining elements in arr1 if there is
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  //   add the remaining elements in arr2 if there is
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // return results
  return results;
}
