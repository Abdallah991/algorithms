// count unique values in an array.
// we use a counter and change the sent array
// we compare the array elements since its sorted.
// if two consecutive values equal each other, dont change i but increment j.
// if values at indexes j and i are different then set array(i) to equal array(j) and increase i before and j afeter

countUniqueValues = (sortedArray) => {
  // number of unique values in sorted array
  i = 0;
  // j =1 to be able to compare at different indexes
  for (j = 1; j < sortedArray.length; j++) {
    // if the two adjecent elements are not equal
    if (sortedArray[i] !== sortedArray[j]) {
      // move i index and get the value
      // the j index will increment with the loop
      i++;
      sortedArray[i] = sortedArray[j];
    }
  }
  console.log("the i index is " + i);

  console.log("the j index is " + j);

  console.log(sortedArray);
  return i + 1;
};

console.log(countUniqueValues([0, 1, 1, 3, 4]));
