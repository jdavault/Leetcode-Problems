/* Leetcode #19 - Remove Nth Node From End of List

https://leetcode.com/problems/remove-nth-node-from-end-of-list

Examples ...

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]

*/
const removeNthTwoPassNotaFan = (head, n) => {
  let dummyHead = new ListNode(0)
  dummyHead.next = head;
  let resultHead = dummyHead;
  let length = 0;
  let tail = head;

  while (length < n) {
    tail = tail.next;
    length++
  }
  let removeNode = head;
  let prev = dummyHead

  while (tail) {
    tail = tail.next;
    removeNode = removeNode.next
    prev = prev.next
  }

  prev.next = removeNode.next
  return resultHead.next
}

const removeNthTwoPass = (head, n) => {
  let dummy = new ListNode(0)
  dummy.next = head;
  let length = 0
  let first = head

  while (first) {
    first = first.next;
    length++
  }
  first = dummy;

  //while (length > 0) {
  for (i = 0; i < length - n; i++) {
    first = first.next;
  }

  first.next = first.next.next
  return dummy.next

};

//TC: O(n) | SC:O(1)
//ONE PASS ....
//https://www.youtube.com/watch?v=Kka8VgyFZfc&t=606s
const removeNthOnePass = (head, n) => {
  let dummy = new ListNode(-1)
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  //get the length of the LL (fast and fast.next !== null)
  while (fast.next) {
    fast = fast.next;
    //start moving slow once we made up the distance for n
    //basically fast and slow move 
    if (n-- <= 0) {
      slow = slow.next
    }
  }
  //this will reassign the 3 -> 4 -> 5 to 3 -> 5
  slow.next = slow.next.next
  return dummy.next

}

//TC: O(n) | SC:O(1)
//ONE PASS ....
//https://www.youtube.com/watch?v=XtYEEvrhemI - NickW
const removeNthOnePass = (head, n) => {
  let dummy = new ListNode(-1)
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  //get the length of the LL (fast and fast.next !== null)
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  //this will reassign the 3 -> 4 -> 5 to 3 -> 5
  slow.next = slow.next.next
  return dummy.next

}

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

let answer = new ListNode(1)
answer.next = new ListNode(2)
answer.next.next = new ListNode(3)
answer.next.next.next = new ListNode(5)

let myLinkedList = new ListNode(1)
myLinkedList.next = new ListNode(2)
myLinkedList.next.next = new ListNode(3)
myLinkedList.next.next.next = new ListNode(4)
myLinkedList.next.next.next.next = new ListNode(5)

let tinyLinkedList = new ListNode(1)
tinyLinkedList.next = new ListNode(2)

let expected = answer
let actual = removeNthOnePass(myLinkedList, 2);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
