# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        def bst(node):
            totalSum = 0
            if(node):
                if(node.val <= high and node.val >= low):
                    totalSum += node.val
                
                if(node.val >= low):
                    totalSum += bst(node.left)
                    
                if(node.val <= high):
                    totalSum += bst(node.right)
                    
            return totalSum
        return bst(root)
        