/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let max = nums[0];
    let idx = 0;
    if (nums.length < 1) {
        return null;
    } else if (nums.length < 2) {
        return new TreeNode(nums[0]);
    } else {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
                idx = i;
            }
        }
    }
    let result = new TreeNode(max);
    let left = constructMaximumBinaryTree(nums.slice(0, idx));
    let right = constructMaximumBinaryTree(nums.slice(idx + 1));
    result.left = left;
    result.right = right;
    return result;
};
