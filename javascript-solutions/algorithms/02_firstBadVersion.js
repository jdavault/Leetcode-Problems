/* Leetcode #278 - First Bad Version

https://leetcode.com/problems/first-bad-version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Input: n = 5, bad = 4
Output: 4

start = 17 
end = 35

(start + end)/2    0 + 35 / 2 = 17
(end - start)/2    35 - 0 / 2 = 9

*/

//Works but will not fly, Time Limit Exceeded
//Simple, intutive, Linear Search, 
//TC:O(n) | SC:0(1)
const solution = (isBadVersion) => {
  return function (n) {
    for (i = 0; i < n; i++) {
      if (isBadVersion(i))
        return i
    }
    //Handles case where index is >= num.length
    return n;
  }
};

//TC: O(logN) | SC: O(1)
const solution = (isBadVersion) => {
  return function (n) {
    //1. init strt and end indices
    let startIdx = 0;
    let endIdx = n
    //2. Iterate startIdx <= endIdx
    while (startIdx <= endIdx) {
      //3. Def midIdx
      let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
      //4. if isBad endIdx = midIdx -1
      // (similar to target in or < mid)
      if (isBadVersion(midIdx)) endIdx = midIdx - 1
      //else startIdx = midIdx + 1
      else startIdx = midIdx + 1
    };
    return startIdx;
  };
};

const isBadVersion = (n) => {
  if (n === 1) return true
  if (n === 3) return false
  if (n === 4) return true
  if (n === 5) return true
  return true
}

let input = [-1, 0, 3, 5, 9, 12]
let expected = 4
let fn = solution(isBadVersion)
let actual = fn(5)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)
