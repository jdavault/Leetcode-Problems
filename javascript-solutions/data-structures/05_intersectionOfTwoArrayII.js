/*Leetcode #350 - Intersection of Two Arrays II

https://leetcode.com/problems/intersection-of-two-arrays-ii

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Examples ...

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

PLAN ....
Sort both arrays (assuming they are not sorted) and use two pointers to find common numbers in a single scan.
*/

//TC: O(n + m) | SC: O(min(n or m))
//https://www.youtube.com/watch?v=lKuK69-hMcc -fisher
const intersect1 = (nums1, nums2) => {
  //make sure nums1 is shorter array
  if (nums1.length > nums2.length) {
    return intersect1(nums2, nums1)
  }
  //go through shorter array, create a frequency MAP
  let map = new Map();
  for (num of nums1) {
    //java has map.getOrDefault .. JS doesn't so ....
    let value = (map.get(num) ? map.get(num) : 0) + 1
    map.set(num, value)
  }
  //go through longer array and find the intersects, decrement the map
  let list = []
  for (num of nums2) {
    let count = map.get(num) ? map.get(num) : 0
    if (count > 0) {
      list.push(num)
      map.set(num, count - 1)
    }
  }
  return list
}

//Two pointer technique
//TC: O(nlogn) | SC: O(1)
const intersect2 = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0, k = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      ++i;
    } else if (nums1[i] > nums2[j]) {
      ++j;
    } else {
      nums1[k++] = nums1[i++];
      ++j;
    }
  }
  //Return first k elements of nums1
  return nums1.slice(0, k);
};

//https://www.youtube.com/watch?v=lKuK69-hMcc -fisher  (2nd half .. 8:32)
//https://www.youtube.com/watch?v=b6Cx6wqIxIY - superlazy
//TC: O(nlogn) | SC: O(1)
const intersect3 = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0, k = 0;
  let list = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++
    } else { //equal
      list.push(nums1[i])
      i++;
      j++;
      k++;  //fishere did a forloop( but I like this approach better)
    }
  }
  //Return first k elements of nums1
  return list.slice(0, k);
};

let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 5]
let expected = [4, 9, 5]
let actual = intersect1(nums1, nums2)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)

