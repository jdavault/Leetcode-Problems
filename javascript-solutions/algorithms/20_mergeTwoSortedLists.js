/* LeetCode #21 - Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Examples

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []
*/

//
//recursion
//TC: O(n+m) | SC: O(n+m)
var mergeTwoLists = (l1, l2) => {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};

//https://www.youtube.com/watch?v=K63Mjf-H0B0 - Kevin JR.
//Iterative solution
//TC: O(n) | SC: O(1)
var mergeTwoLists2 = (l1, l2) => {
  let dummy = new ListNode(-1);
  let head = dummy;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  // At least one of l1 and l2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
  dummy.next = l1 == null ? l2 : l1;
  return head.next;
};

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

let output = new ListNode(1)
output.next = new ListNode(1)
output.next.next = new ListNode(2)
output.next.next.next = new ListNode(3)
output.next.next.next.next = new ListNode(4)
output.next.next.next.next.next = new ListNode(4)


let expected = output
let actual = mergeTwoLists(list1, list2)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${JSON.stringify(expected)} | Actual: ${JSON.stringify(actual)}`)