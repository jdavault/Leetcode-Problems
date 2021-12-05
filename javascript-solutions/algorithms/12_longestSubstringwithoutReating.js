/* LeetCode #3 - Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

Examples ...

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

*/
//Butforce O(N^3)-- not acceptable will timeout on leetcode 
//https://www.youtube.com/watch?v=EoMlfgfUPa0 - Naresh 
var lengthOfLongestSubstring2 = function (s) {
  let longest = 0;
  let n = s.length;
  for (let i = n; i >= 0; i--) {
    for (j = 0; j + i <= n; j++) {
      let substrValue = s.substring(j, j + i)
      if (isUniqueCharString(substrValue))
        return i
    }
  }
  return 0;
}

const isUniqueCharString = (s) => {
  let set = new Set();
  s = s.split("")
  for (c of s) {
    set.add(c)
  }
  return set.size == s.length
}

//optimized O(n) -- two pointer 
//https://www.youtube.com/watch?v=EoMlfgfUPa0 - Naresh
var lengthOfLongestSubstringBest = function (s) {
  let map = new Map();
  let longest = 0, i = 0, j = 0, n = s.length;
  while (j < n) {
    if (map.has(s.charAt(j)))
      i = Math.max(map.get(s.charAt(j)), i);
    map.set(s.charAt(j), j + 1);
    longest = Math.max(longest, j - i + 1);
    j++;
  }
  return longest
}

//optimized O(2n) -- two pointer
//Naresh (https://www.youtube.com/watch?v=EoMlfgfUPa0) 
var lengthOfLongestSubstring2 = function (s) {
  let set = new Set()
  let longest = 0, i = 0, j = 0, n = s.length;
  while (i < n && j < n) {
    if (set.has(s.charAt(j))) {
      set.delete(s.charAt(i++))
    } else {
      set.add(s.charAt(j++))
      longest = Math.max(longest, j - i)
    }
  }
  return longest
}


//Sliding Widow, 
//https://www.youtube.com/watch?v=sydRChyHRxk - Andy 
var lengthOfLongestSubstring = function (s) {
  let windowStart = 0;
  let windowEnd = 0;
  let max = 0;
  const soFar = {}
  while (windowEnd < s.length) {
    let rightChar = s[windowEnd]
    soFar[rightChar] = soFar[rightChar] ? soFar[rightChar] + 1 : 1
    while (soFar[rightChar] > 1) {
      let leftChar = s[windowStart]

      if (soFar[leftChar] > 1) {
        soFar[leftChar]--
      } else {
        delete soFar[leftChar]
      }
      windowStart++
    }
    max = Math.max(max, (windowEnd - windowStart) + 1)
    windowEnd++
  }
  return max
}

//https://www.youtube.com/watch?v=3IETreEybaA - NickWhite
var lengthOfLongestSubstringBrute = function (s) {
  let set = new Set()
  let max = 0
  let a_pointer = 0, b_pointer = 0;
  let n = s.length;
  while (a_pointer < n && b_pointer < n) {
    if (!set.has(s.charAt(b_pointer))) {
      set.add(s.charAt(b_pointer++))
      max = Math.max(set.size, max)
    } else {
      set.delete(s.charAt(a_pointer++))
    }
  }
  return max
}

//AlgoExpert ... working
var lengthOfLongestSubstring3 = function (s) {
  s = s.split("")
  const lastSeen = {}
  let longest = [0, 1]
  let startIdx = 0;
  s.forEach((char, i) => {
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1)
    }
    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1]
    }
    lastSeen[char] = i
  })

  return s.slice(longest[0], longest[1]).length
}

let inputString = "clementisacap"
let expected = 8
let actual = lengthOfLongestSubstring2(inputString,);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
