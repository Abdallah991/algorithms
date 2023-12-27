// count unique values in an array.
// we use a counter and change the sent array
// we compare the array elements since its sorted.
// if two consecutive values equal each other, dont change i but increment j.
// if values at indexes j and i are different then set array(i) to equal array(j) and increase i before and j afeter

findUniqueValues = (sortedArray) => {
  // number of unique values in sorted array
  i = 0;
  for (var j=1; j < sortedArray.length; j++){
    // check if element at i doesnt equal element at index j
    if (sortedArray[i] != sortedArray[j]) {
      // increase the number of elements
      i++;
      // add the element to the beginning of the array
      sortedArray[i] = sortedArray[j];
    }
  }
  // return the unique array
  // add i+1 so we accoun for the start from zero
  return sortedArray.slice(0,i+1);
};

console.log(findUniqueValues([0, 1, 1, 3, 4]));
