/* Leetcode #566 - Reshape the Matrix

https://leetcode.com/problems/reshape-the-matrix/

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

class Queue {
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

//T: O(n*n) | S: O(n)
const matrixReshapeWorking = (mat, r, c) => {
  let sol = [];
  if (r * c !== nums.length * nums[0].length) return nums;
  nums = nums.flat();
  for (let i = 0, k = 0; i < r; i++) {
    let temp = [];
    for (let j = 0; j < c; j++) {
      temp.push(nums[k]);
      k++;
    }
    sol.push(temp);
  }
  return sol;
};

//T: O(n*n) | S: O(n) - WORKING
//https://iamketan.wordpress.com/2020/12/19/566-reshape-the-matrix-leetcode/
//https://github.com/jzhangnu/Leetcode-JS-Solutions/issues/135
const matrixReshapeAlsoWorking = function (nums, r, c) {
  let count = nums.length * nums[0].length;
  if (count !== r * c) return nums

  let arr = [], res = [], idx = 0;
  for (let v of nums) {
    arr.push(...v);
  }

  for (let i = 0; i < r; i++) {
    res.push([])
    for (let j = 0; j < c; j++) {
      res[i][j] = arr[idx];
      idx++;
    }
  }

  return res
};
const matrixReshapeAlsoWorking2 = function (nums, r, c) {
  let x = nums.length;
  let y = nums[0].length;
  let arr = []
  let ret = []
  if (x * y === r * c) {
    for (i = 0; i < x; i++) {
      arr = arr.concat(nums[i])
    }
    for (i = 0; i < r; i++) {
      ret.push([]);
      for (j = 0; j < c; j++) {
        ret[i][j] = arr[i * c + j]
      }
    }
    return ret
  }
  else
    return nums
}

//https://www.youtube.com/watch?v=O7UHxUwgNG4 -- Coding Decoded
//https://www.youtube.com/watch?v=wCdNh9oThqk - NickWhite
//Not working, same as the other three fails on  4,1
const maxtrixReshapeNick = (nums, r, c) => {
  let rows = nums.length
  let columns = nums[0].length

  //can't be equally reshaped
  if ((rows * columns) != (r * c)) return nums

  let output_arr = Array(r).fill().map(_ => Array(c).fill(false))
  //let output_arr = Array(r).fill(Array(c).fill(0)); incorrect
  let row_num = 0;
  let col_num = 0
  //Basic Traversal of a 2D array
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      output_arr[row_num][col_num] = nums[i][j];
      col_num++ //fill in the cols first
      if (col_num == c) {
        col_num = 0;
        row_num++; // then goto next row
      }
    }
  }
  return output_arr;
}

//Not working
const maxtrixReshape4 = (mat, r, c) => {
  //let res = Array(r).fill(Array(c).fill(0)); doesn't work correctly
  let res = Array(r).fill().map(_ => Array(c).fill(false))
  if (mat.length == 0 || r * c != mat.length * mat[0].length)
    return mat;
  let rows = 0, cols = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      res[rows][cols] = mat[i][j];
      cols++;
      if (cols == c) {
        rows++;
        cols = 0;
      }
    }
  }
  return res;

}
//Uses Queue
const matrixReshape3 = (mat, r, c) => {
  let rows = nums.length
  let columns = nums[0].length
  if ((rows * columns) != (r * c)) return nums

  let res = Array(r).fill().map(_ => Array(c).fill(false))
  if (mat.length == 0 || r * c != mat.length * mat[0].length)
    return mat;
  let queue = new Queue();
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      queue.enqueue(mat[i][j]);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let value = queue.dequeue();
      res[i][j] = value
    }
  }
  return res;
}

let mat = [[1, 2], [3, 4]]
let r = 4, c = 1
let expected = [[1], [2], [3], [4]]
let actual = maxtrixReshapeNick(mat, r, c)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)


