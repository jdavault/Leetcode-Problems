/* LeetCode #617, Merge Two Binary Trees

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node vals up as the new val of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/
//https://www.youtube.com/watch?v=_LJO5nBKC1A - Nick White
//https://www.youtube.com/watch?v=Rt-mneSQg9E - Jayati Tiwari

const mergeTrees = function (root1, root2) {
  if (root1 == null)
    return root2;
  if (root2 == null)
    return root1;
  //add together oerride value in R1
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

let root1 = new TreeNode(1)
root1.left = new TreeNode(3)
root1.left.left = new TreeNode(5)
root1.right = new TreeNode(2)

let root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.left.right = new TreeNode(4)
root2.right = new TreeNode(3)
root2.right.right = new TreeNode(7)

let output = new TreeNode(3)
output.left = new TreeNode(4)
output.left.left = new TreeNode(5)
output.left.right = new TreeNode(4)
output.right = new TreeNode(5)
output.right.right = new TreeNode(7)


let actual = mergeTrees(root1, root2)
actual = JSON.stringify(actual)
expected = JSON.stringify(output)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} - Expected: ${expected} | Actual: ${actual}`)
