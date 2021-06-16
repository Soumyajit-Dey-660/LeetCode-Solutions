# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapNodes(self, head: ListNode, k: int) -> ListNode:
        node = head
        total_length = 0
        while node:
            node = node.next
            total_length += 1
        node = head
        for _ in range(k-1):
            node = node.next
        first_node = node
        first_value = node.val
        node = head
        for _ in range(total_length - k):
            node = node.next
        temp = node.val
        node.val = first_node.val
        first_node.val = temp
        return head