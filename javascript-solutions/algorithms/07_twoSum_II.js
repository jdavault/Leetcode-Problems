/* Leetcode #167 - Two Sum II - Input Array Is Sorted

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.

Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.

*/

// Naive, Linear, Intutive, O(n^2) time | 0(1) space
function twoSumSlow(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target)
        return [i + 1, j + 1]
    }
  }
}

//Better solution
//TC: O(n) | SP:O(1)
//Same as blow only with Map vs object
const twoSumBetter1 = (numbers, target) => {
  const indices = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (indices.has(target - numbers[i])) {
      return [indices.get(target - numbers[i]) + 1, i + 1]
    }
    indices.set(numbers[i], i)
  }
};

//Same as above only with object instead of Map
//Map is just a more structured object
const twoSumBetter2 = (numbers, target) => {
  const indices = {}
  for (let i = 0; i < numbers.length; i++) {
    if ((target - numbers[i]) in indices) {
      return [indices[target - numbers[i]] + 1, i + 1]
    }
    indices[numbers[i]] = i
  }

};
/*
Because the array is sorted, anytime we move a pointer to the right numbers will get bigger and anytime we move a pointer to the left, numbers will get smaller

If target is greater than target that means we need to use smaller numbers in our sum and we move the right pointer to the left.

If cur is less than target that means we need to use bigger number in our sum and we move the left pointer to the right.
*/

//Optimal Soluition - two pointer
//TC: O(LogN) | SC: O(n)
//https://www.youtube.com/watch?v=sAQT4ZrUfWo - NickWhite
//https://www.youtube.com/watch?v=1ZuD-3OxXgo&t=424s - terrible WB
const twoSumOptimal = (numbers, target) => {
  let low = 0;  //a pointer
  let high = numbers.length - 1  //b pointer
  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum === target)
      return [low + 1, high + 1] //return 
    sum < target ? low++ : high--
    //if sum is too small shift lowIdx to right
    //to increase the sum
    //if sum is too big shift highIdx to the left
    //to decrease the total sum
  }
};

const array = [3, 2, 4]
const expected = [1, 2];
const target = 6
const actual = twoSum3(array, target);
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)