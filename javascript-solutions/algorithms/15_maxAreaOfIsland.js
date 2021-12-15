/* LeetCode #695 - Max Area Of Island

https://leetcode.com/problems/max-area-of-island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1
Input: grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4 - directionally.

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

*/

//https://www.youtube.com/watch?v=Us6LBYBVko4 - NickW
//Not fan of this one .. he use an extra matrix but not needed
//TC:O(R*C) | SC: O(R*C)
let seen = [];
const maxAreaOfIsland = (grid) => {
  let maxArea = 0;
  let rows = grid.length;
  let columns = grid[0].length;
  //prepopulate array to keep track of what has been seee
  seen = Array(rows).fill().map(_ => Array(columns).fill(1))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] == 1)
        maxArea = Math.max(maxArea, dfs(grid, i, j));
    }
  }
  return maxArea;
};

const dfs = (grid, row, col) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length ||
    seen[row][col] != 1 || (grid[row][col] === 0)) return 0;

  seen[row][col] = 0;
  //                      TOP                        LEFT                     DOWN                       RIGHT                  
  return 1 + dfs(grid, row - 1, col) + dfs(grid, row, col - 1) + dfs(grid, row + 1, col) + dfs(grid, row, col + 1)
}


//https://www.youtube.com/watch?v=W8VuDt0eb5c - KevinJr
//https://www.youtube.com/watch?v=umcgWkAR2Dc - CodingDecoded
//TC:O(R*C) | SC: O(R*C)
const maxAreaOfIsland2 = (grid) => {
  let maxArea = 0;
  let rowLength = grid.length;
  let colLength = grid[0].length;
  for (i = 0; i < rowLength; i++) {
    for (j = 0; j < colLength; j++) {
      //visit dfs only if we hit an island
      if (grid[i][j] == 1) {
        maxArea = Math.max(maxArea, dfs2(grid, i, j))
      }
    }
  }
  return maxArea
};

const dfs2 = (grid, row, col) => {
  //Are we in bounds and do we have a "1" (ie. an Island) if not return 0
  // above-grid OR below-grid         OR left-of-grid OR right-of-grid              OR not an islands 
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == 0) return 0;

  //avoid double-counting, flip to zero
  grid[row][col] = 0
  let count = 1;  //add the one we just flipped
  //traverse neighbors
  count += dfs2(grid, row - 1, col); //TOP
  count += dfs2(grid, row + 1, col); //DOWN
  count += dfs2(grid, row, col - 1); //LEFT
  count += dfs2(grid, row, col + 1); //RIGHT
  return count;
  //Same as above example ......
  //return 1 + dfs(grid, row - 1, col) + dfs(grid, row, col - 1) + dfs(grid, row + 1, col) + dfs(grid, row, col + 1)

}

//JUST LIKE THE ONE ABOVE BUT but with a smaller recursive "closure type" function ... 
//TC:O(R*C) | SC: O(R*C)
const maxAreaOfIsland3 = (grid) => {
  let maxArea = 0;
  let rowLength = grid.length;
  let colLength = grid[0].length;
  //dfs internal function, can read grid-row-len and grid-col-len from above
  const dfs3 = (row, col) => {
    if (row < 0 || col < 0 || row >= rowLength || col >= colLength || !grid[row][col])
      return 0
    grid[row][col] = false
    //                TOP                  LEFT               DOWN                RIGHT                  
    return 1 + dfs3(row - 1, col) + dfs3(row, col - 1) + dfs3(row + 1, col) + dfs3(row, col + 1)
  }

  for (let i = 0; i < rowLength; i++)
    for (let j = 0; j < colLength; j++)
      if (grid[i][j])
        maxArea = Math.max(maxArea, dfs3(i, j))
  return maxArea
}



let inputGrid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
let expected = 6
let actual = maxAreaOfIsland(inputGrid);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
