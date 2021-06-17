/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    var addNode = function (node, value) {
        if (node === null) return new TreeNode(value);
        else if (value < node.val) node.left = addNode(node.left, value);
        else if (value > node.val) node.right = addNode(node.right, value);
        return node;
    }
    let root = null;
    preorder.forEach(value => root = addNode(root, value));
    return root;
};