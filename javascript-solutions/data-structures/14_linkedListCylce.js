/* LeetCode #141 - Linked List Cycle

https://leetcode.com/problems/linked-list-cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

//Two pointer, fast/slow
//https://www.youtube.com/watch?v=agkyC-rbgKM - FisherCoding
//https://www.youtube.com/watch?v=sMqEwkpvJvQ - TerribleWB
//TC: O(n) | SC: O(1)
var hasCycle3 = (head) => {
  if (head == null) return false;

  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast)
      return true;  //there is a cycle
  }
  return false; //no cycle
}
//Two pointer, fast/slow
//https://www.youtube.com/watch?v=6OrZ4wAy4uE - NickW
//TC: O(n) | SC: O(1)
var hasCycle2 = (head) => {
  if (head == null) return false;

  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null)
      return false;   //we get to the end, no cycle
    slow = slow.next;
    fast = fast.next.next;
  }
  return true; //means (slow == fast), there is a cycle
}


//TC: O(n) | SC: O(n)
var hasCycle = function (head) {
  if (head == null) return false;

  let nodesSeen = new Set()
  while (head != null) {
    if (nodesSeen.has(head)) {
      return true;
    }
    nodesSeen.add(head);
    head = head.next;
  }
  return false;
};

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

let myLinkedList = new ListNode(3)
let node2 = new ListNode(2)
myLinkedList.next = node2
myLinkedList.next.next = new ListNode(0)
myLinkedList.next.next.next = new ListNode(-4)
myLinkedList.next.next.next.next = node2


let head = [3, 2, 0, -4]
let expected = true
let actual = hasCycle(myLinkedList)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)