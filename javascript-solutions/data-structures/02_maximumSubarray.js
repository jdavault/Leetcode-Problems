/* LeetCode #53.  Maximum Subarray

https://leetcode.com/problems/maximum-subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
Examples ...

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23

*/

//TC:O(n) | SP:O(1)
var maxSubArrayBrute = (nums) => {
  let max = nums[0];  //maxsum so far
  let sum = 0;
  for (let num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(max, sum);
  }
  return max;
}

//TC: O(n^2) | SP: O(n)
//Approach 1: Brute force, will work, but Time Limit Exceeded -- least favorit
var maxSubArrayBrute = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

//TC: O(n) | SP: O(1)
//second favorite
//Approach 2: Clean Linear approach
var maxSubArrayDecent = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let num of nums) {
    //sum += num;
    //if (sum < num) sum = num;
    //or just use Math.max(num, sum + num)....
    sum = Math.max(num, sum + num);
    max = Math.max(max, sum);
  }
  return max;
}

//TC: O(n) | SP: O(1) - favorite
//Approach 3: Dynamic Programming, Kadane's Algorithm
//https://www.youtube.com/watch?v=jnoVtCKECmQ 
var maxSubArray = (nums) => {
  let max = nums[0];
  let sum = max;
  //Need to start at second index
  for (i = 1; i < nums.length; i++) {
    let num = nums[i];
    sum = Math.max(num, sum + num);
    max = Math.max(max, sum);
  }
  return max;
};


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let actual = maxSubArrayBrute(nums);
actual = JSON.stringify(actual)
let expected = JSON.stringify(6)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)