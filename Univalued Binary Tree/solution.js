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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    var dfs = function (node, compare) {
        if (!node) return true;
        if (node.val !== compare) return false;
        return dfs(node.left, compare) && dfs(node.right, compare);
    }
    return dfs(root, root.val);
};