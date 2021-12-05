/* LeetCode #567, Permutation in String

https://leetcode.com/problems/permutation-in-string

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Examples...
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

//https://www.youtube.com/watch?v=5e3plF76dpo - Koushik
var checkInclusion33 = function (s1, s2) {

  //eidbaooo  looking for ab
  if (s1.length > s2.length || s2.length == 0) return false;
  if (s1.length == 0) return true;

  let s1len = s1.length, s2len = s2.length;
  let left = 0, right = 0;
  let s1hash = new Array(26).fill(0);
  let s2hash = new Array(26).fill(0);

  while (right < s1len) {
    s1hash[s1.charCodeAt(right) - 'a'.charCodeAt(0)] += 1;
    s2hash[s2.charCodeAt(right) - 'a'.charCodeAt(0)] += 1;
    right += 1;
  }
  right -= 1; //to point right to the end of the winod
  while (right < s2len) {
    if (arrayEquals(s1hash, s2hash)) {
      return true;
    }
    right += 1;
    if (right != s2len) s2hash[s2.charCodeAt(right) - 'a'.charCodeAt(0)] += 1;
    s2hash[s2.charCodeAt(left) - 'a'.charCodeAt(0)] -= 1;
    left += 1;
  }
  return false
}

//https://www.youtube.com/watch?v=6gRj_FH3MsA - Xavier
//https://www.youtube.com/watch?v=XFh_AoEdOTw  - TechDose

var checkInclusion = function (s1, s2) {

  if (s1.length > s2.length || s2.length == 0) return false;
  if (s1.length == 0) return true;

  let x = s1.length, y = s2.length
  let array1 = new Array(26).fill(0)
  let array2 = new Array(26).fill(0)
  for (i = 0; i < x; i++) {
    array1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    array2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (i = x; i < y; i++) {
    if (arrayEquals(array1, array2)) {
      return true;
    }
    array2[s2.charCodeAt(i - x) - 'a'.charCodeAt(0)]--;
    array2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  if (arrayEquals(array1, array2)) return true
  else return false
};

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


let string1 = "ab"
let string2 = "eidbaooo"
let expected = true
let actual = checkInclusion33(string1, string2);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
