# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        node = head
        total_length = 0
        half = []
        while node:
            node = node.next
            total_length += 1
        node = head
        for i in range(total_length // 2):
            half.append(node.val)
            node = node.next
        if total_length % 2 != 0:
            node = node.next
        half.reverse()
        for i in range(total_length // 2):
            if node.val != half[i]:
                return False
            node = node.next
        return True