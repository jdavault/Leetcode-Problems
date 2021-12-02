/* Leetcode #35 - Search Insert Position

https://leetcode.com/problems/search-insert-position

Given a SORTED ARRAY of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
*/

//Simple, intutive, linear Search
//T:O(n), S:0(1)
const searchInsertLinear = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target)
      return i
  }
  //Handles case where index is >= num.length
  return nums.length;
};

//Binary Search Approach -- iterative so no extra space 
//https://www.youtube.com/watch?v=0A40XJH_VvE - techDose
//https://www.youtube.com/watch?v=K-RYzDZkzCI - neetCode
//TC:O(logN) | SC:0(1)
const searchInsert = (nums, target) => {
  //1. initial startIdx, endIdx
  let startIdx = 0;
  let endIdx = nums.length - 1;
  //2. Interate while startIdx<=endIdx
  while (startIdx <= endIdx) {
    //2. get the midIdx and midVal
    let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    let midValue = nums[midIdx]
    //3. if midvalue == target return midIdx
    if (target === midValue)
      return midIdx;
    //4. else move pointes left or right
    if (target > midValue)
      startIdx = midIdx + 1;
    else
      endIdx = midIdx - 1;
  }
  return startIdx;

};

//Binary Search Approach -- recursive, so uses extra space 
//TC:O(logN) | SC:0(n)
const searchInsertRecursive = (nums, target) => {
  return searchRecurse(nums, target, 0, nums.length - 1)
};

const searchRecurse = (nums, target, start, end) => {
  if (start > end) return start
  let midIdx = start + Math.floor((end - start) / 2)
  let midValue = nums[midIdx];
  if (midValue === target) return midIdx
  if (midValue > target) {
    return searchRecurse(nums, target, start, midIdx - 1)
  } else {
    return searchRecurse(nums, target, midIdx + 1, end)
  }
}

// let input = [1, 3, 5, 6, 8, 12, 22, 34]
// let target = 4
// let expected = 2

let input = [2, 5, 6, 7]
let target = 8
let expected = 4

let actual = searchInsert(input, target)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
