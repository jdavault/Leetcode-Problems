/* LeetCode #217

https://leetcode.com/problems/contains-duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Examples ...

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//Naive-brutefore approach ..
//works but will time out, not accetable by Leetcode
//TC: O(n^2) | SC:O(1)
var containsDuplicateSlow = function (nums) {
  for (i = 0; i < nums.length - 1; ++i) {
    for (j = i + 1; j < nums.length; ++j) {
      if (nums[j] == nums[i]) return true;
    }
  }
  return false;
}

//sorted "acceptable" solution 
//TC: O(nLogN) | SC:O(1)
var containsDuplicateBetter = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] == nums[i + 1]) return true;
  }
  return false;
}

//Good solution, O(N)
//TC: O(nLogN) | SC:O(1)
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}
//same as above .. different for loop
//TC: O(nLogN) | SC:O(1)
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let i = 0; i <= nums.length - 1; ++i) {
    if (seen.has(nums[i])) return true
    seen.add(nums[i])
  }
  return false
};

let nums = [2, 1, 3, 0, 1]
let actual = containsDuplicate(nums);
actual = JSON.stringify(actual)
let expected = JSON.stringify(true)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)