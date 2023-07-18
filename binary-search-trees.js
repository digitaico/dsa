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
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

    if(node.value == newNode.value) {
      this.insertNode(node.left, newNode);
    } else if(node.value > newNode.value) {
      // to left.
      if(!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (!node.right) {
      // right
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  lookup(value) {
    if(!this.root) {
      return this;
    } 

    if(this.root.value === value) {
      return this;
    }

    if(this.root.value > value) {
      this.lookupNode(this.root.left, value);
    } else {
      this.lookupNode(this.root.right, value);
    } 
  }

  lookupNode(node, value) {
    if(node.value === value) {
      return node.value;
    } else if(node.value < value) {
      this.lookupNode(node.left);
    } else {
      this.lookupNode(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if(!node) {
      return null;
    }

    if(value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        node = null;
      } else if(!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.removeNode(node.right, minValue);
      }
    }
    return node;
  }

  findMinValue(node) {
    if(!node.left) {
      return node.value;
    }
    return this.findMinValue(node.left);
  }

  traverse() {
    this.inOrderTraversal(this.root);
  }

  inOrderTraversal(node) {
    if(!node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

}

//      9
//   4      20
// 1   6  15   170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
console.log(tree.traverse());
tree.insert(20);
tree.insert(15);
tree.insert(170);
tree.insert(1);
tree.insert(6);
tree.remove(6);
//console.log(tree.lookup(20));
console.log(JSON.stringify(tree, null, 2));
