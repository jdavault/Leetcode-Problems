/* LeetCode #704 - Binary Search

https://leetcode.com/problems/binary-search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a 
function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Examples...

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/
//TC: O(LogN) | SP: O(n)
var search = function (nums, target) {
  let startIdx = 0
  let endIdx = nums.length - 1
  return searchRecurse(nums, target, startIdx, endIdx);
}

const searchRecurse = (nums, target, startIdx, endIdx) => {
  if (startIdx > endIdx) return -1

  const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2)
  const midValue = nums[midIdx];
  if (target === midValue) return midIdx
  if (target > midValue)
    return searchRecurse(nums, target, midIdx + 1, endIdx)
  else
    return searchRecurse(nums, target, startIdx, midIdx - 1)
}

//TC: O(LogN) | SP: O(1)
const binarySearch = (nums, target) => {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    //FASTER, prevents overflow at very large inputs
    const midIdx = start + Math.floor((end - start) / 2);
    //const midIdx = Math.floor((start + end) / 2);
    //const midIdx = Math.parseInt((start + end) / 2);
    const midValue = nums[midIdx];
    if (target === midValue) {
      return midIdx;
    } else if (target > midValue) {
      start = midIdx + 1;  // continue to search on the right
    } else {
      end = midIdx - 1; //continue to search on the left
    }
  }
  return -1
}

let input = [-1, 0, 3, 5, 9, 12, 15, 17, 23, 44, 97, 103, 200, 207]
let target = 97
let expected = 10
let actual = search(input, target)

const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
