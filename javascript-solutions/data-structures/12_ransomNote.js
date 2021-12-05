/* Leetcode - 383 383. Ransom Note

Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Examples

Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/


var canConstruct2 = function (ransomNote, magazine) {
  let lenR = ransomNote.length;
  let list = magazine.split('');
  for (let i = 0; i < lenR; ++i) {
    let index = list.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    }
    list.splice(index, 1);
  }
  return true;
};

//TC: O(n+m) | SC: O(n)
//https://www.youtube.com/watch?v=gWqbmAS3uxg - KevinJr
var canConstruct = function (ransomNote, magazine) {
  const counts = new Map();

  //NOTE,js does not have a string.toCharArray()
  //ransomNote = ransomNote.split('');
  //magazine = magazine.split('');
  //ransomNote = [...ransomNote];
  //magazine = [...magazine];

  for (let char of [...magazine]) {//iterate charArray
    //java has count.getOrDefault(char,0) + 1, js does not so ....
    counts[char] === undefined ? counts[char] = 1 : counts[char]++
  }

  for (char of [...ransomNote]) { //iterate charArray
    //if we never return false than we can construct ransome letter
    //could also use .... if (!counts.has(char) || counts.get(char) <=0) return false
    if (counts[char] === undefined || counts[char] == 0)
      return false
    if (counts[char] > 0) counts[char]--;
  }
  return true
};

//https://www.youtube.com/watch?v=wyH7i8HmoPM - TechDose
var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  var hash = {};
  for (var i = 0; i < magazine.length; i++) {
    if (hash[magazine[i]] === undefined) hash[magazine[i]] = 1;
    else hash[magazine[i]]++
  }
  for (var j = 0; j < ransomNote.length; j++) {
    if (hash[ransomNote[j]] === undefined || hash[ransomNote[j]] == 0) return false
    else if (hash[ransomNote[j]] > 0) hash[ransomNote[j]]--;
  }
  return true
};


let ransomNote = "a", magazine = "b"
let expected = false
let actual = canConstruct(ransomNote, magazine)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)