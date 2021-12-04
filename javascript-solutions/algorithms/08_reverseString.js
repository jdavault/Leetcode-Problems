/* LeetCode #344 - Reverse String

https://leetcode.com/problems/reverse-string

Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

//classic swap
  let tmp = s[i]
  s[i] = s[j]
  s[j] = tmp
//js destructuring assignment swap
  [s[start], s[end]] = [s[end], s[start]]
*/

//Clean, fast .. T:0(n/2), S:0(1) 
var reverseString2 = function (s) {
  let end = s.length - 1
  for (start = 0; start < s.length / 2; start++) {
    //swap
    [s[start], s[end]] = [s[end], s[start]]
    end--
  }
  return s
};

//Cleanest, fastest .. T:0(n/2), S:0(1) 
//https://www.youtube.com/watch?v=P68JPXtFyYg -fisher
//https://www.youtube.com/watch?v=2bIxz2pTFaw -KevinJr
//https://www.youtube.com/watch?v=uRk8ZIyMQkI&t=270s -terribleWB
var reverseString = function (s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    //swap
    [s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  return s
};

const s = "Hannah"
//const s = ["H", "a", "n", "n", "a", "h"]
const expected = ["h", "a", "n", "n", "a", "H"]
const actual = reverseString3(s);
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)