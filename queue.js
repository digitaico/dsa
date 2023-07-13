'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  peek() {
    return this.first;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } 
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  printQueue () {
    const array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  isEmpty() {
    return (!this.length) ? true : false;
  }
}

class QueueArray {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
    return this;
  }

  peek() {
    return this.array[0];
  }

  dequeue() {
    this.array.shift();
    return this;
  }

  printQueue () {
    return this.array;
  }
}


const myQueue = new Queue();
//console.log(myQueue.isEmpty());
myQueue.enqueue('Google');
myQueue.enqueue('Amazon');
myQueue.enqueue('Meta');
myQueue.enqueue('Microsoft');
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.printQueue());
