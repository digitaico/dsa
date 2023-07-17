'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  printStack () {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    } 
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return (!this.length) ? true : false;
  }
}

class StackArray {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  pop() {
    this.array.pop();
    return this;
  }

  printStack () {
    return this.array;
  }
}


const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Meta');
myStack.push('Microsoft');
console.log(myStack.isEmpty());
//console.log(myStack.peek());
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.printStack());
