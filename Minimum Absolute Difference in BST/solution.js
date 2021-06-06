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
var getMinimumDifference = function (root) {
    if (root === null) return 0;
    let minDiff = 10e6 + 7;
    let store = new Array();
    const inOrder = node => {
        node.left && inOrder(node.left);
        store.push(node.val);
        node.right && inOrder(node.right);
    }
    inOrder(root);
    for (let i = 1; i < store.length; i++) {
        minDiff = (store[i] - store[i - 1]) < minDiff ? (store[i] - store[i - 1]) : minDiff;
    }
    return minDiff;
};