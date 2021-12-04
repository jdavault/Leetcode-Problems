/* Leetcode#876 - Middle of the Linked List

https://leetcode.com/problems/middle-of-the-linked-list

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

//Bruteforce ... not bad .. 
//TC: 0(2n) | SC:O(1)
var middleNode2 = function (head) {
  let fast = head;
  let node = head;
  let length = 0;
  //Iterate once to get the length
  while (fast && fast.next) {
    fast = fast.next;
    length++
  }

  //get the middle Idx
  let mid = Math.ceil(length / 2)

  //return the middle value using that idx
  for (i = 0; i < mid; i++) {
    node = node.next
  }

  return node

};
//Two pointers ...
//TC: 0(n) | SC:O(1)
//https://www.youtube.com/watch?v=t97D5FbGnao - AndyG
//https://www.youtube.com/watch?v=_cl3O4FBZh8 - TechDose
const middleNode = (head) => {

  let fast = head;
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next //move fast pointer 2 spaces
    slow = slow.next;
  }
  return slow;

};
class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

let answer = new Node(3)
answer.next = new Node(4)
answer.next.next = new Node(5)

let myLinkedList = new Node(1)
myLinkedList.next = new Node(2)
myLinkedList.next.next = new Node(3)
myLinkedList.next.next.next = new Node(4)
myLinkedList.next.next.next.next = new Node(5)

let expected = answer
let actual = middleNode(myLinkedList);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
