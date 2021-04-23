# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math

class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        result = []
        def traverseNode(node):
            if node:
                result.append(node.val)
                traverseNode(node.next)
            return
        
        def convertDecimalToBinary(arr):
            binaryValue = 0
            for i, val in enumerate(arr):
                if val:
                    binaryValue += math.pow(2, len(arr)-i-1)
            return int(binaryValue)
    
        traverseNode(head)
        return convertDecimalToBinary(result)