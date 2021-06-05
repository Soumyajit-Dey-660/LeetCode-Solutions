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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root === null) return [];
    let result = [];
    var traverseInOrder = function (node) {
        node.left && traverseInOrder(node.left);
        result.push(node.val);
        node.right && traverseInOrder(node.right);
    }
    traverseInOrder(root);
    return result;
};