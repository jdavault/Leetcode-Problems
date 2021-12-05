/* LeetCode #203 - Remove Linked List Elements

https://leetcode.com/problems/remove-linked-list-elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Examples

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []

*/

//
//recursion
//TC: O(n+m) | SC: O(n+m)
//https://www.youtube.com/watch?v=JI71sxtHTng - NeetCode
var removeElements2 = function (head, val) {

  if (head == null) return null

  let currNode = new ListNode(-1);
  currNode.next = head;
  head = currNode

  //!=null
  while (currNode.next !== null) {
    if (currNode.next.val === val)
      currNode.next = currNode.next.next;
    else
      currNode = currNode.next
  }
  return head.next;

};

//TC: O(n) | SC: O(1)
//https://www.youtube.com/watch?v=gfFn-OXxcgU - NickW
var removeElements = function (head, val) {

  while (head != null && head.val == val) {
    head = head.next
  }
  let currNode = head;

  while (currNode != null && currNode.next !== null) {
    if (currNode.next.val === val)
      currNode.next = currNode.next.next;
    else
      currNode = currNode.next
  }
  return head;

};

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}


let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)

let output = new ListNode(1)
output.next = new ListNode(2)
output.next.next = new ListNode(3)
output.next.next.next = new ListNode(4)
output.next.next.next.next = new ListNode(5)

let val = 6
let expected = output
let actual = removeElements(head, val)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${JSON.stringify(expected)} | Actual: ${JSON.stringify(actual)}`)