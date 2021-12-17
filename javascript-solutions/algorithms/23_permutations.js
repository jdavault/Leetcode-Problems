/*Leetcode #46 - Permutations

https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Examples...

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Input: nums = [1]
Output: [[1]]
*/

//https://www.youtube.com/watch?v=s7AvT7cGdSo - NeetCode
//Not working
var permute = function (nums) {
  let result = [];

  if (nums.length == 1) return [...nums]

  for (let i = 0; i < nums.length; i++) {
    let n = nums.shift()
    let perms = permute(nums)
    let tmp = []
    for (let perm of perms) {
      tmp.push(perm)
      perm.push(n)
    }
    result.push(...perms)
    nums.push(n)
  }
  return result;
};

//https://www.youtube.com/watch?v=4FdPoW4Qzb4 - Andy Gala
var permute2 = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    //base case
    if (i === nums.length) {
      result.push(nums.slice())
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  dfs(0, nums);
  return result;
};



let nums = [1, 2, 3]
let expected =
  [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

let actual = permute(nums)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${JSON.stringify(expected)} | Actual: ${JSON.stringify(actual)}`)