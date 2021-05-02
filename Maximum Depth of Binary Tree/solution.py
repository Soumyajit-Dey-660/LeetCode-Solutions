# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def getDepth(node, height):
            if node:
                return max(getDepth(node.left, height+1), getDepth(node.right, height+1))
            return height
        return getDepth(root, 0)