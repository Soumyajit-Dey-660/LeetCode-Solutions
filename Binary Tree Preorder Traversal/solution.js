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
var preorderTraversal = function (root) {
    if (root === null) return [];
    let result = new Array();
    var traversePreOrder = function (node) {
        result.push(node.val);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
    }
    traversePreOrder(root);
    return result;
};