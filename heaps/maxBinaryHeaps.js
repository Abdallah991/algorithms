class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //   insert an element
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  //   bubble up an element from the end
  bubbleUp() {
    // get the index of last element
    let index = this.values.length - 1;
    // get the last element
    let element = this.values[index];
    // while the index is larger than zero
    while (index > 0) {
      // get the parent index
      let parentIndex = Math.floor((index - 1) / 2);
      //   get the parent
      let parent = this.values[parentIndex];
      //   if the inserted less than the parent, break from the loop
      if (element <= parent) break;
      //   swap the parent and child if child is larger
      this.values[index] = parent;
      this.values[parentIndex] = element;
      //   swap indexes
      index = parentIndex;
    }
  }

  //   get max value
  extractMax() {
    // get the max element
    let max = this.values[0];
    // get the last element
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  //   bubble down and organize the heap
  bubbleDown() {
    let element = this.values[0];
    let length = this.values.length;
    let index = 0;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild, rightChild;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap);
