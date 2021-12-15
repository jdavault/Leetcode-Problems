/* LeetCode #542 - Matrix

https://leetcode.com/problems/01-matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example1
Input: mat = [[0,0,0],
              [0,1,0],
              [0,0,0]]
Output: [[0,0,0],
         [0,1,0],
         [0,0,0]]

Example2
Input: mat = [[0,0,0],
              [0,1,0],
              [1,1,1]]
Output: [[0,0,0],
         [0,1,0],
         [1,2,1]]
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
//TC: O(r*c) | SC: O(r*c)
//https://www.youtube.com/watch?v=QkWjlGxkZdI - Coding Decoded
var updateMatrix = function (mat) {
  let queue = new MyQueue()
  //POPULATE the QUEUE
  for (i = 0; i < mat.length; i++) {
    for (j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        queue.enqueue([i, j])
      } else {
        mat[i][j] = -1
      }
    }
  }
  //directions, top, bottom, right, left
  let dirs = [[0, 1], [-1, 0], [1, 0], [0, -1]]
  let length = 0;
  while (!queue.isEmpty()) {
    let size = queue.length();
    length++
    while (size-- > 0) {
      let cell = queue.dequeue();
      for (dir of dirs) {
        let r = cell[0] + dir[0];
        let c = cell[1] + dir[1];
        if (r < 0 || c < 0 || r == mat.length || c == mat[0].length || mat[r][c] != -1)
          continue;
        mat[r][c] = length;
        queue.enqueue([r, c])
      }
    }
  }
  return mat
};

//DFS
//https://www.youtube.com/watch?v=RySXom_lslY - Naresh Gupta
//https://www.youtube.com/watch?v=Ezj3VDOfd5I - Happy Coding


let input = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
let actual = updateMatrix(input);
actual = JSON.stringify(actual)
let expected = JSON.stringify([[0, 0, 0], [0, 1, 0], [1, 2, 1]])
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
