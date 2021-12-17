/*Leetcode #77 - Combinations

https://leetcode.com/problems/combinations

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

Example s

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Input: n = 1, k = 1
Output: [[1]]

*/

// -- Cat 
// -- fisher 
// -- kevin Jr
// -- terribleWEB
// -- nick white

//https://www.youtube.com/watch?v=gx0hB85lgiQ - Jser
var combine = function (n, k) {
  const result = []

  const walk = (temp, rest) => {
    if (temp.length === k) {
      result.push(temp)
      return
    }
    for (let i = 0; i < rest.length; i++) {
      const newRest = rest.slice(i + 1)
      walk(temp.concat(rest[i]), newRest)
    }
  }
  const numbers = Array(n).fill(0).map((_, index) => index + 1)
  walk([], numbers)
  return result
};

//https://www.youtube.com/watch?v=q0s6m7AiM7o -- Neetcode
var combine2 = function (n, k) {
  const result = []
  const walk = (start, comb) => {
    if (comb.length === k) {
      result.push([...comb])
      return
    }
    for (let i = start; i < n + 1; i++) {
      comb.push(i)
      walk(i + 1, comb)
      comb.pop();
    }
  }
  walk(1, [])
  return result
};

//https://www.youtube.com/watch?v=uvk_HvqCQNc -- xavier
//https://www.youtube.com/watch?v=GSdxW47neWE -- InterviewPrep-HelloWorld


let n = 4, k = 2
let expected =
  [
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
  ]

let actual = combine(n, k)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${JSON.stringify(expected)} | Actual: ${JSON.stringify(actual)}`)