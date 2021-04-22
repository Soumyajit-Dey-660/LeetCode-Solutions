/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    var bst = function (node) {
        let totalSum = 0;
        if (node) {
            if (node.val >= low && node.val <= high) {
                totalSum += node.val;
            }
            if (node.val >= low) {
                totalSum += bst(node.left);
            }
            if (node.val <= high) {
                totalSum += bst(node.right);
            }
        }
        return totalSum;
    };
    return bst(root);
};
