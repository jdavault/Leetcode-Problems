/* LeetCode #994 - Rotting Oranges

https://leetcode.com/problems/rotting-oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
BFS
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
//https://www.youtube.com/watch?v=TzoDDOj60zE - Kevin Jr.
//https://www.youtube.com/watch?v=CxrnOTUlNJE - Tech Dose
//https://www.youtube.com/watch?v=XiUmnWXh-9E - Knowledge Center
//https://www.youtube.com/watch?v=0mrW2yEpmU0 - Naresh Gupta
//https://www.youtube.com/watch?v=bDCRo4Lx1No - Happy Coding

//TC: O(N) | SC: O(N)
var orangesRotting = function (grid) {

  //get the initial state of the board
  let fresh = new Set();
  let rotten = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        fresh.add("" + i + j)
      } else if (grid[i][j] == 2) {
        rotten.add("" + i + j)
      }
    }
  }

  let minutes = 0;
  //Down left Right Up
  let dirs = [[0, 1], [-1, 0], [1, 0], [0, -1]]
  while (fresh.size > 0) {
    let infected = new Set();
    //let rottenStrArray = rotten.split("")
    for (s of rotten) {
      let i = s.charCodeAt(0) - '0'.charCodeAt(0);
      let j = s.charCodeAt(1) - '0'.charCodeAt(0);
      for (let dir of dirs) {
        let nextI = i + dir[0];
        let nextJ = j + dir[1];
        if (fresh.has("" + nextI + nextJ)) {
          fresh.delete("" + nextI + nextJ)
          infected.add("" + nextI + nextJ)
        }
      }
    }
    if (infected.size == 0) {
      return -1
    }

    rotten = infected;
    minutes++
  }
  return minutes;
}

let input = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
let actual = orangesRotting(input);
actual = JSON.stringify(actual)
let expected = JSON.stringify(4)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)