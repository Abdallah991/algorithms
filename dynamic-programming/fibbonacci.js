// * saving results of expensive calls to improve performance
// * memoization

// add memo to save the cached previous calls
function fibbonacci(sequence, memo = []) {
  // if data exist return it
  if (memo[sequence] !== undefined) return memo[sequence];
  //   base case
  if (sequence <= 2) return 1;
  //   pass the memo with recursive call
  var result = fibbonacci(sequence - 1, memo) + fibbonacci(sequence - 2, memo);
  //   cache previous calls
  memo[sequence] = result;
  //   return result
  return result;
}

console.log(fibbonacci(70));
