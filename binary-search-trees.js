'use strict';

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(node.value > newNode.value) {
      // to left.
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // right
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }


  lookup(value) {

  }

  remove(value) {

  }
}

//      9
//   4      20
// 1   6  15   170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(15);
tree.insert(170);
tree.insert(1);
tree.insert(6);
console.log(JSON.stringify(tree, null, 2));
