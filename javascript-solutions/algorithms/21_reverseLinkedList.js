/* LeetCode #206 - Reverse Linked List

https://leetcode.com/problems/reverse-linked-list

Given the head of a singly linked list, reverse the list, and return the reversed list.

Examples

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
*/

//https://www.youtube.com/watch?v=tQur3kprZQk - Kevin Jr
//https://www.youtube.com/watch?v=W-EfGB0E_ao - Fisher Coding
//https://www.youtube.com/watch?v=NhapasNIKuQ - NickWhite

//
//Recursion
//TC: O(n) | SC: O(n)
var reverseList = (head) => {
  if (head == null) return null

  if (head == null || head.next == null) return head;
  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};

//Iterative
//TC: O(n) | SC: O(1)
var reverseList2 = (head) => {
  if (head == null) return null

  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}


let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

let output = new ListNode(5)
output.next = new ListNode(4)
output.next.next = new ListNode(3)
output.next.next.next = new ListNode(2)
output.next.next.next.next = new ListNode(1)

let expected = output
let actual = reverseList(head)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${JSON.stringify(expected)} | Actual: ${JSON.stringify(actual)}`)