// ? Given an n x n array, return the array elements arranged from outermost elements to the middle element,
// ?traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// -----------
// -----------
function snail(array) {
  let result = [];

  while (array.length) {
    // traverse the first row
    result.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      // traverse the last column
      result.push(array[i].pop());
    }
    // traverse last row from right to top
    if (array.length > 0) {
      result.push(...array.pop().reverse());
    }
    // traverse up to the first sub array through first elements
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length > 0) {
        result.push(array[i].shift());
      }
    }
  }
  console.log(result);
  return result;
}

// * check problem
let array = [
  [1, 2, 3, 4],
  [8, 9, 4, 5],
  [7, 6, 5, 6],
  [7, 6, 5, 6],
];
snail(array); //[1,2,3,4,5,6,7,8,9]
