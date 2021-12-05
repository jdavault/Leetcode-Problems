
/* Leetcode #118 - Pascal's Triangle

https://leetcode.com/problems/pascals-triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Examples ....

Input: numRows = 5
Output: [    [1],
            [1,1],
           [1,2,1],
          [1,3,3,1],
         [1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]
*/
//TC: O(N^2) | SP:O(N) ... Most Optimized
//https://www.youtube.com/watch?v=nPVEaB3AjUM -- Neetcode
const generate3 = (numRows) => {
  let result = [[1]];
  for (let i = 0; i <= numRows - 1; i++) {
    //prevRow is a tmp variable, the [0] just make the math easier
    let prevRow = [0] + result[result.length - 1] + [0]
    let row = []
    for (let j = 0; j <= result[result.length - 1].length + 1; j++) {
      row.push(prevRow[j] + prevRow[j + 1]); //reset this value
    }
    result.push([...row])
  }
  return result
}


//https://www.youtube.com/watch?v=TXd5lfP3Gac - FisherCoding
const generate2 = (numRows) => {
  let result = [];
  let row = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = row.length - 1; j >= 1; j--) {
      row[j] = row[j] + row[j - 1]; //reset this value
    }
    row.push(1)
    result.push([...row])
  }
  return result
}

//https://www.youtube.com/watch?v=7pOzP9m_bX8 -- terribleWB
//https://www.youtube.com/watch?v=LQUZYf-hr6M -- AndyG
//https://www.youtube.com/watch?v=icoql2WKmbA -- NickW
const generate = (numRows) => {
  let triangle = [];

  if (numRows === 0) return triangle
  // Base case; first row is always [1].
  triangle.push([1]); //add row one to triangle output

  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    let prevRow = triangle[rowNum - 1];
    let row = [];

    // The first row element is always 1.
    row.push(1);

    // Each triangle element (other than the first and last of each row)
    // is equal to the sum of the elements above-and-to-the-left and
    // above-and-to-the-right.
    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    // The last row element is always 1.
    row.push(1);

    triangle.push(row);
  }

  return triangle;

}


let numRows = 5
let expected = [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]]
let actual = generate(numRows)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
