/* LeetCode #116 -  Populating Next Right Pointers

https://leetcode.com/problems/populating-next-right-pointers-in-each-node

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Examples 
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]

Input: root = []
Output: []

*/

class MyQueue {
  elements = [];
  enqueue = function (e) {
    this.elements.push(e);
  }
  dequeue = function () {
    return this.elements.shift();
  }
  isEmpty = function () {
    return this.elements.length == 0;
  }
  peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }
  length = function () {
    return this.elements.length;
  }
}

//Iteration and BFS (breath first search)
//https://www.youtube.com/watch?v=KX6gz1-pjg0 - Jayati Tiwari
//https://www.youtube.com/watch?v=d46_QsxbtAw - Sai Anish
//https://www.youtube.com/watch?v=yFTr_EnlERM - Naresh Gupta 
//https://www.youtube.com/watch?v=_Vv6_RxBN94 - Happy Coding
//TC: O(N) | SC: O(N)
const connect = (root) => {
  if (root == null) return root
  let q = new MyQueue();
  q.enqueue(root)
  q.enqueue(null)
  while (!q.isEmpty()) {
    curr = q.dequeue();
    if (curr == null && q.isEmpty()) {
      return root;
    } else if (curr == null) {
      q.enqueue(null);
      continue;
    } else {
      curr.next = q.peek();
      if (curr.left != null) //is not a leaf node
        q.enqueue(curr.left)
      if (curr.right != null) //is not a leaf node
        q.enqueue(curr.right)
    }
  }
  return root

};

//Recursion and BFS (Depth first search)
//TC: O(N) | SC: O(1)
const connect2 = (root) => {
  if (root == null) {
    return root;
  }
  root.next = null;
  connectNext(root);
  return root;
};

function connectNext(root) {
  if (root == null) {
    return;
  }
  if (root.left != null) {
    root.left.next = root.right;
  }
  if (root.right != null) {
    if (root.next != null) {
      root.right.next = root.next.left;
    } else {
      root.right.next = null;
    }
  }
  connectNext(root.left);
  connectNext(root.right);
}

//Same as above just small and simpler
var connect = function (root) {
  if (!root) return root

  if (root.left) root.left.next = root.right
  if (root.right && root.next) root.right.next = root.next.left

  connect(root.left)
  connect(root.right)
  return root
};

class Node {
  constructor(val, left, right, next) {
    this.val = val
    this.left = left
    this.right = right
    this.next
  }
}

let root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)

let output = new Node(1)
output.next = null
output.left = new Node(2)
output.left.next = null
output.left.left = new Node(4)
output.left.left.next = null
output.left.right = new Node(5)
output.left.right.next = null
output.right = new Node(3)
output.right.next = null
output.right.left = new Node(6)
output.right.left.next = null
output.right.right = new Node(7)
output.right.right.next = null

let actual = connect(root);
actual = JSON.stringify(actual)
let expected = JSON.stringify(output)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
