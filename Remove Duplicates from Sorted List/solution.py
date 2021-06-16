# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head == None: return head
        current = head
        next_node = current.next
        while next_node:
            if current.val != next_node.val:
                current.next = next_node
                current = next_node
                next_node = next_node.next
            else:
                next_node = next_node.next
        current.next = None
        return head
        