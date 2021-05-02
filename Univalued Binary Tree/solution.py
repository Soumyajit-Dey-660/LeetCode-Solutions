# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        def dfs(node, compare):
            if not node: return True
            if node.val != compare: return False
            return dfs(node.left, compare) and dfs(node.right, compare)
        return dfs(root, root.val)