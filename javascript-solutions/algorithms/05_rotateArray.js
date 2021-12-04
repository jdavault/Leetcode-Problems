
/* Leetcode# 189 - Rotate Array

https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, 
where k is non-negative.

Examples ...

Input:  [1,2,3,4,5,6,7]
k = 3
Output: [5,6,7,1,2,3,4]

Explanations:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

const array = [1, 2, 3, 4, 5, 6, 7]
k=3
*/

//Naive, intutiive approach, works but will timeout on leetcode
//TC: O(N*K) | SC: O(1)
//https://www.youtube.com/watch?v=lTHTR_jsqAQ 
const rotateBruteForce = (nums, k) => {
  let len = nums.length
  k %= len;
  for (i = 0; i < k; i++) {
    let previous = nums[len - 1]; //last index
    for (j = 0; j < len; j++) {
      //swap
      let temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
}

//Very similar to the one above -- NOT A FAN OF THIS CUMBERSOME APPROACH
//TC: O(N*K) | SC: O(N)
//Optimized but not for space
const rotateAnotherAccetable = (nums, k) => {
  let len = nums.length
  k = k % len;
  let count = 0;
  let startIdx = 0;
  while (count < len) {
    //init prev idx and prev value
    let prevIdx = startIdx;
    let prevVal = nums[startIdx];
    do {
      let nextIdx = (prevIdx + k) % len;
      let nextVal = nums[nextIdx];
      nums[nextIdx] = prevVal;
      //reinit prev idx and value
      prevIdx = nextIdx;
      prevVal = nextVal;
      count++;
    } while (startIdx != prevIdx);
    startIdx++
  }
}

//Better, acceptable
//TC: O(N) | SC: O(N)
//Optimized but not for space
//https://www.youtube.com/watch?v=lTHTR_jsqAQ
const rotateBetter = (nums, k) => {
  let len = nums.length
  let copy = []
  for (i = 0; i < len; i++) {
    copy[(i + k) % len] = nums[i]  //We add the % len so it will wrap
  }
  //there is no return value so we have to use nums
  for (i = 0; i < len; i++) {
    nums[i] = copy[i]
  }
}

//"THE TRICK" - don't question it
//[1,2,3,4,5,6,7] => [7,6,5,4,3,2,1] => [5,6,7,1,2,3,4]
//TC:0(n) | SC:O(1)  //This solution is optimized for space
//https://www.youtube.com/watch?v=lTHTR_jsqAQ (3:00min) -- FisherCoding
//https://www.youtube.com/watch?v=gmu0RA5_zxs - nick white
const rotateAlsoVeryGood = (nums, k) => {
  let len = nums.length
  k %= len
  reverse(nums, 0, len - 1) //reversing all number
  reverse(nums, 0, k - 1); // reversing first k numbers
  reverse(nums, k, len - 1) // reversing last k to end numbers
}

const reverse = (nums, start, end) => {
  while (start < end) {
    //native javascript
    [nums[start], nums[end]] = [nums[end], nums[start]]
    /* classic way
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    */
    start++
    end--
  }
}

const array = [1, 2, 3, 4, 5, 6]
const expected = [5, 6, 1, 2, 3, 4]
const k = 2
rotateBetter(array, k);
const actual = array
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)