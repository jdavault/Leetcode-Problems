
/* Leetcode #283. Move Zeros

https://leetcode.com/problems/move-zeroes

Given an integer array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

input: [0, 1, 0, 3, 12]
output: [1, 3, 12, 0, 0];
*/

//TC: 0(n) | SC: 0(1)
//Not IDEAL (least favorit) since we have to copy back
//to orginal
const moveZeroesB = (nums) => {
  let copy = []
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0)
      copy.push(nums[i])
    else
      count++
  }
  //fill the rest of the array with zero
  copy = [...copy, ...Array(count).fill(0)]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = copy[i]
  }
}

//Optimal, My favorite, TC: 0(n) | SC: 0(1) 
//https://www.youtube.com/watch?v=39VJV4KVyi8 -fisher
//https://www.youtube.com/watch?v=0rPuILjoVsg -terribleWB
const moveZeroes3 = function (nums) {
  for (let j = 0, lastZeroIdx = 0; lastZeroIdx < nums.length && j < nums.length; j++) {
    //j is the "explorer" or "fast" pointer
    if (nums[j] != 0) {
      let tmp = nums[lastZeroIdx] //hold 0 value increments on nonZero
      nums[lastZeroIdx] = nums[j] //lzi is no longer 0, so can advance
      lastZeroIdx++ //increment "slow / zero / anchor pointer"
      nums[j] = tmp //move zero toward the end
    }
  }
}

//Not bad .. two pointer solution
//Complexity ... T: 0(n) | S: 0(1) //Kevin Jr.
//https://www.youtube.com/watch?v=1PEncepEIoE -kevinJr
//https://www.youtube.com/watch?v=qdhLs6usobE&t=344s -AndyGala
const moveZeroes2 = (nums) => {

  let lastZeroIdx = 0 //slow / zero pointer

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0)
      nums[lastZeroIdx++] = nums[j];
  }
  //fill the rest of the array with zero
  for (let i = lastZeroIdx; i < nums.length; i++) {
    nums[i] = 0
  }

}

//Same as above but with while loop
//Complexity ... T: 0(n) | S: 0(1)
const moveZeroes = (nums) => {

  let lastNonZeroIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroIdx++] = nums[i];
    }
  }
  while (lastNonZeroIdx < nums.length) {
    nums[lastNonZeroIdx++] = 0;
  }

}


const array = [0, 1, 0, 3, 12]
const expected = [1, 3, 12, 0, 0];
let actual = moveZeroes2(array);
actual = array;
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)

