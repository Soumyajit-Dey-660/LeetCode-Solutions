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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let result = 1;
    const getDepth = node => {
        if (node === null) return 0;
        var left = getDepth(node.left);
        var right = getDepth(node.right);
        // set the diameter in every step
        result = Math.max(left + right + 1, result);
        // return the largest path
        return Math.max(left, right) + 1;
    }
    getDepth(root);
    return result - 1;
};