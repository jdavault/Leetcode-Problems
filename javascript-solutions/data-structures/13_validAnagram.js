/* Leetcode #242 - Valid Anagram

https://leetcode.com/problems/valid-anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Examples

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

//Hash table 
//TC: O(n) | SC:O(1)
//https://www.youtube.com/watch?v=oHwDqfz1LGw&t=10s - KevinJr
var isAnagram3 = function (s, t) {
  if (s.length != t.length)
    return false;

  let charCount = Array(26).fill(0)
  for (i = 0; i < s.length; i++) {
    let sVal = s.charCodeAt(i) - 'a'.charCodeAt(0);
    let tVal = t.charCodeAt(i) - 'a'.charCodeAt(0);;
    charCount[sVal]++
    charCount[tVal]--
  }

  for (let count of charCount) {
    if (count != 0) return false
  }
  return true;
}


//TC: O(m+n) | SC: 0(n)working
//https://www.youtube.com/watch?v=FMkueJAQ2pE -- TerribleWB
var isAnagram2 = function (s, t) {
  if (s.length != t.length) return false;
  let charCount = {};

  for (let letter of s) {
    charCount[letter] ? charCount[letter]++ : charCount[letter] = 1
  }
  for (let letter of t) {
    if (charCount[letter] == undefined ||
      charCount[letter] < 1) return false;

    charCount[letter]--
  }
  return true;
}

//Simple Sorting Approach, acceptable
//TC: O(nLogN) | SC: O(n)
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const str1 = [...s];  //or s.split("")
  const str2 = [...t];  //or s.split("")
  str1.sort();  //numbers need to be sorted using (a,b=>a-b)
  str2.sort();
  let test2 = JSON.stringify(str1) === JSON.stringify(str2)
  return test2;
};
//Addtional Info ..
//https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript

let s = "anagram"
let t = "nagaram"
let expected = true
let actual = isAnagram3(s, t)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)

// Warn if overriding existing method
if (Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    }
    else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });
