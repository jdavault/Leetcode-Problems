/* Leetcode #88. Merge Sorted Array

https://leetcode.com/problems/merge-sorted-array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the p1 m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Examples...

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/

//same as my favorit but defin's fVal and sVal
//TC: O(n), SC: O(n)
const merge1 = (nums1, m, nums2, n) => {
  let p1 = m - 1; //last pointer
  let p2 = n - 1; //last pointer
  let p3 = m + n - 1; //len of array
  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p3] = nums1[p1--];
    } else {
      nums1[p3] = nums2[p2--];
    }
    p3--;
  }
};

//Approach 2: Optimized approach using 
// THREE POINTER SOLUTION
//TC: O(n), SC: O(n)
//https://www.youtube.com/watch?v=YXOBpf75R0Y - TWB
const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1; //nums1 last idx
  let p2 = n - 1; //nums2 last idx
  for (let p3 = m + n - 1; p3 >= 0; p3--) {
    if (p2 < 0) break; //guard clause /?p1 >= 0 &&
    if (nums1[p1] > nums2[p2]) {
      nums1[p3] = nums1[p1--];
    } else {
      nums1[p3] = nums2[p2--];
    }
  }
};

//Approach 3: Intutive / naive solution
//TC: O(nLogn) | SC: O(n)
//ADD 2nd array to the end and SORT, simple
const mergeSimple = (nums1, m, nums2, n) => {
  for (i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};


let nums1 = [2, 5, 6], m = 3
let nums2 = [1, 2, 3, 4, 0, 0], n = 4
let expected = [1, 2, 2, 3, 4, 5, 6]
merge(nums1, m, nums2, n)
let actual = nums1
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)

//https://www.youtube.com/watch?v=C4oBXLr3zos (kind of)
//https://www.youtube.com/watch?v=YXOBpf75R0Y (perfect)

