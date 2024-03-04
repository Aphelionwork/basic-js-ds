const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
    }

  root() {
    return this.tree;
  }


  add(data) {
    const newNode = new Node(data);

    if (this.tree === null) {
      this.tree = newNode;
      return;
    }

    let currentNode = this.tree;
    while (currentNode) {

      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
      
    }
  }

  has(data) {
    let result;
    if (this.find(data)) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  find(data) {
    if (this.tree === null) {
      return;
    }

    let currentNode = this.tree;
    while (currentNode !== null){
      if (currentNode.data === data) {
        return currentNode;
      } 
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

remove(data) {
  this.tree = this.removeNode(this.tree, data);
}

removeNode(node, data) {
  if (node === null) {
      return null;
  }

  if (data < node.data) {
      node.left = this.removeNode(node.left, data);
  } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
  } else {

      if (node.left === null && node.right === null) {
          return null;
      }

      if (node.left === null) {
          return node.right;
      } else if (node.right === null) {
          return node.left;
      }

      let theSmallest = this.minFunc(node.right);
      node.data = theSmallest.data;
      node.right = this.removeNode(node.right, theSmallest.data);
  }
  return node;
}

  min() {
    const minNode = this.minFunc(this.tree);
    if (minNode) {
      return minNode.data;
    } else {
      return null;
    }
  }

  minFunc(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
  }

  max() {
    const maxNode = this.maxFunc(this.tree);
    if (maxNode) {
      return maxNode.data;
    } else {
      return null;
    }
  }

  maxFunc(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node;
  }

}
  
module.exports = {
  BinarySearchTree,
};