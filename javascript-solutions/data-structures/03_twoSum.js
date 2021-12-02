/*Leetcode #1 Two Sum

https://leetcode.com/problems/two-sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples..

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//Approach 1 -- Brute Force, not acceptable will timeout
//TimeComplexity: O(n^2), Space Complexity: 0(1)
var twoSum4 = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return null;
};

//Approach 2, Better uses space to improve speed
//TimeComplexity: O(n), Space Complexity: 0(n)
const twoSum1 = (nums, target) => {
  let numSeen = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (complement in numSeen) {
      return [numSeen[complement], i]
    }
    numSeen[num] = i
  }
};

//Approach 3, same as approach 2 but uses Map object instead of simple object
//Same TimeComplexity and Space Complexity
const twoSum2 = (nums, target) => {
  let numSeen = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (numSeen.has(complement)) {
      return [numSeen.get(complement), i]
    }
    numSeen.set(num, i)
  }
};

//Creative version...not a fan actually
//TC: O(2n) | SC: O(n)
const twoSum = (nums, target) => {
  const seen = {};
  nums.forEach((item, i) => {
    seen[item] = i
  });

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let idx = target - num
    if (seen[idx] !== undefined && seen[idx] !== i) {
      return [i, seen[idx]]
    }
  }
};

let input = [2, 7, 11, 15]
let target = 9
let expected = [0, 1]
let actual = twoSum1(input, target)
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
