class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// * Min binary heaps
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      //   return parentIndex;
      if (element.priority > parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[index];
    while (true) {
      let swap = null;
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let rightChild, leftChild;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap != null && rightChild.priority < leftChild.priority)
        ) {
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

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("covid", 2);
ER.enqueue("glass in foot", 3);
ER.enqueue("high fever", 4);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER);
