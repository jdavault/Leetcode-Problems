
/* LeetCode #557 - Reverse Words in a String III

https://leetcode.com/problems/reverse-words-in-a-string-iii/

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 
Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:
 
Input: s = "God Ding"
Output: "doG gniD"
*/

//Optimized, TC: O(n), SC: O(n) uses less space
//https://www.youtube.com/watch?v=0SSVtnC_5-k -Kun's dev !!!
var reverseWords2 = function (s) {
  let tokens = s.split(" ") //turn string of word array into array
  for (let i = 0; i < tokens.length; i++) {
    let chars = tokens[i].split("") //create char array
    reverseArray(chars);  //classic reverse
    //chars.reverse()  //js,built in reverse method
    tokens[i] = chars.join("") //turns char array into charaters
  }
  return tokens.join(" ") //conver word array into string of delimited words
};

//Optimized, TC: O(n), SC: O(2n)
//same as above just uses indices and result array
var reverseWords = function (s) {
  // step 1: tokenize s into words
  let tokens = s.split(" ")
  let result = []
  // step 2: reverse each word
  for (item of tokens) {
    let chars = item.split("")
    //let revchars = reverseArray(chars);
    reverseArray(chars);
    //chars.reverse()  //builtin JS method
    result.push(chars.join(""))
  }
  //step 3: join the reserved words back to a new string
  return result.join(" ")
};

var reverseArray = function (s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
  //return s
};


const s = "Let's take LeetCode contest"
const expected = "s'teL ekat edoCteeL tsetnoc"
const actual = reverseWords(s);
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)


