function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // get the pivot index
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // write swap function
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //   select the first element as the start
  var pivot = arr[start];
  //   assume the swap ndex as the start, calculated pivot element
  var swapIndex = start;

  //   loop from the element at index 1
  for (var i = start + 1; i < arr.length; i++) {
    // if the pivot bigger than the element
    if (pivot > arr[i]) {
      // increase the swap index
      swapIndex++;
      //   swap the elements
      swap(arr, swapIndex, i);
    }
  }
  //   swap the pivot with the calculated location
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(quickSort([9, 6, 2, 7, 8]));
