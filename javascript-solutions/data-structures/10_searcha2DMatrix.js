/* Leetcode ß#74 - Search a 2D Matrix

https://leetcode.com/problems/search-a-2d-matrix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Examples ...

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

// Binary Search based approach
//https://www.youtube.com/watch?v=eT0UqrYuqbg - NickW
//TC: O(log(mn)) | SC: O(1)
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  if (rows == 0) return false;
  let cols = matrix[0].length;
  let left = 0
  let right = rows * cols - 1;
  while (left <= right) {
    //avoid integer overlow
    let midIdx = left + Math.floor((right - left) / 2);
    let row = Math.floor(midIdx / cols)
    let col = Math.floor(midIdx % cols)
    let midVal = matrix[row][col];
    if (target == midVal)
      return true;
    else {
      if (target < midVal)
        right = midIdx - 1;
      else
        left = midIdx + 1;
    }
  }
  return false;
};
//iterative without binary search, uses pointers
//TC: O(M+N) | SC: O(1)
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0 || matrix == null)
    return false;
  let row = 0
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;

}

let input = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
let target = 3
let expected = true
let actual = searchMatrix(input, target)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)