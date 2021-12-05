/* Leetcode #36 - Valid Sudoku

https://leetcode.com/problems/valid-sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-box of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true

*/
//Intutive / Natural approach .. not the most optimal
//TC: 0(N^2) | SC:O(N^2)
//https://www.youtube.com/watch?v=TjFXEUCMqI8
var isValidSudoku3 = function (board) {
  const rows = new Map();  //adding a collection to hold sets
  const cols = new Map();
  const squares = new Map();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {

      const currVal = board[r][c];
      if (currVal == '.') continue;

      let boxIdx = Math.floor(r / 3) + "-" + Math.floor(c / 3);

      if (rows[r] && rows[r].has(currVal) ||
        cols[c] && cols[c].has(currVal) ||
        squares[boxIdx] && squares[boxIdx].has(currVal)
      ) return false;

      cols[c] ? cols[c].add(currVal) : cols[c] = new Set(currVal)
      rows[r] ? rows[r].add(currVal) : rows[r] = new Set(currVal)
      squares[boxIdx] ? squares[boxIdx].add(currVal) : squares[boxIdx] = new Set(currVal)
    }
  }
  return true
};

//Working
//N^2 traversing is not really an (tiny data set, never scales)
//but n * n the we would have to be concerned about TC and SC
//this one uses a "string trick" to avoid three hashSets
//https://www.youtube.com/watch?v=Pl7mMcBm2b8 - NickW
//TC: 0(N^2) | SC:O(N^2)
var isValidSudoku = function (board) {
  const seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currVal = board[i][j];
      if (currVal != '.') {
        if (seen.has(currVal + " found in row " + i) ||
          seen.has(currVal + " found in col " + j) ||
          seen.has(currVal + " found in box " + Math.floor(i / 3) + "-" + Math.floor(j / 3)))
          return false

        seen.add(currVal + " found in row " + i);
        seen.add(currVal + " found in col " + j);
        seen.add(currVal + " found in box " + Math.floor(i / 3) + "-" + Math.floor(j / 3));
      }
    }
  }
  return true
};


let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let expected = true
let actual = isValidSudoku(board)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
