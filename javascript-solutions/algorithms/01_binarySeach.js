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
//Both of these are the so called "Pre-Processing template style"
//There are also twot other 
//TC: O(LogN) | SP: O(n)
var search = function (nums, target) {
  let startIdx = 0
  let endIdx = nums.length - 1
  return searchRecurse(nums, target, startIdx, endIdx);
}

const searchRecurse = (nums, target, startIdx, endIdx) => {
  if (startIdx > endIdx) return -1

  const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2)
  const midVal = nums[midIdx];
  if (target === midVal) return midIdx
  if (target > midVal)
    return searchRecurse(nums, target, midIdx + 1, endIdx)
  else
    return searchRecurse(nums, target, startIdx, midIdx - 1)
}

//TC: O(LogN) | SP: O(1)
const binarySearch = (nums, target) => {
  let startIdx = 0
  let endIdx = nums.length - 1

  while (startIdx <= endIdx) {
    //FASTER, prevents overflow at very large inputs
    const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    //const midIdx = Math.floor((start + end) / 2);
    //const midIdx = Math.parseInt((start + end) / 2);
    const midVal = nums[midIdx];
    if (target === midVal)
      return midIdx;
    if (target > midVal)
      startIdx = midIdx + 1;  // continue to search on the right, discard left
    else
      endIdx = midIdx - 1; //continue to search on the left, discard right

  }
  return -1
}

let input = [-1, 0, 3, 5, 9, 12, 15, 17, 23, 44, 97, 103, 200, 207]
let target = 97
let expected = 10
let actual = search(input, target)

const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
