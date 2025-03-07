// *evaluate strings as code
// eval("console.log('hello')");

// * charAt & slice
let name = "Abdallah Alathamneh";
// console.log(name.charAt(0));
// console.log(name.slice(9));

// * has own property
let student = {
  name: "Ahmed",
  age: 25,
};
// console.log(student.hasOwnProperty("age"));

// * set, removes repeptive values
let set = new Set([1, 2, 3, 3, "abdallah", "yasser", "abdallah", 1]);
set.add("ahmed");
set.delete(1);
// console.log(set);
// console.log(set.has(2));
// console.log(set.size);
// set.clear();
// console.log(set.entries());

// * map
let map = new Map();
map.set("a", 1);
map.set("b", 2);
// map.delete("a");
// console.log(map.size);
// map.forEach((key, value) => {
//   console.log(key, value);
// });
// for (const item of map) {
//   console.log(item);
// }
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// * arrays
let array = ["a", "b", "d", "a", "l", "l", "a", "h"];
let string = "abdallah";
// console.log(new Set(string.split("")));

// * objects
// console.log(Object.fromEntries(map));
// console.log(Object.assign({}, array));
// console.log(Object.assign({}, string.split("")));

// * helper functions
// str.trim() --> trim a string
// .reduce()
//  -->
// function squareSum(numbers) {
//     const squaredNumbers = numbers.map(num => num ** 2);
//     const sum = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
//     return sum;
//   }
// <--
//
// [...arr]
//
// char.repeat(i)
//
// array.flat()
//
// array.sort((a,b) => (a - b))
// array.sort().reverse()
// ? slice doesnt modify the original array, splice does modify it.
// array.slice(start, end);
// array.splice(start, deleteCount, item1, item2, ...);
//
// array.push(5)
// array.pop()
// array.shift()
// array.unshift()
// array.filter()
// ! https://www.w3schools.com/js/js_array_methods.asp

// * Problem solving checklist
// 1- What are the inputs & outputs.
// 2- Psuedo code //* (what are the criteria)
// 3- what are invalid inputs or empty inputs
// 4- solve it for valid inputs
// 5- Can we improve the performance.
// 6 - Can we improve the space complexity
// 7- can it be more concise
// 8- is it readable.

// * problem solving algo
// ? //////////////////////////////
// ? 1- frequency counter
// ? /////////////////////////////

// this function checks if two words have the same letters with the same frequency.
// returns true when these conditions are met
// i.e pepsi & peppsi --> have the same the letters, but not the same frequency
// i.e ppesi & peppsi --> have the same letters and the same frequency
// this functions only accepts strings
const anagram = (word1, word2) => {
  // check the type
  if (typeof word1 != "string" || typeof word2 != "string") {
    return false;
  }
  //   check the character length
  if (word1.length != word2.length) {
    return false;
  }
  //   1- create an object for each word with character frequency
  obj1 = {};
  obj2 = {};
  for (i = 0; i < word1.length; i++) {
    if (!obj1[word1[i]]) {
      obj1[word1[i]] = 1;
    } else {
      obj1[word1[i]]++;
    }
    if (!obj2[word2[i]]) {
      obj2[word2[i]] = 1;
    } else {
      obj2[word2[i]]++;
    }
  }
  //   2- compare each letter with its frequency,
  // return false as soon as one character doesnt exist or doesnt match the frequency.
  for (i = 0; i < word1.length; i++) {
    if (obj1[word1[i]] != obj2[word1[i]]) {
      return false;
    }
  }
  //   3- return true
  return true;
};

// complexity is O(n)
// console.log(anagram("a", "a"));
// ? ///////////////////////////////////
// ? 2- Multiple pointers pattern
// ? //////////////////////////////////

findPairWithZero = (arr) => {
  // define the right and left indexes
  left = 0;
  right = arr.length - 1;

  // we calculate the sum while the left index smaller than the right
  while (left < right) {
    let sum = arr[left] + arr[right];
    // if sum equals zero
    if (sum == 0) {
      return [arr[left], arr[right]];
    }
    // if the sum above 0
    if (sum > 0) {
      right--;
      // if the sum below 0
    } else {
      left++;
    }
  }
  return false;

  // return the result once the soltion found
};

// console.log(findPairWithZero([-4, -3, 0, 1, 2, 5])); // Output: [-2, 2]
// ? ///////////////////////////////////
// ? 3- Sliding Window pattern
// ? //////////////////////////////////

// ? ///////////////////////////////////
// ? 4- Divide & conquer pattern / Binary search
// ? //////////////////////////////////
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: element not found

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid; // Found target
  else if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1); // Search left
  else return binarySearch(arr, target, mid + 1, right); // Search right
}

// Test Cases
// console.log(binarySearch([1, 3, 5, 7, 9, 11, 15], 5)); // Output: 2
// console.log(binarySearch([2, 4, 6, 8, 10, 12], 7));    // Output: -1
// ? ///////////////////////////////////
// ? 4- recursion pattern
// ? //////////////////////////////////
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
    if (input[0] % 2 != 0) {
      result.push(input[0]);
    }

    // recursive call with different input
    helper(input.slice(1));
  }

  // helper function call
  helper(arr);
  // return call
  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5]));

// ? ///////////////////////////////////
// ? 5- bubble sort
// ? //////////////////////////////////
// ? ///////////////////////////////////
// ? 6- selection sort
// ? //////////////////////////////////
// ? ///////////////////////////////////
// ? 7- insertion sort
// ? //////////////////////////////////
// ! <--
// ! o(n^2)
// ! -->

// ? ///////////////////////////////////
// ? 8- merge sort
// ? //////////////////////////////////
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

// console.log(mergeSort([3, 9, 6, 1, 8, 11]));

// -------
// fizz buss fizz buzz
