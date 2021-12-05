/* Leetcode - 387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Examples ..

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

//TC: O(N) | SC: 0(1)
//https://www.youtube.com/watch?v=21LDcomZ1as - TerribleWB
var firstUniqChar5 = function (s) {
  let frequencies = new Map();
  let n = s.length;
  let result = -1
  // build hash map : character and how often it appears
  for (let char of s) {
    if (frequencies[char] === undefined) frequencies[char] = 1
    else frequencies[char]++
  }

  // find the index
  for (let i = 0; i < n; i++) {
    let char = s.charAt(i)
    if (frequencies[char] === 1) return i

  }
  return result;
}

//https://www.youtube.com/watch?v=ReUGo6fZafc - TechDose
//TC: O(N) | SC: 0(1)
var firstUniqChar2 = (s) => {
  let count = Array(26).fill(0)
  let n = s.length;
  //store frequencie
  for (let i = 0; i < n; i++) {
    let index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    count[index]++;
  }

  // find the index of unique == 1
  for (let i = 0; i < n; i++) {
    let index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (count[index] == 1) {
      return i;
    }

  }
  return -1;
}

//Same as above but uses map instead of ARRAY
//TC: O(N) | SC: 0(1)
var firstUniqChar3 = function (s) {
  let count = new Map();
  let n = s.length;
  // build hash map : character and how often it appears
  for (let i = 0; i < n; i++) {
    let idx = s.charAt(i);
    let value = count.get(idx) ? count.get(idx) : 0
    count.set(idx, value + 1);
  }

  // find the index
  for (let i = 0; i < n; i++) {
    if (count.get(s.charAt(i)) == 1)
      return i;
  }
  return -1;

}

let string = "leetcode"
let expected = 0
let actual = firstUniqChar3(string)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)