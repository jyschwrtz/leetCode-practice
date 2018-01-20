/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) {
      return [];
    } else if (t1 && t1.val === null) {
      return t2;
    } else if (t2 && t2.val === null) {
      return t1;
    }
    let first = 0;
    if (t1) { first = t1.val; }
    let second = 0;
    if (t2) { second = t2.val; }
    let tree = new TreeNode(first + second);
    if (t1 && t1.left && t2 && t2.left) {
        tree.left = mergeTrees(t1.left, t2.left);
    } else if (t1 && t1.left) {
        tree.left = mergeTrees(t1.left, 0);
    } else if (t2 && t2.left) {
        tree.left = mergeTrees(0, t2.left);
    }

    if (t1 && t1.right && t2 && t2.right) {
        tree.right = mergeTrees(t1.right, t2.right);
    } else if (t1 && t1.right) {
        tree.right = mergeTrees(t1.right, 0);
    } else if (t2 && t2.right) {
        tree.right = mergeTrees(0, t2.right);
    }

    return tree;
};
