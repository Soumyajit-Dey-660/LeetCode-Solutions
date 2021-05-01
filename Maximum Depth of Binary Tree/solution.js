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
var maxDepth = function(root) {
    return dfs(root, 0);

    function dfs(root, height) {
        if(root == null) {
            return height;
        }
        return Math.max(dfs(root.left, height + 1), dfs(root.right, height + 1));
    }
};