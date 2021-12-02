
/* Leetcode #977

https://leetcode.com/problems/squares-of-a-sorted-array

Given an integer array nums sorted in non-decreasing order, return an array of the squares
of ech sorted in non-decreasing order

Examples ...

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

//Brute force
// TC: O(nlogN) | SC: O(n)
function squaresOfASortedArraySlow1(nums) {
  //1.create new array
  const newArray = []
  //2.Loop over nums, square elements, insert into new array
  for (let n in nums) {
    newArray[n] = nums[n] * nums[n]
  }
  //3.sort and return the new array
  return newArray.sort((a, b) => a - b)
}

//Better, TWO POINTER solution
//They gave us sorted data for a reason :-), use it
// T: O(n) | S: O(n)
const sortedSquares = (nums) => {
  //1. Create left, right and result indices
  //Create result object (array)
  let leftIdx = 0;
  let rightIdx = nums.length - 1
  let result = []
  let resultIdx = rightIdx;  // going from left to right
  while (leftIdx <= rightIdx) {
    //2. grab the left and right values
    let leftVal = nums[leftIdx];
    let rightVal = nums[rightIdx]
    //3. if the abs left is bigger abs left++
    if (Math.abs(leftVal) > Math.abs(rightVal)) {
      result[resultIdx] = leftVal * leftVal
      leftIdx++
    } else {
      //4. else right--
      result[resultIdx] = rightVal * rightVal
      rightIdx--
    }
    resultIdx--
  }
  return result
};

// Just like the above but uses array.unshift()
const sortedSquares2 = (nums) => {
  let leftIdx = 0;
  let rightIdx = nums.length - 1
  let result = []
  while (leftIdx <= rightIdx) {
    let leftVal = nums[leftIdx];
    let rightVal = nums[rightIdx]
    if (Math.abs(leftVal) > Math.abs(rightVal)) {
      result.unshift(leftVal * leftVal)
      leftIdx++
    } else {
      result.unshift(rightVal * rightVal)
      rightIdx--
    }
  }
  return result
};

//simple, built js library  - 
//TC: O(nLog(n)) | SC: O(1)
const squaresOfASortedArraySlow2 = a => {
  return a.map(num => num * num).sort((a, b) => a - b)
}

const array = [-4, -1, 0, 3, 10]
const expected = [0, 1, 9, 16, 100];
const actual = squaresOfASortedArray(array);
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)